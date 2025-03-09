'use client';

import React, { useState, useEffect, useCallback } from 'react';
import type { Gender } from "../../types";
import { mockGenders } from "../../services/mockData"; // Import mock data as fallback
import genderService from "../../services/api/gender";
import Image from 'next/image';
import Link from 'next/link';
import ErrorBoundary from '../common/ErrorBoundary';

export default function Gender() {
  const [loading, setLoading] = useState(true);
  const [genderData, setGenderData] = useState<Gender[]>(mockGenders || []); // Initialize with mock data
  const [error, setError] = useState<string | null>(null);

  // Memoize the loadGender function
  const loadGender = useCallback(async () => {
    try {
      setLoading(true);
      const data = await genderService.getGender();

      // Only update state if data is valid
      if (data && Array.isArray(data) && data.length > 0) {
        setGenderData(data);
      }
      setError(null);
    } catch (err) {
      console.error("Error loading gender data:", err);
      setError("Failed to load gender data. Please try again later.");
      // Keep using mock/existing data on error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadGender();
  }, [loadGender]);

  // Show loading state
  if (loading && genderData.length === 0) {
    return <div className="flex justify-center items-center py-12">Loading gender categories...</div>;
  }

  // Show error state with fallback UI
  if (error && genderData.length === 0) {
    return <div className="flex justify-center items-center py-12 text-red-500">{error}</div>;
  }

  return (
    <ErrorBoundary>
      <div className="flex justify-center items-center gap-4 md:pt-28 pt-32 md:ml-36 ml-2 mr-2 md:mr-36">
        {/* Only map if genderData is an array and has items */}
        {genderData && genderData.length > 0 ? (
          genderData.map((item) => (
            <Link
              key={item.id}
              href={`/category/${item.name.toLowerCase().replace("'s", "s")}`}
              className="relative w-[280px] h-[180px] sm:w-[220px] sm:h-[120px] md:w-[350px] md:h-[230px] lg:w-[380px] lg:h-[250px]"
            >
              <Image
                src={item.image || '/placeholder.jpg'}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="rounded-lg object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
              <div className="absolute md:bottom-4 bottom-3 left-4 md:left-7 text-white md:text-right md:ml-48 md:mb-7">
                <h5 className="font-bold text-sm md:text-base">{item.name}</h5>
                <p className="text-xs md:text-sm">{item.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <div>No gender categories available</div>
        )}
      </div>
    </ErrorBoundary>
  );
}
