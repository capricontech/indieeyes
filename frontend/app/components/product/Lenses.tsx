'use client';

import Image from 'next/image';
import ErrorBoundary from '../common/ErrorBoundary';
import { useState } from 'react';

export default function Lenses() {
    const [imgError, setImgError] = useState<Record<string, boolean>>({});
    const products = [
        {
            id: 1,
            image: '/assets/images/lenses/image (1).png',
            width: 549,
            height: 348,
        },
        {
            id: 2,
            image: '/assets/images/lenses/image (2).png',
            width: 594,
            height: 534,
        },
        {
            id: 3,
            image: '/assets/images/lenses/image (3).png',
            width: 594,
            height: 534,
        },
        {
            id: 4,
            image: '/assets/images/lenses/image (4).png',
            width: 694,
            height: 348,
        }
    ];

    const handleImageError = (id: number) => {
        setImgError(prev => ({
            ...prev,
            [id]: true
        }));
    };

    return (
        <ErrorBoundary>
            <div className="container mx-auto px-4 py-12 flex flex-col items-center">
                <h1 className="text-2xl font-semibold text-center mb-6">Contact Lenses & More</h1>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-2 gap-2 md:gap-4 max-w-4xl mx-auto w-full">
                    <div className="space-y-4 flex flex-col items-center">
                        <div className="flex justify-center w-full">
                            <Image
                                src={imgError[products[0].id] ? '/placeholder.jpg' : products[0].image}
                                alt="Contact Lenses"
                                width={products[0].width}
                                height={products[0].height}
                                className="rounded-lg hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(products[0].id)}
                            />
                        </div>
                        <div className="flex justify-center w-full">
                            <Image
                                src={imgError[products[2].id] ? '/placeholder.jpg' : products[2].image}
                                alt="Classics Sunglasses"
                                width={products[2].width}
                                height={products[2].height}
                                className="rounded-lg hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(products[2].id)}
                            />
                        </div>
                    </div>

                    <div className="space-y-4 flex flex-col items-center">
                        <div className="flex justify-center w-full">
                            <Image
                                src={imgError[products[1].id] ? '/placeholder.jpg' : products[1].image}
                                alt="Eye Drops"
                                width={products[1].width}
                                height={products[1].height}
                                className="rounded-lg hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(products[1].id)}
                            />
                        </div>
                        <div className="flex justify-center w-full">
                            <Image
                                src={imgError[products[3].id] ? '/placeholder.jpg' : products[3].image}
                                alt="Outdoor Sports Sunglasses"
                                width={products[3].width}
                                height={products[3].height}
                                className="rounded-lg hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(products[3].id)}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - 2 Items per Row */}
                <div className="grid grid-cols-2 gap-4 md:hidden w-full px-4">
                    <div className="space-y-4 flex flex-col items-center">
                        <div className="flex justify-center w-full">
                            <Image
                                src={imgError[products[0].id] ? '/placeholder.jpg' : products[0].image}
                                alt="Contact Lenses"
                                width={products[0].width}
                                height={products[0].height}
                                className="rounded-lg hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(products[0].id)}
                            />
                        </div>
                        <div className="flex justify-center w-full">
                            <Image
                                src={imgError[products[2].id] ? '/placeholder.jpg' : products[2].image}
                                alt="Classics Sunglasses"
                                width={products[2].width}
                                height={products[2].height}
                                className="rounded-lg hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(products[2].id)}
                            />
                        </div>
                    </div>

                    <div className="space-y-4 flex flex-col items-center">
                        <div className="flex justify-center w-full">
                            <Image
                                src={imgError[products[1].id] ? '/placeholder.jpg' : products[1].image}
                                alt="Eye Drops"
                                width={products[1].width}
                                height={products[1].height}
                                className="rounded-lg hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(products[1].id)}
                            />
                        </div>
                        <div className="flex justify-center w-full">
                            <Image
                                src={imgError[products[3].id] ? '/placeholder.jpg' : products[3].image}
                                alt="Outdoor Sports Sunglasses"
                                width={products[3].width}
                                height={products[3].height}
                                className="rounded-lg hover:scale-105 transition-transform duration-300"
                                onError={() => handleImageError(products[3].id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
}
