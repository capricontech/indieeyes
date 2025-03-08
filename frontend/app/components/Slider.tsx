'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

// Define the type for category items
interface Category {
    image: string;
}

const categories: Category[] = [
    { image: "/assets/images/slider/image.png" },
    { image: "/assets/images/slider/image1.png" },
    { image: "/assets/images/slider/image2.png" },
    { image: "/assets/images/slider/image1.png" },
    { image: "/assets/images/slider/image2.png" },
];

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1.2, spaceBetween: 5 },
                    640: { slidesPerView: 1.5, spaceBetween: 10 },
                    1024: { slidesPerView: "auto", spaceBetween: 10 },
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full max-w-[1462px] h-auto"
            >
                {categories.map((item, index) => (
                    <SwiperSlide 
                        key={index} 
                        className="flex justify-center items-center transition-all duration-500"
                        style={{
                            width: index === activeIndex ? "90vw" : "60vw", // Adjust dynamically
                            maxWidth: index === activeIndex ? "900px" : "600px",
                        }}
                    >
                        <div
                            className={`rounded-[10px] bg-white transition-all duration-500 w-full h-full flex justify-center items-center`}
                            style={{
                                opacity: index === activeIndex ? '1' : '0.6',
                            }}
                        >
                            <img
                                src={item.image}
                                alt={`Category image ${index + 1}`}
                                className="w-full h-full object-contain rounded-[10px]" // Ensures full image is visible
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 gap-2">
                {categories.map((_, i) => (
                    <div
                        key={i}
                        className={`w-[10px] h-[10px] border-2 rounded-full transition-all ${
                            i === activeIndex ? 'border-[#3FA9F4]' : 'border-[#707070]'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
