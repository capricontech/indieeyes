import { Category } from '../../types';
import { BaseService } from './BaseService';
import { mockCategories } from '../mockData';
import { ApiResponse } from '../../types';

export class CategoryService extends BaseService {
    private static instance: CategoryService;

    private constructor() {
        super();
    }

    /**
     * Get singleton instance of CategoryService
     */
    public static getInstance(): CategoryService {
        if (!CategoryService.instance) {
            CategoryService.instance = new CategoryService();
        }
        return CategoryService.instance;
    }

    /**
     * Get all categories
     */
    public async getCategories(): Promise<Category[]> {
        if (this.USE_MOCK_DATA) {
            // Just return the mock data directly
            return mockCategories;
        }

        // Real API call
        const response = await this.fetchAPI<ApiResponse<Category[]>>('/categories');
        return response.data;
    }

    /**
     * Get a category by ID
     */
    public async getCategoryById(id: number): Promise<Category | undefined> {
        if (this.USE_MOCK_DATA) {
            // Just return the found category directly
            return mockCategories.find(c => c.id === id);
        }

        // Real API call
        const response = await this.fetchAPI<ApiResponse<Category>>(`/categories/${id}`);
        return response.data;
    }
}

// Export a default instance for easy import
export default CategoryService.getInstance(); 