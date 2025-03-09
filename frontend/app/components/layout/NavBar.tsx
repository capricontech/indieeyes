"use client";
import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi"; 
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"; // Wishlist & Cart Icon
import { FaUserCircle } from "react-icons/fa"; // User Avatar Icon

export default function NavBar () {
    return (
        <div className="absolute top-[35px] left-0 w-full bg-[#332A9B] shadow-lg">
            {/* Mobile View */}
            <div className="flex md:hidden flex-col w-full px-4 py-4 text-white">
                <div className="flex items-center justify-between mb-4">
                    <img src="/assets/icons/logo.png" alt="logo" className="w-8 h-8" />
                    <img src="/assets/icons/name.png" alt="brand name" className="h-6" />
                    <div className="flex items-center space-x-6 ">
                        <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
                        <AiOutlineHeart className="text-2xl cursor-pointer" />
                        <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
                        <Link href="/login">
                            Login
                        </Link>
                    </div>
                </div>
                <div className="relative w-full">
                <input
                        type="text"
                        placeholder="Search Products"
                        className="w-full h-[40px] bg-white bg-opacity-20 text-white px-12 rounded-full focus:outline-none placeholder-white text-base"
                    />
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                    
                </div>
            </div>

            {/* Desktop View - Unchanged */}
            <div className="hidden md:flex h-[70px] items-center justify-between px-16 text-white">
                <div className="flex items-center space-x-2 md:ml-20">
                    <img src="/assets/icons/logo.png" alt="logo" className="w-10 h-10" />
                    <img src="/assets/icons/name.png" alt="brand name" className="h-6" />
                </div>

                <div className="relative w-[600px] md:w-[400px]">
                    <input
                        type="text"
                        placeholder="Search Products"
                        className="w-full h-[40px] bg-white bg-opacity-20 text-white px-12 rounded-full focus:outline-none placeholder-white text-base"
                    />
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg" />
                </div>

                <div className="flex items-center space-x-6 ">
                    <div className="flex items-center space-x-6 mr-20">
                        <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
                        <AiOutlineHeart className="text-2xl cursor-pointer" />
                        <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
                        <div className="flex items-center space-x-3 ">
                        <Link href="/login" className="text-white text-base">
                            Login
                        </Link>
                        <FaUserCircle className="text-3xl cursor-pointer" />
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

