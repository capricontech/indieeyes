import { factories } from '@strapi/strapi';

/**
 * Style-shape service
 */
export default factories.createCoreService('api::style-shape.style-shape', ({ strapi }) => ({
    /**
     * Update product count for a style-shape
     * @param {number} id - The style-shape ID
     */
    async updateProductCount(id) {
        try {
            // Get the style-shape with its products
            const styleShape = await strapi.entityService.findOne('api::style-shape.style-shape', id, {
                populate: ['products']
            });

            if (!styleShape) {
                strapi.log.error(`Style-shape with ID ${id} not found`);
                return;
            }

            // Count the products - handle both Strapi v4 and v5 response formats
            let productCount = 0;
            if ((styleShape as any).products?.data) {
                // Strapi v4 format
                productCount = (styleShape as any).products.data.length;
            } else if (Array.isArray((styleShape as any).products)) {
                // Strapi v5 format
                productCount = (styleShape as any).products.length;
            }

            // Log the product count but don't update a non-existent field
            strapi.log.info(`Product count for style-shape ${id}: ${productCount}`);
        } catch (error) {
            strapi.log.error(`Error updating product count for style-shape ${id}: ${error.message}`);
        }
    },

    /**
     * Get popular style-shapes based on product count
     * @param {number} limit - Number of style-shapes to return
     */
    async getPopular(limit = 5) {
        try {
            // Get style-shapes sorted by creation date since we don't have a product count field
            const styleShapes = await strapi.entityService.findMany('api::style-shape.style-shape', {
                sort: [{ createdAt: 'desc' }],
                limit
            });

            return styleShapes;
        } catch (error) {
            strapi.log.error(`Error getting popular style-shapes: ${error.message}`);
            return [];
        }
    }
})); 