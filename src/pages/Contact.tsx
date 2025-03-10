
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Contact | AutoLaComandă';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
              Contactați-ne
            </h1>
            <p className="text-lg text-muted-foreground">
              Suntem aici pentru a vă ajuta. Contactați-ne pentru o consultanță gratuită sau pentru orice întrebare.
            </p>
          </div>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
