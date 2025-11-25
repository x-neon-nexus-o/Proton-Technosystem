import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce-slow"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} />
            </a>

            <a
                href="tel:+919876543210"
                className="w-14 h-14 bg-secondary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Call Now"
            >
                <Phone size={24} />
            </a>
        </div>
    );
};

export default FloatingButtons;
