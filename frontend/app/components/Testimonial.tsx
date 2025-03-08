"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React, { useRef, useEffect, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

const testimonials = [
  {
    name: "Cameron Bancroft",
    image: "/assets/images/testimonial/image (1).png",
    rating: 4,
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.",
  },
  {
    name: "John Doe",
    image: "/assets/images/testimonial/image (2).png",
    rating: 4,
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.",
  },
  {
    name: "Will O'Rourke",
    image: "/assets/images/testimonial/image (3).png",
    rating: 3,
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.",
  },
  {
    name: "Dav What",
    image: "/assets/images/testimonial/image (2).png",
    rating: 3,
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.",
  },
  {
    name: "Cameron Bancroft",
    image: "/assets/images/testimonial/image (1).png",
    rating: 4,
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
  },
  {
    name: "John Doe",
    image: "/assets/images/testimonial/image (2).png",
    rating: 4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    name: "Will O'Rourke",
    image: "/assets/images/testimonial/image (3).png",
    rating: 3,
    review:
      "There are many variations of passages of Lorem Ipsum available...",
  },
  {
    name: "Dav What",
    image: "/assets/images/testimonial/image (2).png",
    rating: 3,
    review:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced...",
  },
];

// Triple the testimonials array for smooth infinite scroll
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Set initial scroll position to the middle set
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;

    let animationFrameId: number;
    const scrollSpeed = 0.5; // Reduced speed for smoother scrolling

    const scroll = () => {
      if (!isAutoScrolling) return;

      scrollContainer.scrollLeft += scrollSpeed;

      // When we reach the end of the middle set, jump back to the start of the middle set
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth * 2) / 3) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrolling]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="bg-[#DBDBED] py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#171717]">
        What Our Happy Customers Are Saying
      </h2>

      <div className="hidden md:block relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          className="px-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="transition-all duration-300">
              {({ isActive, isPrev, isNext }) => (
                <div className={`
            bg-white shadow-lg rounded-xl p-6 text-center transition-all duration-300
            ${isActive || isPrev || isNext ? 'opacity-100 scale-105 blur-0' : 'opacity-50 scale-95 '}
            h-[400px] flex flex-col
          `}>
                  <div className="flex items-center justify-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717] text-center mt-2">{testimonial.name}</h3>
                  <div className="flex justify-center my-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`mx-0.5 ${i < testimonial.rating ? "text-[#3FA9F4]" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-[#707070] text-sm flex-1">{testimonial.review}</p>
                </div>
              )}
            </SwiperSlide>

          ))}
        </Swiper>

        <div className="absolute left-1/2  flex gap-2 mt-6">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-[12px] h-[12px] border-2 rounded-full transition-all ${i === activeIndex ? 'border-[#3FA9F4]' : 'border-[#707070]'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Smooth scrolling for mobile */}
      <div className="md:hidden relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          className="px-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="transition-all duration-300">
              {({ isActive, isPrev, isNext }) => (
                <div className={`
            bg-white shadow-lg rounded-xl p-6 text-center transition-all duration-300
            ${isActive || isPrev || isNext ? 'opacity-90 scale-105 blur-0' : 'opacity-100 scale-95 '}
            h-[400px] flex flex-col
          `}>
                  <div className="flex items-center justify-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717] text-center mt-2">{testimonial.name}</h3>
                  <div className="flex justify-center my-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`mx-0.5 ${i < testimonial.rating ? "text-[#3FA9F4]" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-[#707070] text-sm flex-1">{testimonial.review}</p>
                </div>
              )}
            </SwiperSlide>

          ))}
        </Swiper>

        <div className=" flex gap-2 mt-6 text-center justify-center">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-[12px] h-[12px] border-2 rounded-full transition-all ${index === activeIndex ? 'border-[#3FA9F4]' : 'border-[#707070]'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}