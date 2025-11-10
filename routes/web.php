<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('home', function () {
    return Inertia::render('main/Index');
})->name('mainpage');
Route::get('produtos', function () {
    return Inertia::render('produtos/Index');
})->name('produtos');
Route::get('contato', function () {
    return Inertia::render('contato/Index');
})->name('contato');
Route::get('sobre', function () {
    return Inertia::render('sobre/Index');
})->name('sobre');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
