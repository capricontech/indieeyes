import { factories } from '@strapi/strapi';
import { Context, Next } from 'koa';

/**
 * Cart controller
 */
export default factories.createCoreController('api::cart.cart', ({ strapi }) => ({
    // Get cart for the current user
    async getCart(ctx: Context, next: Next) {
        try {
            // Check if user is authenticated
            if (!ctx.state.user) {
                return ctx.unauthorized('Authentication required');
            }

            // Get user ID
            const userId = ctx.state.user.id;

            // Find cart for the user
            const cart = await strapi.db.query('api::cart.cart').findOne({
                where: { user: userId },
                populate: {
                    items: {
                        populate: {
                            product: {
                                populate: ['images', 'category']
                            }
                        }
                    }
                }
            });

            // If cart doesn't exist, create a new one
            if (!cart) {
                const newCart = await strapi.entityService.create('api::cart.cart', {
                    data: {
                        user: userId,
                        items: []
                    }
                });

                return {
                    data: {
                        id: newCart.id,
                        items: [],
                        totalItems: 0,
                        totalAmount: 0
                    },
                    message: "Cart created successfully"
                };
            }

            // Format cart items
            const formattedItems = cart.items?.map((item: any) => {
                const product = item.product ? {
                    id: item.product.id,
                    name: item.product.name,
                    price: item.product.price,
                    image: item.product.images && item.product.images.length > 0 ?
                        item.product.images[0].url : null,
                    category: item.product.category ? {
                        id: item.product.category.id,
                        name: item.product.category.name
                    } : null
                } : null;

                return {
                    id: item.id,
                    product,
                    quantity: item.quantity,
                    selectedOptions: item.selectedOptions || {}
                };
            }) || [];

            // Calculate totals
            const totalItems = formattedItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
            const totalAmount = formattedItems.reduce((sum: number, item: any) => {
                return sum + (item.product ? item.product.price * item.quantity : 0);
            }, 0);

            // Return the cart
            return {
                data: {
                    id: cart.id,
                    items: formattedItems,
                    totalItems,
                    totalAmount
                },
                message: "Cart retrieved successfully"
            };
        } catch (error) {
            strapi.log.error(`Error getting cart: ${error.message}`);
            return ctx.badRequest('An error occurred while fetching the cart');
        }
    },

    // Add item to cart
    async addItem(ctx: Context, next: Next) {
        try {
            // Check if user is authenticated
            if (!ctx.state.user) {
                return ctx.unauthorized('Authentication required');
            }

            // Get user ID
            const userId = ctx.state.user.id;

            // Get request body
            const { productId, quantity = 1, selectedOptions = {} } = ctx.request.body || {};

            // Validate required fields
            if (!productId) {
                return ctx.badRequest('Product ID is required');
            }

            // Check if product exists
            const product = await strapi.db.query('api::product.product').findOne({
                where: { id: productId }
            });

            if (!product) {
                return ctx.notFound('Product not found');
            }

            // Find cart for the user
            let cart = await strapi.db.query('api::cart.cart').findOne({
                where: { user: userId },
                populate: {
                    items: {
                        populate: {
                            product: true
                        }
                    }
                }
            });

            // If cart doesn't exist, create a new one
            if (!cart) {
                cart = await strapi.entityService.create('api::cart.cart', {
                    data: {
                        user: userId,
                        items: []
                    },
                    populate: {
                        items: {
                            populate: {
                                product: true
                            }
                        }
                    }
                });
            }

            // Check if item already exists in cart
            const existingItemIndex = cart.items?.findIndex((item: any) =>
                item.product?.id === productId &&
                JSON.stringify(item.selectedOptions || {}) === JSON.stringify(selectedOptions)
            );

            // If item exists, update quantity
            if (existingItemIndex !== -1 && existingItemIndex !== undefined) {
                const existingItem = cart.items[existingItemIndex];
                const newQuantity = existingItem.quantity + quantity;

                // Update item
                await strapi.db.query('api::cart-item.cart-item').update({
                    where: { id: existingItem.id },
                    data: {
                        quantity: newQuantity
                    }
                });
            } else {
                // Create new item
                await strapi.db.query('api::cart-item.cart-item').create({
                    data: {
                        product: productId,
                        quantity,
                        selectedOptions,
                        cart: cart.id
                    }
                });
            }

            // Get updated cart
            const updatedCart = await strapi.db.query('api::cart.cart').findOne({
                where: { id: cart.id },
                populate: {
                    items: {
                        populate: {
                            product: {
                                populate: ['images', 'category']
                            }
                        }
                    }
                }
            });

            // Format cart items
            const formattedItems = updatedCart.items?.map((item: any) => {
                const product = item.product ? {
                    id: item.product.id,
                    name: item.product.name,
                    price: item.product.price,
                    image: item.product.images && item.product.images.length > 0 ?
                        item.product.images[0].url : null,
                    category: item.product.category ? {
                        id: item.product.category.id,
                        name: item.product.category.name
                    } : null
                } : null;

                return {
                    id: item.id,
                    product,
                    quantity: item.quantity,
                    selectedOptions: item.selectedOptions || {}
                };
            }) || [];

            // Calculate totals
            const totalItems = formattedItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
            const totalAmount = formattedItems.reduce((sum: number, item: any) => {
                return sum + (item.product ? item.product.price * item.quantity : 0);
            }, 0);

            // Return the updated cart
            return {
                data: {
                    id: updatedCart.id,
                    items: formattedItems,
                    totalItems,
                    totalAmount
                },
                message: "Item added to cart successfully"
            };
        } catch (error) {
            strapi.log.error(`Error adding item to cart: ${error.message}`);
            return ctx.badRequest('An error occurred while adding item to cart');
        }
    },

    // Update item in cart
    async updateItem(ctx: Context, next: Next) {
        try {
            // Check if user is authenticated
            if (!ctx.state.user) {
                return ctx.unauthorized('Authentication required');
            }

            // Get user ID
            const userId = ctx.state.user.id;

            // Get item ID from params
            const { id } = ctx.params;

            // Get request body
            const { quantity, selectedOptions } = ctx.request.body || {};

            // Validate required fields
            if (quantity === undefined && selectedOptions === undefined) {
                return ctx.badRequest('Quantity or selected options are required');
            }

            // Find cart for the user
            const cart = await strapi.db.query('api::cart.cart').findOne({
                where: { user: userId },
                populate: {
                    items: true
                }
            });

            // Check if cart exists
            if (!cart) {
                return ctx.notFound('Cart not found');
            }

            // Check if item exists in cart
            const item = cart.items?.find((item: any) => item.id === id);

            if (!item) {
                return ctx.notFound('Item not found in cart');
            }

            // Update item
            await strapi.db.query('api::cart-item.cart-item').update({
                where: { id },
                data: {
                    ...(quantity !== undefined && { quantity }),
                    ...(selectedOptions !== undefined && { selectedOptions })
                }
            });

            // Get updated cart
            const updatedCart = await strapi.db.query('api::cart.cart').findOne({
                where: { id: cart.id },
                populate: {
                    items: {
                        populate: {
                            product: {
                                populate: ['images', 'category']
                            }
                        }
                    }
                }
            });

            // Format cart items
            const formattedItems = updatedCart.items?.map((item: any) => {
                const product = item.product ? {
                    id: item.product.id,
                    name: item.product.name,
                    price: item.product.price,
                    image: item.product.images && item.product.images.length > 0 ?
                        item.product.images[0].url : null,
                    category: item.product.category ? {
                        id: item.product.category.id,
                        name: item.product.category.name
                    } : null
                } : null;

                return {
                    id: item.id,
                    product,
                    quantity: item.quantity,
                    selectedOptions: item.selectedOptions || {}
                };
            }) || [];

            // Calculate totals
            const totalItems = formattedItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
            const totalAmount = formattedItems.reduce((sum: number, item: any) => {
                return sum + (item.product ? item.product.price * item.quantity : 0);
            }, 0);

            // Return the updated cart
            return {
                data: {
                    id: updatedCart.id,
                    items: formattedItems,
                    totalItems,
                    totalAmount
                },
                message: "Item updated successfully"
            };
        } catch (error) {
            strapi.log.error(`Error updating item in cart: ${error.message}`);
            return ctx.badRequest('An error occurred while updating item in cart');
        }
    },

    // Remove item from cart
    async removeItem(ctx: Context, next: Next) {
        try {
            // Check if user is authenticated
            if (!ctx.state.user) {
                return ctx.unauthorized('Authentication required');
            }

            // Get user ID
            const userId = ctx.state.user.id;

            // Get item ID from params
            const { id } = ctx.params;

            // Find cart for the user
            const cart = await strapi.db.query('api::cart.cart').findOne({
                where: { user: userId },
                populate: {
                    items: true
                }
            });

            // Check if cart exists
            if (!cart) {
                return ctx.notFound('Cart not found');
            }

            // Check if item exists in cart
            const item = cart.items?.find((item: any) => item.id === id);

            if (!item) {
                return ctx.notFound('Item not found in cart');
            }

            // Delete item
            await strapi.db.query('api::cart-item.cart-item').delete({
                where: { id }
            });

            // Get updated cart
            const updatedCart = await strapi.db.query('api::cart.cart').findOne({
                where: { id: cart.id },
                populate: {
                    items: {
                        populate: {
                            product: {
                                populate: ['images', 'category']
                            }
                        }
                    }
                }
            });

            // Format cart items
            const formattedItems = updatedCart.items?.map((item: any) => {
                const product = item.product ? {
                    id: item.product.id,
                    name: item.product.name,
                    price: item.product.price,
                    image: item.product.images && item.product.images.length > 0 ?
                        item.product.images[0].url : null,
                    category: item.product.category ? {
                        id: item.product.category.id,
                        name: item.product.category.name
                    } : null
                } : null;

                return {
                    id: item.id,
                    product,
                    quantity: item.quantity,
                    selectedOptions: item.selectedOptions || {}
                };
            }) || [];

            // Calculate totals
            const totalItems = formattedItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
            const totalAmount = formattedItems.reduce((sum: number, item: any) => {
                return sum + (item.product ? item.product.price * item.quantity : 0);
            }, 0);

            // Return the updated cart
            return {
                data: {
                    id: updatedCart.id,
                    items: formattedItems,
                    totalItems,
                    totalAmount
                },
                message: "Item removed from cart successfully"
            };
        } catch (error) {
            strapi.log.error(`Error removing item from cart: ${error.message}`);
            return ctx.badRequest('An error occurred while removing item from cart');
        }
    },

    // Clear cart
    async clearCart(ctx: Context, next: Next) {
        try {
            // Check if user is authenticated
            if (!ctx.state.user) {
                return ctx.unauthorized('Authentication required');
            }

            // Get user ID
            const userId = ctx.state.user.id;

            // Find cart for the user
            const cart = await strapi.db.query('api::cart.cart').findOne({
                where: { user: userId },
                populate: {
                    items: true
                }
            });

            // Check if cart exists
            if (!cart) {
                return ctx.notFound('Cart not found');
            }

            // Delete all items
            for (const item of cart.items || []) {
                await strapi.db.query('api::cart-item.cart-item').delete({
                    where: { id: item.id }
                });
            }

            // Return empty cart
            return {
                data: {
                    id: cart.id,
                    items: [],
                    totalItems: 0,
                    totalAmount: 0
                },
                message: "Cart cleared successfully"
            };
        } catch (error) {
            strapi.log.error(`Error clearing cart: ${error.message}`);
            return ctx.badRequest('An error occurred while clearing cart');
        }
    }
})); 