
import { Link } from 'react-router-dom';
import { 
  Search, 
  FileText, 
  TrendingUp, 
  Truck, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => (
  <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

interface ServicesSectionProps {
  fullPage?: boolean;
}

const ServicesSection = ({ fullPage = false }: ServicesSectionProps) => {
  const services = [
    {
      icon: Search,
      title: 'Vehicle Selection',
      description: 'Personalized search for your ideal vehicle based on your specific requirements and preferences.'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Complete damage reports from suppliers and verified mileage certification through fiscal invoices.'
    },
    {
      icon: TrendingUp,
      title: 'Transparent Pricing',
      description: 'Clear pricing structure with no hidden fees. Commission starts at 3% and is fully negotiable.'
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'All transportation and auction fees handled directly by our vetted suppliers, ensuring seamless delivery.'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Control',
      description: 'Vehicles inspected by professional auction inspectors to ensure quality and condition verification.'
    },
    {
      icon: FileText,
      title: 'VAT Deduction',
      description: 'VAT is fully deductible on both the vehicle value and our commission for eligible businesses.'
    }
  ];

  return (
    <section className={cn("section-padding bg-gray-50", { "py-0": fullPage })}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end vehicle acquisition services with transparency at every step. From selection to documentation and delivery, we handle everything.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-scale-in">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        {!fullPage && (
          <div className="text-center animate-slide-up">
            <Button 
              asChild
              className="rounded-full px-8 group"
            >
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
