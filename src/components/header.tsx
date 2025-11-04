"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavMenu = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav className={cn(
      "flex items-center gap-1",
      isMobile ? "flex-col space-y-4 text-lg mt-8" : "hidden lg:flex"
    )}>
      {navLinks.map((link) => {
        const Wrapper = isMobile ? SheetClose : 'div';
        return (
          <Wrapper key={link.name}>
             <Button variant="ghost" asChild>
                <Link href={link.href} className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary">
                {link.name}
                </Link>
             </Button>
          </Wrapper>
        );
      })}
    </nav>
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <div className="hidden lg:flex items-center gap-4">
            <NavMenu />
            <Button variant="ghost" className="hidden xl:flex items-center gap-2 text-muted-foreground hover:text-primary animate-pulse-slow">
              <Phone className="h-4 w-4 text-primary" />
              +91 12345 67890
            </Button>
            <Button className="font-bold text-white bg-primary button-glow-primary hover:bg-primary/90 transition-all">
              Get Quote
            </Button>
          </div>
          
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] bg-background">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b">
                      <Logo />
                    </div>
                    <div className="p-4 flex-grow">
                      <NavMenu isMobile={true} />
                    </div>
                    <div className="p-4 border-t space-y-4">
                       <Button className="w-full font-bold text-white bg-primary button-glow-primary hover:bg-primary/90 transition-all">
                        Get Quote
                       </Button>
                       <Button variant="outline" className="w-full flex items-center gap-2 text-muted-foreground hover:text-primary">
                        <Phone className="h-4 w-4 text-primary" />
                        +91 12345 67890
                      </Button>
                    </div>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
