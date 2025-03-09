"use client";
import React, { useState, useEffect } from "react";
import { Shape } from "../../types";
import shapeService from "../../services/api/shapes";

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
        console.error("Error loading shapes:", err);
        setError("Failed to load shapes. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadShapes();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Sections */}
      <div className="absolute w-full h-1/2 top-0 bg-white" />
      <div className="absolute w-full h-1/2 bottom-0 bg-[#DBDBED]" />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#171717] mb-8 sm:mb-12">
          Browse by Shapes
        </h2>

        {/* Shapes Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 bg-white md:bg-transparent rounded-lg shadow-md md:shadow-lg">
          {shapes.map((shape, index) => (
            <div
              key={index}
              className="bg-white rounded-lg md:shadow-md p-4 sm:p-6 flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-full flex justify-center mb-3 sm:mb-4">
                <img
                  src={shape.image}
                  alt={shape.name}
                  className="w-28 h-16 sm:w-40 sm:h-20 object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-1 sm:mb-2">
                {shape.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#707070]">
                ({shape.count} Products Found)
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
