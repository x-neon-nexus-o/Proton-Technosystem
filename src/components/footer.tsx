import { Logo } from './logo';
import { Button } from './ui/button';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const footerNavs = [
    {
        label: "Quick Links",
        items: [
            { href: '#', name: 'Home' },
            { href: '#services', name: 'Services' },
            { href: '#products', name: 'Products' },
            { href: '#contact', name: 'Contact Us' },
        ],
    },
    {
        label: "Services",
        items: [
            { href: '#', name: 'Projector Repair' },
            { href: '#', name: 'Camera Repair' },
            { href: '#', name: 'Security Systems' },
            { href: '#', name: 'AV Solutions' },
        ],
    },
    {
        label: "About",
        items: [
            { href: '#', name: 'Why Choose Us' },
            { href: '#', name: 'Our Process' },
            { href: '#', name: 'Testimonials' },
        ]
    }
]

const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
];

export default function Footer() {
    return (
        <footer className="bg-accent text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="md:col-span-2 lg:col-span-1">
                        <Logo />
                        <p className="mt-4 max-w-xs text-gray-400">
                            Precision in Every Pixel, Perfection in Every Repair. Your trusted partner for all electronic service needs.
                        </p>
                    </div>

                    {footerNavs.map((nav) => (
                        <div key={nav.label}>
                            <h3 className="text-lg font-semibold text-white tracking-wider">{nav.label}</h3>
                            <ul className="mt-4 space-y-3">
                                {nav.items.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="hover:text-primary transition-colors">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        Made with ❤️ by PROTON TECHNOSYSTEM.
                    </p>
                    <div className="flex items-center space-x-4 mt-6 sm:mt-0">
                        {socialLinks.map(({ icon: Icon, href }, index) => (
                             <Button key={index} variant="ghost" size="icon" asChild className="text-gray-400 hover:bg-gray-800 hover:text-white">
                                <a href={href}><Icon className="h-5 w-5" /></a>
                             </Button>
                        ))}
                    </div>
                </div>
            </div>
             <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-animated-gradient"></div>
        </footer>
    );
};
