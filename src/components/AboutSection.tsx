import { cn } from "@/lib/utils";

interface AboutSectionProps {
  aboutImageUrl?: string;
}

const AboutSection = ({ aboutImageUrl }: AboutSectionProps) => {
  // Use a fallback image if prop is not provided
  const imageUrl = aboutImageUrl || '/images/about-image.jpg';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Despre Noi
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cu peste 10 ani de experiență în domeniul auto, oferim servicii complete de consultanță pentru achiziția mașinii perfecte. Misiunea noastră este să eliminăm stresul și incertitudinea din procesul de cumpărare a unui vehicul.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Cunoștințele noastre despre piața auto, rețeaua extinsă de contacte și atenția la detalii ne permit să găsim exact mașina pe care o cauți, la prețul potrivit, cu istoric verificat și fără surprize neplăcute.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">500+</div>
                <p className="text-gray-600">Clienți mulțumiți</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">10+</div>
                <p className="text-gray-600">Ani de experiență</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className={cn(
              "relative rounded-lg overflow-hidden shadow-xl",
              "before:absolute before:inset-0 before:bg-black/10 before:z-10"
            )}>
              <img 
                src={imageUrl} 
                alt="Echipa noastră de consultanți auto" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
