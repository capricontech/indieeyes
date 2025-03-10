# IndieEyes Frontend

This is the frontend for the IndieEyes application. It's built with Next.js and designed to be API-ready with a class-based architecture.

## Getting Started

1. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

2. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

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


# IndiEyes - Eyewear E-commerce Platform

## 📋 Project Overview

IndiEyes is a modern e-commerce platform specializing in eyewear products. The application features a user-friendly interface with detailed product pages, customer reviews, and a seamless shopping experience.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/indieeyes.git
   cd indieeyes/frontend
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## ��️ Project Structure 