import { factories } from '@strapi/strapi';
import { Context, Next } from 'koa';

/**
 * Order controller
 */
export default factories.createCoreController('api::order.order', ({ strapi }) => {
    // Helper functions
    const generateOrderNumber = async () => {
        const prefix = 'ORD';
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        const orderNumber = `${prefix}-${timestamp}-${random}`;

        // Check if order number already exists
        const existingOrder = await strapi.db.query('api::order.order').findOne({
            where: { orderNumber }
        });

        // If order number already exists, generate a new one
        if (existingOrder) {
            return generateOrderNumber();
        }

        return orderNumber;
    };

    const calculateOrderTotal = async (products: any[]) => {
        let total = 0;

        for (const item of products) {
            if (!item.product || !item.quantity) continue;

            const product = await strapi.db.query('api::product.product').findOne({
                where: { id: item.product }
            });

            if (product) {
                total += product.price * item.quantity;
            }
        }

        return total;
    };

    const sanitizeOrderOutput = (order: any) => {
        const { id, attributes } = order;
        const { orderNumber, paymentStatus, deliveryStatus, totalAmount, products, createdAt, updatedAt } = attributes;

        // Format products
        const formattedProducts = products?.map((item: any) => {
            const product = item.product?.data ? {
                id: item.product.data.id,
                name: item.product.data.attributes.name,
                price: item.price
            } : null;

            return {
                product,
                quantity: item.quantity,
                selectedOptions: item.selectedOptions || {}
            };
        }) || [];

        // Format addresses
        const shippingAddress = attributes.shippingAddress || null;
        const billingAddress = attributes.billingAddress || null;

        return {
            id,
            orderNumber,
            paymentStatus,
            deliveryStatus,
            totalAmount,
            products: formattedProducts,
            shippingAddress,
            billingAddress,
            createdAt,
            updatedAt
        };
    };

    return {
        // Override the default find method to format response according to API spec
        async find(ctx: Context, next: Next) {
            // Add user filter if authenticated
            if (ctx.state.user) {
                ctx.query.filters = {
                    ...((ctx.query.filters || {}) as Record<string, any>),
                    user: ctx.state.user.id
                };
            } else {
                // If not authenticated, only allow finding by orderNumber
                if (!((ctx.query.filters || {}) as Record<string, any>).orderNumber) {
                    return ctx.unauthorized('Authentication required to view orders');
                }
            }

            // Call the default find method
            const { data, meta } = await super.find(ctx, next);

            // Transform the response to match API spec format
            return {
                data: data.map((order: any) => sanitizeOrderOutput(order)),
                meta,
                message: "Orders retrieved successfully"
            };
        },

        // Override the findOne method to format response according to API spec
        async findOne(ctx: Context, next: Next) {
            // Get the order
            const { data } = await super.findOne(ctx, next);

            // Check if order exists
            if (!data) {
                return ctx.notFound('Order not found');
            }

            // Check if user is authorized to view this order
            if (ctx.state.user && data.attributes.user?.data?.id !== ctx.state.user.id) {
                return ctx.forbidden('You are not authorized to view this order');
            }

            // Transform the response to match API spec format
            return {
                data: sanitizeOrderOutput(data),
                message: "Order retrieved successfully"
            };
        },

        // Create a new order
        async create(ctx: Context, next: Next) {
            // Get the request body
            const { data } = ctx.request.body || {};

            // Validate required fields
            if (!data.products || !Array.isArray(data.products) || data.products.length === 0) {
                return ctx.badRequest('Products are required');
            }

            // Add user if authenticated
            if (ctx.state.user) {
                data.user = ctx.state.user.id;
            }

            // Generate order number
            data.orderNumber = await generateOrderNumber();

            // Calculate total amount if not provided
            if (!data.totalAmount) {
                data.totalAmount = await calculateOrderTotal(data.products);
            }

            // Set default statuses
            data.paymentStatus = data.paymentStatus || 'pending';
            data.deliveryStatus = data.deliveryStatus || 'processing';

            // Create the order
            ctx.request.body = { data };
            const response = await super.create(ctx, next);

            // Return the created order
            return {
                data: sanitizeOrderOutput(response.data),
                message: "Order created successfully"
            };
        },

        // Update order status
        async updateStatus(ctx: Context, next: Next) {
            const { id } = ctx.params;
            const { paymentStatus, deliveryStatus } = ctx.request.body || {};

            // Validate input
            if (!paymentStatus && !deliveryStatus) {
                return ctx.badRequest('Payment status or delivery status is required');
            }

            // Get the order
            const order = await strapi.entityService.findOne('api::order.order', id, {
                populate: ['user']
            });

            // Check if order exists
            if (!order) {
                return ctx.notFound('Order not found');
            }

            // Check if user is authorized to update this order
            if (ctx.state.user && (order as any).user?.id !== ctx.state.user.id) {
                return ctx.forbidden('You are not authorized to update this order');
            }

            // Update the order
            const updatedOrder = await strapi.entityService.update('api::order.order', id, {
                data: {
                    ...(paymentStatus && { paymentStatus }),
                    ...(deliveryStatus && { deliveryStatus })
                },
                populate: ['user', 'products', 'products.product', 'shippingAddress', 'billingAddress']
            });

            // Return the updated order
            return {
                data: sanitizeOrderOutput({ id: updatedOrder.id, attributes: updatedOrder }),
                message: "Order status updated successfully"
            };
        }
    };
}); 