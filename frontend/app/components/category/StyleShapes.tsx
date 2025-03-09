'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { StyleShape } from '../../types';
import { mockStyleShapes } from '../../services/mockData';
import styleShapeService from '@/app/services/api/styleShape';
import { FilterValue, Filters } from '../../hooks/useFilters';

interface StyleShapesProps {
  onFilterChange?: (key: keyof Filters, value: FilterValue) => void;
}

export default function StyleShapes({ onFilterChange }: StyleShapesProps) {
  const [shapes, setShapes] = useState<StyleShape[]>(mockStyleShapes);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchShapes = async () => {
      try {
        const shapes = await styleShapeService.getStyleShapes();
        setShapes(shapes);
      } catch (error) {
        console.error('Error fetching style shapes:', error);
      }
    };
    fetchShapes();
  }, []);

  const handleShapeClick = useCallback((shape: string) => {
    setSelectedShape(shape === selectedShape ? null : shape);

    if (onFilterChange) {
      onFilterChange('shapes', shape);
    }
  }, [selectedShape, onFilterChange]);

  return (
    <div className="border rounded-lg p-4 w-full shadow-lg mt-6 md:ml-36">
      {/* Title with Toggle */}
      <div
        className="flex justify-between items-center mb-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold text-gray-900">
          Style & Shapes
        </h3>
        <svg
          className={`w-4 h-4 transition-transform duration-200 md:hidden ${isExpanded ? 'rotate-180' : ''
            }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Grid */}
      <div className={`${isExpanded ? 'max-h-[500px]' : 'max-h-0 md:max-h-[500px]'
        } overflow-hidden transition-all duration-300`}>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4">
          {shapes.map((shape) => (
            <div
              key={shape.id}
              onClick={() => handleShapeClick(shape.id.toString())}
              className={`flex flex-col items-center p-2 cursor-pointer rounded-lg transition-all duration-200 ${selectedShape === shape.id.toString()
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'hover:bg-gray-50'
                }`}
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={shape.image}
                  alt={`Style Shape ${shape.id}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-contain p-2"
                />
              </div>
              <span className={`text-xs sm:text-sm mt-1 text-center ${selectedShape === shape.id.toString()
                ? 'text-blue-500 font-medium'
                : 'text-gray-600'
                }`}>
                {shape.name || `Shape ${shape.id}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
