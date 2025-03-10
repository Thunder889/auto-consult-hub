
import { useEffect } from 'react';
import { CheckCircle, Users, Lightbulb, TrendingUp, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Despre Noi | AutoLaComandă';
  }, []);

  const values = [
    {
      icon: Users,
      title: 'Orientat spre Client',
      description: 'Prioritizăm nevoile și preferințele clienților noștri mai presus de orice, asigurând o experiență personalizată de la început până la sfârșit.'
    },
    {
      icon: Lightbulb,
      title: 'Expertiză',
      description: 'Echipa noastră aduce ani de cunoștințe în industrie și expertiză tehnică pentru fiecare consultație și achiziție de vehicule.'
    },
    {
      icon: TrendingUp,
      title: 'Transparență',
      description: 'Credem în transparența completă fără taxe sau comisioane ascunse, asigurându-vă că știți exact pentru ce plătiți.'
    },
    {
      icon: Heart,
      title: 'Calitate',
      description: 'Nu facem niciodată compromisuri în privința calității, asigurându-ne că fiecare vehicul pe care îl găsim îndeplinește cele mai înalte standarde de stare și fiabilitate.'
    }
  ];

  const benefits = [
    'Servicii de consultanță gratuite pentru toți clienții',
    'Opțiuni nelimitate de căutare a vehiculelor bazate pe criteriile dumneavoastră',
    'Transparență completă fără taxe ascunse',
    'Rapoarte complete de daune de la furnizori',
    'Certificare verificată a kilometrajului prin facturi fiscale',
    'Control de calitate de către inspectori profesioniști de licitație',
    'Recomandări personalizate de vehicule',
    'Comision negociabil începând de la doar 3%',
    'TVA deductibil atât pentru valoarea vehiculului, cât și pentru comision',
    'Acces la platforme de licitație din toată Europa'
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
                Despre AutoLaComandă
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Partenerul dumneavoastră de încredere în achiziția de vehicule premium cu transparență completă și servicii personalizate.
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
                      alt="Echipa noastră consultând un client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-xl bg-primary/5 -z-10"></div>
                  <div className="absolute -top-6 -left-6 h-32 w-32 rounded-xl bg-primary/10 -z-10"></div>
                </div>
              </div>
              
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
                  Povestea Noastră
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fondată cu pasiune pentru automobile și un angajament pentru practici de afaceri transparente, AutoLaComandă a început ca răspuns la provocările cu care se confruntă mulți atunci când cumpără vehicule second-hand.
                  </p>
                  <p>
                    Echipa noastră combină decenii de experiență în industria auto cu o înțelegere profundă a pieței auto europene. Am stabilit relații puternice cu furnizori de încredere și case de licitație din întreaga Europă, permițându-ne să găsim vehicule de cea mai înaltă calitate pentru clienții noștri.
                  </p>
                  <p>
                    Ceea ce ne diferențiază este abordarea noastră unică a consultanței. Oferim sfaturi complet gratuite și căutări nelimitate de mașini, cu comisionul nostru începând de la doar 3% - semnificativ mai mic decât standardele industriei și pe deplin negociabil în funcție de cerințele dvs. specifice.
                  </p>
                  <p>
                    Credem în transparență completă, motiv pentru care oferim documentație cuprinzătoare, inclusiv rapoarte detaliate de daune de la furnizori și certificarea verificată a kilometrajului prin facturi fiscale.
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
                Valorile Noastre
              </h2>
              <p className="text-lg text-muted-foreground">
                Aceste principii de bază ghidează fiecare aspect al afacerii noastre și asigură că oferim servicii excepționale clienților noștri.
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
                  Beneficiile Colaborării cu Noi
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Când alegeți AutoLaComandă, alegeți mai mult decât un serviciu de consultanță – câștigați un partener dedicat angajat să găsească vehiculul ideal pentru dvs. cu transparență completă.
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
                      alt="Client primind cheile mașinii" 
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
