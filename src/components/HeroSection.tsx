
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const carImages = [
  {
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1920&q=80',
    alt: 'Sedan premium în expoziție',
  },
  {
    url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80',
    alt: 'SUV de lux pe drum',
  },
  {
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80',
    alt: 'Mașină sport prim-plan',
  },
];

interface HeroSectionProps {
  scrollToForm?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToForm }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  
  const goToNextSlide = useCallback(() => {
    if (isTransitioning || autoplayPaused) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match duration with CSS transition
  }, [isTransitioning, autoplayPaused]);
  
  const goToPrevSlide = useCallback(() => {
    if (isTransitioning || autoplayPaused) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match duration with CSS transition
  }, [isTransitioning, autoplayPaused]);
  
  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (autoplayPaused) return;
    
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide, autoplayPaused]);
  
  // Pause autoplay on hover or touch
  const pauseAutoplay = () => setAutoplayPaused(true);
  const resumeAutoplay = () => setAutoplayPaused(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slider Images */}
      <div 
        className="absolute inset-0"
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onTouchStart={pauseAutoplay}
        onTouchEnd={resumeAutoplay}
      >
        {carImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out bg-black',
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover opacity-70"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center">
        <div className="animate-slide-up">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto tracking-tight">
            Consultanță Auto Premium Cu Transparență Totală
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Îndrumare de specialitate pentru achiziționarea vehiculului ideal second-hand fără comisioane ascunse, rapoarte complete de daune și certificare verificată a kilometrajului.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-base font-medium hover-lift"
              onClick={scrollToForm}
            >
              Consultanță Gratuită
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white hover-lift"
              asChild
            >
              <a 
                href="https://wa.me/40000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {carImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentImageIndex(index);
              setTimeout(() => setIsTransitioning(false), 500);
            }}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none',
              index === currentImageIndex 
                ? 'bg-white scale-100' 
                : 'bg-white/50 scale-75 hover:bg-white/70'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Arrow Controls */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 focus:outline-none transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 focus:outline-none transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;
