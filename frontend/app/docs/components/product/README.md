# Product Components

This directory contains components related to product display, browsing, and filtering.

## Key Components

- **BrowseByShape.tsx**: Component for browsing products by eyewear shape.
  - Displays different eyewear shapes in a grid
  - Allows users to filter products by shape

- **Lenses.tsx**: Displays different types of lenses available.
  - **Recent Fixes**: Improved error handling by adding imgError state and error boundary. Added fallback to placeholder.jpg when image loading fails.
  - Shows lens options with descriptions and images

## Usage

These components are used on various pages to help users browse and filter products:

```tsx
// Example usage
import BrowseByShape from './components/product/BrowseByShape';
import Lenses from './components/product/Lenses';

export default function SomePage() {
  return (
    <div>
      <BrowseByShape />
      <Lenses />
    </div>
  );
}
```

## Data Flow

1. These components typically fetch data from services or use mock data
2. They display product-related information to the user
3. Some components allow interaction to filter or browse products

## Best Practices

1. **Error Handling**:
   - All components include proper error states
   - Image loading errors are handled with fallback images
   - Components are wrapped in ErrorBoundary to prevent crashes

2. **Accessibility**:
   - Interactive elements have proper focus states
   - Images have appropriate alt text
   - Color is not the only means of conveying information

3. **Performance**:
   - Images are optimized with Next.js Image component
   - All Image components with `fill` prop have appropriate `sizes` attribute 