# UI Components

This directory contains reusable UI components (atoms/molecules) used throughout the application.

## Key Components

- **Card.tsx**: Displays product information in a card format.
  - **Recent Fixes**: Added `sizes` attribute to the Image component with the `fill` prop to improve performance and fix warnings.

- **Button.tsx**: Reusable button component with various styles and variants.

- **ProductCard.tsx**: Extended card component specifically for product displays.
  - **Recent Fixes**: Added proper error handling for images and `sizes` attribute to improve performance and fix warnings.

## Best Practices

1. **Image Optimization**:
   - All images with `fill` property have appropriate `sizes` attribute.
   - Error handling is in place for image loading failures.
   - Placeholder images are displayed when the original image fails to load.

2. **Responsive Design**:
   - Components adapt to different screen sizes through Tailwind classes.
   - Mobile-first approach is used throughout.

3. **Accessibility**:
   - Proper alt texts for images.
   - Semantic HTML elements where appropriate.

## Usage Examples

### Card Component

```tsx
<Card
  id={1}
  title="Rectangle Sunglasses"
  image="/assets/images/glasses/rec.png"
  price={1200}
  originalPrice={1500}
  rating={4.5}
  discountPercentage={20}
  isNew={true}
/>
```

### Button Component

```tsx
<Button 
  variant="primary" 
  size="md" 
  onClick={handleClick}
>
  Add to Cart
</Button>
``` 