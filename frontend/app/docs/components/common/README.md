# Common Components

This directory contains shared components that are used across multiple pages and aren't specific to any particular feature domain.

## Key Components

- **ErrorBoundary.tsx**: React error boundary component that catches runtime errors in its child component tree.
  - Provides a fallback UI when children components crash
  - Logs errors to help with debugging
  - Used widely throughout the application to prevent entire app crashes

- **Testimonial.tsx**: Customer testimonials carousel component.
  - **Recent Fixes**: Fixed Swiper loop warning by reducing slidesPerView and adding loopAdditionalSlides.
  - Displays customer reviews and ratings with profile images
  - Used on multiple pages to build trust and showcase customer satisfaction

## Usage

These components are used throughout the application:

```tsx
// Example usage of ErrorBoundary
import ErrorBoundary from './components/common/ErrorBoundary';

function SomeComponent() {
  return (
    <ErrorBoundary>
      <ComponentThatMightError />
    </ErrorBoundary>
  );
}

// Example usage of Testimonial
import Testimonial from './components/common/Testimonial';

function SomePage() {
  return (
    <div>
      <PageContent />
      <Testimonial />
    </div>
  );
}
```

## Best Practices

1. **Error Handling**:
   - ErrorBoundary should be used to wrap components that might throw errors
   - Errors should be properly logged for debugging
   - User-friendly fallback UI should be provided

2. **Reusability**:
   - Components should accept props to customize behavior when needed
   - Avoid hard-coding values that might need to change based on context
   - Document props and their expected values

3. **Performance**:
   - Minimize unnecessary rerenders
   - For Testimonial component, ensure carousel is optimized for performance 