import React from 'react';

const brands = [
    { name: "HIKVISION", logo: "/hikvision.svg" },
    { name: "Canon", logo: "/VectorWiki-TUbOH__canon-wordmark.svg" },
    { name: "ViewSonic", logo: "/VectorWiki-GxHjS__viewsonic.svg" },
    { name: "Sony", logo: "/sony-logo.svg" },
    { name: "Epson", logo: "/VectorWiki-avNHH__epson-2.svg" },
    { name: "Nikon", logo: "/VectorWiki-dwXyK__nikon.svg" },
    { name: "Panasonic", logo: "/VectorWiki-g8xWQ__panasonic.svg" },
    { name: "BenQ", logo: "/VectorWiki-j7F3P__benq.svg" }
];

const Brands = () => {
    return (
        <section className="py-12 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Trusted by Leading Brands</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8">
                    {/* First set of brands */}
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-center w-32 h-16 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {brands.map((brand, index) => (
                        <div key={`dup-${index}`} className="flex items-center justify-center w-32 h-16 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Brands;
