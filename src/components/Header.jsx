import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ isDarkMode, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState('EN'); // 'EN' or 'HI'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'EN' ? 'HI' : 'EN');
    };

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Products', href: '#products' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2'
                : 'bg-gradient-to-b from-black/50 to-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        PROTON
                    </div>
                    <span className={`hidden md:block text-sm font-medium tracking-wider transition-colors ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'}`}>
                        TECHNOSYSTEM
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`font-medium transition-colors relative group ${isScrolled ? 'text-textPrimary dark:text-gray-200 hover:text-primary dark:hover:text-primary' : 'text-white hover:text-primary'}`}
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-textPrimary dark:text-white' : 'hover:bg-white/20 text-white'}`}
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={toggleLanguage}
                        className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-textPrimary dark:text-white' : 'hover:bg-white/20 text-white'}`}
                    >
                        <span className="text-xl">{language === 'EN' ? '🇬🇧' : '🇮🇳'}</span>
                        <span className="text-sm font-medium">{language}</span>
                    </button>

                    <a
                        href="tel:+919876543210"
                        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 animate-pulse-slow ${isScrolled ? 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-white' : 'bg-white/20 text-white hover:bg-white hover:text-secondary'}`}
                    >
                        <Phone size={20} />
                    </a>

                    <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Get Quote
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden transition-colors ${isScrolled ? 'text-textPrimary dark:text-white' : 'text-white'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl py-4 px-4 flex flex-col space-y-4 animate-slide-down">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-textPrimary dark:text-gray-200 hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center space-x-2 text-textPrimary dark:text-white"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            <span className="font-medium">Theme</span>
                        </button>
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-2 text-textPrimary dark:text-white"
                        >
                            <span className="text-2xl">{language === 'EN' ? '🇬🇧' : '🇮🇳'}</span>
                            <span className="font-medium">{language === 'EN' ? 'English' : 'Hindi'}</span>
                        </button>
                        <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium shadow-md">
                            Get Quote
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
