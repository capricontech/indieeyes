import { Context, Next } from 'koa';
import rateLimit from 'koa-ratelimit';

/**
 * Rate limiting middleware
 * Limits API requests based on IP address
 */
export default (config = {}) => {
    const defaultConfig = {
        driver: 'memory',  // Use memory store by default
        db: new Map(),     // Use Map as storage
        duration: 60000,   // 1 minute window
        max: 100,          // Max 100 requests per IP within window
        errorMessage: 'Too many requests, please try again later.',
        id: (ctx: Context) => ctx.ip,
        headers: {
            remaining: 'X-RateLimit-Remaining',
            reset: 'X-RateLimit-Reset',
            total: 'X-RateLimit-Limit'
        },
        disableHeader: false,
        whitelist: () => false
    };

    const options = { ...defaultConfig, ...config };

    return rateLimit(options);
}; 