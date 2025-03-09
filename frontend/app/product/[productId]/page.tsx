'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Share2 } from 'lucide-react';
import { mockProductGrid } from '../../services/mockData';

export default function ProductPage() {
    const params = useParams();
    const productId = params.productId as string;

    // In a real application, you would fetch the product data from an API
    const product = mockProductGrid.find(p => p.id.toString() === productId) || mockProductGrid[0];

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Add to cart logic
        console.log('Adding to cart:', {
            product,
            size: selectedSize,
            color: selectedColor,
            quantity
        });
    };

    if (!product) {
        return <div className="container mx-auto px-4 py-12">Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <nav className="text-sm">
                    <ol className="list-none p-0 inline-flex">
                        <li className="flex items-center">
                            <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="flex items-center">
                            <Link href="/category" className="text-gray-500 hover:text-blue-600">Eyewear</Link>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="text-gray-900">{product.name}</li>
                    </ol>
                </nav>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Images */}
                <div className="md:w-1/2">
                    <div className="relative h-[500px] bg-gray-100 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src={product.images?.[selectedImage] || "/placeholder.jpg"}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain"
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        {Array.isArray(product.images) && product.images.slice(0, 5).map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`relative h-20 bg-gray-100 rounded-md overflow-hidden ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}`}
                            >
                                <Image
                                    src={image}
                                    alt={`${product.name} view ${index + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 20vw, 10vw"
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span key={star} className={star <= product.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>

                    <div className="mb-6">
                        <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
                        {product.originalPrice && (
                            <div className="flex items-center gap-2">
                                <p className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                                <span className="bg-red-100 text-red-700 px-2 py-1 text-xs font-semibold rounded-md">
                                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-gray-600">{product.description}</p>
                    </div>

                    {/* Color Selection */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Color</h3>
                        <div className="flex gap-2">
                            {['Black', 'Brown', 'Blue', 'Gray', 'Green'].map(color => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-10 h-10 rounded-full ${color === 'Black' ? 'bg-black' :
                                        color === 'Brown' ? 'bg-amber-800' :
                                            color === 'Blue' ? 'bg-blue-600' :
                                                color === 'Gray' ? 'bg-gray-400' :
                                                    'bg-green-600'
                                        } ${selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                                    aria-label={color}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold">Size</h3>
                            <button className="text-blue-600 text-sm">Size Guide</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['S', 'M', 'L', 'XL'].map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-10 border ${selectedSize === size
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-300 text-gray-700'
                                        } rounded-md flex items-center justify-center font-medium`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity Selection */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-2">Quantity</h3>
                        <div className="flex items-center">
                            <button
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                className="border border-gray-300 rounded-l-md px-4 py-2"
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="border-t border-b border-gray-300 px-4 py-2 w-16 text-center"
                            />
                            <button
                                onClick={() => setQuantity(prev => prev + 1)}
                                className="border border-gray-300 rounded-r-md px-4 py-2"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 font-medium"
                        >
                            <ShoppingCart size={20} />
                            Add to Cart
                        </button>
                        <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                            <Heart size={20} />
                        </button>
                        <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 