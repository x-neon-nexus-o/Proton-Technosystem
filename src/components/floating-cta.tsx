"use client";

import { Phone, FileText, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FloatingCta() {
  const phoneNumber = "+911234567890";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in your services.")}`;
  
  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-2 flex justify-around items-center z-40 md:hidden">
        <Button asChild className="flex-1 bg-primary text-primary-foreground font-bold text-base py-6">
          <Link href="#contact">
            <FileText className="h-5 w-5 mr-2" />
            Get Quote
          </Link>
        </Button>
        <Button variant="outline" asChild className="flex-1 text-secondary-foreground font-bold text-base py-6 border-secondary/50 ml-2">
            <a href={`tel:${phoneNumber}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call Us
            </a>
        </Button>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <Button size="icon" asChild className="relative rounded-full h-16 w-16 bg-green-500 hover:bg-green-600 shadow-2xl">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <MessageSquare className="h-8 w-8 text-white" />
            <span className="sr-only">Chat on WhatsApp</span>
          </a>
        </Button>
      </div>
    </>
  );
}
