
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Cars', path: '/cars' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary animated-underline">
              AutoLaComandă
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium animated-underline py-1',
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button 
              asChild 
              variant="outline"
              className="hover-lift rounded-full shadow-sm"
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'block py-2 text-base font-medium',
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild 
            className="w-full mt-4 rounded-full"
          >
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
