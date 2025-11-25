import React from 'react';
import { Projector, Camera, Video, Speaker, Monitor, Film } from 'lucide-react';

const services = [
    {
        icon: <Projector size={48} />,
        title: "Projector Repair",
        description: "Expert repair for all major projector brands. Lamp replacement, lens cleaning, and motherboard fixes.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        icon: <Camera size={48} />,
        title: "DSLR & SLR Repair",
        description: "Precision sensor cleaning, lens calibration, and shutter repair for Canon, Nikon, Sony, and more.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        icon: <Video size={48} />,
        title: "Security Systems",
        description: "Installation and maintenance of CCTV cameras, DVRs, and NVRs for home and business security.",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        icon: <Speaker size={48} />,
        title: "AV Equipment",
        description: "Repair and setup of amplifiers, mixers, and professional audio equipment for events and studios.",
        image: "https://images.unsplash.com/photo-1520529986492-5cf362ae7151?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        icon: <Monitor size={48} />,
        title: "IT Equipment",
        description: "Desktop and laptop repairs, hardware upgrades, and software troubleshooting.",
        image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        icon: <Film size={48} />,
        title: "Home Theater",
        description: "Custom home theater installation, calibration, and acoustic treatment for the ultimate cinema experience.",
        image: "https://images.unsplash.com/photo-1593784991095-a20506948430?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-textPrimary dark:text-white">
                        Our Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        Comprehensive electronics repair and installation solutions for home and business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group h-96 perspective-1000">
                            <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">
                                {/* Front Side */}
                                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-primary to-secondary p-8 text-white flex flex-col justify-center items-center text-center">
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="mb-8 text-white/90">{service.description}</p>
                                    <button className="px-6 py-2 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
