"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React, { useRef, useState, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import CSS Module - use the correct path based on directory structure
import styles from '../../styles/Testimonial.module.scss';

// The placeholder image path
const PLACEHOLDER_IMAGE = '/placeholder.jpg';

// Mock testimonial data with verified images
const testimonials = [
  {
    name: 'James Wilson',
    image: '/assets/images/testimonial/user1.png',
    rating: 5,
    review: 'Such awesome glasses! The quality is top-notch and the style is perfect. I\'ve been getting compliments everywhere I go. Definitely would recommend to anyone looking for stylish eyewear.'
  },
  {
    name: 'Sarah Johnson',
    image: '/assets/images/testimonial/user2.png',
    rating: 4,
    review: 'I love my new frames! The ordering process was so easy, and when they arrived, the quality exceeded my expectations. They fit perfectly right out of the box.'
  },
  {
    name: 'Michael Brown',
    image: '/assets/images/testimonial/user3.png',
    rating: 5,
    review: 'Incredible customer service and amazing selection. I spent weeks looking for the perfect frames and finally found them here. The virtual try-on feature was super helpful.'
  },
  {
    name: 'Emma Davis',
    image: '/assets/images/testimonial/user1.png',
    rating: 4,
    review: 'These are the most comfortable glasses I\'ve ever owned. The lightweight frames make it easy to wear them all day without any discomfort. Very satisfied with my purchase!'
  },
  {
    name: 'Robert Martinez',
    image: '/assets/images/testimonial/user2.png',
    rating: 5,
    review: 'Fantastic quality for the price! I\'ve spent much more on designer brands that weren\'t nearly as nice. The lenses are crystal clear and the frames are sturdy.'
  }
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  // Add console log to check all paths
  useEffect(() => {
    // Log the image paths
    console.log("Testimonial image paths:", testimonials.map(t => t.image));

    const preloadImages = () => {
      if (typeof window === 'undefined') return;

      const newErrors: Record<number, boolean> = {};

      testimonials.forEach((testimonial, index) => {
        // Be explicit about where we're looking for images
        console.log(`Looking for testimonial image at: ${testimonial.image}`);
        console.log(`Which should be at: ${window.location.origin}${testimonial.image}`);

        const img = new window.Image();
        img.onload = () => console.log(`✅ Image ${index} loaded successfully: ${testimonial.image}`);
        img.onerror = () => {
          console.error(`❌ Error loading image ${index}: ${testimonial.image}`);
          newErrors[index] = true;
        };
        img.src = testimonial.image;
      });

      if (Object.keys(newErrors).length > 0) {
        console.log("Setting image errors:", newErrors);
        setImgErrors(newErrors);
      }
    };

    preloadImages();
  }, []);

  // Handle dot click to navigate to the selected slide
  const handleDotClick = (index: number) => {
    console.log(`Navigating to slide ${index}`);
    setActiveIndex(index);
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  // Update active index when slide changes
  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.realIndex;
    console.log(`Slide changed to ${newIndex}`);
    setActiveIndex(newIndex);
  };

  // Handle image loading errors
  const handleImageError = (index: number) => {
    console.log(`Image error for testimonial ${index}`);
    setImgErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Get image source with fallback - enhanced with more robust checks
  const getImageSrc = (index: number) => {
    if (imgErrors[index]) {
      return PLACEHOLDER_IMAGE;
    }

    if (!testimonials[index] || !testimonials[index].image) {
      return PLACEHOLDER_IMAGE;
    }

    return testimonials[index].image;
  };

  // Swiper configuration
  const swiperConfig = {
    modules: [Autoplay, Navigation, Pagination],
    loop: true,
    centeredSlides: true,
    loopAdditionalSlides: 2,
    speed: 800,
    initialSlide: 0,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    slidesPerView: 3,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    onSlideChange: handleSlideChange,
    onBeforeInit: (swiper: SwiperType) => {
      if (swiperRef.current) {
        swiperRef.current.swiper = swiper;
      }
    },
    ref: swiperRef
  };

  return (
    <div className={`${styles.testimonialContainer} ${styles.swiperFix}`}>
      <h2 className={styles.title}>
        What Our Happy Customers Are Saying
      </h2>

      {/* Desktop Version */}
      <div className="hidden md:block">
        <Swiper
          {...swiperConfig}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 }
          }}
          className={styles.swiperContainer}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.testimonialCardDesktop} ${index === activeIndex ? styles.cardActive : ''}`}>
                <div className={styles.profileContainer}>
                  <img
                    src={getImageSrc(index)}
                    alt={testimonial.name}
                    className={styles.profileImage}
                    onError={() => handleImageError(index)}
                  />
                </div>
                <h3 className={styles.name}>{testimonial.name}</h3>
                <div className={styles.ratingContainer}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`${styles.star} ${i < testimonial.rating ? styles.starFilled : styles.starEmpty}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className={styles.reviewText}>{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className={styles.pagination}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`${styles.paginationDot} ${i === activeIndex ? styles.paginationDotActive : ''}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <Swiper
          {...swiperConfig}
          spaceBetween={20}
          slidesPerView={1}
          className={styles.swiperMobile}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.testimonialCardMobile} ${index === activeIndex ? styles.cardActive : ''}`}>
                <div className={styles.profileContainer}>
                  <img
                    src={getImageSrc(index)}
                    alt={testimonial.name}
                    className={styles.profileImage}
                    onError={() => handleImageError(index)}
                  />
                </div>
                <h3 className={styles.name}>{testimonial.name}</h3>
                <div className={styles.ratingContainer}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`${styles.star} ${i < testimonial.rating ? styles.starFilled : styles.starEmpty}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className={styles.reviewText}>{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination for Mobile */}
        <div className={styles.pagination}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`${styles.paginationDot} ${i === activeIndex ? styles.paginationDotActive : ''}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}