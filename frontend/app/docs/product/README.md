# Product Module

This directory handles the product detail pages and related functionality.

## Structure

- **[productId]/**: Dynamic route for individual product pages
  - **page.tsx**: Main product detail page
  - **layout.tsx**: Layout wrapper for product pages
  - **loading.tsx**: Loading state UI
  - **error.tsx**: Error handling UI

## Key Components

### Product Detail Page (`[productId]/page.tsx`)

Displays detailed information about a specific product including:
- Product images with thumbnail gallery
- Product information (name, price, description)
- Configuration options (color, size)
- Add to cart functionality

**Recent Fixes**:
- Added `sizes` attribute to all Image components with the `fill` prop
- Improved error handling for product images with fallback to placeholder
- Used different `sizes` values for main product image vs thumbnails for optimal performance

## Data Flow

1. Page loads and retrieves product ID from the URL parameters
2. Product data is fetched from the API (or mock data in development)
3. User can interact with the product (select options, add to cart)
4. Add to cart action dispatches to the CartContext

## Error Handling

- Error boundary catches runtime errors
- Error.tsx component provides a user-friendly error message with reset option
- Image loading errors fall back to placeholder images

## Best Practices

1. **Dynamic Routing**:
   - Uses Next.js App Router for dynamic product routes
   - SEO-friendly URLs with product IDs

2. **Performance**:
   - Images are optimized with Next.js Image component
   - Lazy loading for off-screen content
   - Proper sizes attribute to avoid unnecessary downloads

3. **Error Handling**:
   - Comprehensive error states for API failures
   - Fallbacks for missing data
   - Error boundaries to prevent app crashes 