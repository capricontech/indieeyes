"use client";
import { useState, useEffect } from "react";
import { CustomerReview } from "../../types";
import productRatingService from "../../services/api/productRating";

export default function CustomerRatings() {
  const [customerReviews, setCustomerReviews] = useState<CustomerReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCustomerReviews = async () => {
      try {
        setIsLoading(true);
        const reviews = await productRatingService.getCustomerReviews();
        setCustomerReviews(reviews);
      } catch (error) {
        console.error("Error fetching customer reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomerReviews();
  }, []);

  if (isLoading) {
    return <div className="p-6">Loading ratings...</div>;
  }

  // Calculate average rating
  const averageRating = customerReviews.length > 0
    ? (customerReviews.reduce((sum, review) => sum + review.rating, 0) / customerReviews.length).toFixed(1)
    : "0.0";

  // Get customer photos
  const photos = customerReviews.map(review => review.productImage);
  
  // Count ratings by star level
  const ratingStats = customerReviews.reduce((acc, review) => {
    const stars = review.rating;
    if (!acc[stars]) {
      acc[stars] = { stars, count: 0 };
    }
    acc[stars].count++;
    return acc;
  }, {} as Record<number, { stars: number; count: number }>);

  const totalReviews = customerReviews.length;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Rating Score */}
      <h2 className="text-4xl font-bold">{averageRating} ★</h2>
      <p className="text-gray-500">{totalReviews} Verified Buyers</p>

      {/* Rating Bars */}
      <div className="mt-6 space-y-2">
        {[5, 4, 3, 2, 1].map((star) => {
          const stats = ratingStats[star] || { stars: star, count: 0 };
          const percentage = totalReviews > 0 ? (stats.count / totalReviews) * 100 : 0;
          
          return (
            <div key={star} className="flex items-center space-x-2">
              <span className="text-sm font-medium w-8">{star} ★</span>
              <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden">
                <div
                  className="bg-indigo-600 h-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm w-8 text-right">{stats.count}</span>
            </div>
          );
        })}
      </div>

      {/* Customer Photos */}
      {photos.length > 0 && (
        <>
          <h3 className="mt-6 font-semibold">Customer Photos ({photos.length})</h3>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {photos.slice(0, 8).map((photo, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={photo}
                  alt={`Customer photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
  
  