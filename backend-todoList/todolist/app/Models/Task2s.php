<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task2s extends Model
{
    use HasFactory;
       protected $fillable=[
         'auteur',
        'taskName',
        'description',
        'priority',
        'categorie'
    ];
}
