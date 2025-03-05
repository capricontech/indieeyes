"use client";
import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi"; 
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"; // Wishlist & Cart Icon
import { FaUserCircle } from "react-icons/fa"; // User Avatar Icon

export default function NavBar () {
    return (
        <div className="absolute top-[35px] left-0 w-full h-[70px] bg-[#332A9B] shadow-lg flex items-center justify-between px-16 text-white">

            {/* Left Section - Logo */}
            <div className="flex items-center space-x-2 ml-20">
                <img src="/assets/icons/logo.png" alt="logo" className="w-10 h-10" />
                <img src="/assets/icons/name.png" alt="brand name" className="h-6" />
            </div>

            {/* Search Bar */}
            <div className="relative w-[600px]">
                <input
                    type="text"
                    placeholder="Search Products"
                    className="w-full h-[40px] bg-white bg-opacity-20 text-white px-12 rounded-full focus:outline-none placeholder-white"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg" />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6 mr-20">
                
                <div className="flex items-center space-x-6 mr-36">
                    <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
                    <AiOutlineHeart className="text-2xl cursor-pointer" />
                    <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
                </div>

                <div className="flex items-center space-x-3 mr-16">
                    <Link href="/login" className="text-white">
                        Login
                    </Link>
                    <FaUserCircle className="text-3xl cursor-pointer" />
                </div>
                
            </div>

        </div>
    );
};

