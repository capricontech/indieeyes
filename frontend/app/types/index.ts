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
    image: string;
    originalPrice: number;
    discountPercentage?: number;
    finalPrice: number;
    rating?: number;
    isFavorite: boolean;
}

// API response types
export interface ApiResponse<T> {
    data: T;
    error?: string;
    message?: string;
} 