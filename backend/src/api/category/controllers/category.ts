import { factories } from '@strapi/strapi';
import { Context } from 'koa';

/**
 * Category controller
 */
export default factories.createCoreController('api::category.category' as any, ({ strapi }) => ({
    // Override the default find method to format response according to API spec
    async find(ctx: Context) {
        // Call the default find method
        const { data, meta } = await super.find(ctx);

        // Transform the response to match API spec format
        return {
            data: data.map(category => ({
                id: category.id,
                name: category.attributes.name,
                image: category.attributes.image.data ?
                    category.attributes.image.data.attributes.url : null,
                style: category.attributes.style ? {
                    width: category.attributes.style.width,
                    height: category.attributes.style.height
                } : null
            })),
            message: "Categories retrieved successfully"
        };
    },

    // Override the findOne method to format response according to API spec
    async findOne(ctx: Context) {
        // Call the default findOne method
        const { data } = await super.findOne(ctx);

        // Transform the response to match API spec format
        return {
            data: {
                id: data.id,
                name: data.attributes.name,
                image: data.attributes.image.data ?
                    data.attributes.image.data.attributes.url : null,
                style: data.attributes.style ? {
                    width: data.attributes.style.width,
                    height: data.attributes.style.height
                } : null
            },
            message: "Category retrieved successfully"
        };
    }
})); 