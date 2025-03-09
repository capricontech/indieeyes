import { factories } from '@strapi/strapi';

/**
 * Product router
 */
const defaultRouter = factories.createCoreRouter('api::product.product' as any);

export default {
    routes: [
        // Add the routes from the default router
        ...(defaultRouter.routes as any[]),
        // Add custom routes
        {
            method: 'GET',
            path: '/products/recent',
            handler: 'product.recent',
            config: {
                policies: []
            }
        }
    ]
}; 