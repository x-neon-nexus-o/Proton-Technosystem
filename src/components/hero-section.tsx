"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { placeholderImages } from '@/lib/data';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const heroImage = placeholderImages.find(p => p.id === 'hero-workshop');

  const handleScroll = () => {
    if (window.innerWidth > 768) {
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trustBadges = [
    { text: 'Certified Technicians' },
    { text: 'Genuine Parts' },
    { text: 'Satisfaction Guaranteed' },
  ];

  return (
    <section className="relative h-[90vh] min-h-[600px] md:h-screen flex items-center justify-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          priority
          className="object-cover -z-20"
          style={{ transform: `translateY(${offsetY * 0.4}px) scale(1.1)` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 -z-10"></div>
      
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter drop-shadow-2xl leading-tight">
          <span className="text-glow-primary">Precision</span> in Every Pixel, <br /> 
          <span className="text-glow-secondary">Perfection</span> in Every Repair.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-lg">
          Projectors | DSLR & SLR Cameras | Security Cameras | AV Solutions
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-lg font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:saturate-150 hover:scale-105 transition-all duration-300 button-glow-gradient w-full sm:w-auto">
            Book a Repair <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg font-bold bg-transparent border-2 border-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <Phone className="mr-2 h-5 w-5" /> Call Now
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
          {trustBadges.map((badge, index) => (
            <div key={index} className="px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-semibold">
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
