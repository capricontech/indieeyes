import React from 'react';

const shapes = [
  { name: 'Square', image: '/assets/images/browserByShoap/image (1).png', count: 132 },
  { name: 'Rectangle', image: '/assets/images/browserByShoap/image (2).png', count: 132 },
  { name: 'Round', image: '/assets/images/browserByShoap/image (3).png', count: 132 },
  { name: 'Geometric', image: '/assets/images/browserByShoap/image (4).png', count: 132 },
  { name: 'Cats Eye', image: '/assets/images/browserByShoap/image (5).png', count: 132 },
  { name: 'Aviator', image: '/assets/images/browserByShoap/image (6).png', count: 132 },
  { name: 'Wayfarer', image: '/assets/images/browserByShoap/image (7).png', count: 132 },
  { name: 'Rimless', image: '/assets/images/browserByShoap/image (8).png', count: 132 },
  { name: 'Half Rim', image: '/assets/images/browserByShoap/rec.png', count: 132 }
];

export default function  BrowseByShape() {
  return (
    <div className="relative w-full h-[1085px]">
      {/* White background section */}
      <div className="absolute w-screen h-[539px] left-1/2 -translate-x-1/2 top-0 bg-white" 
       
      />

      {/* Purple background section */}
      <div className="absolute w-screen h-[549px] left-1/2 -translate-x-1/2 top-[536px] bg-[#DBDBED]"
        
      />

      {/* Content Container */}
      <div className="relative max-w-[1454px] h-full mx-auto">
        {/* Title */}
        <h2 className="absolute w-[278px] h-[39px] left-1/2 -translate-x-1/2 top-[53px] font-['Century_Gothic'] font-bold text-[32px] leading-[39px] text-center capitalize text-[#171717]">
          Browse by Shapes
        </h2>

        {/* Grid Container */}
        <div className="absolute w-[951.38px] h-[816px] left-1/2 -translate-x-1/2 top-[140px] grid grid-cols-3 gap-x-[18.69px] gap-y-[18.42px]">
          {shapes.map((shape, index) => (
            <div
              key={index}
              className="w-[304.85px] h-[259.72px] bg-white rounded-lg shadow-[0px_2px_20px_rgba(33,69,118,0.25)]"
            >
              <div className="relative h-full flex flex-col items-center">
                {/* Image container */}
                <div className="w-[274.46px] h-[128.94px] mt-[24.86px] mb-[20px] flex items-center justify-center">
                  <img
                    src={shape.image}
                    alt={shape.name}
                    className="w-[197.23px] h-[72.76px] object-contain"
                  />
                </div>

                {/* Text content */}
                <div className="text-center">
                  <h3 className="font-['Century_Gothic'] font-bold text-[24px] leading-[29px] text-[#171717] capitalize mb-[6px]">
                    {shape.name}
                  </h3>
                  <p className="font-['Roboto'] text-[16px] leading-[19px] text-[#707070] capitalize">
                    ({shape.count} Products Found)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

