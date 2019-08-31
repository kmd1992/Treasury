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

/* Route::middleware('jwt.auth')->get('users', function(Request $request) {
    return auth()->user();
}); */



//--
Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        
        //Register-Login without token
        //Route::post('register', 'AuthController@register');
        //Route::post('login', 'AuthController@login');

        //Register-Login geting with token
        Route::post('register', 'APIRegisterController@register');
		Route::post('login', 'APILoginController@login');
        
        // Refresh the JWT Token
        Route::get('refresh', 'AuthController@refresh');
        
        // Below mention routes are available only for the authenticated users.
        Route::middleware('auth:api')->group(function () {
            // Get user info
            Route::get('user', 'AuthController@user');
            // Logout user from application
            Route::post('logout', 'AuthController@logout');
        });
    });
});