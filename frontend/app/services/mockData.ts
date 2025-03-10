import { Shape, Category, Product, Gender, StyleShape, ProductGrid, ProductType, CustomerReview } from '../types';

// Mock shapes data
export const mockShapes: Shape[] = [
    { id: 1, name: 'Square', image: '/assets/images/browserByShape/image (1).png', count: 132 },
    { id: 2, name: 'Rectangle', image: '/assets/images/browserByShape/image (2).png', count: 132 },
    { id: 3, name: 'Round', image: '/assets/images/browserByShape/image (3).png', count: 132 },
    { id: 4, name: 'Geometric', image: '/assets/images/browserByShape/image (4).png', count: 132 },
    { id: 5, name: 'Cats Eye', image: '/assets/images/browserByShape/image (5).png', count: 132 },
    { id: 6, name: 'Aviator', image: '/assets/images/browserByShape/image (6).png', count: 132 },
    { id: 7, name: 'Wayfarer', image: '/assets/images/browserByShape/image (7).png', count: 132 },
    { id: 8, name: 'Rimless', image: '/assets/images/browserByShape/image (8).png', count: 132 },
    { id: 9, name: 'Half Rim', image: '/assets/images/browserByShape/rec.png', count: 132 }
];

// Mock categories data
export const mockCategories: Category[] = [
    {
        id: 1,
        name: 'Men',
        image: "/assets/images/categories/men.png",
        style: { width: '289px', height: '254px' }
    },
    {
        id: 2,
        name: 'Women',
        image: "/assets/images/categories/women.png",
        style: { width: '289px', height: '164px' }
    },
    {
        id: 3,
        name: 'Unisex',
        image: "/assets/images/categories/unisex.png",
        style: { width: '289px', height: '164px' }
    },
    {
        id: 4,
        name: 'Kids',
        image: "/assets/images/categories/kids.png",
        style: { width: '289px', height: '230px' }
    }
];

