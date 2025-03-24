import { useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Car {
  id: number;
  title: string;
  year: number;
  price: string;
  mileage: string;
  location: string;
  image: string;
  description: string;
  externalLink: string;
  fullDetails: {
    engine: string;
    power: string;
    transmission: string;
    drive: string;
    fuel: string;
    color: string;
    features: string[];
  }
}

interface CarDetailsDialogProps {
  cars: Car[];
}

const CarDetailsDialog = ({ cars }: CarDetailsDialogProps) => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  
  // Listen for the custom event from Astro
  useEffect(() => {
    const handleShowCarDetails = (event: CustomEvent<{carId: number}>) => {
      const carId = event.detail.carId;
      const car = cars.find(car => car.id === carId);
      if (car) {
        setSelectedCar(car);
        setDialogOpen(true);
      }
    };
    
    // Need to cast to any because CustomEvent isn't recognized in the type definition
    document.addEventListener('show-car-details', handleShowCarDetails as any);
    
    return () => {
      document.removeEventListener('show-car-details', handleShowCarDetails as any);
    };
  }, [cars]);
  
  if (!cars || cars.length === 0) return null;
  
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      {selectedCar && (
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center justify-between">
              {selectedCar.title}
              <span className="text-xl font-bold text-primary">{selectedCar.price}</span>
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedCar.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="aspect-[16/9] overflow-hidden rounded-md mb-6">
              <img 
                src={selectedCar.image} 
                alt={selectedCar.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">An</span>
                <span className="font-medium">{selectedCar.year}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Kilometraj</span>
                <span className="font-medium">{selectedCar.mileage}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Motor</span>
                <span className="font-medium">{selectedCar.fullDetails.engine}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Putere</span>
                <span className="font-medium">{selectedCar.fullDetails.power}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Transmisie</span>
                <span className="font-medium">{selectedCar.fullDetails.transmission}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Tracțiune</span>
                <span className="font-medium">{selectedCar.fullDetails.drive}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Combustibil</span>
                <span className="font-medium">{selectedCar.fullDetails.fuel}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Culoare</span>
                <span className="font-medium">{selectedCar.fullDetails.color}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Dotări</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedCar.fullDetails.features.map((feature, index) => (
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
                  href={selectedCar.externalLink} 
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
      )}
    </Dialog>
  );
};

export default CarDetailsDialog; 