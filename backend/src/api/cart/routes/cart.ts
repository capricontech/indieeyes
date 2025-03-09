import { factories } from '@strapi/strapi';

/**
 * Cart router
 */
const defaultRouter = factories.createCoreRouter('api::cart.cart' as any);

export default {
    routes: [
        // Add the routes from the default router
        ...(defaultRouter.routes as any[]),
        // Get or create cart
        {
            method: 'GET',
            path: '/cart/session',
            handler: 'cart.getOrCreate',
            config: {
                policies: []
            }
        },
        // Add item to cart
        {
            method: 'POST',
            path: '/cart/:id/items',
            handler: 'cart.addItem',
            config: {
                policies: []
            }
        },
        // Remove item from cart
        {
            method: 'DELETE',
            path: '/cart/:id/items',
            handler: 'cart.removeItem',
            config: {
                policies: []
            }
        },
        // Update item quantity
        {
            method: 'PUT',
            path: '/cart/:id/items',
            handler: 'cart.updateItemQuantity',
            config: {
                policies: []
            }
        }
    ]
}; 