import { 
  Search, 
  FileText, 
  TrendingUp, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  Car,
  FileSearch,
  UserCheck,
  MessageSquare
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
      icon: <Search className="h-10 w-10" />,
      title: "Căutare Personalizată",
      description: "Analizăm preferințele tale și bugetul disponibil pentru a găsi mașina perfectă pentru nevoile tale."
    },
    {
      icon: <FileSearch className="h-10 w-10" />,
      title: "Verificare Completă",
      description: "Inspecție tehnică detaliată, verificarea istoricului și a kilometrajului pentru a evita surprizele neplăcute."
    },
    {
      icon: <Car className="h-10 w-10" />,
      title: "Test Drive",
      description: "Organizăm test drive-uri pentru mașinile selectate, astfel încât să poți lua decizia corectă."
    },
    {
      icon: <UserCheck className="h-10 w-10" />,
      title: "Negociere",
      description: "Negociem în numele tău pentru a obține cel mai bun preț și condiții favorabile."
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Asistență Documentație",
      description: "Te ajutăm cu toate formalitățile legale și documentația necesară pentru achiziție."
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Consultanță Post-Achiziție",
      description: "Continuăm să-ți oferim suport și după achiziție pentru orice întrebări sau probleme."
    }
  ];

  return (
    <section className={cn("section-padding bg-gray-50", { "py-0": fullPage })}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Serviciile Noastre
          </h2>
          <p className="text-lg text-gray-700">
            Oferim o gamă completă de servicii de consultanță auto pentru a simplifica procesul de achiziție și a te ajuta să găsești mașina perfectă.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
                "hover:shadow-md transition-shadow duration-300",
                "flex flex-col items-start"
              )}
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        {!fullPage && (
          <div className="text-center mt-16 animate-slide-up">
            <Button 
              asChild
              className="rounded-full px-8 group"
            >
              <a href="/services">
                Explorează Toate Serviciile
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
