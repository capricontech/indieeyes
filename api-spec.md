# IndieEyes API Specification

This document outlines the API endpoints required for the IndieEyes frontend application.

## Base URL

```
http://localhost:3001/api
```

## Authentication

Authentication will be implemented using JSON Web Tokens (JWT). Include the token in the Authorization header:

```
Authorization: Bearer <token>
```

## API Endpoints

### Shapes

#### Get All Shapes

```
GET /shapes
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Square",
      "image": "/assets/images/browserByShoap/image (1).png",
      "count": 132
    },
    // More shapes...
  ],
  "message": "Shapes retrieved successfully"
}
```

#### Get Shape by ID

```
GET /shapes/:id
```

Response:

```json
{
  "data": {
    "id": 1,
    "name": "Square",
    "image": "/assets/images/browserByShoap/image (1).png",
    "count": 132
  },
  "message": "Shape retrieved successfully"
}
```

### Categories

#### Get All Categories

```
GET /categories
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Men",
      "image": "/assets/images/categories/men.png",
      "style": {
        "width": "289px",
        "height": "254px"
      }
    },
    // More categories...
  ],
  "message": "Categories retrieved successfully"
}
```

#### Get Category by ID

```
GET /categories/:id
```

Response:

```json
{
  "data": {
    "id": 1,
    "name": "Men",
    "image": "/assets/images/categories/men.png",
    "style": {
      "width": "289px",
      "height": "254px"
    }
  },
  "message": "Category retrieved successfully"
}
```

### Products

#### Get All Products

```
GET /products
```

Query Parameters:
- `page` (optional): Page number for pagination
- `limit` (optional): Number of products per page
- `category` (optional): Filter by category ID
- `shape` (optional): Filter by shape ID
- `sort` (optional): Sort order (e.g., "price_asc", "price_desc", "newest")

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Square Sunglass",
      "image": "/assets/images/browserByShoap/image (1).png",
      "originalPrice": 2000,
      "discountPercentage": 50,
      "finalPrice": 1000,
      "rating": 4.2,
      "isFavorite": false
    },
    // More products...
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  },
  "message": "Products retrieved successfully"
}
```

#### Get Recent Products

```
GET /products/recent
```

Query Parameters:
- `limit` (optional): Number of products to return (default: 10)

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Square Sunglass",
      "image": "/assets/images/browserByShoap/image (1).png",
      "originalPrice": 2000,
      "discountPercentage": 50,
      "finalPrice": 1000,
      "rating": 4.2,
      "isFavorite": false
    },
    // More products...
  ],
  "message": "Recent products retrieved successfully"
}
```

#### Get Product by ID

```
GET /products/:id
```

Response:

```json
{
  "data": {
    "id": 1,
    "name": "Square Sunglass",
    "image": "/assets/images/browserByShoap/image (1).png",
    "originalPrice": 2000,
    "discountPercentage": 50,
    "finalPrice": 1000,
    "rating": 4.2,
    "isFavorite": false,
    "description": "Product description here",
    "specifications": [
      {
        "key": "Material",
        "value": "Metal"
      },
      {
        "key": "Color",
        "value": "Black"
      }
    ],
    "categoryId": 1,
    "shapeId": 1
  },
  "message": "Product retrieved successfully"
}
```

## Error Responses

All endpoints will return a consistent error format:

```json
{
  "error": "Error message here",
  "statusCode": 400
}
```

Common status codes:
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error 