// Export base service class
export { BaseService } from './BaseService';

// Export service classes and their default instances
export { ShapeService } from './shapes';
export { CategoryService } from './categories';
export { ProductService } from './products';

// Export default instances for backward compatibility and easy usage
import shapeService from './shapes';
import categoryService from './categories';
import productService from './products';

export { shapeService, categoryService, productService }; 