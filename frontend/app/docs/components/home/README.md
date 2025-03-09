# Home Page Components

This directory contains components that are primarily used on the home page of the application.

## Key Components

- **Category.tsx**: Carousel component displaying eyewear categories using Swiper.
  - **Recent Fixes**: Fixed Swiper loop warning by adding duplicate items and proper loopAdditionalSlides configuration.
  - Displays different eyewear frame shapes with title and image

- **Slider.tsx**: Fullwidth slider component for featured content.
  - **Recent Fixes**: Fixed Swiper loop warning by adding duplicate items and adjusting slidesPerView from fractional to integer values.
  - Hero section slider with featured images

- **Categories.tsx**: Grid layout of product categories with images and titles.
  - Displays main product categories in a responsive grid
  - Each category has an image, title, and count

- **Recently.tsx**: Displays recently added products in a grid.
  - Shows new arrivals or recently added products
  - Includes product images, names, and prices

## Usage

These components are primarily used on the home page:

```tsx
// Example usage in home page
import Category from './components/home/Category';
import Slider from './components/home/Slider';
import Categories from './components/home/Categories';
import RecentlyAdded from './components/home/Recently';

export default function Home() {
  return (
    <>
      <Category />
      <Slider />
      <Categories />
      <RecentlyAdded />
    </>
  );
}
```

## Best Practices

1. **Carousels and Sliders**:
   - All Swiper carousels have proper loop configuration
   - Images have appropriate sizes props and alt text
   - Carousels include appropriate controls and indicators

2. **Responsive Design**:
   - Components adapt to different screen sizes
   - Grid layouts adjust number of columns based on viewport width

3. **Performance**:
   - Images are optimized with Next.js Image component
   - Carousels use lazy loading where appropriate 