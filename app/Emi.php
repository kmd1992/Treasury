<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Emi extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'loan_id', 'emi', 'start', 'end'
    ];
}
