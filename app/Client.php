<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'name', 'contact', 'seccontact','gender','city','address','occupation','occupation_add','color','payer_type'
    ];

    public function loan(){
        return $this->hasOne(Loan::class,'client_id','id');
    }
}