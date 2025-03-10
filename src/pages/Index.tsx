
import { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CarsSection from '@/components/CarsSection';
import ContactSection from '@/components/ContactSection';
import CarRequestForm from '@/components/CarRequestForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'AutoLaComandă - Servicii Premium de Consultanță Auto';
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrollToForm={scrollToForm} />
      <main className="flex-grow">
        <HeroSection scrollToForm={scrollToForm} />
        <div ref={formRef}>
          <CarRequestForm />
        </div>
        <AboutSection />
        <ServicesSection />
        <CarsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
