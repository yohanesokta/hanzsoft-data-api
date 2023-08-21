<?php

use App\Http\Controllers\dataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/data',[dataController::class,'find']);
Route::get('/data/kategori',[dataController::class,'listKategori']);

Route::get('/data/insert',[dataController::class,'insert']);