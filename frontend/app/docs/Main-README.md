# IndieEyes Frontend

This is the frontend for IndieEyes, an e-commerce platform for eyewear.

## Project Structure

The project follows the Next.js App Router architecture and is organized as follows:

```
/app
  ├── /api                 # API routes using Next.js Route Handlers
  │   └── /products        # Product-related API endpoints
  │
  ├── /category            # Category routes
  │   ├── page.tsx         # Main category listings page
  │   ├── layout.tsx       # Layout for category pages
  │   ├── loading.tsx      # Loading state for category pages
  │   ├── error.tsx        # Error handling for category pages
  │   └── /[category]      # Dynamic route for specific categories
  │       └── /[subcategory] # Nested dynamic route for subcategories
  │
  ├── /docs                # Comprehensive project documentation
  │   ├── /components      # Documentation for all components
  │   ├── /product         # Documentation for product features
  │   ├── /services        # Documentation for API services
  │   ├── /ui              # Documentation for UI components
  │   ├── /public          # Documentation for public assets
  │   ├── Cursor-Readme.md # Master documentation index
  │   ├── swiper-styling.md # Guide for Swiper component styling
  │   └── BUGFIX-CHANGELOG.md # History of bug fixes
  │
  ├── /product             # Product routes
  │   └── /[productId]     # Dynamic route for product details
  │       ├── page.tsx     # Product detail page
  │       ├── layout.tsx   # Layout for product pages
  │       ├── loading.tsx  # Loading state for product pages
  │       └── error.tsx    # Error handling for product pages
  │
  ├── /components          # Reusable components
  │   ├── /ui              # UI components (atoms/molecules)
  │   ├── /category        # Category-specific components
  │   └── /product         # Product-specific components
  │
  ├── /context             # React context for state management
  │   └── CartContext.tsx  # Cart context for managing shopping cart
  │
  ├── /hooks               # Custom React hooks
  │   └── useFilters.ts    # Hook for managing filter state
  │
  ├── /services            # Service modules for API calls, etc.
  │   ├── /api             # API service modules
  │   └── mockData.ts      # Mock data for development
  │
  ├── /types               # TypeScript type definitions
  │   └── index.ts         # Common type definitions
  │
  ├── layout.tsx           # Root layout
  └── page.tsx             # Home page
```

## Documentation

All project documentation has been consolidated in the `/app/docs` directory for easier access and maintainability:

- **[Cursor-Readme.md](./Cursor-Readme.md)**: Master documentation index with links to all other documentation
- **Component Documentation**: Detailed docs for all component types in `/docs/components/`
- **[Swiper Styling Guide](./swiper-styling.md)**: Comprehensive guide for implementing and styling Swiper components
- **[BUGFIX-CHANGELOG.md](./BUGFIX-CHANGELOG.md)**: Running log of all bug fixes and improvements

For a complete documentation experience, start with the [Cursor-Readme.md](./Cursor-Readme.md) file.

## Recent Improvements and Bug Fixes

### March 2024

1. **Fixed Swiper Loop Warnings**
   - Added proper looping configuration for carousel components
   - Fixed slidesPerView settings to avoid warnings
   - Added duplicate items to ensure smooth looping
   - Created detailed [Swiper Styling Guide](./swiper-styling.md) for best practices

2. **Fixed Image Component Warnings**
   - Added `sizes` attribute to all images with `fill` prop
   - Optimized image loading with responsive sizes values
   - Improved overall Next.js Image component implementation
   - Added error handling for image loading failures

3. **Enhanced Error Handling**
   - Added fallback images for loading failures
   - Implemented ErrorBoundary components to catch runtime errors
   - Added error state management in components with critical content

4. **Improved Documentation**
   - Created organized documentation structure in `/app/docs`
   - Added comprehensive master documentation with [Cursor-Readme.md](./Cursor-Readme.md)
   - Created component-specific documentation for all major modules
   - Added technical guides for complex implementations (Swiper)

For a detailed list of all changes, see the [BUGFIX-CHANGELOG.md](./BUGFIX-CHANGELOG.md) file.

## Key Features

- **Modular Component Structure**: Components are organized following atomic design principles.
- **Type Safety**: Strong TypeScript typing throughout the application.
- **State Management**: Context API for global state management (shopping cart).
- **Responsive Design**: Mobile-first design using Tailwind CSS.
- **Loading & Error States**: Proper handling of loading and error states.
- **Dynamic Routing**: Nested dynamic routes for categories and subcategories.

## Getting Started

First, install the dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Decisions

1. **App Router**: Using Next.js App Router for better routing control and server components.
2. **Tailwind CSS**: For utility-first styling and rapid UI development.
3. **Context API**: For simple global state management, without the need for Redux.
4. **Modular Components**: Creating reusable components to maintain consistency and reduce duplication.
5. **TypeScript**: For type safety and improved developer experience.

## Tools and Libraries

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- clsx (for conditional class names)
- React Range (for range slider components)
- Swiper (for carousel components)

## API Integration

The frontend is designed with a class-based API service architecture that will connect to a backend when it's available.

### Mock Data vs. Real API

The application can switch between mock data and real API calls using environment variables:

- Set `NEXT_PUBLIC_USE_MOCK_DATA=true` to use mock data (default)
- Set `NEXT_PUBLIC_USE_MOCK_DATA=false` to use real API calls
- Set `NEXT_PUBLIC_API_URL` to change the API base URL (default: http://localhost:3001/api)

Example `.env.local` file:
```
NEXT_PUBLIC_USE_MOCK_DATA=false
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### API Service Architecture

The API services follow a class-based architecture:

- `app/services/api/BaseService.ts`: Base class providing common functionality
  - `ShapeService`: Service for shape-related API calls
  - `CategoryService`: Service for category-related API calls
  - `ProductService`: Service for product-related API calls

Each service class:
- Extends the BaseService class
- Follows the singleton pattern
- Provides methods for specific API endpoints
- Handles switching between mock data and real API calls

### Data Models

Data models are defined as TypeScript interfaces in `app/types/index.ts`

## Components

Components fetch data using the API service classes:

- `BrowserByShoap.tsx`: Displays eyewear shapes, fetched from the ShapeService
- `Categories.tsx`: Displays product categories, fetched from the CategoryService
- (Other components follow the same pattern)

## Backend Integration

When the backend is ready, follow these steps:

1. Implement the backend API according to the specifications in `backend/api-spec.md`
2. Set `NEXT_PUBLIC_USE_MOCK_DATA=false` in your environment
3. The frontend will automatically start using the real API endpoints

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
