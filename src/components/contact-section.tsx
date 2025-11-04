import { MapPin, Clock } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a question or need a repair? Visit our store or send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl">
            {/* Map Placeholder */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/map/800/600')"}} data-ai-hint="map location">
                    <div className="w-full h-full bg-black/50 flex items-center justify-center">
                         <div className="text-center text-white p-8 bg-black/30 rounded-lg backdrop-blur-sm">
                            <MapPin className="mx-auto h-12 w-12 text-primary" />
                            <h3 className="text-2xl font-bold mt-4">Find Us Here</h3>
                            <p className="mt-2">Google Maps coming soon</p>
                         </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="glassmorphic p-8 rounded-xl shadow-2xl">
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-12 text-center text-muted-foreground grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glassmorphic p-6 rounded-lg">
                <Clock className="w-8 h-8 mx-auto text-primary mb-3" />
                <h4 className="text-lg font-bold text-foreground">Opening Hours</h4>
                <p>Monday – Saturday</p>
                <p>10:00 AM – 8:00 PM</p>
            </div>
            <div className="glassmorphic p-6 rounded-lg">
                <MapPin className="w-8 h-8 mx-auto text-secondary mb-3" />
                <h4 className="text-lg font-bold text-foreground">Our Location</h4>
                <p>Haware Centurian Mall, Sector 19A</p>
                <p>Nerul, Navi Mumbai, Maharashtra 400706</p>
            </div>
        </div>
      </div>
    </section>
  );
}
