'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import local CSS module for Slider-specific styles
import styles from './slider.module.css';

// Define images with direct paths
const images = [
    "/assets/images/slider/image.png",
    "/assets/images/slider/image1.png",
    "/assets/images/slider/image2.png",
    "/assets/images/slider/image1.png",
    "/assets/images/slider/image2.png"
];

export default function Slider() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="max-w-5xl w-[95%] mx-auto">
            <div className={styles.sliderContainer}>
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    centeredSlides={true}
                    watchSlidesProgress={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true,
                        el: `.${styles.sliderPagination}`,
                        bulletClass: styles.paginationBullet,
                        bulletActiveClass: styles.paginationBulletActive,
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 1.2,
                        }
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className={styles.swiper}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <div className="relative h-[400px] w-full">
                                <Image
                                    src={image}
                                    alt={`Slider image ${index + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom pagination container */}
                <div className={styles.sliderPagination}></div>
            </div>
        </div>
    );
}
