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
    <section className="py-16 md:py-24 bg-white" id="form-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/30 rounded-xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Ce Mașină Cauți?
              </h2>
              <p className="text-lg text-gray-700">
                Completează formularul de mai jos și experții noștri vor găsi opțiunile potrivite pentru tine.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Preferințele Tale</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Marcă</label>
                      <Select value={formData.brand} onValueChange={(value) => handleSelectChange("brand", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selectează marca" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="audi">Audi</SelectItem>
                          <SelectItem value="bmw">BMW</SelectItem>
                          <SelectItem value="mercedes">Mercedes</SelectItem>
                          <SelectItem value="volkswagen">Volkswagen</SelectItem>
                          <SelectItem value="other">Alta marcă</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                      <Select value={formData.model} onValueChange={(value) => handleSelectChange("model", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selectează modelul" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="hatchback">Hatchback</SelectItem>
                          <SelectItem value="wagon">Wagon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Anul Fabricației</label>
                      <div className="grid grid-cols-2 gap-4">
                        <Select value={formData.yearMin} onValueChange={(value) => handleSelectChange("yearMin", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Minim" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                              <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select value={formData.yearMax} onValueChange={(value) => handleSelectChange("yearMax", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Maxim" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                              <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Buget (€)</label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input 
                          type="number" 
                          name="budgetMin" 
                          value={formData.budgetMin}
                          onChange={handleChange}
                          placeholder="Minim" 
                          className="w-full"
                        />
                        <Input 
                          type="number" 
                          name="budgetMax" 
                          value={formData.budgetMax}
                          onChange={handleChange}
                          placeholder="Maxim" 
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6">Datele Tale de Contact</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nume și Prenume</label>
                      <Input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                      <Input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj (opțional)</label>
                      <Textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        className="h-24"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="leasing" 
                  checked={showLeasingCalculator}
                  onCheckedChange={(checked) => setShowLeasingCalculator(checked as boolean)}
                />
                <Label htmlFor="leasing" className="text-sm font-medium text-gray-700">
                  Vreau să calculez rata de leasing
                </Label>
              </div>

              {showLeasingCalculator && (
                <div className="mt-8">
                  <LeasingCalculator onUpdate={handleLeasingUpdate} />
                </div>
              )}
              
              <div className="text-center mt-10">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="rounded-full px-8 py-6"
                >
                  Trimite Solicitarea
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
