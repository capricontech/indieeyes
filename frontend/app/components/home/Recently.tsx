"use client";

import React, { useRef, useEffect, useState } from "react";
import ProductCard from "../../ui/ProductCard";
import { mockProductGrid } from "../../services/mockData";

const recentProducts = mockProductGrid.map((product) => ({
  imageUrl: product.image,
  title: product.name,
  originalPrice: product.originalPrice ?? product.price,
  discountPrice: product.price,
  discountPercentage: product.discountPercentage ?? 0,
  rating: product.rating
}));

const infiniteProducts = [...recentProducts, ...recentProducts, ...recentProducts];

export default function RecentlyAdded() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 0.8;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const infiniteScroll = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(infiniteScroll);
    };

    animationFrameId = requestAnimationFrame(infiniteScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div className="w-full bg-[#0A0A23] py-4">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-[468px] px-8 md:px-16 flex flex-col justify-center">
          <h2 className="text-white hidden md:block text-2xl md:text-[32px] font-bold leading-[39px] text-center md:text-left">
            Recently<br />Added
          </h2>
          <h2 className="text-white md:hidden text-2xl md:text-[32px] font-bold leading-[39px] text-center md:text-left">
            Recently Added
          </h2>
          <a href="#" className="text-[#6053FB] text-base font-bold text-center md:text-left mt-2">
            Browse All
          </a>
        </div>

        {/* Scrollable Product Carousel */}
        <div
          ref={scrollRef}
          className="relative flex overflow-x-auto gap-4 scrollbar-hide px-4 md:px-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {infiniteProducts.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-[250px] md:w-[280px] lg:w-[300px]">
              <ProductCard
                imageUrl={product.imageUrl}
                title={product.title}
                originalPrice={product.originalPrice}
                discountPrice={product.discountPrice}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
