
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-bold text-primary">AutoLaComandă</h3>
            </Link>
            <p className="text-muted-foreground">
              Premium auto consultancy services with complete transparency. Specialized in second-hand vehicle acquisition tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Cars', path: '/cars' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Vehicle Selection', path: '/services#selection' },
                { name: 'Documentation', path: '/services#documentation' },
                { name: 'Transparent Pricing', path: '/services#pricing' },
                { name: 'Quality Control', path: '/services#quality' },
                { name: 'Transport & Delivery', path: '/services#transport' },
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+40723456789" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +40 723 456 789
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@autolacomanda.ro" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contact@autolacomanda.ro
                </a>
              </li>
              <li className="pt-2">
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="rounded-full w-full"
                >
                  <a 
                    href="https://wa.me/40723456789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    WhatsApp Contact
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} AutoLaComandă. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
