import { factories } from '@strapi/strapi';
import { Context } from 'koa';

interface ProductQueryParams {
    page?: number;
    limit?: number;
    category?: number;
    shape?: number;
    sort?: string;
}

/**
 * Product controller
 */
export default factories.createCoreController('api::product.product' as any, ({ strapi }) => ({
    // Override the default find method to add filtering and formatting
    async find(ctx: Context) {
        // Get query parameters
        const { page = 1, limit = 10, category, shape, sort } = ctx.query as unknown as ProductQueryParams;

        // Build filters
        const filters: any = {};
        if (category) {
            filters.category = { id: category };
        }
        if (shape) {
            filters.shapeId = shape;
        }

        // Build sort options
        let sortOption: any = {};
        if (sort) {
            switch (sort) {
                case 'price_asc':
                    sortOption = { price: 'asc' };
                    break;
                case 'price_desc':
                    sortOption = { price: 'desc' };
                    break;
                case 'newest':
                    sortOption = { createdAt: 'desc' };
                    break;
                default:
                    sortOption = { createdAt: 'desc' };
            }
        } else {
            sortOption = { createdAt: 'desc' };
        }

        // Set pagination
        const start = (Number(page) - 1) * Number(limit);

        // Get total count for pagination
        const totalCount = await strapi.db.query('api::product.product').count({ where: filters });

        // Call the query builder with filters and pagination
        const query = {
            filters,
            sort: sortOption,
            populate: ['images', 'category'],
            pagination: {
                start,
                limit: Number(limit)
            }
        };

        // Execute the query
        const { results } = await strapi.service('api::product.product').find(query);

        // Format the response according to API spec
        const formattedResults = results.map(product => ({
            id: product.id,
            name: product.name,
            image: product.images && product.images.length > 0 ? product.images[0].url : null,
            originalPrice: product.originalPrice,
            discountPercentage: product.discountPercentage,
            finalPrice: product.price,
            rating: product.rating,
            isFavorite: false // Default value as we don't have user context here
        }));

        // Return pagination info
        return {
            data: formattedResults,
            pagination: {
                total: totalCount,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(totalCount / Number(limit))
            },
            message: "Products retrieved successfully"
        };
    },

    // Get recent products
    async recent(ctx: Context) {
        // Get limit from query
        const { limit = 10 } = ctx.query as unknown as { limit?: number };

        // Query recent products
        const query = {
            sort: { createdAt: 'desc' },
            populate: ['images'],
            pagination: {
                limit: Number(limit)
            }
        };

        // Execute the query
        const { results } = await strapi.service('api::product.product').find(query);

        // Format the response
        const formattedResults = results.map(product => ({
            id: product.id,
            name: product.name,
            image: product.images && product.images.length > 0 ? product.images[0].url : null,
            originalPrice: product.originalPrice,
            discountPercentage: product.discountPercentage,
            finalPrice: product.price,
            rating: product.rating,
            isFavorite: false // Default value as we don't have user context here
        }));

        return {
            data: formattedResults,
            message: "Recent products retrieved successfully"
        };
    },

    // Override the findOne method to format response according to API spec
    async findOne(ctx: Context) {
        // Call the default findOne method with relations
        const entity = await strapi.db.query('api::product.product').findOne({
            where: { id: ctx.params.id },
            populate: ['images', 'category', 'specifications']
        });

        if (!entity) {
            return ctx.notFound('Product not found');
        }

        // Format the response
        const formattedProduct: any = {
            id: entity.id,
            name: entity.name,
            image: entity.images && entity.images.length > 0 ? entity.images[0].url : null,
            originalPrice: entity.originalPrice,
            discountPercentage: entity.discountPercentage,
            finalPrice: entity.price,
            rating: entity.rating,
            isFavorite: false,
            description: entity.description,
            specifications: entity.specifications.map(spec => ({
                key: spec.key,
                value: spec.value
            })),
            categoryId: entity.category?.id,
            shapeId: entity.shapeId
        };

        // Add all images if available
        if (entity.images && entity.images.length > 0) {
            formattedProduct.images = entity.images.map(img => img.url);
        }

        return {
            data: formattedProduct,
            message: "Product retrieved successfully"
        };
    }
})); 