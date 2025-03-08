'use client';

import { Grid2x2, List, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export type SortOption = {
  label: string;
  value: 'newest' | 'price-low-high' | 'price-high-low' | 'popularity' | 'rating';
};

const sortOptions: SortOption[] = [
  { label: 'New Arrivals', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low-high' },
  { label: 'Price: High to Low', value: 'price-high-low' },
  { label: 'Popularity', value: 'popularity' },
  { label: 'Rating', value: 'rating' },
];

interface CategoryHeaderProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
  selectedSort: SortOption['value'];
  onSortChange: (sort: SortOption['value']) => void;
  totalProducts: number;
}

export default function CategoryHeader({ 
  view, 
  onViewChange, 
  selectedSort, 
  onSortChange,
  totalProducts 
}: CategoryHeaderProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const selectedSortLabel = sortOptions.find(option => option.value === selectedSort)?.label || 'New Arrivals';

  return (
    <div className="flex flex-col sm:flex-row rounded-lg mt-10 sm:mt-16 ml-4 mr-4 md:ml-36 md:mr-36 justify-between items-center border p-3 bg-white">
      {/* Left Section - Browse By Category */}
      <div className="flex flex-col sm:flex-row items-center text-gray-900 text-center sm:text-left">
        <h2 className="text-base sm:text-lg font-bold">Browse By Category</h2>
        <span className="text-gray-500 text-xs sm:text-sm sm:ml-2">({totalProducts.toLocaleString()} Products found)</span>
      </div>

      {/* Right Section - Sort By & View Toggle */}
      <div className="flex justify-between flex-row items-center gap-24 md:gap-4">
        {/* Sort By Dropdown */}
        <div className="relative">
          <div className="flex items-center text-gray-700 text-sm flex-row text-left">
            <span className="font-bold">Sort By:</span>
            <button 
              className="flex items-center ml-1 text-gray-900 font-medium gap-1 hover:text-blue-600"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              {selectedSortLabel}
              <ChevronDown size={16} className={`transform transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Dropdown Menu */}
          {isSortOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 py-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    selectedSort === option.value ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => {
                    onSortChange(option.value);
                    setIsSortOpen(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* View Toggle Icons */}
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded ${view === 'grid' ? 'text-blue-600' : 'text-black'}`}
            onClick={() => onViewChange('grid')}
          >
            <Grid2x2 size={20} />
          </button>
          <button
            className={`p-2 rounded ${view === 'list' ? 'text-blue-600' : 'text-black'}`}
            onClick={() => onViewChange('list')}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Overlay for closing dropdown when clicking outside */}
      {isSortOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsSortOpen(false)}
        />
      )}
    </div>
  );
}
