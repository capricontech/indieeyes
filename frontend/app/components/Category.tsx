'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module

const categories = [
    { image: "/assets/images/glasses/sunglass.png",  },
    { image: "/assets/images/glasses/eyeglass.png", },
    { image: "/assets/images/glasses/computer.png",},
    { image: "/assets/images/glasses/sports.png",},
    { image: "/assets/images/glasses/contact.png",},
    { image: "/assets/images/glasses/accs.png", },
];

export default function Category(){
    return (
        <div className="bg-white md:py-16 py-20">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={5}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 25
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                }}
                autoplay={{ delay: 700, disableOnInteraction: false }}
                loop={true}
                className="w-full"
            >
                {categories.map((item, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center">
                        <div className=" rounded-xl p-2 h-[202px] flex items-center justify-center">
                            <img src={item.image} className="w-48 h-40 object-contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
