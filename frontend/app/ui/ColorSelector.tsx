"use client";

import { useState } from "react";

interface ColorSelectorProps {
  colors: string[];
  defaultColor?: string;
  onColorChange?: (color: string) => void;
}

export const ColorSelector = ({
  colors,
  defaultColor,
  onColorChange
}: ColorSelectorProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor || colors[0]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    if (onColorChange) {
      onColorChange(color);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="font-semibold">Colors</h2>
      <div className="flex space-x-3 mt-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor === color ? "border-black" : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </div>
  );
}; 