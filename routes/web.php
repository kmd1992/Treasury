<?php
Route::get('/{any?}', function (){
    return view('welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*');

/* Auth::routes();
Route::group(['middleware' => 'auth'], function(){
    Route::get('/', 'HomeController@index')->name('home');
}); */
