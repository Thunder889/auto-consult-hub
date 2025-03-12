
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const benefits = [
    'Consultație gratuită pentru toți clienții',
    'Opțiuni nelimitate de căutare a vehiculelor',
    'Transparență completă fără taxe ascunse',
    'Documentație completă și rapoarte de daune',
    'Certificare verificată a kilometrajului',
    'Selecție personalizată a vehiculelor',
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
                  Servicii Premium de Consultanță Auto cu Transparență Completă
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Ne specializăm în achiziționarea de vehicule second-hand adaptate nevoilor și preferințelor tale specifice. Cu serviciul nostru de consultanță gratuită, oferim căutări nelimitate de mașini, menținând transparența deplină pe tot parcursul procesului.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-2">
                <p className="text-muted-foreground mb-6">
                  Comisionul nostru începe de la doar 3% și este complet negociabil în funcție de cerințele tale, fără niciun fel de taxe ascunse.
                </p>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="group rounded-full px-6"
                >
                  <Link to="/about">
                    Află Mai Multe Despre Noi
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80" 
                  alt="Showroom auto de lux" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-primary/10 -z-10"></div>
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-primary/5 -z-10"></div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass-panel rounded-xl p-4 w-[90%] flex justify-between">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">Transparență</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">3%</p>
                  <p className="text-xs text-muted-foreground">Comision Inițial</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">Gratis</p>
                  <p className="text-xs text-muted-foreground">Consultații</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
