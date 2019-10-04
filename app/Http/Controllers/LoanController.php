<?php

namespace App\Http\Controllers;

use App\Loan;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Http\Controllers\EmiController;

class LoanController extends Controller
{
    public function index(Request $request){
        $loan = $this->getLoan(['client_id'=>$request['id']])->toArray();
        $emi = (new EmiController)->getLoanEmi(['loan_id' => Arr::first($loan)['id']])->toArray();
        return response()->json([
            'status'=>'success',
            'loans'=>$loan,
            'emis'=>$emi
        ],200);
    }

    public function getLoan($request){
        $loanObj = Loan::select('id','amount','emi_amount','status');
        if(Arr::has($request, 'client_id')) $loanObj->whereIn('client_id', [$request['client_id']]);
        if(Arr::has($request, 'id')) $loanObj->whereIn('id', [$request['id']]);
        return $loanObj->get();
    }

    public function update($request){
        return Loan::where('id',$request['id'])->update($request['data']);
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
