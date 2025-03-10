"use client";

export interface DimensionItem {
  value: string;
  label: string;
  imageSrc: string;
}

interface DimensionsDisplayProps {
  dimensions: DimensionItem[];
  selectedSize?: string;
}

export const DimensionsDisplay = ({ 
  dimensions,
  selectedSize = "Small"
}: DimensionsDisplayProps) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Dimensions</h3>
        <div className="text-sm">
          Size: <span className="text-blue-500">{selectedSize} ▼</span>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mt-3">
        {dimensions.map((dimension, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={dimension.imageSrc} 
              alt={dimension.label} 
              className="w-10 h-10 mb-1" 
            />
            <div className="text-gray-800 font-medium">{dimension.value}</div>
            <div className="text-xs text-gray-500">{dimension.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}; 