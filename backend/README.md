# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>


# IndieEyes Backend

This directory contains the backend for the IndieEyes application. The frontend has been designed with API integration in mind using a class-based approach, so when this backend is implemented, it should seamlessly connect with the frontend.

## Project Overview

The backend will serve as the API server for the IndieEyes e-commerce platform, providing endpoints for:
- Product catalog management
- Category organization
- Shape browsing
- User authentication (future implementation)
- Shopping cart management (future implementation)
- Order processing (future implementation)

## Getting Started

1. Choose your preferred backend technology (Node.js/Express, Django, Laravel, etc.)
2. Implement the API endpoints as specified in `api-spec.md`
3. The frontend is already set up to connect to `http://localhost:3001/api` by default, which can be changed using the `NEXT_PUBLIC_API_URL` environment variable

## Development Guidelines

### Documentation Requirements

1. **API Documentation**:
   - Keep the `api-spec.md` file updated as endpoints are implemented or modified
   - Document any deviations from the initial API spec
   - Include examples for new endpoints or parameters

2. **README Updates**:
   - When implementing new features, update this README with implementation details
   - Document any dependencies or configuration requirements
   - Include troubleshooting guidance for common integration issues

3. **Bug Fix Documentation**:
   - Create and maintain a `BUGFIX-CHANGELOG.md` file for the backend
   - Document all bug fixes with details on what was fixed and how
   - Follow the same format used in the frontend's changelog

### Development Workflow

1. **Feature Branch Methodology**:
   - Always create a new branch for each feature or bug fix
   - Use descriptive branch names following the pattern: `feature/feature-name` or `bugfix/issue-description`
   - Keep branches focused on a single feature or fix
   - Create a pull request for code review before merging to main
   - Delete branches after they have been merged

2. **Code Quality Standards**:
   - Write clean, maintainable code with proper error handling
   - Implement comprehensive request validation
   - Write automated tests for all endpoints
   - Follow RESTful API design principles
   - Include appropriate HTTP status codes in responses

3. **Performance Considerations**:
   - Implement proper caching strategies
   - Optimize database queries
   - Consider pagination for endpoints returning large amounts of data
   - Add rate limiting for public endpoints

## Integration with Frontend

The frontend is using a class-based API service architecture which has been recently updated and improved:

- `frontend/app/services/api/BaseService.ts`: Base service class with common functionality
- `frontend/app/services/api/shapes.ts`: Shape service class extending BaseService
- `frontend/app/services/api/categories.ts`: Category service class extending BaseService
- `frontend/app/services/api/products.ts`: Product service class extending BaseService
- `frontend/app/services/api/styleShape.ts`: Style shape service class for browsing by style
- `frontend/app/services/api/gender.ts`: Gender service class for category filtering
- `frontend/app/services/mockData.ts`: Contains all mock data for development

Each service class follows the singleton pattern and provides methods that correspond to API endpoints.

### Integration Steps

1. Build your API endpoints according to the specifications in `api-spec.md`
2. Set the environment variable `NEXT_PUBLIC_USE_MOCK_DATA=false` in the frontend to start using real API calls
3. The frontend will automatically switch from mock data to real API endpoints

### API Response Format

All API endpoints should return data in the following format:

```typescript
interface ApiResponse<T> {
  data: T;
  error?: string;
  message?: string;
}
```

### Data Models

The frontend expects data in the following formats:

#### Shapes
```typescript
interface Shape {
  id: number;
  name: string;
  image: string;
  count: number;
}
```

#### Style Shapes
```typescript
interface StyleShape {
  id: number;
  name?: string;
  image: string;
}
```

#### Categories
```typescript
interface Category {
  id: number;
  name: string;
  image: string;
  style?: {
    width: string;
    height: string;
  };
}
```

#### Gender
```typescript
interface Gender {
  id: number;
  name: string;
  image: string;
  description?: string;
}
```

#### Products
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  categories: string[];
  colors: string[];
  sizes: string[];
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
  discountPercentage?: number;
  material?: string;
  brand?: string;
}
```

## Testing Integration

1. Start your backend server
2. Start the frontend with the environment variable `NEXT_PUBLIC_USE_MOCK_DATA=false`
3. The frontend should now be fetching data from your backend API

## Error Handling

The frontend has been updated with comprehensive error handling:
- All API calls now include try/catch blocks
- Fallback to mock data if API calls fail
- Proper error messages displayed to users
- Error boundaries to prevent app crashes

Ensure your backend returns appropriate error responses:
```typescript
{
  "error": "Error message here",
  "statusCode": 400
}
```

## Performance Optimization

When implementing the backend, consider the following optimization strategies:
1. Implement database indexing for frequently queried fields
2. Use caching for frequently accessed data (Redis, Memcached, etc.)
3. Compress response payloads
4. Implement pagination for large data sets
5. Consider implementing a CDN for static assets

## Security Considerations

1. Implement proper authentication and authorization
2. Sanitize all user inputs to prevent injection attacks
3. Use HTTPS for all API communications
4. Implement rate limiting to prevent abuse
5. Use secure methods for storing sensitive information (e.g., passwords)

## Notes

- All endpoints should return data in the format specified in `api-spec.md`
- Error handling is implemented in the frontend to handle API errors gracefully 