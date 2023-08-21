<?php

namespace App\Http\Controllers;

use App\Http\Resources\dataCollection;
use App\Models\data_kategori;
use App\Models\data_software_table;
use Illuminate\Http\Request;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\DB;
use Mockery\Generator\StringManipulation\Pass\Pass;

//  Passkey! digunakan untuk auth api

function passkey($data,$request){
    if ( $request -> api_key == env('APP_API_KEY')){
        return $data;
    }else{
        return response()->json(['message'=>'your api key can auth']);
    }
}

//  global controler


class dataController extends Controller
{
   

    public function index_all(Request $request){

            $data = passkey(data_software_table::all(),$request);
            return response()->json(['data' => $data]);
            
        }

    public function find(Request $request){
        $finder = $request->cari;
        $data = DB::table('data_software_tables')->where('nama_id','like','%'.$finder.'%')->paginate();

        $data = passkey($data,$request);
        return response()->json($data);
    }

    public function listKategori(Request $request){
        $data = passkey(data_kategori::all(),$request);
        return response()->json(['data'=>$data]);
    }

}