<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $product = Product::all();

        return Inertia::render('HomePage', [
            'product' => $product
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('AdminPage',[
            'category_name' => Category::select('id', 'categoryName')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate([
            'productName' => 'required|string|max:255',
            'productPrice' => 'required|int',
            'productDescription' => 'required|string|max:500',
            'category_id' => 'required|exists:categories,id',
            'productImage' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        if ($request->hasFile('productImage')) {
            $imagePath = $request->file('productImage')->store('images', 'public');
            $imageUrl = asset('storage/' . $imagePath);
            $validated['productImage'] = $imageUrl;
        }

        Product::create($validated);

        return redirect('product.create');
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
