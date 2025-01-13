<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    //
    public function index()
    {
        //
      
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $productId = $request->input('product_id');
    
        $cart = $request->session()->get('cart', []);
        $cart[] = $productId;
    
        $request->session()->put('cart', $cart);
    
        $value = $request->session()->get('cart');
    
        return response()->json(['message' => 'Product added to session!', 'cart' => $value]);
    }
    
    

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
