"use client";
import { useEffect, useState } from "react";
import { ProductType } from '../../types';
import { mockProductDetails } from '../../services/mockData';
import { ImageGallery } from "../product/ImageGallery";

export default function ProductImage() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        const productDetails = await mockProductDetails;
        const imageUrls = productDetails.map(product => product.image);
        setImages(imageUrls);
      } catch (err) {
        console.error('Error loading product images:', err);
        setError('Failed to load product images');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  if (isLoading) {
    return <div className="w-3/5 p-4 mt-24 ml-20 mr-4">Loading product images...</div>;
  }

  if (error) {
    return <div className="w-3/5 p-4 mt-24 ml-20 mr-4 text-red-500">{error}</div>;
  }

  return <ImageGallery images={images} wrapperClassName="w-3/5 p-4 mt-20 ml-28 mr-4" />;
}

