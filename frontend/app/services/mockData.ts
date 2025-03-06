import { Shape, Category, Product } from '../types';

// Mock shapes data
export const mockShapes: Shape[] = [
    { id: 1, name: 'Square', image: '/assets/images/browserByShoap/image (1).png', count: 132 },
    { id: 2, name: 'Rectangle', image: '/assets/images/browserByShoap/image (2).png', count: 132 },
    { id: 3, name: 'Round', image: '/assets/images/browserByShoap/image (3).png', count: 132 },
    { id: 4, name: 'Geometric', image: '/assets/images/browserByShoap/image (4).png', count: 132 },
    { id: 5, name: 'Cats Eye', image: '/assets/images/browserByShoap/image (5).png', count: 132 },
    { id: 6, name: 'Aviator', image: '/assets/images/browserByShoap/image (6).png', count: 132 },
    { id: 7, name: 'Wayfarer', image: '/assets/images/browserByShoap/image (7).png', count: 132 },
    { id: 8, name: 'Rimless', image: '/assets/images/browserByShoap/image (8).png', count: 132 },
    { id: 9, name: 'Half Rim', image: '/assets/images/browserByShoap/rec.png', count: 132 }
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
        image: '/assets/images/browserByShoap/image (1).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 2,
        name: 'Rectangle Sunglass',
        image: '/assets/images/browserByShoap/image (2).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 3,
        name: 'Round Sunglass',
        image: '/assets/images/browserByShoap/image (3).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    },
    {
        id: 4,
        name: 'Geometric Sunglass',
        image: '/assets/images/browserByShoap/image (4).png',
        originalPrice: 2000,
        discountPercentage: 50,
        finalPrice: 1000,
        rating: 4.2,
        isFavorite: false
    }
]; 