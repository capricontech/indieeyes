import { factories } from '@strapi/strapi';

/**
 * Order service
 */
export default factories.createCoreService('api::order.order' as any, ({ strapi }) => ({
    // Add custom business logic methods here

    /**
     * Get orders for a specific user
     * @param userId User ID
     * @param query Query parameters
     * @returns Orders for the user
     */
    async getUserOrders(userId: number, query: any = {}) {
        return await strapi.entityService.findMany('api::order.order', {
            filters: {
                user: userId
            },
            ...query
        });
    },

    /**
     * Get order by order number
     * @param orderNumber Order number
     * @returns Order with the specified order number
     */
    async getOrderByNumber(orderNumber: string) {
        return await strapi.entityService.findMany('api::order.order', {
            filters: {
                orderNumber
            },
            populate: ['user', 'products', 'products.product', 'shippingAddress', 'billingAddress']
        });
    },

    /**
     * Calculate order statistics
     * @returns Order statistics
     */
    async getOrderStats() {
        const [totalOrders, pendingOrders, completedOrders, cancelledOrders] = await Promise.all([
            strapi.db.query('api::order.order').count({}),
            strapi.db.query('api::order.order').count({
                where: {
                    deliveryStatus: 'processing'
                }
            }),
            strapi.db.query('api::order.order').count({
                where: {
                    deliveryStatus: 'delivered'
                }
            }),
            strapi.db.query('api::order.order').count({
                where: {
                    deliveryStatus: 'cancelled'
                }
            })
        ]);

        return {
            totalOrders,
            pendingOrders,
            completedOrders,
            cancelledOrders
        };
    }
})); 