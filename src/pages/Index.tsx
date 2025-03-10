
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CarsSection from '@/components/CarsSection';
import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'AutoLaComandă - Premium Auto Consultancy Services';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
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
