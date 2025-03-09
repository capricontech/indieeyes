import { factories } from '@strapi/strapi';
import { Context } from 'koa';
import { v4 as uuidv4 } from 'uuid';

/**
 * Cart controller
 */
export default factories.createCoreController('api::cart.cart' as any, ({ strapi }) => ({
    // Get or create a cart for the user
    async getOrCreate(ctx: Context) {
        const { user } = ctx.state;
        const { sessionId } = ctx.query;

        let cart;

        // If user is authenticated, get cart by user
        if (user) {
            cart = await strapi.db.query('api::cart.cart' as any).findOne({
                where: { user: user.id },
                populate: {
                    items: {
                        populate: ['product']
                    }
                }
            });

            // If cart found, return it
            if (cart) {
                return this.sanitizeOutput(cart, ctx);
            }

            // If no cart, create one for the user
            cart = await strapi.entityService.create('api::cart.cart' as any, {
                data: {
                    user: user.id,
                    items: [],
                    totalAmount: 0,
                    totalItems: 0,
                    lastUpdated: new Date()
                }
            });

            return this.sanitizeOutput(cart, ctx);
        }

        // For non-authenticated users, use session ID
        if (sessionId) {
            cart = await strapi.db.query('api::cart.cart' as any).findOne({
                where: { sessionId },
                populate: {
                    items: {
                        populate: ['product']
                    }
                }
            });

            if (cart) {
                return this.sanitizeOutput(cart, ctx);
            }
        }

        // Create a new cart with a new session ID
        const newSessionId = uuidv4();
        cart = await strapi.entityService.create('api::cart.cart' as any, {
            data: {
                sessionId: newSessionId,
                items: [],
                totalAmount: 0,
                totalItems: 0,
                lastUpdated: new Date()
            }
        });

        return {
            ...this.sanitizeOutput(cart, ctx),
            sessionId: newSessionId
        };
    },

    // Add item to cart
    async addItem(ctx: Context) {
        const { id } = ctx.params;
        const { productId, quantity = 1, options } = ctx.request.body;

        // Validate input
        if (!productId) {
            return ctx.badRequest('Product ID is required');
        }

        // Get the cart
        const cart = await strapi.db.query('api::cart.cart' as any).findOne({
            where: { id },
            populate: {
                items: {
                    populate: ['product']
                }
            }
        });

        if (!cart) {
            return ctx.notFound('Cart not found');
        }

        // Get the product
        const product = await strapi.db.query('api::product.product' as any).findOne({
            where: { id: productId }
        });

        if (!product) {
            return ctx.notFound('Product not found');
        }

        // Check if the product is already in the cart
        const existingItemIndex = cart.items.findIndex(
            (item: any) => item.product.id === productId &&
                JSON.stringify(item.selectedOptions) === JSON.stringify(options)
        );

        let updatedItems = [...cart.items];

        if (existingItemIndex >= 0) {
            // Update quantity if item exists
            updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: updatedItems[existingItemIndex].quantity + quantity
            };
        } else {
            // Add new item
            updatedItems.push({
                __component: 'cart.cart-item',
                product: productId,
                quantity,
                selectedOptions: options || {},
                addedAt: new Date()
            });
        }

        // Calculate totals
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalAmount = await this.calculateCartTotal(updatedItems);

        // Update the cart
        const updatedCart = await strapi.entityService.update('api::cart.cart' as any, id, {
            data: {
                items: updatedItems,
                totalItems,
                totalAmount,
                lastUpdated: new Date()
            },
            populate: {
                items: {
                    populate: ['product']
                }
            }
        });

        return this.sanitizeOutput(updatedCart, ctx);
    },

    // Remove item from cart
    async removeItem(ctx: Context) {
        const { id } = ctx.params;
        const { itemIndex } = ctx.request.body;

        // Validate input
        if (itemIndex === undefined) {
            return ctx.badRequest('Item index is required');
        }

        // Get the cart
        const cart = await strapi.db.query('api::cart.cart' as any).findOne({
            where: { id },
            populate: {
                items: {
                    populate: ['product']
                }
            }
        });

        if (!cart) {
            return ctx.notFound('Cart not found');
        }

        // Validate item index
        if (itemIndex < 0 || itemIndex >= cart.items.length) {
            return ctx.badRequest('Invalid item index');
        }

        // Remove the item
        const updatedItems = [...cart.items];
        updatedItems.splice(itemIndex, 1);

        // Calculate totals
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalAmount = await this.calculateCartTotal(updatedItems);

        // Update the cart
        const updatedCart = await strapi.entityService.update('api::cart.cart' as any, id, {
            data: {
                items: updatedItems,
                totalItems,
                totalAmount,
                lastUpdated: new Date()
            },
            populate: {
                items: {
                    populate: ['product']
                }
            }
        });

        return this.sanitizeOutput(updatedCart, ctx);
    },

    // Update item quantity
    async updateItemQuantity(ctx: Context) {
        const { id } = ctx.params;
        const { itemIndex, quantity } = ctx.request.body;

        // Validate input
        if (itemIndex === undefined) {
            return ctx.badRequest('Item index is required');
        }

        if (!quantity || quantity < 1) {
            return ctx.badRequest('Quantity must be at least 1');
        }

        // Get the cart
        const cart = await strapi.db.query('api::cart.cart' as any).findOne({
            where: { id },
            populate: {
                items: {
                    populate: ['product']
                }
            }
        });

        if (!cart) {
            return ctx.notFound('Cart not found');
        }

        // Validate item index
        if (itemIndex < 0 || itemIndex >= cart.items.length) {
            return ctx.badRequest('Invalid item index');
        }

        // Update the quantity
        const updatedItems = [...cart.items];
        updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity
        };

        // Calculate totals
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalAmount = await this.calculateCartTotal(updatedItems);

        // Update the cart
        const updatedCart = await strapi.entityService.update('api::cart.cart' as any, id, {
            data: {
                items: updatedItems,
                totalItems,
                totalAmount,
                lastUpdated: new Date()
            },
            populate: {
                items: {
                    populate: ['product']
                }
            }
        });

        return this.sanitizeOutput(updatedCart, ctx);
    },

    // Helper method to calculate cart total
    async calculateCartTotal(items: any[]) {
        let total = 0;

        for (const item of items) {
            const product = await strapi.db.query('api::product.product' as any).findOne({
                where: { id: item.product }
            });

            if (product) {
                total += product.price * item.quantity;
            }
        }

        return total;
    }
}) as any); 