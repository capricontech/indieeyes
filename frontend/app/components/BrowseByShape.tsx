"use client";
import React, { useState, useEffect } from 'react';
import { Shape } from '../types';
import shapeService from '../services/api/shapes';

export default function BrowseByShape() {
    const [shapes, setShapes] = useState<Shape[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadShapes() {
            try {
                setLoading(true);
                const shapesData = await shapeService.getShapes();
                setShapes(shapesData);
                setError(null);
            } catch (err) {
                console.error('Error loading shapes:', err);
                setError('Failed to load shapes. Please try again later.');
            } finally {
                setLoading(false);
            }
        }

        loadShapes();
    }, []);

    return (
        <div className="relative w-full h-[1085px]">
            {/* White background section */}
            <div className="absolute w-screen h-[539px] left-1/2 -translate-x-1/2 top-0 bg-white"

            />
        </div>
    );
} 