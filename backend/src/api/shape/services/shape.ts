import { factories } from '@strapi/strapi';

/**
 * Shape service
 */
export default factories.createCoreService('api::shape.shape' as any, ({ strapi }) => ({
    // Add custom business logic methods here

    /**
     * Update product counts for all shapes
     */
    async updateProductCounts() {
        // Get all shapes
        const shapes = await strapi.entityService.findMany('api::shape.shape', {
            fields: ['id']
        });

        // For each shape, count the products and update the count
        for (const shape of shapes) {
            const count = await strapi.db.query('api::product.product').count({
                where: {
                    shapeId: shape.id
                }
            });

            // Update the shape with the count
            await strapi.entityService.update('api::shape.shape', shape.id, {
                data: {
                    count
                }
            });
        }
    },

    /**
     * Get popular shapes based on product count
     * @param limit Number of shapes to return
     * @returns Popular shapes
     */
    async getPopularShapes(limit = 5) {
        return await strapi.entityService.findMany('api::shape.shape', {
            sort: { count: 'desc' },
            limit
        });
    },

    /**
     * Get products by shape
     * @param shapeId Shape ID
     * @param options Query options
     * @returns Products with the specified shape
     */
    async getProductsByShape(shapeId: number, options: any = {}) {
        return await strapi.entityService.findMany('api::product.product', {
            filters: {
                shapeId
            },
            ...options
        });
    }
})); 