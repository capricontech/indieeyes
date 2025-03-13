import { factories } from '@strapi/strapi';

/**
 * Order router
 */
const defaultRouter = factories.createCoreRouter('api::order.order' as any);

export default {
    routes: [
        // Get all orders (default route)
        {
            method: 'GET',
            path: '/orders',
            handler: 'order.find',
            config: {
                policies: []
            }
        },
        // Get a specific order (default route)
        {
            method: 'GET',
            path: '/orders/:id',
            handler: 'order.findOne',
            config: {
                policies: []
            }
        },
        // Create an order (default route)
        {
            method: 'POST',
            path: '/orders',
            handler: 'order.create',
            config: {
                policies: []
            }
        },
        // Update an order (default route)
        {
            method: 'PUT',
            path: '/orders/:id',
            handler: 'order.update',
            config: {
                policies: []
            }
        },
        // Delete an order (default route)
        {
            method: 'DELETE',
            path: '/orders/:id',
            handler: 'order.delete',
            config: {
                policies: []
            }
        },
        // Update order status (custom route)
        {
            method: 'PUT',
            path: '/orders/:id/status',
            handler: 'order.updateStatus',
            config: {
                policies: []
            }
        }
    ]
}; 