
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const Services = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Servicii | AutoLaComandă';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
              Servicii
            </h1>
            <p className="text-lg text-muted-foreground">
              Oferim servicii complete de consultanță și achiziție auto, cu transparență totală și fără comisioane ascunse.
            </p>
          </div>
          <ServicesSection fullPage={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
