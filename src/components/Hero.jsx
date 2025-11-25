import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone, Shield, Star, Clock } from 'lucide-react';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', // Workshop/Tech image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `translateY(${offset * 0.5}px)`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative pt-20">
                <div className="max-w-3xl text-white">
                    <div className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm animate-fade-in-up">
                        <span className="text-sm font-medium tracking-wider uppercase">Electronics Repair Specialists</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
                        Precision in <span className="text-primary">Every Pixel</span>,<br />
                        Perfection in <span className="text-secondary">Every Repair</span>.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up delay-200">
                        Expert repair services for Projectors, DSLR/SLR Cameras, Security Systems, and AV Solutions. We bring your devices back to life.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
                        <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-lg shadow-lg hover:shadow-red-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                            Book Repair
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/80 rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                            <Phone size={20} />
                            Call Now
                        </button>
                    </div>

                    {/* Trust Badges */}
                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in-up delay-400">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/20 hover:bg-black/40 transition-all hover:scale-105 shadow-lg">
                            <div className="p-2 bg-primary/20 rounded-full text-primary ring-1 ring-primary/50">
                                <Shield size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-lg text-white">15+ Years</div>
                                <div className="text-xs text-gray-300 font-medium">Experience</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/20 hover:bg-black/40 transition-all hover:scale-105 shadow-lg">
                            <div className="p-2 bg-secondary/20 rounded-full text-secondary ring-1 ring-secondary/50">
                                <Star size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-lg text-white">5000+</div>
                                <div className="text-xs text-gray-300 font-medium">Happy Customers</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/20 hover:bg-black/40 transition-all hover:scale-105 shadow-lg">
                            <div className="p-2 bg-green-500/20 rounded-full text-green-400 ring-1 ring-green-500/50">
                                <Clock size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-lg text-white">Fast</div>
                                <div className="text-xs text-gray-300 font-medium">Turnaround</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
