# UI Module

This directory contains standalone UI components used across the application that aren't specific to feature domains.

## Key Components

### ProductCard.tsx

A reusable card component for displaying product information in grid or list layouts.

**Features**:
- Responsive design with different styling for grid/list views
- Discount badge display
- Rating display
- Error handling for images
- Hover effects and animations

**Recent Fixes**:
- Added `sizes` attribute to the Image component to optimize loading and fix warnings
- Improved error handling for images with fallback to placeholder.jpg

### ImageCard.tsx

A simplified card component focused on displaying images with minimal accompanying information.

**Implementation Details**:
- Uses Next.js Image component for optimization
- Supports various aspect ratios and sizes
- Includes hover effects

## Usage Examples

### ProductCard

```tsx
<ProductCard
  imageUrl="/assets/images/glasses/rec.png"
  title="Rectangle Sunglasses"
  originalPrice={1500}
  discountPrice={1200}
  discountPercentage={20}
  rating={4.5}
  viewType="grid"
/>
```

## Best Practices

1. **Consistency**:
   - These components maintain consistent styling with the design system
   - They accept standardized props for easy integration

2. **Performance**:
   - Images are optimized with proper sizing
   - Components are designed to minimize re-renders

3. **Accessibility**:
   - Images have appropriate alt text
   - Interactive elements have appropriate ARIA attributes
   - Color contrast ratios meet WCAG standards 