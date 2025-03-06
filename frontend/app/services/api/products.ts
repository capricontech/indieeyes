import { Product } from '../../types';
import { BaseService } from './BaseService';
import { mockProducts } from '../mockData';
import { ApiResponse } from '../../types';

export class ProductService extends BaseService {
    private static instance: ProductService;

    private constructor() {
        super();
    }

    /**
     * Get singleton instance of ProductService
     */
    public static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }

    /**
     * Get all products
     */
    public async getProducts(): Promise<Product[]> {
        if (this.USE_MOCK_DATA) {
            // Just return the mock data directly
            return mockProducts;
        }

        // Real API call
        const response = await this.fetchAPI<ApiResponse<Product[]>>('/products');
        return response.data;
    }

    /**
     * Get recent products
     */
    public async getRecentProducts(limit: number = 10): Promise<Product[]> {
        if (this.USE_MOCK_DATA) {
            // Just return sorted products directly
            const sortedProducts = [...mockProducts].sort((a, b) => b.id - a.id);
            return sortedProducts.slice(0, limit);
        }

        // Real API call
        const response = await this.fetchAPI<ApiResponse<Product[]>>(`/products/recent?limit=${limit}`);
        return response.data;
    }

    /**
     * Get a product by ID
     */
    public async getProductById(id: number): Promise<Product | undefined> {
        if (this.USE_MOCK_DATA) {
            // Just return the found product directly
            return mockProducts.find(p => p.id === id);
        }

        // Real API call
        const response = await this.fetchAPI<ApiResponse<Product>>(`/products/${id}`);
        return response.data;
    }
}

// Export a default instance for easy import
export default ProductService.getInstance(); 