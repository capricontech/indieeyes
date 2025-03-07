"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Category } from "../types";
import categoryService from "../services/api/categories";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);
        const categoriesData = await categoryService.getCategories();
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        console.error("Error loading categories:", err);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white py-24 px-6 md:px-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-xl">Loading categories...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white py-24 px-6 md:px-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  if (categories.length < 4) {
    return (
      <section className="w-full bg-white py-24 px-6 md:px-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-xl">No categories available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 ">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-96 text-center lg:text-left md:ml-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-5">
            Categories
          </h2>
          <p className="text-sm md:text-base text-[#707070] mb-6">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="bg-[#6053FB] text-white px-6 md:px-8 py-3 rounded-full hover:bg-[#4c41fa] transition-colors">
            Browse All
          </button>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
  {categories.map((category, index) => (
    <div key={index} className="space-y-4 flex flex-col items-center">
      <div className="flex justify-center w-full">
        <Image
          src={category.image}
          alt={`${category.name} Category`}
          width={289}
          height={index % 2 === 0 ? 254 : 164} // Adjust heights accordingly
          className="rounded-lg bg-[#DBE4ED] hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
