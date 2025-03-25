import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import LeasingCalculator from "./LeasingCalculator";

const CarRequestForm = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    yearMin: "",
    yearMax: "",
    budgetMin: "",
    budgetMax: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    leasingDetails: {
      downPayment: 20,
      loanTerm: 60,
      interestRate: 8,
      monthlyPayment: 0
    }
  });

  const [showLeasingCalculator, setShowLeasingCalculator] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Solicitarea ta a fost trimisă cu succes! Te vom contacta în curând.");
    setFormData({
      brand: "",
      model: "",
      yearMin: "",
      yearMax: "",
      budgetMin: "",
      budgetMax: "",
      name: "",
      phone: "",
      email: "",
      message: "",
      leasingDetails: {
        downPayment: 20,
        loanTerm: 60,
        interestRate: 8,
        monthlyPayment: 0
      }
    });
    setShowLeasingCalculator(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLeasingUpdate = (values: {
    downPayment: number;
    loanTerm: number;
    interestRate: number;
    monthlyPayment: number;
  }) => {
    setFormData(prev => ({
      ...prev,
      leasingDetails: values
    }));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative" id="form-section">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-secondary/20 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_80%)]"></div>
            
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Consultanță Gratuită
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 drop-shadow-sm">
                Ce Mașină Cauți?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Completează formularul de mai jos și experții noștri vor găsi opțiunile potrivite pentru tine.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6 bg-white/80 p-6 rounded-2xl shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M21 11.25v8.75a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8.75"></path><path d="M20.25 4.75a2 2 0 0 0-2-2h-12.5a2 2 0 0 0-2 2v5.5h16.5Z"></path><path d="M9 10.75v3.5"></path><path d="M12 10.75v3.5"></path><path d="M15 10.75v3.5"></path></svg>
                    Preferințele Tale
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Marcă</label>
                      <Input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="Ex: Audi, BMW, Mercedes, etc."
                        className="w-full rounded-xl border-gray-200 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Model</label>
                      <Input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        placeholder="Ex: A6, X5, E-Class, etc."
                        className="w-full rounded-xl border-gray-200 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Anul Fabricației</label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          type="number"
                          name="yearMin"
                          value={formData.yearMin}
                          onChange={handleChange}
                          placeholder="Minim"
                          className="w-full rounded-xl border-gray-200 focus:ring-primary"
                        />
                        <Input
                          type="number"
                          name="yearMax"
                          value={formData.yearMax}
                          onChange={handleChange}
                          placeholder="Maxim"
                          className="w-full rounded-xl border-gray-200 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Buget (€)</label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input 
                          type="number" 
                          name="budgetMin" 
                          value={formData.budgetMin}
                          onChange={handleChange}
                          placeholder="Minim" 
                          className="w-full rounded-xl border-gray-200 focus:ring-primary"
                        />
                        <Input 
                          type="number" 
                          name="budgetMax" 
                          value={formData.budgetMax}
                          onChange={handleChange}
                          placeholder="Maxim" 
                          className="w-full rounded-xl border-gray-200 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 bg-white/80 p-6 rounded-2xl shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M20 12V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"></path><circle cx="12" cy="8" r="2"></circle><path d="M14.5 13.5c0-1.1-.9-2-2-2h-1c-1.1 0-2 .9-2 2v.5"></path><polyline points="16 16 18 18 22 14"></polyline></svg>
                    Datele Tale de Contact
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Nume și Prenume</label>
                      <Input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border-gray-200 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefon</label>
                      <Input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border-gray-200 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                      <Input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border-gray-200 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Mesaj (opțional)</label>
                      <Textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        className="h-24 w-full rounded-xl border-gray-200 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-primary/5 rounded-xl border border-primary/10 mx-auto max-w-fit">
                <Checkbox 
                  id="leasing" 
                  checked={showLeasingCalculator}
                  onCheckedChange={(checked) => setShowLeasingCalculator(checked as boolean)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <Label htmlFor="leasing" className="text-sm font-medium text-gray-700 ml-2 cursor-pointer">
                  Vreau să calculez rata de leasing
                </Label>
              </div>

              {showLeasingCalculator && (
                <div className="mt-8 bg-white/90 p-6 rounded-2xl shadow-sm backdrop-blur-sm">
                  <LeasingCalculator onUpdate={handleLeasingUpdate} />
                </div>
              )}
              
              <div className="text-center mt-12">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="rounded-full px-10 py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Trimite Solicitarea
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-2 h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRequestForm;
