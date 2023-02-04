<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fossil extends Model
{
    use HasFactory;

    protected $table = 'fossils';

    protected $fillable = [
        'name',
        'status',
        'phone',
        'email',
        'user_id',
    ];
}
