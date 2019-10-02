<?php

namespace App\Http\Controllers;

use App\Loan;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Http\Controllers\EmiController;

class LoanController extends Controller
{
    public function index(Request $request){
        $loan = $this->getLoan([$request['id']])->toArray();
        $emi = (new EmiController)->getLoanEmi(['loan_id' => Arr::first($loan)['id']])->toArray();
        return response()->json([
            'status'=>'success',
            'loans'=>$loan,
            'emis'=>$emi
        ],200);
    }

    public function getLoan($client_id){
        return Loan::select('id','amount','emi_amount','status')->whereIn('client_id', $client_id)->get();
    }

    public function store(Request $request){
        Loan::create([
            'client_id'=>$request->client_id,
            'amount'=>$request->amount,
            'paid_amount'=>$request->paid_amount,
            'emi_amount'=>$request->emi,
            'emi_type' =>$request->emi_type,
            'desc'=>$request->desc,
            'status'=>'pending'
        ]);
        return response()->json(['status'=>'success'],200);
    }
}
