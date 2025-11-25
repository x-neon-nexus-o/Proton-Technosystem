import React from 'react';

const brands = [
    "HIKVISION", "Canon", "ViewSonic", "Sony", "Epson", "Nikon", "Panasonic", "BenQ"
];

const Brands = () => {
    return (
        <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Trusted by Leading Brands</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8">
                    {/* First set of brands */}
                    {brands.map((brand, index) => (
                        <span
                            key={index}
                            className="text-3xl md:text-4xl font-bold text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {brands.map((brand, index) => (
                        <span
                            key={`dup-${index}`}
                            className="text-3xl md:text-4xl font-bold text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default Brands;
