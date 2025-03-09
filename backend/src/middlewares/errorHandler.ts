import { Context, Next } from 'koa';

/**
 * Error handling middleware
 */
export default () => {
    return async (ctx: Context, next: Next) => {
        try {
            await next();
        } catch (error) {
            // Log the error
            strapi.log.error(error);

            // Format error response based on type
            ctx.status = error.status || 500;

            ctx.body = {
                error: error.message || 'Internal Server Error',
                statusCode: ctx.status
            };

            // Send to Strapi's default error handling
            ctx.app.emit('error', error, ctx);
        }
    };
}; 