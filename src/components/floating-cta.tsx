"use client";

import { Phone, MessageSquare, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingCta() {
  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-2 flex justify-around items-center z-40 md:hidden">
        <Button variant="ghost" className="flex flex-col h-auto p-1 text-primary">
          <Phone className="h-6 w-6" />
          <span className="text-xs">Call Us</span>
        </Button>
        <Button variant="ghost" className="flex flex-col h-auto p-1 text-green-500">
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs">WhatsApp</span>
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground font-bold">
          <FileText className="h-4 w-4 mr-2" />
          Get Quote
        </Button>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <Button size="icon" className="relative rounded-full h-16 w-16 bg-green-500 hover:bg-green-600 shadow-2xl">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <MessageSquare className="h-8 w-8 text-white" />
          <span className="sr-only">Chat on WhatsApp</span>
        </Button>
      </div>
    </>
  );
}
