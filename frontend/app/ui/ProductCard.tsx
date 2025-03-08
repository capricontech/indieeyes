"use client";

import Image from "next/image";
import { Heart, Star, ShoppingCart } from "lucide-react";

type ProductCardProps = {
  imageUrl: string;
  title: string;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
  rating: number;
  viewType?: 'grid' | 'list';
};

export default function ProductCard({
  imageUrl,
  title,
  originalPrice,
  discountPrice,
  discountPercentage,
  rating,
  viewType = 'grid'
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div className="relative w-full aspect-square mb-4">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent rounded-xl" />
        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
          -{discountPercentage}% Off
        </div>
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-xl p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3.5 h-3.5" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-gray-500 text-xs">(120)</span>
          </div>
          <span className="text-green-500 text-sm font-medium">In Stock</span>
        </div>

        {/* Title */}
        <h3 className="text-gray-900 font-semibold line-clamp-2 min-h-[48px]">{title}</h3>

        {/* Pricing */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">₹{discountPrice}</span>
            <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-700">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
