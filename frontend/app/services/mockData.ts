import { Shape, Category, Product, Gender, StyleShape } from '../types';

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

// Mock gender data
export const mockGenders: Gender[] = [
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

// Mock style shapes
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

// Product data with all required fields
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Rectangle Specs",
    price: 2000,
    originalPrice: 2000,
    image: "/assets/images/glasses/rec.png",
    rating: 4.2,
    reviews: 30,
    categories: ["eyeglasses", "rectangle"],
    colors: ["Black", "Blue"],
    sizes: ["S", "M", "L"],
    description: "Classic rectangle eyeglasses with blue light protection."
  },
  {
    id: 2,
    name: "Cat Eye Specs",
    price: 2000,
    originalPrice: 2000,
    image: "/assets/images/glasses/cat.png",
    rating: 4.2,
    reviews: 30,
    categories: ["eyeglasses", "cat-eye"],
    colors: ["Black", "Blue"],
    sizes: ["S", "M", "L"],
    description: "Classic cat eye glasses with blue light protection."
  },
  {
    id: 3,
    name: "Aviator Specs",
    price: 2000,
    originalPrice: 2000,
    image: "/assets/images/glasses/av.png",
    rating: 4.2,
    reviews: 30,
    categories: ["eyeglasses", "aviator"],
    colors: ["Black", "Blue"],
    sizes: ["S", "M", "L"],
    description: "Classic aviator glasses with blue light protection."
  },
  {
    id: 4,
    name: "Way Specs",
    price: 2000,
    originalPrice: 2000,
    image: "/assets/images/glasses/way.png",
    rating: 4.2,
    reviews: 30,
    categories: ["eyeglasses", "wayfarer"],
    colors: ["Black", "Blue"],
    sizes: ["S", "M", "L"],
    description: "Classic wayfarer glasses with blue light protection."
  }
];

// ProductGrid data with all required fields
export const mockProductGrid: Product[] = [
  {
    id: 1,
    name: "Aviator Sunglasses - Blue",
    price: 1000,
    originalPrice: 2000,
    discountPercentage: 50,
    rating: 4.2,
    image: '/assets/images/browserByShape/image (1).png',
    reviews: 45,
    categories: ["sunglasses", "mens", "aviator"],
    colors: ["Black", "Blue", "Silver"],
    sizes: ["S", "M", "L"],
    description: "Classic aviator sunglasses with blue tint lenses."
  },
  {
    id: 2,
    name: "Round Metal Frame",
    price: 900,
    originalPrice: 1800,
    discountPercentage: 50,
    rating: 4.3,
    image: '/assets/images/browserByShape/image (2).png',
    reviews: 32,
    categories: ["sunglasses", "mens", "round"],
    colors: ["Black", "Silver"],
    sizes: ["S", "M", "L"],
    description: "A modern take on the classic round frame."
  },
  {
    id: 3,
    name: "Classic Wayfarer",
    price: 1100,
    originalPrice: 2200,
    discountPercentage: 50,
    rating: 4.7,
    image: '/assets/images/browserByShape/image (3).png',
    reviews: 78,
    categories: ["sunglasses", "mens", "wayfarer"],
    colors: ["Black", "Brown", "Tortoise"],
    sizes: ["S", "M", "L"],
    description: "A timeless design that's perfect for everyday wear."
  },
  {
    id: 4,
    name: "Oval Vintage Frame",
    price: 800,
    originalPrice: 1600,
    discountPercentage: 50,
    rating: 4.4,
    image: '/assets/images/browserByShape/image (4).png',
    reviews: 52,
    categories: ["sunglasses", "mens", "oval"],
    colors: ["Black", "Gold"],
    sizes: ["S", "M", "L"],
    description: "A classic design with a modern twist."
  },
  {
    id: 5,
    name: "Cat Eye Classic",
    price: 950,
    originalPrice: 1900,
    discountPercentage: 50,
    rating: 4.6,
    image: '/assets/images/browserByShape/image (5).png',
    reviews: 63,
    categories: ["sunglasses", "womens", "cat-eye"],
    colors: ["Black", "Red", "Blue"],
    sizes: ["S", "M", "L"],
    description: "A timeless design with a modern twist."
  },
  {
    id: 6,
    name: "Rectangular Sport",
    price: 1050,
    originalPrice: 2100,
    discountPercentage: 50,
    rating: 4.5,
    image: '/assets/images/browserByShape/image (6).png',
    reviews: 41,
    categories: ["sunglasses", "mens", "rectangular", "sport"],
    colors: ["Black", "Silver"],
    sizes: ["S", "M", "L"],
    description: "A modern take on the classic rectangular frame."
  }
];