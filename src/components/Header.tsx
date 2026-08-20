import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const ORDER_URL = 'https://big-arts-tacos-los-angeles.cloveronline.com/menu/all';

const navLinks = [
  { name: 'Menu', href: ORDER_URL, external: true },
  { name: 'Our Story', href: '/story' },
  { name: 'Catering', href: '/catering' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Gallery', href: '/gallery' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary',
          isScrolled ? 'shadow-lg py-2' : 'py-3'
        )}
      >
        <div className="container-tight mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo - extends below header for unique look */}
            <Link to="/" className="flex items-center group relative">
              <div className="absolute top-1/2 -translate-y-1/3">
                <img 
                  src={logo} 
                  alt="Big Art's Breakfast Burritos" 
                  className="h-24 sm:h-28 md:h-32 w-auto transition-transform group-hover:scale-105 drop-shadow-lg"
                />
              </div>
              {/* Spacer to maintain header layout */}
              <div className="h-14 sm:h-16 w-24 sm:w-28 md:w-32" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm uppercase tracking-widest transition-colors hover:text-accent text-primary-foreground/90"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      'font-display text-sm uppercase tracking-widest transition-colors hover:text-accent',
                      location.pathname === link.href
                        ? 'text-accent'
                        : 'text-primary-foreground/90'
                    )}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+18182729961"
                className="p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bigartstacos/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <Button 
                asChild
                className="h-10 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-display rounded-full px-6"
              >
                <a href="https://big-arts-tacos-los-angeles.cloveronline.com/menu/all" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="tracking-widest text-base leading-none">Order Now</span>
                  <span className="font-sans text-[11px] font-medium leading-none opacity-70 border-l border-primary/25 pl-2">Chatsworth</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 right-0 bg-primary shadow-lg transition-all duration-300 overflow-hidden',
            isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
          )}
        >
          <nav className="container-tight mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg uppercase tracking-widest py-2 transition-colors hover:text-accent text-primary-foreground/80"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'font-display text-lg uppercase tracking-widest py-2 transition-colors hover:text-accent',
                    location.pathname === link.href
                      ? 'text-accent'
                      : 'text-primary-foreground/80'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="flex flex-col gap-3 pt-4 border-t border-primary-foreground/20">
              <Button 
                asChild
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-display rounded-full"
              >
                <a href="https://big-arts-tacos-los-angeles.cloveronline.com/menu/all" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0 leading-none">
                  <span className="tracking-widest">Order Now</span>
                  <span className="font-sans text-[10px] font-normal opacity-80 tracking-wide -mt-1">(Chatsworth)</span>
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary border-t border-primary-foreground/10 p-3 flex gap-3">
        <Button 
          variant="outline" 
          className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display rounded-full" 
          asChild
        >
          <a href="tel:+18182729961">
            <Phone className="h-4 w-4" />
            Call
          </a>
        </Button>
        <Button 
          className="flex-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-display rounded-full" 
          asChild
        >
          <a href="https://big-arts-tacos-los-angeles.cloveronline.com/menu/all" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0 leading-none">
            <span className="tracking-widest">Order Now</span>
            <span className="font-sans text-[10px] font-normal opacity-80 tracking-wide -mt-1">(Chatsworth)</span>
          </a>
        </Button>
      </div>
    </>
  );
}
