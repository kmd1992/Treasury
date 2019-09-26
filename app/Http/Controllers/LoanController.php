<?php

namespace App\Http\Controllers;

use App\Loan;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Http\Controllers\EmiController;

class LoanController extends Controller
{
    public function index(Request $request){
        $loan = Loan::select('id','amount','status')->where(['client_id'=>$request->id])->get()->toArray();
        $emi = (new EmiController)->getLoanEmi(['loan_id' => Arr::first($loan)['id']])->toArray();
        return response()->json([
            'status'=>'success',
            'loans'=>$loan,
            'emis'=>$emi
        ],200);
    }
}
