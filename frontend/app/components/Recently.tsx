"use client";
import React, { useRef, useEffect, useState } from 'react';

const recentProducts = [
    {
        id: 1,
        name: 'Square Sunglass',
        image: '/assets/images/browserByShoap/image (1).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 2,
        name: 'Rectangle Sunglass',
        image: '/assets/images/browserByShoap/image (2).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 3,
        name: 'Round Sunglass',
        image: '/assets/images/browserByShoap/image (3).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 4,
        name: 'Geometric Sunglass',
        image: '/assets/images/browserByShoap/image (4).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 5,
        name: 'Cats Eye Sunglass',
        image: '/assets/images/browserByShoap/image (5).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 6,
        name: 'Aviator Sunglass',
        image: '/assets/images/browserByShoap/image (6).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 7,
        name: 'Wayfarer Sunglass',
        image: '/assets/images/browserByShoap/image (7).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 8,
        name: 'Rimless Sunglass',
        image: '/assets/images/browserByShoap/image (8).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 9,
        name: 'Half Rim Sunglass',
        image: '/assets/images/browserByShoap/rec.png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    }
];

// Create a triple-length array for truly seamless infinite scrolling
const infiniteProducts = [...recentProducts, ...recentProducts, ...recentProducts];

export default function RecentlyAdded() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        const scrollSpeed = 0.5; // pixels per frame - adjust for slower/faster scrolling

        const infiniteScroll = () => {
            setScrollPosition(prevPosition => {
                const newPosition = prevPosition + scrollSpeed;

                // If we've scrolled far enough, reset to beginning of second set
                // This creates the illusion of infinite scrolling
                if (newPosition >= scrollContainer.scrollWidth / 3) {
                    return newPosition - (scrollContainer.scrollWidth / 3);
                }

                return newPosition;
            });

            animationFrameId = requestAnimationFrame(infiniteScroll);
        };

        // Set initial scroll position to the start of the middle set of products
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        setScrollPosition(scrollContainer.scrollWidth / 3);

        animationFrameId = requestAnimationFrame(infiniteScroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Apply scroll position whenever it changes
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollPosition;
        }
    }, [scrollPosition]);

    return (
        <div className="w-full bg-[#0A0A23]">
            <div className="flex">
                {/* Left section - Dark background with title */}
                <div className="w-[468px] p-16 flex flex-col justify-center">
                    <h2 className="text-white text-[32px] font-bold leading-[39px] font-['Century_Gothic'] mb-4">
                        Recently<br />Added
                    </h2>
                    <a href="#" className="text-[#6053FB] text-base font-['Century_Gothic'] font-bold">
                        Browse All
                    </a>
                </div>

                {/* Right section - Product cards */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide"
                    style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {infiniteProducts.map((product, index) => (
                        <div
                            key={`${product.id}-${index}`}
                            className="min-w-[280px] mx-2 my-8 bg-white rounded-xl shadow-md flex flex-col relative"
                        >
                            {/* Favorite button */}
                            <button className="absolute right-3 top-3 z-10">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#224879"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </button>

                            {/* Product image */}
                            <div className="h-[220px] flex items-center justify-center p-4 border-b">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-full w-auto object-contain"
                                />
                            </div>

                            {/* Rating badge */}
                            <div className="absolute right-3 top-[168px] bg-[rgba(219,228,237,0.99)] rounded-[5px] px-2 py-1 flex items-center">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="#3FA9F4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-1"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="text-sm font-bold">{product.rating}</span>
                            </div>

                            {/* Product info */}
                            <div className="p-4">
                                <h3 className="text-[18px] font-semibold text-black mb-2">{product.name}</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[#707070] line-through">₹{product.originalPrice.toLocaleString()}</span>
                                    <span className="bg-[#D93153] text-white text-xs px-3 py-1 rounded">
                                        {product.discountPercentage}% Off
                                    </span>
                                </div>
                                <div className="text-[18px] font-bold text-[#171717]">
                                    ₹{product.finalPrice.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

