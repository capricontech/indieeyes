import { useState, useCallback, useEffect } from 'react';

export type FilterValue = string | number | boolean | [number, number];

export interface Filters {
    shapes?: string[];
    priceRange?: [number, number];
    colors?: string[];
    materials?: string[];
    brands?: string[];
    sizes?: string[];
    gender?: string;
}

export function useFilters() {
    const [filters, setFilters] = useState<Filters>({
        priceRange: [0, 1000],
        shapes: [],
        colors: [],
        materials: [],
        brands: [],
        sizes: [],
        gender: 'all',
    });

    // Use localStorage to persist filters between page refreshes
    useEffect(() => {
        // Load filters from localStorage on mount
        try {
            const savedFilters = localStorage.getItem('filters');
            if (savedFilters) {
                setFilters(JSON.parse(savedFilters));
            }
        } catch (error) {
            console.error('Error loading filters from localStorage:', error);
        }

        // No cleanup needed for this effect
    }, []);

    // Save filters to localStorage whenever they change
    useEffect(() => {
        try {
            localStorage.setItem('filters', JSON.stringify(filters));
        } catch (error) {
            console.error('Error saving filters to localStorage:', error);
        }
    }, [filters]);

    const updateFilter = useCallback((key: keyof Filters, value: FilterValue) => {
        setFilters((prev) => {
            if (key === 'shapes' || key === 'colors' || key === 'materials' || key === 'brands' || key === 'sizes') {
                // Handle array values (toggle)
                const currentArray = prev[key] as string[] || [];
                const valueStr = value as string;

                if (currentArray.includes(valueStr)) {
                    return {
                        ...prev,
                        [key]: currentArray.filter(item => item !== valueStr)
                    };
                } else {
                    return {
                        ...prev,
                        [key]: [...currentArray, valueStr]
                    };
                }
            } else {
                // Handle scalar values (direct set)
                return {
                    ...prev,
                    [key]: value
                };
            }
        });
    }, []);

    const resetFilters = useCallback(() => {
        setFilters({
            priceRange: [0, 1000],
            shapes: [],
            colors: [],
            materials: [],
            brands: [],
            sizes: [],
            gender: 'all',
        });
    }, []);

    return {
        filters,
        updateFilter,
        resetFilters
    };
} 