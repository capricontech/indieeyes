"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Category } from "../../types";
import categoryService from "../../services/api/categories";
import Link from "next/link";

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
    <section className="w-full bg-white py-16 px-6 md:px-20">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-96 text-center lg:text-left md:ml-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-5">Categories</h2>
          <p className="text-sm md:text-base text-[#707070] mb-6 hidden md:block">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Link href="/category" className="bg-[#6053FB] text-white px-6 md:px-8 py-3 rounded-full hover:bg-[#4c41fa] transition-colors">
            Browse All
          </Link>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-xl mx-auto w-full">
          {/* Left Column */}
          <div className="space-y-4  flex flex-col items-center">
            <div className="flex justify-center w-full">
              <Image
                src={categories[0]?.image || "/placeholder.jpg"}
                alt={categories[0]?.name || "Category Image"}
                width={289}
                height={254}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-center w-full">
              <Image
                src={categories[2]?.image || "/placeholder.jpg"}
                alt={categories[2]?.name || "Category Image"}
                width={289}
                height={164}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-4 flex flex-col items-center mt-20">
            <div className="flex justify-center w-full">
              <Image
                src={categories[1]?.image || "/placeholder.jpg"}
                alt={categories[1]?.name || "Category Image"}
                width={289}
                height={254}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-center w-full">
              <Image
                src={categories[3]?.image || "/placeholder.jpg"}
                alt={categories[3]?.name || "Category Image"}
                width={289}
                height={164}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Single Column) */}
      <div className="flex md:hidden flex-col  w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-[#171717] ">Categories</h2>

        <div className="flex gap-2  w-full px-4 py-2 ">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center min-w-[78px]">
              <Image
                src={category.image}
                alt={`${category.name} Category`}
                width={200}
                height={200}
                className="rounded-lg object-contain w-[120px] h-[120px]"
              />
              <p className="text-lg font-bold text-gray-400 text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
