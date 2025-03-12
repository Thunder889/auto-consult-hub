import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send, 
  CheckCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const ContactInfo = ({ 
  icon: Icon, 
  title, 
  content, 
  href 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  href: string;
}) => (
  <a 
    href={href} 
    className="flex items-start gap-4 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="p-3 rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h3 className="font-medium text-primary">{title}</h3>
      <p className="text-muted-foreground group-hover:text-primary transition-colors">{content}</p>
    </div>
  </a>
);

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Mesaj Trimis",
        description: "Vă vom contacta în cel mai scurt timp posibil.",
        duration: 5000,
      });
      
      // Reset form after short delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Contactează-ne
          </h2>
          <p className="text-muted-foreground text-lg">
            Programează o consultație gratuită pentru a găsi mașina ideală. Suntem aici să răspundem la toate întrebările tale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-white rounded-2xl shadow-sm p-8 order-2 lg:order-1 animate-scale-in">
            <h3 className="text-2xl font-semibold text-primary mb-6">Trimite-ne un Mesaj</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nume Complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Introduceți numele"
                    required
                    className="rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Adresă Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Introduceți emailul"
                    required
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Număr Telefon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Introduceți numărul de telefon"
                  className="rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mesajul Tău
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Spune-ne despre mașina pe care o cauți..."
                  rows={5}
                  required
                  className="rounded-lg resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  "rounded-full w-full py-6",
                  isSubmitted ? "bg-green-600 hover:bg-green-700" : ""
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Trimitere Mesaj...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mesaj Trimis
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Trimite Mesaj
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2 animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-8">Ia Legătura cu Noi</h3>
            
            <div className="space-y-8 mb-10">
              <ContactInfo 
                icon={Phone} 
                title="Telefon" 
                content="+40 723 456 789" 
                href="tel:+40723456789" 
              />
              
              <ContactInfo 
                icon={Mail} 
                title="Email" 
                content="contact@autolacomanda.ro" 
                href="mailto:contact@autolacomanda.ro" 
              />
              
              <ContactInfo 
                icon={MessageCircle} 
                title="WhatsApp" 
                content="Suport Direct WhatsApp" 
                href="https://wa.me/40723456789" 
              />
              
              <ContactInfo 
                icon={MapPin} 
                title="Birou" 
                content="București, România" 
                href="https://goo.gl/maps/123" 
              />
            </div>
            
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 lg:h-80">
              <iframe
                title="Locația Biroului"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91158.13517807181!2d26.03060705!3d44.43792695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0631f7a4e8c73!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sus!4v1655215703743!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;