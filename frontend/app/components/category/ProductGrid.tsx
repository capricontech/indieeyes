"use client";

import ProductCard from "@/app/ui/ProductCard";
import { mockProductGrid } from "@/app/services/mockData";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Heart, Star, ShoppingCart } from 'lucide-react';
import type { SortOption } from './CategoryHeader';
import Image from "next/image";

interface ProductGridProps {
    view: 'grid' | 'list';
    sortBy: SortOption['value'];
}

export default function ProductGrid({ view, sortBy }: ProductGridProps) {
    const products = mockProductGrid;  
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = view === 'grid' ? 21 : 10; // Fewer items per page in list view

    // Sort products based on sortBy value
    const sortedProducts = useMemo(() => {
        const sorted = [...products];
        switch (sortBy) {
            case 'price-low-high':
                return sorted.sort((a, b) => a.discountPrice - b.discountPrice);
            case 'price-high-low':
                return sorted.sort((a, b) => b.discountPrice - a.discountPrice);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'popularity':
                // For demo purposes, we'll use rating as a proxy for popularity
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'newest':
            default:
                // Assuming the array is already sorted by newest
                return sorted;
        }
    }, [products, sortBy]);

    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    // Generate array of page numbers for pagination
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    // Function to get page dots (show max 5 dots with ellipsis)
    const getPageDots = () => {
        const maxDots = 5;
        let dots: (number | string)[] = [];

        if (totalPages <= maxDots) {
            dots = pageNumbers;
        } else {
            if (currentPage <= 3) {
                dots = [...pageNumbers.slice(0, 4), "...", totalPages];
            } else if (currentPage >= totalPages - 2) {
                dots = [1, "...", ...pageNumbers.slice(totalPages - 4)];
            } else {
                dots = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
            }
        }
        return dots;
    };

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);

    // Reset to first page when sort changes
    useMemo(() => {
        setCurrentPage(1);
    }, [sortBy]);

    return (
        <div className="flex-1 px-4 md:px-8 lg:px-12 xl:px-36 ml-4">
            {/* Product Grid/List */}
            <div className={`${
                view === 'grid' 
                    ? 'grid grid-cols-2 lg:grid-cols-3 gap-6' 
                    : 'flex flex-col gap-6'
            } mt-6`}>
                {currentProducts.map((product, index) => (
                    view === 'grid' ? (
                        <ProductCard
                            key={index}
                            imageUrl={product.image}
                            title={product.title}
                            originalPrice={product.originalPrice}
                            discountPrice={product.discountPrice}
                            discountPercentage={product.discountPercentage}
                            rating={product.rating}
                            viewType={view}
                        />
                    ) : (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                {/* Image Section */}
                                <div className="relative w-full sm:w-48 md:w-56 aspect-square sm:h-48 md:h-56 flex-shrink-0 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent rounded-xl" />
                                    {/* Discount Badge */}
                                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium z-10">
                                        -{product.discountPercentage}% Off
                                    </div>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-xl p-4"
                                    />
                                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-2">
                                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                                            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                                        </button>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full flex items-center gap-1">
                                                    <Star className="w-4 h-4" />
                                                    <span className="font-medium">{product.rating}</span>
                                                </div>
                                                <span className="text-gray-500 text-sm">(120 Reviews)</span>
                                            </div>
                                            <span className="text-green-500 font-medium">In Stock</span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{product.title}</h3>
                                        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xl sm:text-2xl font-bold text-gray-900">₹{product.discountPrice}</span>
                                                <span className="text-base sm:text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                                            </div>
                                        </div>
                                        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-colors w-full sm:w-auto">
                                            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span className="sm:inline">Add to Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 mt-8 sm:mt-12 mb-8 px-4">
                {/* Previous Button */}
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                        currentPage === 1 
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                            : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                    }`}
                >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                </button>

                {/* Page Numbers with Ellipsis */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {getPageDots().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === "number" && handlePageChange(page)}
                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm transition-colors ${
                                currentPage === page 
                                    ? "bg-blue-600 text-white" 
                                    : page === "..."
                                    ? "cursor-default"
                                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                            }`}
                            disabled={page === "..."}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                        currentPage === totalPages 
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                            : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                    }`}
                >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    );
}
