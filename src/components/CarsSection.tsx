
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, Activity, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const cars = [
  {
    id: 1,
    title: 'Audi Q5 Sportback',
    year: 2021,
    price: '€39,800',
    mileage: '35,000 km',
    location: 'Germany',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf87b?auto=format&fit=crop&w=800&q=80',
    description: 'Well-maintained Audi Q5 Sportback with premium features, verified mileage, and complete service history.',
    externalLink: 'https://example.com/listing/audi-q5'
  },
  {
    id: 2,
    title: 'BMW 5 Series',
    year: 2020,
    price: '€36,500',
    mileage: '42,000 km',
    location: 'Austria',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    description: 'Elegant BMW 5 Series in excellent condition with premium package, low mileage, and comprehensive inspection report.',
    externalLink: 'https://example.com/listing/bmw-5-series'
  },
  {
    id: 3,
    title: 'Mercedes GLE Coupe',
    year: 2022,
    price: '€68,900',
    mileage: '18,000 km',
    location: 'Germany',
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury Mercedes GLE Coupe with minimal usage, full warranty, dealer-serviced, and complete documentation.',
    externalLink: 'https://example.com/listing/mercedes-gle'
  }
];

const CarCard = ({ car }: { car: typeof cars[0] }) => (
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
            View Listing
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm"
          className="text-xs rounded-full"
          asChild
        >
          <Link to={`/cars/${car.id}`}>
            Details
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

const CarsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 animate-slide-up">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Featured Vehicles
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our selection of premium vehicles available now, each with verified history, comprehensive documentation, and exceptional value.
            </p>
          </div>
          
          <Button 
            variant="outline"
            className="rounded-full group"
            asChild
          >
            <Link to="/cars">
              View All Vehicles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
