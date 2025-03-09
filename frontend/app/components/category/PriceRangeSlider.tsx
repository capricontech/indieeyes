'use client';

import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { FilterValue, Filters } from '../../hooks/useFilters';

const MIN = 0;
const MAX = 5000;

interface PriceRangeSliderProps {
  onFilterChange?: (key: keyof Filters, value: FilterValue) => void;
}

export default function PriceRangeSlider({ onFilterChange }: PriceRangeSliderProps) {
  const [values, setValues] = useState([500, 2500]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRangeChange = (values: number[]) => {
    setValues(values);
    if (onFilterChange) {
      onFilterChange('priceRange', values as [number, number]);
    }
  };

  return (
    <div className="border rounded-lg p-4 w-full shadow-lg mt-6 md:ml-36">
      {/* Title with Toggle */}
      <div
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>
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

      {/* Slider Content */}
      <div className={`${isExpanded ? 'max-h-[200px]' : 'max-h-0 md:max-h-[200px]'
        } overflow-hidden transition-all duration-300`}>
        {/* Price Display */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-gray-600 text-sm">₹</span>
            <input
              type="number"
              value={values[0]}
              onChange={(e) => setValues([Math.min(Number(e.target.value), values[1]), values[1]])}
              className="w-20 p-1 text-sm border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <span className="text-gray-400">-</span>
          <div className="flex items-center">
            <span className="text-gray-600 text-sm">₹</span>
            <input
              type="number"
              value={values[1]}
              onChange={(e) => setValues([values[0], Math.max(Number(e.target.value), values[0])])}
              className="w-20 p-1 text-sm border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Slider */}
        <div className="px-2">
          <Range
            step={100}
            min={MIN}
            max={MAX}
            values={values}
            onChange={handleRangeChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '6px',
                  width: '100%',
                  background: getTrackBackground({
                    values,
                    colors: ['#E5E7EB', '#6366F1', '#E5E7EB'],
                    min: MIN,
                    max: MAX,
                  }),
                  borderRadius: '4px',
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props, index }) => {
              // Extract the key from props
              const { key, ...restProps } = props;

              return (
                <div
                  key={key} // Pass key directly as a prop
                  {...restProps} // Spread the rest of the props
                  className="w-5 h-5 bg-white border-2 border-indigo-500 rounded-full shadow-md focus:outline-none hover:border-indigo-600 active:scale-95 transition-all"
                />
              );
            }}
          />
        </div>

        {/* Price Range Labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>₹{MIN}</span>
          <span>₹{MAX}</span>
        </div>
      </div>
    </div>
  );
}
