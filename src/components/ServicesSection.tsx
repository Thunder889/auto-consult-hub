
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
      title: 'Selecție Vehicule',
      description: 'Căutare personalizată pentru vehiculul ideal bazată pe cerințele și preferințele dvs. specifice.'
    },
    {
      icon: FileText,
      title: 'Documentație',
      description: 'Rapoarte complete de daune de la furnizori și certificare verificată a kilometrajului prin facturi fiscale.'
    },
    {
      icon: TrendingUp,
      title: 'Prețuri Transparente',
      description: 'Structură clară de prețuri fără taxe ascunse. Comisionul începe de la 3% și este complet negociabil.'
    },
    {
      icon: Truck,
      title: 'Transport',
      description: 'Toate taxele de transport și licitație sunt gestionate direct de furnizorii noștri verificați, asigurând livrare fără probleme.'
    },
    {
      icon: ShieldCheck,
      title: 'Control Calitate',
      description: 'Vehicule inspectate de inspectori profesioniști de licitație pentru a asigura verificarea calității și stării.'
    },
    {
      icon: FileText,
      title: 'Deducere TVA',
      description: 'TVA-ul este complet deductibil atât pentru valoarea vehiculului, cât și pentru comisionul nostru pentru firmele eligibile.'
    }
  ];

  return (
    <section className={cn("section-padding bg-gray-50", { "py-0": fullPage })}>
      <div className="container mx-auto px-4 md:px-6">
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
                Explorează Toate Serviciile
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
