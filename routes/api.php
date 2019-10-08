<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        // Below mention routes are public, user can access those without any restriction.
        // Create New User
        Route::post('register', 'AuthController@register');
        // Login User
        Route::post('login', 'AuthController@login');
        
        // Refresh the JWT Token
        Route::get('refresh', 'AuthController@refresh');
        
        // Below mention routes are available only for the authenticated users.
        Route::middleware('auth:api')->group(function () {
            // Get user info
            Route::get('user', 'AuthController@user');
            
            // Logout user from application
            Route::post('logout', 'AuthController@logout');
        });
        //Add Emi Post
    });
    
    /**
     * Basic Routes
     **/    
    Route::middleware('auth:api')->group(function () {
        Route::resource('users', 'UserController')->only(['index','show']);
        Route::prefix('clients')->group(function () {
            Route::get('/', 'ClientController@index');
            Route::get('/dropdown', 'ClientController@dropdown');
            Route::get('/resources', 'ClientController@resources');
            Route::get('/events', 'ClientController@events');
            Route::post('/store', 'ClientController@store');
            Route::get('/edit', 'ClientController@edit');
            Route::post('/update', 'ClientController@update');
        });
        Route::prefix('emi')->group(function () {
            Route::post('/index', 'EmiController@data');
            Route::post('/store', 'EmiController@store');
            Route::post('/destroy', 'EmiController@destroy');
        });
        Route::prefix('loan')->group(function () {
            Route::post('/', 'LoanController@index');
            Route::post('/store', 'LoanController@store');
            Route::get('/loan_summary', 'LoanController@loan_summary');
        });
    });
});