"use client";

import React from 'react';
import Image from 'next/image';
import { testimonials, placeholderImages } from '@/lib/data';
import { Star, StarHalf } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Rating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="h-5 w-5 fill-current" />)}
      {halfStar && <StarHalf className="h-5 w-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300 fill-current" />)}
    </div>
  );
};

export default function TestimonialsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-muted/50 overflow-hidden">
        <div className="relative">
            <div className="absolute inset-0 -z-10 bg-[url('https://picsum.photos/seed/bokeh/1920/1080')] bg-cover bg-center" data-ai-hint="bokeh background"></div>
            <div className="absolute inset-0 -z-10 bg-background/80 backdrop-blur-sm"></div>
        </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We take pride in our work, and our clients' satisfaction speaks for itself.
          </p>
        </div>
        
        <Carousel 
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = placeholderImages.find(p => p.id === testimonial.avatarId);
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="glassmorphic rounded-xl p-8 text-center shadow-lg">
                      <Rating rating={testimonial.rating} />
                      <blockquote className="mt-6 text-lg italic text-foreground">
                        "{testimonial.comment}"
                      </blockquote>
                      <div className="mt-8 flex items-center justify-center gap-4">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={testimonial.name}
                            data-ai-hint={image.imageHint}
                            width={64}
                            height={64}
                            className="rounded-full w-16 h-16 object-cover border-4 border-primary/50"
                          />
                        )}
                        <div>
                          <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
