/**
 * Shape router
 */

export default {
    routes: [
        // Get all shapes (default route)
        {
            method: 'GET',
            path: '/shapes',
            handler: 'shape.find',
            config: {
                policies: []
            }
        },
        // Get a specific shape (default route)
        {
            method: 'GET',
            path: '/shapes/:id',
            handler: 'shape.findOne',
            config: {
                policies: []
            }
        },
        // Create a shape (default route)
        {
            method: 'POST',
            path: '/shapes',
            handler: 'shape.create',
            config: {
                policies: []
            }
        },
        // Update a shape (default route)
        {
            method: 'PUT',
            path: '/shapes/:id',
            handler: 'shape.update',
            config: {
                policies: []
            }
        },
        // Delete a shape (default route)
        {
            method: 'DELETE',
            path: '/shapes/:id',
            handler: 'shape.delete',
            config: {
                policies: []
            }
        }
    ]
}; 