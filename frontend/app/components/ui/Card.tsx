import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import clsx from 'clsx';

interface CardProps {
    id: number;
    title: string;
    image: string;
    price: number;
    originalPrice?: number;
    rating?: number;
    discountPercentage?: number;
    isNew?: boolean;
    isFeatured?: boolean;
    href?: string;
    className?: string;
    onFavoriteToggle?: (id: number) => void;
    isFavorite?: boolean;
}

export default function Card({
    id,
    title,
    image,
    price,
    originalPrice,
    rating,
    discountPercentage,
    isNew,
    isFeatured,
    href = `/product/${id}`,
    className,
    onFavoriteToggle,
    isFavorite = false,
}: CardProps) {
    const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (onFavoriteToggle) {
            onFavoriteToggle(id);
        }
    };

    return (
        <Link href={href} className={clsx('group block', className)}>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 transition-all group-hover:shadow-md">
                {/* Badge indicators */}
                <div className="absolute top-2 left-2 z-10 flex gap-1.5">
                    {isNew && (
                        <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded-full font-medium">
                            New
                        </span>
                    )}
                    {isFeatured && (
                        <span className="bg-amber-500 text-white px-2 py-0.5 text-xs rounded-full font-medium">
                            Featured
                        </span>
                    )}
                    {discountPercentage && discountPercentage > 0 && (
                        <span className="bg-red-500 text-white px-2 py-0.5 text-xs rounded-full font-medium">
                            {discountPercentage}% OFF
                        </span>
                    )}
                </div>

                {/* Favorite button */}
                {onFavoriteToggle && (
                    <button
                        onClick={handleFavoriteClick}
                        className="absolute top-2 right-2 z-10 rounded-full bg-white p-1.5 shadow transition-colors hover:bg-gray-100"
                    >
                        <Heart
                            size={16}
                            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                        />
                    </button>
                )}

                {/* Product image */}
                <div className="relative aspect-square">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Product info */}
            <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">{title}</h3>

                <div className="mt-1 flex items-center gap-2">
                    <span className="font-semibold text-gray-900">₹{price.toFixed(2)}</span>
                    {originalPrice && originalPrice > price && (
                        <span className="text-sm text-gray-500 line-through">₹{originalPrice.toFixed(2)}</span>
                    )}
                </div>

                {rating !== undefined && (
                    <div className="mt-1 flex items-center gap-1">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <span className="text-xs text-gray-500">({rating.toFixed(1)})</span>
                    </div>
                )}
            </div>
        </Link>
    );
} 