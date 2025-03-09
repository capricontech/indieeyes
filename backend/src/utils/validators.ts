import * as yup from 'yup';

/**
 * Validation schemas for various API requests
 */

// Product creation/update schema
export const productSchema = yup.object().shape({
    name: yup.string().required('Product name is required'),
    slug: yup.string().required('Product slug is required'),
    description: yup.string(),
    price: yup.number().positive('Price must be positive').required('Price is required'),
    originalPrice: yup.number().positive('Original price must be positive'),
    discountPercentage: yup.number().min(0).max(100),
    stock: yup.number().min(0).default(0),
    category: yup.number().required('Category is required'),
    shapeId: yup.number(),
    tags: yup.array().of(yup.string()),
    colors: yup.array().of(yup.string()),
    sizes: yup.array().of(yup.string()),
    isNew: yup.boolean().default(false),
    isFeatured: yup.boolean().default(false),
    material: yup.string(),
    brand: yup.string()
});

// Category creation/update schema
export const categorySchema = yup.object().shape({
    name: yup.string().required('Category name is required'),
    slug: yup.string().required('Category slug is required'),
    parentCategory: yup.number(),
    style: yup.object().shape({
        width: yup.string(),
        height: yup.string()
    })
});

// Shape creation/update schema
export const shapeSchema = yup.object().shape({
    name: yup.string().required('Shape name is required'),
    count: yup.number().min(0).default(0)
});

// Cart item schema
export const cartItemSchema = yup.object().shape({
    productId: yup.number().required('Product ID is required'),
    quantity: yup.number().min(1).default(1),
    options: yup.object()
});

// Validation middleware
export const validate = (schema: yup.AnyObjectSchema) => {
    return async (ctx, next) => {
        try {
            const validatedBody = await schema.validate(ctx.request.body, {
                abortEarly: false,
                stripUnknown: true
            });

            // Replace request body with validated data
            ctx.request.body = validatedBody;

            return next();
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                ctx.status = 400;
                ctx.body = {
                    error: 'Validation Error',
                    statusCode: 400,
                    details: error.errors
                };
                return;
            }

            throw error;
        }
    };
}; 