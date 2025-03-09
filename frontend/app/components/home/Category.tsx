'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        title: 'Sunglasses',
        image: '/assets/images/glasses/sunglass.png',
        href: '/category/sunglasses'
    },
    {
        title: 'Eyeglasses',
        image: '/assets/images/glasses/eyeglass.png',
        href: '/category/eyeglasses'
    },
    {
        title: 'Computer glasses',
        image: '/assets/images/glasses/computer.png',
        href: '/category/computer-glasses'
    },
    {
        title: 'Sports glasses',
        image: '/assets/images/glasses/sports.png',
        href: '/category/sports-glasses'
    },
    {
        title: 'Contact Lenses',
        image: '/assets/images/glasses/contact.png',
        href: '/category/contact-lenses'
    },
    {
        title: 'Accessories',
        image: '/assets/images/glasses/contact.png',
        href: '/category/accessories'
    }
];

export default function Category() {
    return (
        <div className="bg-white pt-24 pb-10 mt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <Link href={category.href} key={index}>
                            <div className="flex flex-col items-center">
                                <div className="rounded-lg flex items-center justify-center w-full min-h-[90px] mb-1">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        width={120}
                                        height={120}
                                        className="object-contain w-full"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
