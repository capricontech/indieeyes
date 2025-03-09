# Category Components

This directory contains components specifically related to the category browsing and filtering functionality.

## Key Components

- **ProductGrid.tsx**: Displays products in either grid or list view with pagination.
  - **Recent Fixes**: Added `sizes` attribute to the Image component with the `fill` prop to improve performance and fix warnings.

- **FilterSidebar.tsx**: Provides filtering options for products based on various attributes (color, size, etc.).

- **StyleShapes.tsx**: Displays and allows selection of different eyewear shapes.
  - **Recent Fixes**: Added `sizes` attribute to the Image component with the `fill` prop to improve performance and fix warnings.

- **Gender.tsx**: Allows filtering products by gender.
  - **Recent Fixes**: Added `sizes` attribute to the Image component with the `fill` prop and improved error handling for images.

- **PriceRangeSlider.tsx**: Interactive slider for filtering products by price range.

## Data Flow

1. User selects filters in `FilterSidebar`, `StyleShapes`, `Gender`, or `PriceRangeSlider`
2. Filter changes are passed to parent component via `onFilterChange` callback
3. Parent component updates the filter state
4. Updated filters are passed to `ProductGrid` which shows filtered products

## Filter Handling

All filter components follow a consistent pattern:
- Accept an `onFilterChange` callback prop
- Call this callback with the filter key and new value when the user changes a filter
- The parent component is responsible for maintaining the overall filter state

## Best Practices

1. **Type Safety**:
   - All components use proper TypeScript types for props and state
   - Filter values use the common `FilterValue` type from `useFilters.ts`

2. **Image Handling**:
   - All images have appropriate error handling
   - All `Image` components with the `fill` prop include the `sizes` attribute

3. **Accessibility**:
   - Interactive elements have proper ARIA attributes
   - Color is not the only means of conveying information 