<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_software_tables', function (Blueprint $table) {
            $table->id();
            $table->string('nama_id', 100)->nullable()->default('none'); 
            $table->string('nama', 100)->nullable()->default('none');
            $table->string('icon', 100)->nullable()->default('none');           
            $table->string('kategori', 100)->nullable()->default('none');
            $table->string('size', 100)->nullable()->default('1.0');
            $table->string('versi', 100)->nullable()->default('none');           
            $table->string('deskripsi', 100)->nullable()->default('none');           
            $table->string('tentang', 100)->nullable()->default('none');
            $table->string('requirement', 100)->nullable()->default('Work On All Pc '); 
            $table->string('link', 100)->nullable()->default('none'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_software_tables');
    }
}
