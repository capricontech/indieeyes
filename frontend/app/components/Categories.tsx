"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Category } from '../types';
import categoryService from '../services/api/categories';

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
                console.error('Error loading categories:', err);
                setError('Failed to load categories. Please try again later.');
            } finally {
                setLoading(false);
            }
        }

        loadCategories();
    }, []);

    if (loading) {
        return (
            <section className="w-full bg-white py-24 px-20">
                <div className="flex justify-center items-center min-h-[400px]">
                    <p className="text-xl">Loading categories...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full bg-white py-24 px-20">
                <div className="flex justify-center items-center min-h-[400px]">
                    <p className="text-xl text-red-500">{error}</p>
                </div>
            </section>
        );
    }

    // Ensure we have all required categories before rendering
    if (categories.length < 4) {
        return (
            <section className="w-full bg-white py-24 px-20">
                <div className="flex justify-center items-center min-h-[400px]">
                    <p className="text-xl">No categories available</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-white py-24 px-20">
            <div className=" justify-between">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left content */}
                    <div className="w-full lg:w-96 lg:pt-16">
                        <h2 className="text-[32px] font-bold text-[#171717] mb-5">
                            Categories
                        </h2>
                        <p className="text-sm leading-6 text-[#707070] mb-8">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries,
                        </p>
                        <button className="bg-[#6053FB] text-white px-8 py-3.5 rounded-full hover:bg-[#4c41fa] transition-colors">
                            Browse All
                        </button>
                    </div>

                    {/* Right grid */}
                    <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                        <div className="space-y-4 md:space-y-4 flex flex-col items-center">

                            <div className="flex justify-center w-full">
                                <Image
                                    src={categories[0].image}
                                    alt={`${categories[0].name} Category`}
                                    width={289}
                                    height={254}
                                    className="rounded-lg bg-[#DBE4ED] hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex justify-center w-full">
                                <Image
                                    src={categories[2].image}
                                    alt={`${categories[2].name} Category`}
                                    width={289}
                                    height={164}
                                    className="rounded-lg hover:scale-105 bg-[#DBE4ED] transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-4 flex flex-col items-center pt-9">

                            <div className="flex justify-center w-full">
                                <Image
                                    src={categories[1].image}
                                    alt={`${categories[1].name} Category`}
                                    width={289}
                                    height={254}
                                    className="rounded-lg bg-[#DBE4ED] hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex justify-center w-full">
                                <Image
                                    src={categories[3].image}
                                    alt={`${categories[3].name} Category`}
                                    width={289}
                                    height={164}
                                    className="rounded-lg hover:scale-105 bg-[#DBE4ED] transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

