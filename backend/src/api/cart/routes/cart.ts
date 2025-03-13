import { factories } from '@strapi/strapi';

/**
 * Cart router
 */
const defaultRouter = factories.createCoreRouter('api::cart.cart' as any);

export default {
    routes: [
        // Get all carts (default route)
        {
            method: 'GET',
            path: '/carts',
            handler: 'cart.find',
            config: {
                policies: []
            }
        },
        // Get a specific cart (default route)
        {
            method: 'GET',
            path: '/carts/:id',
            handler: 'cart.findOne',
            config: {
                policies: []
            }
        },
        // Create a cart (default route)
        {
            method: 'POST',
            path: '/carts',
            handler: 'cart.create',
            config: {
                policies: []
            }
        },
        // Update a cart (default route)
        {
            method: 'PUT',
            path: '/carts/:id',
            handler: 'cart.update',
            config: {
                policies: []
            }
        },
        // Delete a cart (default route)
        {
            method: 'DELETE',
            path: '/carts/:id',
            handler: 'cart.delete',
            config: {
                policies: []
            }
        },
        // Get user's cart
        {
            method: 'GET',
            path: '/cart',
            handler: 'cart.getCart',
            config: {
                policies: []
            }
        },
        // Add item to cart
        {
            method: 'POST',
            path: '/cart/items',
            handler: 'cart.addItem',
            config: {
                policies: []
            }
        },
        // Update item in cart
        {
            method: 'PUT',
            path: '/cart/items/:id',
            handler: 'cart.updateItem',
            config: {
                policies: []
            }
        },
        // Remove item from cart
        {
            method: 'DELETE',
            path: '/cart/items/:id',
            handler: 'cart.removeItem',
            config: {
                policies: []
            }
        },
        // Clear cart
        {
            method: 'DELETE',
            path: '/cart/clear',
            handler: 'cart.clearCart',
            config: {
                policies: []
            }
        }
    ]
}; 