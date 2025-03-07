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
        <div className="relative md:w-full  mx-auto overflow-visible">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                centeredSlides={true} 
                slidesPerView="auto"
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full max-w-[1462px] h-[587px] overflow-hidden" // Ensure overflow-hidden
            >
                {categories.map((item, index) => (
                    <SwiperSlide 
                        key={index} 
                        className="flex justify-center items-center transition-all duration-500"
                        style={{
                            width: index === activeIndex ? "900px" : "600px", 
                        }}
                    >
                        <div
                            className={`rounded-[10px] bg-cover bg-center transition-all duration-500 md:w-full md:h-full w-72`}
                            style={{
                                backgroundImage: `url(${item.image})`,
                                width: '100%',
                                height: '551px',
                                opacity: index === activeIndex ? '1' : '0.6',
                            }}
                        >
                            <img src={item.image} alt={`Category image ${index + 1}`} className="hidden" /> 
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="  justify-center flex gap-2 ">
                {categories.map((_, i) => (
                    <div
                        key={i}
                        className={`w-[12px] h-[12px] border-2 rounded-full transition-all ${i === activeIndex ? 'border-[#3FA9F4]' : 'border-[#707070]'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}