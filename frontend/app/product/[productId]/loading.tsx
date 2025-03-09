export default function ProductLoading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse">
                {/* Breadcrumb skeleton */}
                <div className="h-6 bg-gray-200 w-1/3 rounded-md mb-6"></div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Product Image skeleton */}
                    <div className="md:w-1/2">
                        <div className="h-[500px] bg-gray-200 rounded-lg mb-4"></div>
                        <div className="grid grid-cols-5 gap-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-20 bg-gray-200 rounded-md"></div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details skeleton */}
                    <div className="md:w-1/2">
                        <div className="h-10 bg-gray-200 rounded-md mb-4 w-3/4"></div>
                        <div className="h-6 bg-gray-200 rounded-md mb-6 w-1/4"></div>

                        <div className="h-8 bg-gray-200 rounded-md mb-6 w-1/5"></div>

                        <div className="h-6 bg-gray-200 rounded-md mb-2 w-1/6"></div>
                        <div className="h-20 bg-gray-200 rounded-md mb-6"></div>

                        <div className="h-6 bg-gray-200 rounded-md mb-2 w-1/6"></div>
                        <div className="flex gap-2 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            ))}
                        </div>

                        <div className="h-6 bg-gray-200 rounded-md mb-2 w-1/6"></div>
                        <div className="flex gap-2 mb-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-12 h-10 bg-gray-200 rounded-md"></div>
                            ))}
                        </div>

                        <div className="h-6 bg-gray-200 rounded-md mb-2 w-1/6"></div>
                        <div className="h-12 bg-gray-200 rounded-md mb-8 w-1/3"></div>

                        <div className="flex gap-4">
                            <div className="flex-1 h-12 bg-gray-200 rounded-md"></div>
                            <div className="h-12 w-12 bg-gray-200 rounded-md"></div>
                            <div className="h-12 w-12 bg-gray-200 rounded-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 