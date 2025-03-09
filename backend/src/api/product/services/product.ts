import { factories } from '@strapi/strapi';

/**
 * Product service
 */
export default factories.createCoreService('api::product.product' as any, ({ strapi }) => ({
    // Add custom business logic methods here
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
    }
})); 