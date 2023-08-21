<?php

namespace App\Http\Controllers;

use App\Models\data_software_table;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class dataController extends Controller
{
    public function index_all(){
        $data = data_software_table::all();
        return $data;
    }

    public function find(Request $request){
        $finder = $request->cari;

        $data = DB::table('data_software_tables')->where('nama_id','like','%'.$finder.'%')->paginate();
        return $data;
    }
}