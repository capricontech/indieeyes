import { factories } from '@strapi/strapi';

/**
 * Product router
 */
const defaultRouter = factories.createCoreRouter('api::product.product' as any);

export default {
    routes: [
        // Get all products (default route)
        {
            method: 'GET',
            path: '/products',
            handler: 'product.find',
            config: {
                policies: []
            }
        },
        // Get a specific product (default route)
        {
            method: 'GET',
            path: '/products/:id',
            handler: 'product.findOne',
            config: {
                policies: []
            }
        },
        // Create a product (default route)
        {
            method: 'POST',
            path: '/products',
            handler: 'product.create',
            config: {
                policies: []
            }
        },
        // Update a product (default route)
        {
            method: 'PUT',
            path: '/products/:id',
            handler: 'product.update',
            config: {
                policies: []
            }
        },
        // Delete a product (default route)
        {
            method: 'DELETE',
            path: '/products/:id',
            handler: 'product.delete',
            config: {
                policies: []
            }
        },
        // Get recent products (custom route)
        {
            method: 'GET',
            path: '/products/recent',
            handler: 'product.recent',
            config: {
                policies: []
            }
        }
    ]
}; 