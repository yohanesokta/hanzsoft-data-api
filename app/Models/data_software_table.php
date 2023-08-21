<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class data_software_table extends Model
{
        use HasFactory;

     protected $fillable = [
        'nama_id',
        'nama',
        'icon',
        'Kategori',
        'size',
        'Versi',
        'Deskripsi',
        'tentang',
        'requirement',
        'link',
     ];
}