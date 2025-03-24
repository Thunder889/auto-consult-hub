import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Declare the scrollToForm property on Window
declare global {
  interface Window {
    scrollToForm?: () => void;
  }
}

interface CarouselImage {
  src: string;
  alt: string;
}

interface HeroSectionProps {
  scrollToForm?: () => void;
  carouselImages?: CarouselImage[];
  // Keep the old props for backwards compatibility
  heroDesktopUrl?: string;
  heroMobileUrl?: string;
}

const HeroSection = ({ 
  scrollToForm, 
  carouselImages = [], 
  heroDesktopUrl, 
  heroMobileUrl 
}: HeroSectionProps) => {
  // Use embla carousel with options
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(true);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // If carouselImages is empty, use the legacy props to create a fallback array
  const images = carouselImages.length > 0
    ? carouselImages
    : [
        { src: heroDesktopUrl || '/src/assets/car3.jpg', alt: "Luxury car" },
        { src: heroMobileUrl || '/src/assets/car1.jpg', alt: "Premium car" },
        { src: '/src/assets/car2.jpg', alt: "Executive car" }
      ];

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (emblaApi) {
      emblaApi.scrollPrev();
      console.log("Previous button clicked", { 
        time: new Date().toISOString(),
        event: 'prev', 
        target: e.target 
      });
    } else {
      console.error("Embla API not available for prev click");
    }
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (emblaApi) {
      emblaApi.scrollNext();
      console.log("Next button clicked", { 
        time: new Date().toISOString(),
        event: 'next', 
        target: e.target 
      });
    } else {
      console.error("Embla API not available for next click");
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (emblaApi) {
        emblaApi.scrollTo(index);
        console.log(`Scrolled to index ${index}`, { 
          time: new Date().toISOString(),
          event: 'scrollTo', 
          index,
          target: e.target 
        });
      } else {
        console.error("Embla API not available for scrollTo", { index });
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    console.log("Embla carousel initialized", {
      time: new Date().toISOString(),
      canScrollPrev: emblaApi.canScrollPrev(),
      canScrollNext: emblaApi.canScrollNext(),
      selectedIndex: emblaApi.selectedScrollSnap()
    });
    
    // Initialize carousel
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Set up auto-scroll
    const autoplay = setInterval(() => {
      if (emblaApi && emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else if (emblaApi) {
        emblaApi.scrollTo(0);
      }
    }, 5000); // Change image every 5 seconds

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
      }
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  const handleScrollToForm = () => {
    if (scrollToForm) {
      scrollToForm();
    } else if (window.scrollToForm) {
      window.scrollToForm();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
      
      {/* Carousel */}
      <div className="absolute inset-0 bg-neutral-900 z-0">
        <div className="h-full w-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {images.map((img, index) => (
              <div 
                key={index} 
                className="flex-full h-full w-full flex-shrink-0"
                style={{ 
                  flex: '0 0 100%',
                  backgroundImage: `url(${img.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                aria-label={img.alt}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel controls - as separate elements with higher z-index for better clickability */}
      <button 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/25 hover:bg-white/50 text-white rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer border-2 border-white/30"
        onClick={scrollPrev}
        aria-label="Previous slide"
        type="button"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      
      <button 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/25 hover:bg-white/50 text-white rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer border-2 border-white/30"
        onClick={scrollNext}
        aria-label="Next slide"
        type="button"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={cn(
              "w-3 h-3 md:w-4 md:h-4 rounded-full transition-all shadow-md cursor-pointer border border-white/50",
              selectedIndex === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            )}
            onClick={(e) => scrollTo(index, e)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 pt-24 pb-16 md:py-0">
        <div className="md:max-w-[600px] lg:max-w-[700px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
            Servicii premium de consultanță auto
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in">
            Expertiza noastră, mașina visurilor tale. Spune-ne ce îți dorești, și noi îți găsim mașina perfectă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              className="rounded-full font-medium text-base"
              onClick={handleScrollToForm}
            >
              Consultanță Gratuită
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full font-medium text-base border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="/services">
                Serviciile Noastre
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
