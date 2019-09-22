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
        Route::post('emi/store', 'EmiController@store');
        Route::get('clients', 'ClientController@index');
        Route::get('clients/dropdown', 'ClientController@dropdown');
        Route::get('clients/resources', 'ClientController@resources');
        Route::get('clients/events', 'ClientController@events');
        Route::post('clients/store', 'ClientController@store');
    });
});