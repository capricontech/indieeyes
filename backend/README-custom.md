# IndieEyes Backend Implementation

This Strapi-based backend implements the API for the IndieEyes e-commerce platform, focusing on eyewear products.

## Architecture Overview

The backend follows the Strapi architecture with custom extensions:

1. **Content Types**:
   - Category
   - Product
   - Shape
   - StyleShape
   - Gender
   - Cart
   - Order

2. **Custom Controllers**:
   - Enhanced response formatting to match API specification
   - Advanced filtering for products
   - Cart management functionality

3. **Middleware**:
   - Error handling
   - Rate limiting
   - Caching

4. **Utilities**:
   - In-memory caching service (extensible to Redis)
   - Data validation using Yup

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd indieeyes/backend

# Install dependencies
yarn install

# Start development server
yarn develop
```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
HOST=0.0.0.0
PORT=3001
APP_KEYS=<randomly-generated-keys>
API_TOKEN_SALT=<randomly-generated-salt>
ADMIN_JWT_SECRET=<randomly-generated-secret>
JWT_SECRET=<randomly-generated-secret>
```

## API Endpoints

### Categories

- `GET /api/categories`: Get all categories
- `GET /api/categories/:id`: Get a category by ID

### Shapes

- `GET /api/shapes`: Get all shapes
- `GET /api/shapes/:id`: Get a shape by ID

### Products

- `GET /api/products`: Get all products with filtering options
  - Query parameters: `page`, `limit`, `category`, `shape`, `sort`
- `GET /api/products/recent`: Get recent products
- `GET /api/products/:id`: Get a product by ID

### Cart

- `GET /api/cart/session`: Get or create a cart for the user
- `POST /api/cart/:id/items`: Add an item to the cart
- `DELETE /api/cart/:id/items`: Remove an item from the cart
- `PUT /api/cart/:id/items`: Update item quantity

## Performance Optimizations

1. **Caching**:
   - In-memory caching for frequently accessed data
   - Configurable TTL for cache entries

2. **Database Indexing**:
   - Indexes on frequently queried fields
   - Relation fields optimized for joins

3. **Rate Limiting**:
   - Prevents API abuse
   - Configurable limits per endpoint

## Security Features

1. **Input Validation**:
   - Schema-based validation using Yup
   - Protection against malicious inputs

2. **Rate Limiting**:
   - Protection against brute force attacks
   - IP-based limiting

3. **Error Handling**:
   - Consistent error responses
   - Prevention of sensitive information leakage

## Lifecycle Hooks

Automatic updating of related data:
- Product counts in shapes are automatically updated when products are created, updated, or deleted

## Future Enhancements

1. **Redis Integration**:
   - Replace in-memory cache with Redis for distributed caching

2. **Elasticsearch Integration**:
   - Add advanced search capabilities
   - Implement faceted filtering

3. **Payment Gateway Integration**:
   - Add payment processing capabilities
   - Order fulfillment workflow

## Troubleshooting

### Common Issues

1. **Database Connection Failed**:
   - Check database credentials in `.env` file
   - Ensure database server is running

2. **Image Upload Issues**:
   - Check upload provider configuration
   - Verify directory permissions

3. **API Errors**:
   - Check logs for detailed error messages
   - Verify request format matches API specification

### Getting Help

If you encounter any issues, please:
1. Check the logs in `logs/` directory
2. Refer to Strapi documentation
3. Contact the development team 