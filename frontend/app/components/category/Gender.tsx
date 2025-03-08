'use client';

import React, { useState, useEffect } from 'react';
import type { Gender } from "../../types";
import genderService from "../../services/api/gender";
import Image from 'next/image';
import Link from 'next/link';

export default function Gender() {
    const [loading, setLoading] = useState(true);
    const [gender, setGender] = useState<Gender[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadGender() {
          try {
            setLoading(true);
            const genderData = await genderService.getGender();
            setGender(genderData);
            setError(null);
          } catch (err) {
            console.error("Error loading gender data:", err);
            setError("Failed to load gender data. Please try again later.");
          } finally {
            setLoading(false);
          }
        }
    
        loadGender();
    }, []);

    return (
      <div className="flex  justify-center items-center gap-4 md:pt-28 pt-32 md:ml-36 ml-2 mr-2 md:mr-36">
        {gender.map((item) => (
          <Link 
            key={item.id} 
            href="/" 
            className="relative w-[280px] h-[180px] sm:w-[220px] sm:h-[120px] md:w-[350px] md:h-[230px] lg:w-[380px] lg:h-[250px]"
          >
            <Image 
              src={item.image} 
              alt={item.name} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
            <div className="absolute md:bottom-4 bottom-3 left-4 md:left-7 text-white md:text-right md:ml-48 md:mb-7">
              <h5 className="font-bold text-sm md:text-base">{item.name}</h5>
              <p className="text-xs md:text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    );
}
