"use client";
import React from "react";
import { FaMapMarkerAlt, FaHeadset } from "react-icons/fa";

export default function  TopBar (){
  return (
    <div className="absolute w-full h-[35px] bg-[#060325] left-1/2 ml- transform -translate-x-1/2 top-0 flex justify-between items-center px-20">
      <div className="flex ml-16 items-center space-x-2 text-white text-[12px]">
        <FaMapMarkerAlt className="text-white" />
        <span>711-2880 Nulla St. Mankato Mississippi 96522</span>
      </div>

      {/* Right Side - Help */}
      <div className="flex items-center space-x-2 text-white text-[14px] mr-16">
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
};

