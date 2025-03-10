
import { useEffect } from 'react';
import { CheckCircle, Users, Lightbulb, TrendingUp, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'About Us | AutoLaComandă';
  }, []);

  const values = [
    {
      icon: Users,
      title: 'Client Focused',
      description: 'We prioritize our clients' needs and preferences above all else, ensuring a personalized experience from start to finish.'
    },
    {
      icon: Lightbulb,
      title: 'Expertise',
      description: 'Our team brings years of industry knowledge and technical expertise to every consultation and vehicle acquisition.'
    },
    {
      icon: TrendingUp,
      title: 'Transparency',
      description: 'We believe in complete transparency with no hidden fees or commissions, ensuring you know exactly what you're paying for.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'We never compromise on quality, ensuring every vehicle we source meets the highest standards of condition and reliability.'
    }
  ];

  const benefits = [
    'Free consultancy services for all clients',
    'Unlimited vehicle search options based on your criteria',
    'Complete transparency with no hidden fees',
    'Comprehensive damage reports from suppliers',
    'Verified mileage certification through fiscal invoices',
    'Quality control by professional auction inspectors',
    'Personalized vehicle recommendations',
    'Negotiable commission starting at only 3%',
    'VAT deductible on both vehicle value and commission',
    'Access to auction platforms across Europe'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
                About AutoLaComandă
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Your trusted partner in premium vehicle acquisition with complete transparency and personalized service.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-scale-in">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=900&q=80" 
                      alt="Our team consulting with a client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-xl bg-primary/5 -z-10"></div>
                  <div className="absolute -top-6 -left-6 h-32 w-32 rounded-xl bg-primary/10 -z-10"></div>
                </div>
              </div>
              
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a passion for automobiles and a commitment to transparent business practices, AutoLaComandă began as a response to the challenges many face when purchasing second-hand vehicles.
                  </p>
                  <p>
                    Our team combines decades of experience in the automotive industry with a deep understanding of the European car market. We've established strong relationships with reputable suppliers and auction houses across Europe, allowing us to source the highest quality vehicles for our clients.
                  </p>
                  <p>
                    What sets us apart is our unique approach to consultancy. We offer completely free advice and unlimited car searches, with our commission starting at just 3% - significantly lower than industry standards and fully negotiable based on your specific requirements.
                  </p>
                  <p>
                    We believe in complete transparency, which is why we provide comprehensive documentation, including detailed damage reports from suppliers and verified mileage certification through fiscal invoices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These core principles guide every aspect of our business and ensure we deliver exceptional service to our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-scale-in">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
                  The Benefits of Working With Us
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  When you choose AutoLaComandă, you're choosing more than just a consultancy service – you're gaining a dedicated partner committed to finding your ideal vehicle with complete transparency.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-scale-in">
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1597762470488-3877b1f538c6?auto=format&fit=crop&w=800&q=80" 
                      alt="Customer receiving car keys" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-xl bg-primary/10 -z-10"></div>
                  <div className="absolute -top-6 -right-6 h-32 w-32 rounded-xl bg-primary/5 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
