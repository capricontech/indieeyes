import { NextResponse } from 'next/server';
import { mockProductGrid } from '../../services/mockData';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // Get filter parameters from the request
    const category = searchParams.get('category');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const brand = searchParams.get('brand');
    const sortBy = searchParams.get('sortBy') || 'newest';

    // Filter products based on request parameters
    let filteredProducts = [...mockProductGrid];

    if (category) {
        filteredProducts = filteredProducts.filter(product =>
            product.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
        );
    }

    if (minPrice) {
        filteredProducts = filteredProducts.filter(product => product.price >= Number(minPrice));
    }

    if (maxPrice) {
        filteredProducts = filteredProducts.filter(product => product.price <= Number(maxPrice));
    }

    if (brand) {
        filteredProducts = filteredProducts.filter(product =>
            product.brand?.toLowerCase() === brand.toLowerCase()
        );
    }

    // Sort products
    switch (sortBy) {
        case 'price-low-high':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high-low':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popularity':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        // Default is 'newest', which we assume is the default order
    }

    return NextResponse.json({ products: filteredProducts });
} 