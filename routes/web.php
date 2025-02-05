<?php

use App\Models\Product;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/", function(){
    return Inertia::render('HomePage');
})->name('home');

Route::get("/category/{category_id}", function($category_id){

    $related_product = Product::where('category_id', $category_id)->get();

    return Inertia::render('CategoryPage', [
        'related_product' => $related_product,
    ]);
});

// Route::get("/product/{id}", function(){
//     return Inertia::render('ProductDetail');
// });

Route::resource('/product', ProductController::class);
Route::resource('/cart', CartController::class);

Route::delete('/cart/{id}', [CartController::class, 'destroy']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
