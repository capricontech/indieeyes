import { ApiResponse } from '../../types';

export class BaseService {
    protected readonly API_BASE_URL: string;
    protected readonly USE_MOCK_DATA: boolean;
    protected readonly DEFAULT_HEADERS: HeadersInit;

    constructor() {
        this.API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
        // Fix the logic issue in the original code - this now correctly uses mock data by default
        this.USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA !== 'false';
        this.DEFAULT_HEADERS = {
            'Content-Type': 'application/json',
        };
    }

    /**
     * Helper method for handling API responses
     */
    protected async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'API request failed');
        }
        return response.json();
    }

    /**
     * Helper method for API fetch calls
     */
    protected async fetchAPI<T>(
        endpoint: string,
        options?: RequestInit
    ): Promise<T> {
        try {
            const response = await fetch(`${this.API_BASE_URL}${endpoint}`, {
                headers: this.DEFAULT_HEADERS,
                ...options,
            });
            return this.handleResponse<T>(response);
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }
} 