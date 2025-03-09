// import type { Core } from '@strapi/strapi';

import errorHandler from './middlewares/errorHandler';
import rateLimit from './middlewares/rateLimit';
import cacheService from './utils/cache';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // Register middlewares
    strapi.container.get('middlewares').set('global::errorHandler', errorHandler);
    strapi.container.get('middlewares').set('global::rateLimit', rateLimit);

    // Add cache service to global scope
    strapi.cache = cacheService;
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Add lifecycle hooks for product updates
    strapi.db.lifecycles.subscribe({
      models: ['api::product.product'],
      afterCreate: async ({ result }) => {
        // Update shape product counts when a product is created
        await strapi.service('api::product.product').updateProductCounts();
      },
      afterUpdate: async ({ result }) => {
        // Update shape product counts when a product is updated
        await strapi.service('api::product.product').updateProductCounts();
      },
      afterDelete: async ({ result }) => {
        // Update shape product counts when a product is deleted
        await strapi.service('api::product.product').updateProductCounts();
      }
    });
  },
};
