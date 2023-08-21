<?php

use App\Http\Controllers\dataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/data',[dataController::class,'index_all']);

Route::get('/data/find',[dataController::class,'find']);