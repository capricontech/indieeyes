export default function CategoryLoading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse">
                {/* Header skeleton */}
                <div className="h-10 bg-gray-200 rounded-md mb-6 w-1/3"></div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar skeleton */}
                    <div className="hidden md:block w-[350px]">
                        <div className="h-80 bg-gray-200 rounded-md mb-4"></div>
                        <div className="h-60 bg-gray-200 rounded-md"></div>
                    </div>

                    {/* Products grid skeleton */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Array(12).fill(0).map((_, i) => (
                            <div key={i} className="bg-gray-200 rounded-md">
                                <div className="h-48 md:h-64 rounded-t-md"></div>
                                <div className="p-3">
                                    <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 