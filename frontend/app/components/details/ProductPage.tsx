"use client";
import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import CustomerRatings from './CustomerRatings';
import CustomerReviews from './CustomerReviews';

interface ProductPageProps {
  productId?: string;
}

export default function ProductPage({ productId }: ProductPageProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Product Info Section */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <ProductImage />
          <ProductDetails />
        </div>
      </div>
      
      {/* Ratings & Reviews Section */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Ratings & Reviews</h2>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <CustomerRatings />
            </div>
            <div className="lg:w-2/3">
              <CustomerReviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 