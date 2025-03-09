"use client";
import React from "react";
import { FaMapMarkerAlt, FaHeadset } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="absolute  md:flex w-full h-[35px] bg-[#060325] left-1/2 transform -translate-x-1/2 top-0 justify-between items-center px-4 md:px-20">
      <div className="flex md:ml-16 items-center space-x-2 text-white text-[12px]">
        <FaMapMarkerAlt className="text-white" />
        <span className="hidden md:inline">711-2880 Nulla St. Mankato Mississippi 96522</span>
        <div className="flex gap-2 flex-row md:hidden">
        <span>711-2880 Nulla St. Mankato Mississippi 96522</span> 
        <span>Need Help? Call 1800-266-0123</span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-2 text-white text-[12px] md:text-[14px] md:mr-16">
        <FaHeadset className="text-white" />
        <span>
          Need Help?{" "}
          <a href="tel:18002660123" className="font-semibold underline">
            Call 1800-266-0123
          </a>
        </span>
      </div>
    </div>
  );
}

