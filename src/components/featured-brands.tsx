"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { brands } from '@/lib/data'

export default function FeaturedBrands() {
  return (
    <section className="py-12 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-bold text-muted-foreground mb-8">
          Trusted by the Best Brands in the Industry
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="pl-8 basis-1/2 md:basis-1/4 lg:basis-1/6 flex justify-center">
                <div className="p-4">
                  <brand.logo className="h-10 w-auto text-muted-foreground grayscale transition-all duration-300 hover:grayscale-0 hover:text-foreground hover:scale-110" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
