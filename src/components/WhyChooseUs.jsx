import React from 'react';
import { Wrench, ShieldCheck, Clock, Award, DollarSign, Search } from 'lucide-react';

const features = [
    {
        icon: <Wrench size={32} />,
        title: "Expert Technicians",
        description: "Our team consists of certified professionals with over 15 years of experience in electronics repair."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Genuine Parts",
        description: "We use only original and high-quality spare parts to ensure the longevity of your devices."
    },
    {
        icon: <Clock size={32} />,
        title: "Quick Turnaround",
        description: "We understand the value of time. Most repairs are completed within 24-48 hours."
    },
    {
        icon: <Award size={32} />,
        title: "Warranty on Repairs",
        description: "Enjoy peace of mind with our comprehensive warranty on all repairs and replaced parts."
    },
    {
        icon: <DollarSign size={32} />,
        title: "Competitive Pricing",
        description: "Transparent pricing with no hidden charges. We offer the best rates in the market."
    },
    {
        icon: <Search size={32} />,
        title: "Free Diagnosis",
        description: "We offer free initial diagnosis and a quote before proceeding with any repair work."
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            {/* Circuit Board Pattern Background (CSS only) */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-textPrimary dark:text-white">
                        Why Choose Proton?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        We combine technical expertise with customer-centric service to deliver the best repair experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-colors duration-300">
                                <div className="text-primary group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-textPrimary dark:text-white group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
