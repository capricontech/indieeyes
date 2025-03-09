'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ProductError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-8">
                We couldn't find the product you're looking for. It may have been removed or you might have followed a broken link.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Try again
                </button>
                <Link
                    href="/category"
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                    Browse products
                </Link>
            </div>
        </div>
    );
} 