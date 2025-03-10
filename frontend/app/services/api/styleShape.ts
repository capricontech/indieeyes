import { StyleShape } from '../../types';
import { mockStyleShapes } from '../mockData';

const styleShapeService = {
  getStyleShapes: async (): Promise<StyleShape[]> => {
    try {
      return mockStyleShapes;
    } catch (error) {
      console.error('Error fetching style shapes:', error);
      throw error;
    }
  }
};

export default styleShapeService;