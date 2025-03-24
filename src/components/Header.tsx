import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Declare the scrollToForm property on Window
declare global {
  interface Window {
    scrollToForm?: () => void;
  }
}

interface HeaderProps {
  scrollToForm?: () => void;
}

const Header = ({ scrollToForm }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Set current path on client side
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use window.scrollToForm if provided in props
  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPath === '/') {
      if (scrollToForm) {
        scrollToForm();
      } else if (window.scrollToForm) {
        window.scrollToForm();
      }
    } else {
      window.location.href = '/#form-section';
    }
  };

  const navLinks = [
    { name: 'Acasă', path: '/' },
    { name: 'Despre', path: '/about' },
    { name: 'Servicii', path: '/services' },
    { name: 'Mașini', path: '/cars' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path === '/') {
      window.location.href = '/';
    } else {
      window.location.href = path;
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary animated-underline">
              Smart Auto
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={cn(
                  'text-sm font-medium animated-underline py-1',
                  isScrolled
                    ? currentPath === link.path 
                      ? 'text-black' 
                      : 'text-gray-600 hover:text-black'
                    : currentPath === link.path 
                      ? 'text-primary' 
                      : 'text-gray-300 hover:text-gray-400'
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button 
              variant="outline"
              className={cn(
                "hover-lift rounded-full shadow-sm text-black font-medium",
                isScrolled 
                  ? "border-primary/50 hover:bg-primary/10" 
                  : "border-white/50 hover:bg-white/10"
              )}
              onClick={handleConsultationClick}
            >
              Consultanță Gratuită
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-gray-400")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-gray-400")} />
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
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={cn(
                'block py-2 text-base font-medium',
                currentPath === link.path
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full mt-4 rounded-full text-white font-medium"
            onClick={handleConsultationClick}
          >
            Consultanță Gratuită
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
