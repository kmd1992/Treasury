<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmiController extends Controller
{
    //
    function __construct(){

    }

    public function store(Request $request){
        dd($request->all());
        //return response()->json($post);
    }
}
