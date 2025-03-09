# Public Assets

This directory contains static assets that are directly accessible by the client.

## Directory Structure

- **assets/**: Main directory for assets
  - **images/**: Contains image files used throughout the application
    - **glasses/**: Eyewear product images
    - **category/**: Category images
    - **testimonial/**: Customer testimonial images
    - **slider/**: Images used in slider components

- **placeholder.jpg**: Generic placeholder image used when actual images fail to load

## Important Files

### placeholder.jpg

A generic image (400x400) that serves as a fallback when product or category images fail to load. This is referenced throughout the application as `/placeholder.jpg` in image error handling.

**Implementation**:
- Added as a fallback in all image components to prevent broken image displays
- Integrated with error handlers in Image components

## Usage Guidelines

1. **Referencing Public Assets**:
   - Always reference public assets with a leading slash: `/assets/images/...`
   - In Next.js Image components: `src="/assets/images/example.jpg"`

2. **Image Optimization**:
   - Next.js automatically optimizes images when using the Image component
   - For non-critical images, use the `priority={false}` prop
   - For above-the-fold images, use `priority={true}`

3. **Error Handling**:
   - Always include error handling for images that could potentially fail to load
   - Use the placeholder.jpg as a fallback

## Best Practices

1. **Image Formats**:
   - Use WebP or AVIF for better compression when possible
   - PNG for transparency requirements
   - JPEG for photos without transparency

2. **Asset Size**:
   - Keep images optimized for web delivery
   - Consider providing multiple sizes for responsive designs 