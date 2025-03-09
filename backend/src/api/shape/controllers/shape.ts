import { factories } from '@strapi/strapi';
import { Context } from 'koa';

/**
 * Shape controller
 */
export default factories.createCoreController('api::shape.shape' as any, ({ strapi }) => ({
    // Override the default find method to format response according to API spec
    async find(ctx: Context) {
        // Call the default find method
        const { data, meta } = await super.find(ctx);

        // Transform the response to match API spec format
        return {
            data: data.map(shape => ({
                id: shape.id,
                name: shape.attributes.name,
                image: shape.attributes.image.data ?
                    shape.attributes.image.data.attributes.url : null,
                count: shape.attributes.count
            })),
            message: "Shapes retrieved successfully"
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
                count: data.attributes.count
            },
            message: "Shape retrieved successfully"
        };
    }
})); 