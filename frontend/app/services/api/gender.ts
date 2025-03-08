import { Gender } from '../../types';
import { BaseService } from './BaseService';
import { mockGender} from '../mockData';
import { ApiResponse } from '../../types';

export class GenderService extends BaseService {
    private static instance: GenderService;

    private constructor() {
        super();
    }

    /**
     * Get singleton instance of GenderService
     */
    public static getInstance(): GenderService {
        if (!GenderService.instance) {
            GenderService.instance = new GenderService();
        }
        return GenderService.instance;
    }

    /**
        * Get all gender
     */
    public async getGender(): Promise<Gender[]> {
        if (this.USE_MOCK_DATA) {
            // Just return the mock data directly
            return mockGender;
        }

        // Real API call
        const response = await this.fetchAPI<ApiResponse<Gender[]>>('/gender');
        return response.data;
    }

    /**
     * Get a category by ID
     */
    public async getGenderById(id: number): Promise<Gender | undefined> {
        if (this.USE_MOCK_DATA) {
            // Just return the found category directly
            return mockGender.find(c => c.id === id);
        }

        // Real API call
        const response = await this.fetchAPI<ApiResponse<Gender>>(`/gender/${id}`);
        return response.data;
    }
}

// Export a default instance for easy import
export default GenderService.getInstance(); 