# Components Directory

This directory contains reusable components used throughout the IndieEyes application. Components are now organized into modular directories based on their function and usage.

## Directory Structure

- **ui/**: Contains atomic UI components (Button, Card, etc.)
- **category/**: Contains category-specific components (FilterSidebar, ProductGrid, etc.)
- **layout/**: Contains layout components (TopBar, NavBar, Footer, BottomBar)
- **home/**: Contains components primarily used on the home page (Category, Slider, Categories, Recently)
- **product/**: Contains product-related components (BrowseByShape, Lenses)
- **common/**: Contains shared components used across multiple pages (ErrorBoundary, Testimonial)

## Recent Fixes

- **Carousel Components**:
  - Fixed Swiper loop warning in Category.tsx, Slider.tsx, and Testimonial.tsx
  - Added proper loopAdditionalSlides configuration
  - Adjusted slidesPerView settings to prevent warnings

- **Image Components**:
  - Added `sizes` attribute to all images with `fill` prop
  - Improved error handling for images with fallbacks to placeholder images

- **Error Handling**:
  - Added ErrorBoundary component to catch runtime errors
  - Implemented conditional rendering and error states in components

## Best Practices

1. **Modular Organization**:
   - Components are organized by function and domain
   - Each directory has its own README explaining its contents
   - Import paths use the new directory structure (e.g., `import TopBar from './components/layout/TopBar'`)

2. **Image Handling**:
   - All images include error handling with fallbacks to placeholder images
   - All `Image` components with the `fill` prop include the `sizes` attribute for performance optimization

3. **Error Handling**:
   - Components are wrapped in `ErrorBoundary` to prevent entire app crashes
   - Individual error states for critical resources like images

4. **Performance**:
   - Swiper carousels are properly configured for performance and smooth looping
   - Image loading is optimized with proper sizing and priorities 