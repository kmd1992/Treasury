<?php

namespace App\Http\Controllers;

use App\Emi;
use Illuminate\Http\Request;

class EmiController extends Controller
{
    //
    function __construct(){

    }

    public function store(Request $request)
    {
        return Emi::create([
            'loan_id'=>$request->client,
            'emi'=>$request->price,
            'start'=>$request->date,
            'end'=>$request->date
        ]);
    }

    public function getLoanEmi($request){
        return Emi::select('id','loan_id','emi','start','end')->whereIn('loan_id', [$request['loan_id']])->get();
    }
}
