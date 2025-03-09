# IndieEyes Frontend Project Documentation

This is the comprehensive documentation for the IndieEyes e-commerce platform frontend. This document provides a high-level overview of the project structure, architecture, and links to more detailed documentation for specific areas of the application.

## Project Overview

IndieEyes is a modern e-commerce platform for eyewear products, built with Next.js 14 using the App Router architecture. The application provides a rich shopping experience for users looking to purchase:

- Sunglasses
- Eyeglasses
- Computer glasses
- Sports glasses
- Contact lenses
- Accessories

## Project Structure

The project follows a modular architecture with clear separation of concerns:

```
/app
  ├── /api                 # API routes using Next.js Route Handlers
  ├── /category            # Category routes and pages
  ├── /components          # Reusable UI components
  ├── /context             # React context providers
  ├── /docs                # Project documentation
  ├── /hooks               # Custom React hooks
  ├── /product             # Product routes and pages
  ├── /public              # Static assets
  ├── /services            # API services and data fetching
  ├── /styles              # Global styles and CSS modules
  ├── /types               # TypeScript type definitions
  ├── /ui                  # Standalone UI components
  ├── layout.tsx           # Root layout
  └── page.tsx             # Home page
```

## Core Technologies

- **Next.js 14**: App Router architecture with server components
- **React 18**: Modern React features (hooks, context, etc.)
- **TypeScript**: Type-safe code throughout the application
- **Tailwind CSS**: Utility-first styling approach
- **Swiper**: For carousel and slider components
- **React Range**: For range sliders in filtering

## Documentation Sections

### Main Application
- [Main Project Overview](./Main-README.md) - Overall project details and structure

### Components Documentation
- [Components Overview](./components/README.md) - All reusable components
  - [Category Components](./components/category/README.md) - Components for category browsing
  - [Common Components](./components/common/README.md) - Shared utility components
  - [Home Components](./components/home/README.md) - Homepage-specific components
  - [Layout Components](./components/layout/README.md) - Layout structure components
  - [Product Components](./components/product/README.md) - Product-related components
  - [UI Components](./components/ui/README.md) - Atomic UI components

### Module Documentation
- [Product Module](./product/README.md) - Product pages and functionality
- [UI Module](./ui/README.md) - Standalone UI components
- [Services](./services/README.md) - API services and data fetching

### Assets & Resources
- [Public Assets](./public/README.md) - Static assets documentation

### Specialized Documentation
- [Swiper Styling Guide](./swiper-styling.md) - Guide for styling Swiper components
- [Bug Fixes & Changelog](./BUGFIX-CHANGELOG.md) - History of bug fixes and improvements

## Key Features

### Responsive Design
The application is built with a mobile-first approach, ensuring excellent user experience across all device sizes. All components adapt seamlessly to different screen sizes.

### Optimized Image Handling
Images are optimized using Next.js's Image component with proper sizes, loading attributes, and error handling to ensure fast loading times and good performance metrics.

### Advanced State Management
The application uses React Context for global state management (shopping cart, filters, etc.) with optimized re-renders and efficient updates.

### Category & Product Browsing
Users can browse products by category, shape, or use advanced filtering capabilities to find the perfect eyewear:
- Shape browsing
- Price range filtering
- Color filtering
- Material filtering
- Brand filtering

### Shopping Cart
The cart system allows users to:
- Add products to cart
- Update quantities
- Remove items
- See a running total of items and prices

## Recent Improvements

Recent improvements to the codebase include:
- Fixed Swiper loop warnings and configuration issues
- Optimized image loading with proper sizes attributes
- Added comprehensive error handling for image loading
- Implemented proper CSS modules structure
- Fixed layout issues in Category components
- Updated React patterns for better performance

## Development Workflow

1. Start the development server: `cd frontend && yarn dev`
2. Access the application at [http://localhost:3000](http://localhost:3000)
3. Make changes to components, pages, or styles
4. See real-time updates in the browser

## Contribution Guidelines

When contributing to this project, please ensure:
1. Code follows the established patterns and practices
2. New features have appropriate documentation
3. Components are properly typed with TypeScript
4. Styles follow the Tailwind CSS approach or use CSS Modules
5. Any Swiper components follow the guidelines in [Swiper Styling Guide](./swiper-styling.md)

## Deployment

The application is designed to be deployed on Vercel, but can be deployed to any platform that supports Next.js applications.

## Contact & Support

For any questions or support regarding this documentation, please contact the project maintainers.

---

Last updated: March 2024 