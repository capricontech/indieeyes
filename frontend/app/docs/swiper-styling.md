# Swiper Component Styling Guide

This document provides comprehensive guidance on styling and configuring Swiper components within the IndieEyes application. It covers common patterns, best practices, and solutions to frequent issues.

## Table of Contents

- [Basic Setup](#basic-setup)
- [Common Configuration Options](#common-configuration-options)
- [Styling Best Practices](#styling-best-practices)
- [Navigation Controls](#navigation-controls)
- [Pagination Styling](#pagination-styling)
- [Handling Opacity Issues](#handling-opacity-issues)
- [Loop Mode Considerations](#loop-mode-considerations)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

## Basic Setup

When implementing a Swiper component, start with this basic structure:

```tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MyComponent = () => {
  // Keep a reference to the Swiper instance
  const swiperRef = useRef<any>(null);
  
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation
        pagination={{ clickable: true }}
        className="my-swiper-component"
      >
        {/* Slides go here */}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyComponent;
```

## Common Configuration Options

### Essential Options

```tsx
<Swiper
  // Core settings
  spaceBetween={20}           // Space between slides (px)
  slidesPerView={1}           // Number of slides visible
  loop={true}                 // Enable infinite loop
  centeredSlides={true}       // Center the active slide
  
  // Modules
  modules={[Navigation, Pagination, Autoplay]}
  
  // Navigation
  navigation                  // Enable prev/next buttons
  
  // Pagination
  pagination={{ 
    clickable: true,          // Make pagination dots clickable
    dynamicBullets: true      // Dynamic bullet size
  }}
  
  // Autoplay
  autoplay={{
    delay: 3000,              // Delay between transitions (ms)
    disableOnInteraction: false // Don't stop on user interaction
  }}
  
  // Events
  onSwiper={(swiper) => { swiperRef.current = swiper; }}
  onSlideChange={() => { /* Handle slide change */ }}
>
  {/* Slides */}
</Swiper>
```

## Styling Best Practices

### CSS Module Approach (Recommended)

Create a dedicated CSS module for your Swiper component:

```scss
// MySwiper.module.css
.swiperContainer {
  width: 100%;
  height: 400px;
  position: relative;
}

.swiper :global(.swiper-slide) {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper :global(.swiper-pagination-bullet) {
  background-color: #ddd;
  opacity: 0.6;
}

.swiper :global(.swiper-pagination-bullet-active) {
  background-color: #0070f3;
  opacity: 1;
}

.swiper :global(.swiper-button-prev),
.swiper :global(.swiper-button-next) {
  color: #0070f3;
}
```

Then import and use in your component:

```tsx
import styles from './MySwiper.module.css';

// In your component
<div className={styles.swiperContainer}>
  <Swiper className={styles.swiper}>
    {/* ... */}
  </Swiper>
</div>
```

### Tailwind CSS Approach

If using Tailwind:

```tsx
<div className="relative w-full h-[400px]">
  <Swiper
    className="h-full"
    // ... other props
  >
    <SwiperSlide className="flex items-center justify-center">
      {/* Slide content */}
    </SwiperSlide>
  </Swiper>
</div>
```

## Navigation Controls

### Custom Navigation Buttons

For custom navigation buttons:

```tsx
const MyComponent = () => {
  const swiperRef = useRef<any>(null);
  
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation={false} // Disable default navigation
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
      >
        {/* Slides */}
      </Swiper>
      
      {/* Custom navigation buttons */}
      <button 
        className="custom-prev-button"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        Previous
      </button>
      
      <button 
        className="custom-next-button"
        onClick={() => swiperRef.current?.slideNext()}
      >
        Next
      </button>
    </div>
  );
};
```

## Pagination Styling

### Custom Pagination

For custom pagination dots:

```tsx
<Swiper
  pagination={{
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} my-custom-bullet"></span>`;
    },
  }}
>
  {/* Slides */}
</Swiper>
```

### Styling Pagination Dots

In your CSS:

```css
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.3);
}

.swiper-pagination-bullet-active {
  background: #0070f3;
}
```

## Handling Opacity Issues

A common pattern is to adjust slide opacity based on active state:

```tsx
const MyComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <Swiper
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      // Other props
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div 
            style={{ 
              opacity: index === activeIndex ? 1 : 0.5,
              transition: 'opacity 0.3s ease'
            }}
          >
            {/* Slide content */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
```

### Important Note on Opacity

When using opacity effects:

1. **Apply to contents, not slides**: Apply opacity to elements inside the SwiperSlide, not the SwiperSlide itself
2. **Use state management**: Track active index with useState for proper updates
3. **Include transitions**: Add CSS transitions for smooth opacity changes
4. **Test across browsers**: Opacity behavior can vary

If you encounter issues with opacity, consider removing opacity effects entirely or applying them only to non-critical UI elements.

## Loop Mode Considerations

When using `loop={true}`:

1. **Use slideToLoop instead of slideTo**: When programmatically controlling slides:

```tsx
// Correct way with loop mode
swiperRef.current?.slideToLoop(index);

// Avoid using standard slideTo with loop mode
// swiperRef.current?.slideTo(index); // Can cause issues
```

2. **Handle loop clones**: Remember Swiper creates clone slides, so the real index might differ from the apparent index

3. **Pagination with loop**: Set `dynamicBullets: true` with loop mode for better pagination behavior

## Responsive Breakpoints

Configure different settings based on screen size:

```tsx
<Swiper
  // Base configuration
  slidesPerView={1}
  spaceBetween={10}
  
  // Responsive breakpoints
  breakpoints={{
    // Mobile and up
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Tablet and up
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Desktop
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
>
  {/* Slides */}
</Swiper>
```

## Performance Optimization

To optimize Swiper performance:

1. **Lazy loading images**:

```tsx
<Swiper lazy={true}>
  <SwiperSlide>
    <img 
      data-src="/path/to/image.jpg" 
      className="swiper-lazy" 
    />
    <div className="swiper-lazy-preloader"></div>
  </SwiperSlide>
</Swiper>
```

2. **Preload images**:

```tsx
<Swiper preloadImages={false}>
  {/* Slides */}
</Swiper>
```

3. **Virtual slides** for large collections:

```tsx
<Swiper
  virtual={{
    slides: Array(1000).fill('Slide'),
    addSlidesAfter: 3,
    addSlidesBefore: 3,
  }}
>
  {/* Slides will be rendered virtualized */}
</Swiper>
```

## Troubleshooting

### Common Issues and Solutions

#### Issue: Swiper not initializing properly
**Solution**: Ensure you're using Swiper in a client component with "use client" directive.

#### Issue: Navigation buttons not appearing
**Solution**: Check that you've included the Navigation module and CSS:
```tsx
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
// ...
modules={[Navigation]}
```

#### Issue: Click events not working on slides
**Solution**: Add `pointer-events: auto` to slide content if using opacity effects.

#### Issue: Loop mode creating unexpected jumps
**Solution**: 
1. Use `slideToLoop` instead of `slideTo`
2. Ensure you have enough slides (at least 3 recommended for loop mode)

#### Issue: Slides not centered correctly
**Solution**: Use both `centeredSlides: true` and appropriate `slidesPerView` value.

#### Issue: Inconsistent slide heights
**Solution**: Set explicit heights on slides or use the `autoHeight: true` option.

```tsx
<Swiper autoHeight={true}>
  {/* Slides */}
</Swiper>
```

#### Issue: Opacity inconsistencies across browsers
**Solution**: Remove opacity transitions and use scale or other effects instead:

```tsx
<div 
  style={{ 
    transform: `scale(${index === activeIndex ? 1 : 0.9})`,
    transition: 'transform 0.3s ease'
  }}
>
  {/* Slide content */}
</div>
```

---

For further assistance with Swiper components, consult the [official Swiper documentation](https://swiperjs.com/react) or reach out to the development team. 