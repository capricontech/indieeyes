import Image from 'next/image';

export default function Lenses() {
    const products = [
        {
            id: 1,
            image: '/assets/images/lenses/image (1).png',
            width: 549,
            height: 348,
        },
        {
            id: 2,
            image: '/assets/images/lenses/image (2).png',
            width: 594,
            height: 534,
        },
        {
            id: 3,
            image: '/assets/images/lenses/image (3).png',
            width: 594,
            height: 534,
        },
        {
            id: 4,
            image: '/assets/images/lenses/image (4).png',
            width: 694,
            height: 348,
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-center mb-6">Contact Lenses & More</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-4xl mx-auto w-full">
                <div className="space-y-4 md:space-y-4 flex flex-col items-center">
                    <div className="flex justify-center w-full">
                        <Image 
                            src={products[0].image} 
                            alt="Contact Lenses" 
                            width={products[0].width} 
                            height={products[0].height} 
                            className="rounded-lg hover:scale-105 transition-transform duration-300" 
                        />
                    </div>
                    <div className="flex justify-center w-full">
                        <Image 
                            src={products[2].image} 
                            alt="Classics Sunglasses" 
                            width={products[2].width} 
                            height={products[2].height} 
                            className="rounded-lg hover:scale-105 transition-transform duration-300" 
                        />
                    </div>
                </div>

                <div className="space-y-4 md:space-y-4 flex flex-col items-center">
                    <div className="flex justify-center w-full">
                        <Image 
                            src={products[1].image} 
                            alt="Eye Drops" 
                            width={products[1].width} 
                            height={products[1].height} 
                            className="rounded-lg hover:scale-105 transition-transform duration-300" 
                        />
                    </div>
                    <div className="flex justify-center w-full">
                        <Image 
                            src={products[3].image} 
                            alt="Outdoor Sports Sunglasses" 
                            width={products[3].width} 
                            height={products[3].height} 
                            className="rounded-lg hover:scale-105 transition-transform duration-300" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
