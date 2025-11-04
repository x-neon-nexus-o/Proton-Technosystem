import { features } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 relative bg-muted/30">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-50"></div>
        <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
                Why Choose Proton Technosystem?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We're not just technicians; we're your trusted partners in technology solutions.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
                <div key={feature.title} className="group">
                    <Card className="h-full text-center glassmorphic shadow-lg rounded-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:shadow-primary/20">
                        <CardHeader className="p-8">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-secondary/30">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                            <CardDescription className="mt-2 text-base">
                                {feature.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
}