// Mock products data
export const mockProducts: Product[] = [
    {
        id: 1,
        name: 'Square Sunglass',
        image: '/assets/images/browserByShap/image (1).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 2,
        name: 'Rectangle Sunglass',
        image: '/assets/images/browserByShap/image (2).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 3,
        name: 'Round Sunglass',
        image: '/assets/images/browserByShape/image (3).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 4,
        name: 'Geometric Sunglass',
        image: '/assets/images/browserByShape/image (4).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    }
]; 

export const mockGender: Gender[] = [
    {
        id: 1,
        name: 'Men\'s',
        description: '1093 Products Found',
        image: "/assets/images/gender/image (1).png",
    },
    {
        id: 2,
        name: 'Women\'s',
        description: '1093 Products Found',
        image: "/assets/images/gender/image (3).png",
    },
    {
        id: 3,
        name: 'Kid\'s',
        description: '1093 Products Found',
        image: "/assets/images/gender/image (2).png",
    }
];  

export const mockStyleShapes: StyleShape[] = [
    {
        id: 1,
        image: '/assets/images/glasses/sq.png',
    },
    {
        id: 2,
        image: '/assets/images/glasses/rec.png',
    },
    {
        id: 3,
        image: '/assets/images/glasses/roun.png',
    },
    {
        id: 4,
        image: '/assets/images/glasses/geo.png',
    },

    {
        id: 5,
        image: '/assets/images/glasses/cat.png',
    },
    {
        id: 6,
        image: '/assets/images/glasses/av.png',
    },
    {
        id: 7,
    image: '/assets/images/glasses/way.png',
    },
    {
        id: 8,
        image: '/assets/images/glasses/rimless.png',
    },
    {
        id: 9,
        image: '/assets/images/glasses/halfrim.png',
    },
    
]

export const mockProductGrid: ProductGrid[] = [
  {
    id: 1,
    image: '/assets/images/browserByShape/image (1).png',
    title: "Aviator Sunglasses - Blue",
    originalPrice: 2000,
    discountPrice: 1000,
    discountPercentage: 50,
    rating: 4.5
  },
  {
    id: 2,
    image: '/assets/images/browserByShape/image (2).png',
    title: "Round Metal Frame",
    originalPrice: 1800,
    discountPrice: 900,
    discountPercentage: 50,
    rating: 4.3
  },
  {
    id: 3,
    image: '/assets/images/browserByShape/image (3).png',
    title: "Classic Wayfarer",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.7
  },
  {
    id: 4,
    image: '/assets/images/browserByShape/image (4).png',
    title: "Oval Vintage Frame",
    originalPrice: 1600,
    discountPrice: 800,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 5,
    image: '/assets/images/browserByShape/image (5).png',
    title: "Cat Eye Classic",
    originalPrice: 1900,
    discountPrice: 950,
    discountPercentage: 50,
    rating: 4.6
  },
  {
    id: 6,
    image: '/assets/images/browserByShape/image (6).png',
    title: "Rectangular Sport",
    originalPrice: 2100,
    discountPrice: 1050,
    discountPercentage: 50,
    rating: 4.5
  },
  {
    id: 7,
    image: '/assets/images/browserByShape/image (7).png',
    title: "Modern Aviator",
    originalPrice: 2400,
    discountPrice: 1200,
    discountPercentage: 50,
    rating: 4.8
  },
  {
    id: 8,
    image: '/assets/images/browserByShape/image (8).png',
    title: "Sport Wrap Elite",
    originalPrice: 2300,
    discountPrice: 1150,
    discountPercentage: 50,
    rating: 4.6
  },
  {
    id: 9,
    image: '/assets/images/browserByShape/image (9).png',
    title: "Clubmaster Premium",
    originalPrice: 2600,
    discountPrice: 1300,
    discountPercentage: 50,
    rating: 4.7
  },
  {
    id: 10,
    image: '/assets/images/glasses/sq.png',
    title: "Rimless Titanium Pro",
    originalPrice: 2800,
    discountPrice: 1400,
    discountPercentage: 50,
    rating: 4.9
  },
  {
    id: 11, 
    image: '/assets/images/glasses/rec.png',
    title: "Oversized Designer",
    originalPrice: 2500,
    discountPrice: 1250,
    discountPercentage: 50,
    rating: 4.5
  },
  {
    id: 12,
    image: '/assets/images/glasses/cat.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 13,
    image: '/assets/images/glasses/av.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 14,
    image: '/assets/images/glasses/way.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 15,
    image: '/assets/images/glasses/rimless.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 16,
    image: '/assets/images/glasses/halfrim.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4 
  },
  {
    id: 17,
    image: '/assets/images/glasses/sq.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 18,
    image: '/assets/images/glasses/cat.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 19,
    image: '/assets/images/glasses/av.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 20,
    image: '/assets/images/glasses/way.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 21,
    image: '/assets/images/glasses/rimless.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  },
  {
    id: 22,
    image: '/assets/images/glasses/halfrim.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4 
  },
  {
    id: 23,
    image: '/assets/images/glasses/sq.png',
    title: "Half-Rim Professional",
    originalPrice: 2200,
    discountPrice: 1100,
    discountPercentage: 50,
    rating: 4.4
  }
];

export const mockProductDetails: ProductType[] = [
  {
    id: 1,
    image: '/assets/images/productPage/image (1).png',
  },
  {
    id: 2,
    image: '/assets/images/productPage/image (2).png',
  },
  {
    id: 4,
    image: '/assets/images/productPage/image (4).png',
  },
  {
    id: 5,
    image: '/assets/images/productPage/image (5).png',
  },
  {
    id: 6,
    image: '/assets/images/productPage/image (6).png',
  },
  {
    id: 7,
    image: '/assets/images/productPage/image (7).png',
  },
  {
    id: 8,
    image: '/assets/images/productPage/image (8).png',
  },
  {
    id: 9,
    image: '/assets/images/productPage/Group 4665.png',
  }
]

export const mockCustomerReviews: CustomerReview[] = [
  {
    id: 1,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 5,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (1).png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    date: '2024-01-02',
    rating: 4,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (2).png',
  },
  {
    id: 3,  
    name: 'John Doe',
    date: '2024-01-01',
    rating: 5,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (3).png',
  },
  {
    id: 4,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 5,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (4).png',
  },
  {
    id: 5,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 5,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (5).png',
  },
  {
    id: 6,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 5,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (6).png',
  },
  {
    id: 7,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 5,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (7).png',
  },
  {
    id: 8,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 5,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (8).png',
  },
  {
    id: 9,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 5,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (9).png',
  },
  {
    id: 10,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 5,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (10).png',
  },
  {
    id: 11,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 3,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (11).png',
  },
  {
    id: 12,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 2,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (12).png',
  },
  {
    id: 13,
    name: 'John Doe',
    date: '2024-01-01',
    rating: 1,
    review: 'This is a review',
    productImage: '/assets/images/productPage/rating/image (13).png',
  },
  
]
