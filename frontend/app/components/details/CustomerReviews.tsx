"use client";
import { useState, useEffect } from "react";
import { CustomerReview } from "../../types";
import productRatingService from "../../services/api/productRating";
import Image from "next/image";

export default function CustomerReviews() {
  const [reviews, setReviews] = useState<CustomerReview[]>([]);

  useEffect(() => {
    const fetchCustomerReviews = async () => {
      try {
        const reviewsData = await productRatingService.getCustomerReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching customer reviews:", error);
      }
    };

    fetchCustomerReviews();
  }, []);

  // Function to get the background color based on rating
  const getRatingBgColor = (rating: number) => {
    if (rating >= 4) return "bg-indigo-600";
    if (rating === 3) return "bg-yellow-500";
    if (rating === 2) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Customer Reviews ({reviews.length})</h2>
      
      <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar">
        {reviews.map((review, index) => (
          <div key={index} className="mb-6">
            {/* Rating Badge */}
            <div className="flex items-center mb-2">
              <span className={`text-white px-2 py-1 rounded-md text-sm ${getRatingBgColor(review.rating)}`}>
                {review.rating} ★
              </span>
            </div>
            
            {/* Review Content */}
            <p className="text-gray-700 mb-3">{review.review}</p>
            
            {/* Product Image */}
            {review.productImage && (
              <div className="flex space-x-2 mb-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                  <img src={review.productImage} alt="Review image" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
            
            {/* User Info */}
            <div className="flex items-center">
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            
            {/* Divider */}
            {index < reviews.length - 1 && <hr className="my-6 border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
}
  