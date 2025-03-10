import { ProductType } from '../../types';
import { mockProductDetails } from '../mockData';

const ProductPageService = {
  getProductPage: async (): Promise<ProductType[]> => {
    try {
      return mockProductDetails;
    } catch (error) {
      console.error('Error fetching style shapes:', error);
      throw error;
    }
  }
};

export default ProductPageService;