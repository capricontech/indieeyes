"use client";

import React, { useState, useCallback } from "react";
import clsx from "clsx"; // Import classnames utility (optional)
import { FilterValue, Filters } from '../../hooks/useFilters';

interface FilterOption {
  label: string;
  count?: number;
  color?: string;
}

const filters: Array<{ title: string; options: FilterOption[] }> = [
  {
    title: "Frame Color",
    options: [
      { label: "Black", count: 235, color: "bg-black" },
      { label: "Blue", count: 142, color: "bg-blue-500" },
      { label: "Silver", count: 90, color: "bg-gray-300" },
      { label: "White", count: 73, color: "bg-white border-gray-300" }, // White needs a border for visibility
      { label: "Green", count: 73, color: "bg-green-500" },
      { label: "Grey", count: 37, color: "bg-gray-500" },
      { label: "Brown", count: 30, color: "bg-yellow-800" }, // Adjusted to a close brown shade
      { label: "Gold", count: 18, color: "bg-yellow-500" },
      { label: "Beige", count: 16, color: "bg-yellow-200" },
      { label: "Pink", count: 4, color: "bg-pink-500" },
      { label: "Orange", count: 4, color: "bg-orange-500" },
      { label: "Yellow", count: 3, color: "bg-yellow-400" },
      { label: "Teal", count: 3, color: "bg-teal-500" },
      { label: "Red", count: 2, color: "bg-red-500" },
    ],
  },
  {
    title: "Frame Material",
    options: [
      { label: "Acetate + Metal" },
      { label: "Carbon Fiber" },
      { label: "Acetate" },
      { label: "Castor" },
      { label: "Metal" },
      { label: "Nylon" },
      { label: "Plastic" },
      { label: "Cellulose Propionate" },
      { label: "Polycarbonate" },
      { label: "Stainless Steel" },
      { label: "Titanium" },
      { label: "Polymide" },
    ],
  },
  {
    title: "Frame Size",
    options: [
      { label: "Small", count: 120 },
      { label: "Medium", count: 350 },
      { label: "Large", count: 180 },
      { label: "Extra Large", count: 50 },
    ],
  },
  {
    title: "Collections",
    options: [
      { label: "Classic", count: 245 },
      { label: "Modern", count: 189 },
      { label: "Sport", count: 156 },
      { label: "Luxury", count: 98 },
    ],
  },
  {
    title: "Weight Group",
    options: [
      { label: "Ultra Light (0-15g)", count: 89 },
      { label: "Light (15-25g)", count: 245 },
      { label: "Medium (25-35g)", count: 167 },
      { label: "Heavy (35g+)", count: 45 },
    ],
  },
];

interface FilterSidebarProps {
  onFilterChange?: (key: keyof Filters, value: FilterValue) => void;
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleSection = useCallback((title: string) => {
    setOpenSections(prev => {
      if (prev.includes(title)) {
        return prev.filter(section => section !== title);
      } else {
        return [...prev, title];
      }
    });
  }, []);

  const toggleFilter = useCallback((section: string, option: string) => {
    setSelectedFilters(prev => {
      const sectionFilters = prev[section] || [];

      if (sectionFilters.includes(option)) {
        // Remove the filter if it's already selected
        return {
          ...prev,
          [section]: sectionFilters.filter(filter => filter !== option)
        };
      } else {
        // Add the filter if it's not selected
        return {
          ...prev,
          [section]: [...sectionFilters, option]
        };
      }
    });
  }, []);

  const clearFilters = () => {
    setSelectedFilters({});
  };

  const getSelectedFiltersCount = () => {
    return Object.values(selectedFilters).reduce((acc, curr) => acc + curr.length, 0);
  };

  const handleFilterChange = (category: string, value: string) => {
    if (onFilterChange) {
      onFilterChange(category as keyof Filters, value);
    }
  };

  return (
    <div className="border rounded-lg p-4 w-full shadow-lg mt-6 md:ml-36">
      {/* Header with Clear Filters */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        {getSelectedFiltersCount() > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-500 hover:text-blue-600"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filter Sections */}
      <div className="space-y-4">
        {filters.map(({ title, options }) => (
          <div key={title} className="border-b pb-4">
            <button
              className="w-full flex justify-between items-center py-2 text-left"
              onClick={() => toggleSection(title)}
            >
              <span className="font-medium text-gray-900">{title}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openSections.includes(title) ? 'rotate-180' : ''
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
            </button>

            <div
              className={`mt-2 space-y-2 transition-all duration-200 ${openSections.includes(title)
                ? 'max-h-[300px] opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
              {options.map((option) => {
                const isSelected = selectedFilters[title]?.includes(option.label);
                return (
                  <label
                    key={option.label}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {
                          toggleFilter(title, option.label);
                          handleFilterChange(title, option.label);
                        }}
                        className="w-4 h-4 border-2 rounded text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                      />
                      {option.color && (
                        <span
                          className={clsx(
                            'w-4 h-4 rounded-full ml-2 border border-gray-300',
                            option.color
                          )}
                        />
                      )}
                    </div>
                    <span className={`text-sm ${isSelected ? 'text-blue-500 font-medium' : 'text-gray-600'}`}>
                      {option.label}
                    </span>
                    {option.count && (
                      <span className="text-xs text-gray-400 ml-auto">
                        ({option.count})
                      </span>
                    )}
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Filters Count */}
      {getSelectedFiltersCount() > 0 && (
        <div className="mt-4 pt-4 border-t">
          <span className="text-sm text-gray-600">
            {getSelectedFiltersCount()} filter{getSelectedFiltersCount() !== 1 ? 's' : ''} selected
          </span>
        </div>
      )}
    </div>
  );
}
