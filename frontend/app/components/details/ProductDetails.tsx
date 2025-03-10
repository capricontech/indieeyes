"use client";
import React, { useState } from "react";
import { Heart, Share2 } from "lucide-react";
import { ColorSelector } from "../../ui/ColorSelector";
import { SizeSelector, SizeOption } from "../../ui/SizeSelector";
import { PriceDisplay } from "../../ui/PriceDisplay";
import { DimensionsDisplay, DimensionItem } from "../product/DimensionsDisplay";
import { Specifications, Specification } from "../product/Specifications";

// Sample data
const colors = ["#4A90E2", "#7ED321", "#8B572A", "#F5F5F5", "#F8E71C"];

const sizesData: SizeOption[] = [
  { id: 'xs', label: 'XS', measurement: 130 },
  { id: 's', label: 'S', measurement: 135 },
  { id: 'm', label: 'M', measurement: 140 },
  { id: 'l', label: 'L', measurement: 145 }
];

const dimensions: DimensionItem[] = [
  { 
    value: "50 mm", 
    label: "Lens Width", 
    imageSrc: "/assets/images/productPage/size/image 25.png" 
  },
  { 
    value: "18 mm", 
    label: "Bridge Width", 
    imageSrc: "/assets/images/productPage/size/image 26.png" 
  },
  { 
    value: "138 mm", 
    label: "Temple Length", 
    imageSrc: "/assets/images/productPage/size/image 27.png" 
  },
  { 
    value: "40 mm", 
    label: "Lens Height", 
    imageSrc: "/assets/images/productPage/size/image 28.png" 
  }
];

const specifications: Specification[] = [
  { label: "Product Type", value: "Wayfarer Sunglasses" },
  { label: "Feature", value: "UV Protected Lens" },
  { label: "Frame Color", value: "Black" },
  { label: "Case", value: "Hard Case" },
  { label: "Lens Color", value: "Cobalt Grey" },
  { label: "Style", value: "Full Rim" },
  { label: "Face Shape", value: "Square" },
  { label: "Warranty", value: "1 year" }
];

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(colors[1]);
  const [selectedSize, setSelectedSize] = useState(sizesData[1].id);
  const [pincode, setPincode] = useState("");

  return (
    <div className="w-2/5 p-4 mt-24 mr-20">
      {/* Product Title and Actions */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">Black Full Rim Wayfarer</h1>
          <p className="text-gray-600 mt-1">Unisex aviator sunglasses with UV protection lenses</p>
          <div className="mt-2 flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-lg">⭐ 4.2 | 11 Ratings</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <Heart className="w-6 h-6 cursor-pointer text-gray-600 hover:text-red-500" />
          <Share2 className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-500" />
        </div>
      </div>

      {/* Pricing Section */}
      <PriceDisplay originalPrice={2000} discountPercentage={50} />

      {/* Color Selection */}
      <ColorSelector 
        colors={colors} 
        defaultColor={selectedColor} 
        onColorChange={setSelectedColor} 
      />

      {/* Size Selection */}
      <SizeSelector 
        sizes={sizesData} 
        defaultSizeId={selectedSize} 
        onSizeChange={setSelectedSize} 
      />

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-medium flex-1">
          BUY NOW
        </button>
        <button className="bg-gray-900 hover:bg-black text-white py-3 px-8 rounded-lg font-medium flex-1">
          ADD TO CART
        </button>
      </div>

      {/* Delivery Check */}
      <div className="mt-6">
        <h3 className="font-semibold">Check Delivery Date</h3>
        <div className="flex mt-2">
          <input
            type="text"
            placeholder="Enter Pincode"
            className="border border-gray-300 rounded-lg px-4 py-2 flex-1"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg ml-2">
            CHECK
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
      </div>

      {/* Dimensions */}
      <DimensionsDisplay dimensions={dimensions} />

      {/* Specifications */}
      <Specifications specifications={specifications} />
    </div>
  );
}

