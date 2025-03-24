import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Smart Auto</h3>
            <p className="mb-4">Servicii premium de consultanță auto pentru achiziția mașinii perfecte.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition-colors">Acasă</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Despre Noi</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Servicii</a></li>
              <li><a href="/cars" className="hover:text-white transition-colors">Mașini</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Servicii</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-white transition-colors">Căutare Personalizată</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Verificare Completă</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Test Drive</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Asistență Documentație</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1" />
                <span>+40 720 123 456</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1" />
                <span>contact@smartauto.ro</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span>Bulevardul Timișoara 101, București, România</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          <p>&copy; {currentYear} Smart Auto. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
