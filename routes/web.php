<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/phpinfo', function() { phpinfo(); });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/rooms', function () {
    return Inertia::render('Rooms/Index');
})->middleware(['auth', 'verified'])->name('rooms');

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/rooms', function() {
        return Inertia::render('Rooms/Index');
    })->name('rooms');

    Route::get('/rooms/add', function() {
        return Inertia::render('Rooms/Add');
    })->name('rooms.store');        

    Route::get('/rooms/edit', function() {
        return Inertia::render('Rooms/Edit');
    })->name('rooms.edit');    
});

Route::get('/courses', function () {
    return Inertia::render('Courses');
})->middleware(['auth', 'verified'])->name('courses');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
