import { ProductGrid } from '../../types';
import { mockProductGrid } from '../mockData';

const productGridService = {
    /**
     * Get all product grid items
     */
    getProductGridItems: async (): Promise<ProductGrid[]> => {
        try {
            // In a real implementation, this would make an API call
            // For now, return mock data
            return mockProductGrid;
        } catch (error) {
            console.error('Error fetching product grid items:', error);
            throw error;
        }
    },

    /**
     * Get paginated product grid items
     */
    getPaginatedProductGridItems: async (page: number, itemsPerPage: number): Promise<{
        items: ProductGrid[];
        total: number;
        totalPages: number;
    }> => {
        try {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            
            // Get slice of products for current page
            const paginatedItems = mockProductGrid.slice(startIndex, endIndex);
            
            return {
                items: paginatedItems,
                total: mockProductGrid.length,
                totalPages: Math.ceil(mockProductGrid.length / itemsPerPage)
            };
        } catch (error) {
            console.error('Error fetching paginated product grid items:', error);
            throw error;
        }
    },

    /**
     * Get a product grid item by ID
     */
    getProductGridItemById: async (id: number): Promise<ProductGrid | undefined> => {
        try {
            return mockProductGrid.find(item => item.id === id);
        } catch (error) {
            console.error('Error fetching product grid item:', error);
            throw error;
        }
    }
};

export default productGridService;
