import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Photographer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "Excellent service! They repaired my Canon 5D Mark IV sensor issue within 2 days. The picture quality is back to perfect.",
        rating: 5
    },
    {
        name: "Priya Patel",
        role: "IT Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "We hired Proton for our office security camera setup. Professional installation and great after-sales support.",
        rating: 5
    },
    {
        name: "Amit Verma",
        role: "Home Owner",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "My home theater system had audio lag issues. The technicians diagnosed it quickly and fixed it at a very reasonable price.",
        rating: 4
    },
    {
        name: "Sneha Gupta",
        role: "Event Planner",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "Urgent projector repair for a corporate event. They saved the day with their express service!",
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-textPrimary dark:text-white">
                        What Our Clients Say
                    </h2>
                    <div className="flex justify-center gap-2 text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" size={24} />
                        ))}
                    </div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 text-primary/10">
                        <Quote size={120} />
                    </div>
                    <div className="absolute -bottom-10 -right-10 text-secondary/10 rotate-180">
                        <Quote size={120} />
                    </div>

                    {/* Testimonials Grid Stack */}
                    <div className="grid grid-cols-1 relative">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 ease-in-out transform ${index === activeIndex
                                        ? 'opacity-100 translate-x-0 z-10'
                                        : 'opacity-0 translate-x-8 z-0 pointer-events-none'
                                    }`}
                                style={{ gridArea: '1 / 1' }}
                            >
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 dark:border-gray-700 text-center">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-600 shadow-lg">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                    <div>
                                        <h4 className="text-xl font-bold text-textPrimary dark:text-white">{testimonial.name}</h4>
                                        <p className="text-primary font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-8 relative z-20">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
