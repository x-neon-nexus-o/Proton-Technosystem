import React from 'react';
import { PhoneCall, Search, Wrench, Truck } from 'lucide-react';

const steps = [
    {
        icon: <PhoneCall size={32} />,
        title: "Contact Us",
        description: "Call us or visit our store to describe the issue with your device."
    },
    {
        icon: <Search size={32} />,
        title: "Free Diagnosis",
        description: "Our experts inspect your device and provide a free cost estimate."
    },
    {
        icon: <Wrench size={32} />,
        title: "Expert Repair",
        description: "We fix your device using genuine parts and advanced tools."
    },
    {
        icon: <Truck size={32} />,
        title: "Delivery",
        description: "Pick up your device or get it delivered to your doorstep."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-textPrimary dark:text-white">
                        How It Works
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        Our simple 4-step process to get your device back in perfect condition.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-gray-700 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-50 dark:border-gray-700 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary transition-all duration-300 relative">
                                    <div className="text-primary">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-md">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-textPrimary dark:text-white">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm px-4">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
