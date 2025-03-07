"use client";
import React, { useRef, useEffect, useState } from "react";

const recentProducts = [
  {
    id: 1,
    name: "Square Sunglass",
    image: "/assets/images/browserByShoap/image (1).png",
    originalPrice: 2000,
    discountPercentage: 50,
    finalPrice: 1000,
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Rectangle Sunglass",
    image: "/assets/images/browserByShoap/image (2).png",
    originalPrice: 2000,
    discountPercentage: 50,
    finalPrice: 1000,
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Round Sunglass",
    image: "/assets/images/browserByShoap/image (3).png",
    originalPrice: 2000,
    discountPercentage: 50,
    finalPrice: 1000,
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Geometric Sunglass",
    image: "/assets/images/browserByShoap/image (4).png",
    originalPrice: 2000,
    discountPercentage: 50,
    finalPrice: 1000,
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Cats Eye Sunglass",
    image: "/assets/images/browserByShoap/image (5).png",
    originalPrice: 2000,
    discountPercentage: 50,
    finalPrice: 1000,
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Aviator Sunglass",
    image: "/assets/images/browserByShoap/image (6).png",
    originalPrice: 2000,
    discountPercentage: 50,
    finalPrice: 1000,
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: 7,
    name: "Wayfarer Sunglass",
    image: "/assets/images/browserByShoap/image (7).png",
    originalPrice: 2000,
    discountPercentage: 50,
    finalPrice: 1000,
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: 8,
    name: "Rimless Sunglass",
    image: "/assets/images/browserByShoap/image (8).png",
    originalPrice: 2000,
    discountPercentage: 50,
    finalPrice: 1000,
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: 9,
    name: "Half Rim Sunglass",
    image: "/assets/images/browserByShoap/rec.png",
    originalPrice: 2000,
    discountPercentage: 50,
    finalPrice: 1000,
    rating: 4.2,
    isFavorite: false,
  },
];

const infiniteProducts = [...recentProducts, ...recentProducts, ...recentProducts];

export default function RecentlyAdded() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5;

    const infiniteScroll = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + scrollSpeed;
        if (newPosition >= scrollContainer.scrollWidth / 3) {
          return newPosition - scrollContainer.scrollWidth / 3;
        }
        return newPosition;
      });
      animationFrameId = requestAnimationFrame(infiniteScroll);
    };

    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
    setScrollPosition(scrollContainer.scrollWidth / 3);
    animationFrameId = requestAnimationFrame(infiniteScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="w-full bg-[#0A0A23]">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[468px] p-8 md:p-16 flex flex-col justify-center">
          <h2 className=" md:block hidden text-white text-2xl md:text-[32px] font-bold leading-[39px] font-['Century_Gothic'] mb-4 text-center">
            Recently<br />Added
          </h2>
          <h2 className=" md:hidden text-white text-2xl  font-bold  font-['Century_Gothic'] text-center">
            Recently Added
          </h2>
          <a href="#" className="text-[#6053FB] text-base font-['Century_Gothic'] font-bold text-center">
            Browse All
          </a>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide px-4 md:px-0">
          {infiniteProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="min-w-[260px] sm:min-w-[280px] mx-2 my-4 md:my-8 bg-white rounded-xl shadow-md flex flex-col relative">
              <button className="absolute right-3 top-3 z-10">
                <svg width="24" height="24" fill="none" stroke="#224879" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              <div className="h-[200px] md:h-[220px] flex items-center justify-center p-4 border-b">
                <img src={product.image} alt={product.name} className="max-h-full w-auto object-contain" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#707070] line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="bg-[#D93153] text-white text-xs px-2 py-1 rounded">
                    {product.discountPercentage}% Off
                  </span>
                </div>
                <div className="text-lg font-bold text-[#171717]">₹{product.finalPrice.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
