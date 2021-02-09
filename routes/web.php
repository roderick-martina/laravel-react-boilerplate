<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Settings\SettingsController;
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

// Guest routes...
Route::middleware('guest')
    ->group(function () {
        Route::get('/', function () {
            return view('auth.login');
        });
    });


// Auth routes...
Route::middleware(['auth', 'verified'])
    ->group(function () {
        // Dashboard routes...
        Route::name('dashboard.')
            ->prefix('dashboard')
            ->group(function () {
                Route::get('/', [DashboardController::class, 'index'])->name('index');
            });

        // Settings routes...
        Route::name('settings.')
            ->prefix('settings')
            ->group(function () {
                Route::get('/', [SettingsController::class, 'index'])->name('index');
            });
    });



