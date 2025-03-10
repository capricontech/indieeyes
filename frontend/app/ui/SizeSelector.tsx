"use client";

import { useState } from "react";

export interface SizeOption {
  id: string;
  label: string;
  measurement: number;
}

interface SizeSelectorProps {
  sizes: SizeOption[];
  defaultSizeId?: string;
  onSizeChange?: (sizeId: string) => void;
  showSizeGuide?: boolean;
}

export const SizeSelector = ({
  sizes,
  defaultSizeId,
  onSizeChange,
  showSizeGuide = true,
}: SizeSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    defaultSizeId || sizes[0]?.id || ""
  );

  const handleSizeChange = (sizeId: string) => {
    setSelectedSize(sizeId);
    if (onSizeChange) {
      onSizeChange(sizeId);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="font-semibold">
        Sizes 
        {showSizeGuide && (
          <span className="text-blue-500 text-sm cursor-pointer ml-2">
            Size Guide
          </span>
        )}
      </h2>
      <div className="flex space-x-3 mt-2">
        {sizes.map((size) => (
          <button
            key={size.id}
            className={`px-4 py-2 rounded-lg text-sm ${
              selectedSize === size.id
                ? "border-2 border-black"
                : "border border-gray-300"
            }`}
            onClick={() => handleSizeChange(size.id)}
          >
            {size.label}
            <div className="text-xs text-gray-500">{size.measurement}mm</div>
          </button>
        ))}
      </div>
    </div>
  );
}; 