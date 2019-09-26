<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Client as ClientResource;
use App\Client;
use App\Emi;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            [
                'status' => 'success',
                'clients' => Client::all()->toArray()
            ], 200);
    }

    public function store(Request $request){
            return response()->json([
                'status' => 'success',
                'clients' => Client::create($request->all())->toArray()
            ],200);
    }

    public function dropdown(Request $request){
        $client = Client::with([
			'loan'=> function($q) {
                $q->where('status','pending');
            }
        ])->get()->toArray();
        $result=[];
		array_walk($client, function($v, $k) use (&$result){
            if(is_array($v['loan']) && $v['loan'] != ""){
                $result[] = [
                    "id"=>$v['loan']['id'],
                    "text"=>$v['name'].' :: '.$v['loan']['amount']
                ];
            }
        });
        return response()->json([
            'status' => 'success',
            'clients' => $result
        ],200);
    }

    public function resources(Request $request){
        $clientAry = Client::with([
			'loan'=> function($q) {
                $q->where('status','pending');
            }
        ])->select('id','name','color','payer_type')->where('user_id', $request->auth)->get()->toArray();
        $resouces =[];
        array_walk($clientAry, function($v, $k) use (&$resouces){
            if($v['loan'] != null){
                $resouces[] = ['id'=>$v['id'],'type'=>$v['payer_type'],'name'=>$v['name'],'eventColor'=>$v['color'],'loan'=>$v['loan']['amount']];
            }
        });
        return response()->json([
            'status' => 'success',
            'resouces' => $resouces
        ],200);
    }

    public function events(Request $request){
        $clientAry = Client::with([
			'loan'=> function($q) {
                $q->where('status','pending');
            },
            'loan.emi'
        ])->select('id','name','color','payer_type')->where('user_id', $request->auth)->get()->toArray();
        $events =[];
        foreach($clientAry as $kClient => $vClient)
        {
            $emi = 0;
            if($vClient['loan'] != null)
            {
                foreach($vClient['loan']['emi'] as $kEmi => $vEmi){
                    $emi += $vEmi['emi'];
                    $events[] = [
                        'resourceId'=>$vClient['id'],
                        'title' => $vEmi['emi'],
                        'loan'=>$vClient['loan']['amount'],
                        'start' => $vEmi['start'],
                        'end' => $vEmi['end'],
                        'description'=>[
                            'name'=>$vClient['name'],
                            'color'=>$vClient['color'],
                            'date' => $vEmi['start'],
                            'emi' => $vEmi['emi'],
                            'paidAmount'=>$emi,
                            'pendingAmount'=>$vClient['loan']['amount'] - $emi
                        ],
                    ];    
                }
            }
        }
        return response()->json([
            'status' => 'success',
            'events' => $events
        ],200);
    }

    public function edit(Request $request){
        $request = $request->all();
        return response()->json([
            'status' => 'success',
            'edit' => Client::where(['id'=>$request['id'],'user_id'=>$request['auth']])->first()->toArray()
        ],200);
    }

    public function update(Request $request, Client $client){
        $client::find($request->id)->update($request->all());
        return response()->json([
            'status' => 'success',
            'client' => $client->id
        ],200);
    }
}
