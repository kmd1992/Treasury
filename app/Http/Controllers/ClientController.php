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
        return response()->json([
            'status' => 'success',
            'clients' => ClientResource::collection(Client::all())
        ],200);
    }
}
