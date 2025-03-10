"use client";

import { useState, useEffect } from "react";

interface ImageGalleryProps {
  images: string[];
  defaultImage?: string;
  onImageChange?: (image: string) => void;
  wrapperClassName?: string;
}

export const ImageGallery = ({ 
  images,
  defaultImage,
  onImageChange,
  wrapperClassName = "w-3/5 p-4"
}: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(defaultImage || images[0] || "");

  useEffect(() => {
    if (images.length > 0 && !selectedImage) {
      setSelectedImage(images[0]);
    }
  }, [images, selectedImage]);

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    if (onImageChange) {
      onImageChange(image);
    }
  };

  if (images.length === 0) {
    return <div className={wrapperClassName}>No images available</div>;
  }

  return (
    <div className={wrapperClassName}>
      {/* Product Image and Thumbnails */}
      <div className="flex flex-col items-start w-full">
        {/* Main Image */}
        <div className="w-full  border-gray-200 rounded-lg p-8 bg-white mb-4">
          <img 
            src={selectedImage} 
            alt="Product" 
            className="w-full h-auto object-contain" 
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-3 gap-2 w-full">
          {images.map((img, index) => (
            <button 
              key={index} 
              onClick={() => handleImageSelect(img)}
              className={` rounded-lg overflow-hidden p-1 ${
                selectedImage === img ? 'border-blue-500 border-2' : 'border-gray-200'
              }`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index}`} 
                className="w-full"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 