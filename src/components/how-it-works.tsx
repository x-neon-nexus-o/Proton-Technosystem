import { Phone, ClipboardList, Wrench, Truck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const steps = [
  {
    icon: Phone,
    title: 'Contact & Visit',
    description: 'Call us or bring your device to our store for a free consultation.'
  },
  {
    icon: ClipboardList,
    title: 'Free Diagnosis & Quote',
    description: 'Our experts diagnose the issue for free and provide a transparent, no-obligation quote.'
  },
  {
    icon: Wrench,
    title: 'Expert Repair & Delivery',
    description: 'We perform high-quality repairs with genuine parts and deliver your device back to you.'
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Our Simple 3-Step Process
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Getting your electronics repaired has never been easier.
          </p>
        </div>

        <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" aria-hidden="true">
                <div className="absolute w-full h-full bg-gradient-to-r from-primary via-secondary to-primary animate-pulse"/>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {steps.map((step, index) => (
                    <div key={index} className="text-center">
                        <div className="relative inline-block">
                            <div className="w-24 h-24 mb-4 mx-auto rounded-full border-4 border-primary bg-background flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30">
                                <step.icon className="w-12 h-12 text-primary" />
                            </div>
                             <div className="absolute -top-3 -right-3 w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                                {index + 1}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                        <p className="text-muted-foreground mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
