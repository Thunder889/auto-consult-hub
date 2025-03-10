
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, Activity, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const cars = [
  {
    id: 1,
    title: 'Audi Q5 Sportback',
    year: 2021,
    price: '€39,800',
    mileage: '35,000 km',
    location: 'Germania',
    image: 'https://images.unsplash.com/photo-1641326201918-3cafc641038e?auto=format&fit=crop&w=800&q=80',
    description: 'Audi Q5 Sportback bine întreținut, cu caracteristici premium, kilometraj verificat și istoric complet de service.',
    externalLink: 'https://example.com/listing/audi-q5',
    fullDetails: {
      engine: '2.0 TDI',
      power: '204 CP',
      transmission: 'Automată',
      drive: 'Quattro',
      fuel: 'Diesel',
      color: 'Argintiu Metalic',
      interior: 'Piele Neagră',
      features: [
        'Faruri LED Matrix',
        'Navigație MMI',
        'Scaune încălzite',
        'Cameră 360°',
        'Asistență la parcare',
        'Bang & Olufsen Sound System',
        'Geamuri fumurii',
        'Jante aliaj 20"'
      ]
    }
  },
  {
    id: 2,
    title: 'BMW 5 Series',
    year: 2020,
    price: '€36,500',
    mileage: '42,000 km',
    location: 'Austria',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    description: 'BMW Seria 5 elegant în stare excelentă, cu pachet premium, kilometraj redus și raport complet de inspecție.',
    externalLink: 'https://example.com/listing/bmw-5-series',
    fullDetails: {
      engine: '3.0 TDI',
      power: '265 CP',
      transmission: 'Automată',
      drive: 'Spate',
      fuel: 'Diesel',
      color: 'Negru Safir',
      interior: 'Piele Cognac',
      features: [
        'BMW Live Cockpit Professional',
        'Sistem audio Harman Kardon',
        'Scaune ventilate',
        'Suspensie adaptivă',
        'Pilot automat adaptiv',
        'Parking Assistant Plus',
        'Head-up Display',
        'Sistem de alarmă'
      ]
    }
  },
  {
    id: 3,
    title: 'Mercedes GLE Coupe',
    year: 2022,
    price: '€68,900',
    mileage: '18,000 km',
    location: 'Germania',
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=800&q=80',
    description: 'Mercedes GLE Coupe de lux cu utilizare minimă, garanție completă, întreținut la dealer și documentație completă.',
    externalLink: 'https://example.com/listing/mercedes-gle',
    fullDetails: {
      engine: '3.0 AMG',
      power: '435 CP',
      transmission: 'Automată 9G-Tronic',
      drive: '4MATIC',
      fuel: 'Benzină',
      color: 'Gri Selenite',
      interior: 'Piele Nappa Neagră',
      features: [
        'Pachet AMG Exterior',
        'MBUX cu realitate augmentată',
        'Sistem audio Burmester',
        'Cameră 360°',
        'Suspension AIRMATIC',
        'Scaune dinamice',
        'Pachet Night',
        'Jante AMG 21"'
      ]
    }
  }
];

const CarCard = ({ car, onDetailsClick }: { car: typeof cars[0]; onDetailsClick: (car: typeof cars[0]) => void }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md group">
    <div className="aspect-[16/10] overflow-hidden">
      <img 
        src={car.image} 
        alt={car.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-primary">{car.title}</h3>
        <span className="text-lg font-bold text-primary">{car.price}</span>
      </div>
      
      <div className="flex gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{car.year}</span>
        </div>
        <div className="flex items-center">
          <Activity className="h-4 w-4 mr-1" />
          <span>{car.mileage}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{car.location}</span>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 line-clamp-2">{car.description}</p>
      
      <div className="flex justify-between items-center pt-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="text-xs rounded-full flex items-center gap-1"
                asChild
              >
                <a 
                  href={car.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Vezi Anunțul
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Vezi anunțul original</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <Button 
          variant="ghost" 
          size="sm"
          className="text-xs rounded-full"
          onClick={() => onDetailsClick(car)}
        >
          Detalii
        </Button>
      </div>
    </div>
  </div>
);

const CarDetailsDialog = ({ car, open, onOpenChange }: { 
  car: typeof cars[0] | null; 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
}) => {
  const { toast } = useToast();
  
  if (!car) return null;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-between">
            {car.title}
            <span className="text-xl font-bold text-primary">{car.price}</span>
          </DialogTitle>
          <DialogDescription className="text-base">
            {car.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="aspect-[16/9] overflow-hidden rounded-md mb-6">
            <img 
              src={car.image} 
              alt={car.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">An</span>
              <span className="font-medium">{car.year}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Kilometraj</span>
              <span className="font-medium">{car.mileage}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Motor</span>
              <span className="font-medium">{car.fullDetails.engine}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Putere</span>
              <span className="font-medium">{car.fullDetails.power}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Transmisie</span>
              <span className="font-medium">{car.fullDetails.transmission}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Tracțiune</span>
              <span className="font-medium">{car.fullDetails.drive}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Combustibil</span>
              <span className="font-medium">{car.fullDetails.fuel}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Culoare</span>
              <span className="font-medium">{car.fullDetails.color}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Dotări</h4>
            <div className="grid grid-cols-2 gap-2">
              {car.fullDetails.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-6 pt-4 border-t">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => {
                toast({
                  title: "Informații copiate",
                  description: "Detaliile mașinii au fost copiate în clipboard",
                });
              }}
            >
              Copiază Informațiile
            </Button>
            
            <Button 
              variant="default"
              asChild
            >
              <a 
                href={car.externalLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                Vezi Anunțul
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface CarsSectionProps {
  fullPage?: boolean;
}

const CarsSection = ({ fullPage = false }: CarsSectionProps) => {
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleDetailsClick = (car: typeof cars[0]) => {
    setSelectedCar(car);
    setDialogOpen(true);
  };
  
  return (
    <section className={cn("section-padding bg-white", { "py-0": fullPage })}>
      <div className="container mx-auto px-4 md:px-6">
        {!fullPage && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 animate-slide-up">
            <div className="max-w-2xl mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
                Mașini Disponibile
              </h2>
              <p className="text-muted-foreground text-lg">
                Explorați selecția noastră de mașini premium disponibile acum, fiecare cu istoric verificat, documentație completă și valoare excepțională.
              </p>
            </div>
            
            <Button 
              variant="outline"
              className="rounded-full group"
              asChild
            >
              <Link to="/cars">
                Vezi Toate Mașinile
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} onDetailsClick={handleDetailsClick} />
          ))}
        </div>
      </div>
      
      <CarDetailsDialog 
        car={selectedCar} 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
      />
    </section>
  );
};

export default CarsSection;
