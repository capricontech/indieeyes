import { factories } from '@strapi/strapi';

/**
 * Style-shape router
 */
const defaultRouter = factories.createCoreRouter('api::style-shape.style-shape' as any);

export default {
    routes: [
        // Get all style shapes (default route)
        {
            method: 'GET',
            path: '/style-shapes',
            handler: 'style-shape.find',
            config: {
                policies: []
            }
        },
        // Get a specific style shape (default route)
        {
            method: 'GET',
            path: '/style-shapes/:id',
            handler: 'style-shape.findOne',
            config: {
                policies: []
            }
        },
        // Create a style shape (default route)
        {
            method: 'POST',
            path: '/style-shapes',
            handler: 'style-shape.create',
            config: {
                policies: []
            }
        },
        // Update a style shape (default route)
        {
            method: 'PUT',
            path: '/style-shapes/:id',
            handler: 'style-shape.update',
            config: {
                policies: []
            }
        },
        // Delete a style shape (default route)
        {
            method: 'DELETE',
            path: '/style-shapes/:id',
            handler: 'style-shape.delete',
            config: {
                policies: []
            }
        },
        // Get products by style shape (custom route)
        {
            method: 'GET',
            path: '/style-shapes/:id/products',
            handler: 'style-shape.getProducts',
            config: {
                policies: []
            }
        }
    ]
}; 