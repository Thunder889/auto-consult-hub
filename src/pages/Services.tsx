
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  FileText, 
  CreditCard, 
  Truck, 
  ShieldCheck,
  BadgePercent,
  FileCheck,
  ReceiptText,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const ServiceSection = ({ 
  id, 
  icon: Icon, 
  title, 
  description, 
  features = [],
  imageUrl
}: { 
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features?: string[];
  imageUrl: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash === `#${id}` && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash, id]);

  return (
    <div id={id} ref={ref} className="scroll-mt-32 py-16 border-b border-gray-100 last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 animate-slide-up">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
            <Icon className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl font-bold text-primary tracking-tight mb-4">
            {title}
          </h2>
          
          <p className="text-muted-foreground mb-8">
            {description}
          </p>
          
          {features.length > 0 && (
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="order-1 lg:order-2 animate-scale-in">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AdditionalService = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => (
  <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-md">
    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const Services = () => {
  useEffect(() => {
    // Scroll to top on page load (unless there's a hash)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    
    // Set page title
    document.title = 'Our Services | AutoLaComandă';
  }, []);
  
  const mainServices = [
    {
      id: 'selection',
      icon: Search,
      title: 'Vehicle Selection',
      description: 'We handle the search and selection process based on your specific requirements, preferences, and budget. Our experts have access to a wide range of auction platforms and dealers across Europe, allowing us to find the perfect vehicle for you.',
      features: [
        'Personalized search based on your requirements',
        'Access to exclusive auction platforms across Europe',
        'Expert evaluation of vehicle options',
        'Detailed information on all potential vehicles'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e38e2ee9a8e?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'documentation',
      icon: FileText,
      title: 'Complete Documentation',
      description: 'Transparency is our priority. We provide comprehensive documentation for every vehicle, including detailed damage reports from suppliers and verified mileage certification through fiscal invoices.',
      features: [
        'Comprehensive damage reports from suppliers',
        'Verified mileage certification through fiscal invoices',
        'Complete vehicle history documentation',
        'Transparent technical specifications'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'pricing',
      icon: CreditCard,
      title: 'Transparent Pricing',
      description: 'We believe in complete price transparency. Our commission starts at just 3% and is fully negotiable depending on your specific requirements. There are no hidden fees or charges throughout the process.',
      features: [
        'Commission starting at only 3% (negotiable)',
        'No hidden fees or charges',
        'Clear breakdown of all costs involved',
        'VAT deductible on both vehicle value and commission'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'transport',
      icon: Truck,
      title: 'Transportation Services',
      description: 'All transportation and auction fees are handled directly by our trusted suppliers, ensuring a seamless delivery process. We coordinate every aspect to make your experience as smooth as possible.',
      features: [
        'Transportation arranged from source to your location',
        'All auction fees handled by suppliers',
        'Secure and insured vehicle transport',
        'Regular updates on delivery status'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1565061197768-921b855ccbe5?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'quality',
      icon: ShieldCheck,
      title: 'Quality Control',
      description: 'Every vehicle undergoes rigorous quality control by professional auction inspectors. This ensures that you receive a vehicle that matches the specifications and condition described.',
      features: [
        'Inspection by professional auction inspectors',
        'Verification of vehicle condition',
        'Technical assessment of all components',
        'Identification of any potential issues'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80'
    }
  ];
  
  const additionalServices = [
    {
      icon: FileCheck,
      title: 'Temporary Plates',
      description: 'Red number plates for temporary registration available at additional cost.'
    },
    {
      icon: ShieldCheck,
      title: 'Insurance',
      description: 'Valid insurance options available for your newly acquired vehicle.'
    },
    {
      icon: ReceiptText,
      title: 'RAR Checks',
      description: 'Romanian Auto Registry verification services available as needed.'
    },
    {
      icon: MapPin,
      title: 'Delivery Options',
      description: 'Multiple delivery options to suit your location and timeline.'
    },
    {
      icon: BadgePercent,
      title: 'VAT Deduction',
      description: 'VAT deductible on both vehicle value and our commission for eligible businesses.'
    },
    {
      icon: Clock,
      title: 'Express Service',
      description: 'Expedited search and acquisition services for urgent requirements.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Comprehensive auto consultancy with complete transparency at every step of the process.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            {mainServices.map((service, index) => (
              <ServiceSection 
                key={index}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
                Additional Services
              </h2>
              <p className="text-lg text-muted-foreground">
                We offer a range of optional services to enhance your vehicle acquisition experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
              {additionalServices.map((service, index) => (
                <AdditionalService 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            
            <div className="text-center mt-16 animate-slide-up">
              <p className="text-muted-foreground mb-6">
                All additional services are available at extra cost. Contact us for detailed pricing and to discuss your specific requirements.
              </p>
              
              <Button 
                asChild
                className="rounded-full px-8 group"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
