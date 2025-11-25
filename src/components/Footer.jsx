import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#0f0f0f] to-[#202020] text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div>
                        <div className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            PROTON TECHNOSYSTEM
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner for professional electronics repair. We bring precision and expertise to every device we touch.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#products" className="text-gray-400 hover:text-primary transition-colors">Products</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Projector Repair</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">DSLR Camera Repair</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">CCTV Installation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">AV Solutions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Home Theater</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                                <span>Haware Centurian Mall, Nerul, Navi Mumbai, 400706</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>support@proton.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Proton Technosystem. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span>Made with</span>
                        <Heart size={16} className="text-primary fill-current animate-pulse" />
                        <span>by PROTON TECHNOSYSTEM</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
