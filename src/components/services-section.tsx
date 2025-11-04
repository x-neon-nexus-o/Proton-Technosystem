import { services, placeholderImages } from '@/lib/data';
import { FlipCard } from '@/components/ui/flip-card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Our Expert Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From projectors to security systems, we repair it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const image = placeholderImages.find(p => p.id === service.imageId);
            return (
              <FlipCard key={service.title}>
                {/* Front of the card */}
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-card rounded-xl shadow-lg border">
                  {image && (
                    <Image 
                      src={image.imageUrl}
                      alt={service.title}
                      data-ai-hint={image.imageHint}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                  )}
                  <service.icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                {/* Back of the card */}
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-xl shadow-xl">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 flex-grow">{service.description}</p>
                  <Button variant="outline" className="mt-4 bg-white/20 border-white/50 hover:bg-white/30 text-white font-bold">
                    Learn More
                  </Button>
                </div>
              </FlipCard>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:saturate-150 button-glow-gradient">
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
