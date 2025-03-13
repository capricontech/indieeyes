import { factories } from '@strapi/strapi';

/**
 * Category router
 */
export default {
    routes: [
        // Get all categories (default route)
        {
            method: 'GET',
            path: '/categories',
            handler: 'category.find',
            config: {
                policies: []
            }
        },
        // Get a specific category (default route)
        {
            method: 'GET',
            path: '/categories/:id',
            handler: 'category.findOne',
            config: {
                policies: []
            }
        },
        // Create a category (default route)
        {
            method: 'POST',
            path: '/categories',
            handler: 'category.create',
            config: {
                policies: []
            }
        },
        // Update a category (default route)
        {
            method: 'PUT',
            path: '/categories/:id',
            handler: 'category.update',
            config: {
                policies: []
            }
        },
        // Delete a category (default route)
        {
            method: 'DELETE',
            path: '/categories/:id',
            handler: 'category.delete',
            config: {
                policies: []
            }
        }
    ]
}; 