<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Client as ClientResource;
use App\Client;

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
                $resouces[] = ['id'=>$v['id'],'type'=>$v['payer_type'],'name'=>$v['name'],'color'=>$v['color'],'loan'=>$v['loan']['amount']];
            }
        });
        return response()->json([
            'status' => 'success',
            'resouces' => $resouces
        ],200);
    }
}
