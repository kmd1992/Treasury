<?php

namespace App\Http\Controllers;

use App\Emi;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;
use App\Http\Controllers\LoanController;

class EmiController extends Controller
{
    //
    function __construct(){

    }

    public function data(Request $request){
        return response()->json([
            'status'=>'success',
            'loan'=>(new LoanController)->getLoan([$request['id']]),
            'emis'=>$this->getLoanEmi($request->all())->toArray()
        ],200);
    }

    public function store(Request $request)
    {
        if($request->todate != null){
            $fromdate = Carbon::parse(str_replace('/','-',trim($request->fromdate)))->format('Y-m-d');
            $todate = Carbon::parse(str_replace('/','-',trim($request->todate)))->format('Y-m-d');
            $period = CarbonPeriod::create($fromdate, $todate)->toArray();
            array_walk($period, function($val, $key) use ($request){
                Emi::create([
                    'loan_id'=>$request->client,
                    'emi'=>$request->price,
                    'start'=>Carbon::parse($val)->format('Y-m-d'),
                    'end'=>Carbon::parse($val)->format('Y-m-d')
                ]);
            });
        }else{
            Emi::create([
                'loan_id'=>$request->client,
                'emi'=>$request->price,
                'start'=>Carbon::parse(str_replace('/','-',trim($request->fromdate)))->format('Y-m-d'),
                'end'=>Carbon::parse(str_replace('/','-',trim($request->fromdate)))->format('Y-m-d'),
            ]);
        }
        return response()->json([
            'status'=>'success',
        ],200);
    }

    public function getLoanEmi($request){
        return Emi::select('id','loan_id','emi','start','end')->whereIn('loan_id', [$request['loan_id']])->get();
    }
}
