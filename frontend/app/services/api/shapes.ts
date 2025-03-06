import { Shape } from '../../types';
import { BaseService } from './BaseService';
import { mockShapes } from '../mockData';
import { ApiResponse } from '../../types';

export class ShapeService extends BaseService {
    private static instance: ShapeService;

    private constructor() {
        super();
    }

    /**
     * Get singleton instance of ShapeService
     */
    public static getInstance(): ShapeService {
        if (!ShapeService.instance) {
            ShapeService.instance = new ShapeService();
        }
        return ShapeService.instance;
    }

    /**
     * Get all shapes
     * This method will switch between mock data and real API based on the USE_MOCK_DATA flag
     */
    public async getShapes(): Promise<Shape[]> {
        if (this.USE_MOCK_DATA) {
            // Just return the mock data directly
            return mockShapes;
        }

        // Real API call
        const response = await this.fetchAPI<ApiResponse<Shape[]>>('/shapes');
        return response.data;
    }

    /**
     * Get a shape by ID
     */
    public async getShapeById(id: number): Promise<Shape | undefined> {
        if (this.USE_MOCK_DATA) {
            // Just return the found shape directly
            return mockShapes.find(s => s.id === id);
        }

        // Real API call
        const response = await this.fetchAPI<ApiResponse<Shape>>(`/shapes/${id}`);
        return response.data;
    }
}

// Export a default instance for easy import
export default ShapeService.getInstance(); 