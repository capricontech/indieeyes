# API Services Structure

This directory contains the API services for the IndieEyes application. The services are implemented using a class-based approach with the following structure:

## Class Hierarchy

- `BaseService`: Abstract base class that provides common functionality
  - `ShapeService`: Service for shape-related API calls
  - `CategoryService`: Service for category-related API calls
  - `ProductService`: Service for product-related API calls

## Implementation Pattern

The services follow these patterns:

1. **Singleton Pattern**: Each service is implemented as a singleton to ensure only one instance exists throughout the application.

2. **Inheritance**: All services inherit from the `BaseService` class, which provides common functionality like API request handling.

3. **Async/Await**: All API methods return promises and use async/await for cleaner code.

4. **Mock Data Fallback**: Services can switch between real API calls and mock data based on environment configuration.

## Usage

```typescript
// Import the singleton instance
import shapeService from './api/shapes';

// Use the service in a component
async function loadData() {
  const shapes = await shapeService.getShapes();
  // Do something with the shapes
}
```

## Environment Variables

- `NEXT_PUBLIC_USE_MOCK_DATA`: Set to 'false' to use real API calls (default is true)
- `NEXT_PUBLIC_API_URL`: Base URL for API calls (default is 'http://localhost:3001/api')

## Mock Data

Mock data is stored in `mockData.ts` and is used when:
- The real API is not yet available
- `NEXT_PUBLIC_USE_MOCK_DATA` is set to true
- During development and testing

## Adding New Services

To add a new service:

1. Create a new class that extends `BaseService`
2. Implement the singleton pattern
3. Add methods that correspond to API endpoints
4. Add mock data to `mockData.ts`
5. Export the service instance from the class file 