<?php

namespace App\Http\Controllers;

use Mockery\Expectation;
use Illuminate\Support\Env;
use Illuminate\Http\Request;
use App\Models\data_kategori;
use Mockery\ExpectationDirector;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Models\data_software_table;
use Illuminate\Http\RedirectResponse;
use App\Http\Resources\dataCollection;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Message;
use Illuminate\Validation\ValidationException;
use Mockery\Generator\StringManipulation\Pass\Pass;

//  Passkey! digunakan untuk auth api

function passkey($data,$request){
    if ( $request -> api_key == env('APP_API_KEY')){
        return $data;
    }else{
        return response()->json(['message' => 'your api key is bad',
    'status' => '403'], 403);
    }
}

//  global controler


class dataController extends Controller
{
    public function homepage(Request $request){
        $data = [
            'Message' => 'Wellcome to hanzsoft - api',
            'api_key_locaton' => 'github',
            'github_location' => 'https://github.com/yohanesokta/hanzsoft-data-api/',
            'request' => $request->all(),
        ];
        return response()->json(['data'=>$data],200);
    }

    public function find(Request $request){
        if (array_key_exists('cari',$request->all())){
            $finder = $request->cari;
            $data = DB::table('data_software_tables')->where('nama_id','like','%'.$finder.'%')->get();

            
            $data = passkey($data,$request);

            if (empty($data->all())){
                return response()->json(['message'=>'unable to find ( Not Found )'],404);
            }else{
            return response()->json(['data'=>$data]);
            }
        }else{
            $data = passkey(data_software_table::all(),$request);
            return response()->json(['data' => $data]);
        }
    }

    public function listKategori(Request $request){
        $data = passkey(data_kategori::all(),$request);
        return response()->json(['data'=>$data]);
    }

    public function insert(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'kategori' => 'required',
        ]);
 
        if ($validator->fails()) {
            return response()->json(['message'=>'validator fails!','validator'=> $validator], 400);
        }else{
            if ($request->api_key == env('close_API_KEY')){
                $request['nama_id'] = strtolower($request->nama);
                $request = array_diff($request->all(),[env('close_API_KEY')]);


                DB::table('data_software_tables')->insert($request);
                return response()->json(['message'=>'add software succsessfull','data'=>$request]);
            }else{
                return response()->json(['message'=>'api key not match'],403);
            }
        }
    }

}