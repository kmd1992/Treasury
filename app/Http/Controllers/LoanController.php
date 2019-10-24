<?php

namespace App\Http\Controllers;

use App\Loan;
use App\Client;
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

    public function loan_summary(Request $request){
        $client = Client::with([
            'loans' => function($q){
                $q->orderBy('id','desc');
            } ,'loans.emi'
        ])->where(['user_id'=>$request->auth])->get()->toArray();

        $data = [];
        foreach($client as $key => $val){
            if(!empty($val['loans'])){
                foreach($val['loans'] as $lkey => $lval){
                    if(Arr::exists($lval, 'emi') && !empty($lval['emi'])){
                        $total_paid_emi = array_sum(array_column($lval['emi'], 'emi'));
                    } else {
                        $total_paid_emi = 0;
                    }
                    $data[] = [
                        'client_id' => $val['id'],
                        'client_name' => $val['name'],
                        'loan_amount' => $lval['amount'],
                        'loan_status' => $lval['status'],
                        'issue_date' => $lval['created_at'],
                        'total_paid' => $total_paid_emi,
                        'total_paid_per' => round($total_paid_emi / ($lval['amount'] / 100),2),
                        'total_pending' => $lval['amount'] - $total_paid_emi,
                        'total_pending_per' => round(($lval['amount'] - $total_paid_emi) / ($lval['amount'] / 100),2),
                    ];
                }
            }
        }
        return response()->json([
            'status'=>'success',
            'response'=>$data,
        ],200);
    }
}
