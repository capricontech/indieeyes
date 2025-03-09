/**
 * Simple in-memory cache implementation
 * In production, this should be replaced with Redis or another distributed cache
 */

interface CacheItem<T> {
    value: T;
    expiry: number | null;
}

class CacheService {
    private cache: Map<string, CacheItem<any>>;
    private defaultTTL: number; // in milliseconds

    constructor(defaultTTL = 5 * 60 * 1000) { // 5 minutes default TTL
        this.cache = new Map();
        this.defaultTTL = defaultTTL;

        // Clean expired items every minute
        setInterval(() => this.cleanExpired(), 60 * 1000);
    }

    /**
     * Set a value in the cache
     * @param key Cache key
     * @param value Value to store
     * @param ttl Time to live in milliseconds (optional)
     */
    set<T>(key: string, value: T, ttl?: number): void {
        const expiry = ttl !== undefined ? Date.now() + ttl :
            (this.defaultTTL ? Date.now() + this.defaultTTL : null);

        this.cache.set(key, { value, expiry });
    }

    /**
     * Get a value from the cache
     * @param key Cache key
     * @returns The cached value or undefined if not found or expired
     */
    get<T>(key: string): T | undefined {
        const item = this.cache.get(key);

        // Return undefined if item doesn't exist
        if (!item) return undefined;

        // Check if item is expired
        if (item.expiry && item.expiry < Date.now()) {
            this.cache.delete(key);
            return undefined;
        }

        return item.value;
    }

    /**
     * Delete a value from the cache
     * @param key Cache key
     */
    delete(key: string): void {
        this.cache.delete(key);
    }

    /**
     * Clear the entire cache
     */
    clear(): void {
        this.cache.clear();
    }

    /**
     * Get a value from cache or compute it if not found
     * @param key Cache key
     * @param fn Function to compute the value if not found
     * @param ttl Time to live in milliseconds (optional)
     * @returns The cached or computed value
     */
    async getOrSet<T>(key: string, fn: () => Promise<T>, ttl?: number): Promise<T> {
        const cachedValue = this.get<T>(key);

        if (cachedValue !== undefined) {
            return cachedValue;
        }

        const value = await fn();
        this.set(key, value, ttl);
        return value;
    }

    /**
     * Clean expired items from the cache
     */
    private cleanExpired(): void {
        const now = Date.now();

        for (const [key, item] of this.cache.entries()) {
            if (item.expiry && item.expiry < now) {
                this.cache.delete(key);
            }
        }
    }
}

// Create a singleton instance
const cacheService = new CacheService();

export default cacheService; 