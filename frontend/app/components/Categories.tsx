import React from 'react';

export default function  Categories () {
    const categories = [
        {
            id: 1,
            image: "assets/images/categories/men.png",
            style: { width: '289px', height: '254px' }
        },
        {
            id: 2,
            image: "assets/images/categories/women.png",
            style: { width: '289px', height: '164px'}
        },
        {
            id: 3,
            image: "assets/images/categories/unisex.png",
            style: { width: '289px', height: '164px' }
        },
        {
            id: 4,
            image: "assets/images/categories/kids.png",
            style: { width: '289px', height: '230px' }
        }
    ];

    return (
        <section className="w-full bg-white py-24 ml-20 mr-20">
            <div className=" justify-between">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left content */}
                    <div className="w-full lg:w-96 lg:pt-16">
                        <h2 className="text-[32px] font-bold text-[#171717] mb-5">
                            Categories
                        </h2>
                        <p className="text-sm leading-6 text-[#707070] mb-8">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries,
                        </p>
                        <button className="bg-[#6053FB] text-white px-8 py-3.5 rounded-full hover:bg-[#4c41fa] transition-colors">
                            Browse All
                        </button>
                    </div>

                    {/* Right grid */}
                        <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                            {categories.map((category) => (
                                <div key={category.id} >
                                    <div style={category.style} className="bg-[#DBE4ED] rounded-lg shadow-lg overflow-hidden aspect-[4/3] flex justify-center items-center">
                                        <img
                                            src={category.image}
                                            className="object-cover"
                                        />
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </section>
    );
};

