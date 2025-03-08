'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';
import CategoryHeader from '../components/category/CategoryHeader';
import FilterSidebar from '../components/category/FilterSidebar';
import ProductGrid from '../components/category/ProductGrid';
import StyleShapes from '../components/category/StyleShapes';
import PriceRangeSlider from '../components/category/PriceRangeSlider';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';
import Gender from '../components/category/Gender';
import Lenses from '../components/Lenses';
import type { SortOption } from '../components/category/CategoryHeader';
import { mockProductGrid } from '../services/mockData';

export default function CategoryPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption['value']>('newest');

  return (
    <div>
      <Gender />
      <CategoryHeader 
        view={view} 
        onViewChange={setView} 
        selectedSort={sortBy}
        onSortChange={setSortBy}
        totalProducts={mockProductGrid.length}
      />

      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end px-4 mt-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <Filter size={20} />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row relative">
        {/* Mobile Filter Drawer */}
        <div
          className={`${isFilterOpen ? 'translate-x-0' : '-translate-x-full'
            } md:hidden fixed inset-y-0 left-0 w-[80%] bg-white z-50 transition-transform duration-300 ease-in-out overflow-y-auto`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>
            <StyleShapes />
            <PriceRangeSlider />
            <FilterSidebar />
          </div>
        </div>

        {/* Desktop Filter Sidebar */}
        <div className="hidden md:block w-[350px]">
          <StyleShapes />
          <PriceRangeSlider />
          <FilterSidebar />
        </div>

        {/* Overlay for mobile filter */}
        {isFilterOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        <ProductGrid view={view} sortBy={sortBy} />
      </div>
      <Lenses />
      <Testimonial />
      <Footer />
      <BottomBar />
    </div>
  );
}
