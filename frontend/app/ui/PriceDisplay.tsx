"use client";

interface PriceDisplayProps {
  originalPrice: number;
  discountPercentage?: number;
  currencySymbol?: string;
}

export const PriceDisplay = ({
  originalPrice,
  discountPercentage = 0,
  currencySymbol = "₹"
}: PriceDisplayProps) => {
  const finalPrice = originalPrice - (originalPrice * (discountPercentage / 100));
  
  return (
    <div className="mt-4">
      <div className="flex items-center space-x-2">
        <div className="text-gray-400 line-through text-lg">
          {currencySymbol}{originalPrice.toLocaleString()}
        </div>
        {discountPercentage > 0 && (
          <span className="text-white bg-red-500 px-2 py-1 text-sm rounded-lg font-bold">
            {discountPercentage}% Off
          </span>
        )}
      </div>
      <div className="text-3xl font-bold mt-1">
        {currencySymbol}{finalPrice.toLocaleString()}
      </div>
      <p className="text-sm text-gray-500">Inclusive of all taxes</p>
    </div>
  );
}; 