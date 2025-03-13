import { factories } from '@strapi/strapi';
import { Context, Next } from 'koa';

/**
 * Style-shape controller
 */
export default factories.createCoreController('api::style-shape.style-shape', ({ strapi }) => ({
    // Override the default find method to format response according to API spec
    async find(ctx: Context, next: Next) {
        // Call the default find method
        const { data, meta } = await super.find(ctx, next);

        // Transform the response to match API spec format
        return {
            data,
            meta,
            message: "Style shapes retrieved successfully"
        };
    },

    // Override the findOne method to format response according to API spec
    async findOne(ctx: Context, next: Next) {
        // Get the style shape
        const { data } = await super.findOne(ctx, next);

        // Check if style shape exists
        if (!data) {
            return ctx.notFound('Style shape not found');
        }

        // Transform the response to match API spec format
        return {
            data,
            message: "Style shape retrieved successfully"
        };
    },

    // Get products by style shape
    async getProducts(ctx: Context, next: Next) {
        const { id } = ctx.params;
        const { page = 1, pageSize = 10 } = ctx.query;

        try {
            // Get the style shape with its products
            const styleShape = await strapi.db.query('api::style-shape.style-shape').findOne({
                where: { id },
                populate: ['products']
            });

            // Check if style shape exists
            if (!styleShape) {
                return ctx.notFound('Style shape not found');
            }

            // Get product IDs from the relation - handle both Strapi v4 and v5 formats
            let productIds: any[] = [];
            if ((styleShape as any).products?.data) {
                // Strapi v4 format
                productIds = (styleShape as any).products.data.map((item: any) => item.id);
            } else if (Array.isArray((styleShape as any).products)) {
                // Strapi v5 format
                productIds = (styleShape as any).products.map((item: any) => item.id);
            }

            // If no products, return empty array
            if (!productIds.length) {
                return {
                    data: [],
                    meta: {
                        pagination: {
                            page: Number(page),
                            pageSize: Number(pageSize),
                            pageCount: 0,
                            total: 0
                        }
                    },
                    message: "No products found for this style shape"
                };
            }

            // Get products with pagination
            const { results, pagination } = await strapi.service('api::product.product').find({
                filters: {
                    id: {
                        $in: productIds
                    }
                },
                populate: ['images', 'category'],
                sort: [{ createdAt: 'desc' }],
                pagination: {
                    page: Number(page),
                    pageSize: Number(pageSize)
                }
            });

            // Format products
            const formattedProducts = results.map((product: any) => ({
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                image: product.images && product.images.length > 0 ?
                    product.images[0].url : null,
                category: product.category ? {
                    id: product.category.id,
                    name: product.category.name
                } : null
            }));

            // Return the products
            return {
                data: formattedProducts,
                meta: {
                    pagination: {
                        page: Number(page),
                        pageSize: Number(pageSize),
                        pageCount: pagination.pageCount,
                        total: pagination.total
                    }
                },
                message: "Products retrieved successfully"
            };
        } catch (error) {
            strapi.log.error(`Error getting products for style-shape ${id}: ${error.message}`);
            return ctx.badRequest('An error occurred while fetching products');
        }
    }
})); 