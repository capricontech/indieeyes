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
    image: string;
    name: string;
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

  export interface ProductGrid {
    id: number;
    image: string;
    title: string;
    originalPrice: number;
    discountPrice: number;
    discountPercentage: number;
    rating: number;
  }
  
  export interface ProductType {
    id: number;
    image: string;
  }

  export interface CustomerReview {
    id: number;
    name: string;
    date: string;
    rating: number;
    review: string;
    productImage: string;
  }
  