import { CustomerReview } from '../../types';
import { mockCustomerReviews } from '../mockData';

const productRatingService = {
  getCustomerReviews: async (): Promise<CustomerReview[]> => {
    try {
      return mockCustomerReviews;
    } catch (error) {
      console.error('Error fetching customer reviews:', error);
      throw error;
    }
  }
};

export default productRatingService;