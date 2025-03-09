// Product shape types
export interface Shape {
    id: number;
    name: string;
    image: string;
    count: number;
}

// Category types
export interface Category {
    id: number;
    name: string;
    image: string;
    style?: {
        width: string;
        height: string;
    };
}

// Product types
export interface Product {
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

// API response types
export interface ApiResponse<T> {
    data: T;
    error?: string;
    message?: string;
}

export interface Gender {
    id: number;
    name: string;
    image: string;
    description?: string;
}

export interface StyleShape {
    id: number;
    image: string;
    name?: string;
}
