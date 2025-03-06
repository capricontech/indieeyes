// API configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Default request headers
export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
};

// Helper function for handling API responses
export async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'API request failed');
    }
    return response.json();
}

// Helper function for API fetch calls
export async function fetchAPI<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: DEFAULT_HEADERS,
            ...options,
        });
        return handleResponse<T>(response);
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
} 