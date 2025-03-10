
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/hooks/use-toast';

const CarRequestForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    engine: '',
    fuel: 'Benzină',
    manufactureYear: '2015',
    transmission: 'Manuală',
    budget: '10000',
    acquisitionType: 'Persoană fizică',
    name: '',
    phone: '',
    email: '',
    location: '',
    wantsLeasing: false,
    carValue: 25000,
    downPayment: 50,
    period: 60
  });

  const [showLeasing, setShowLeasing] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, wantsLeasing: !formData.wantsLeasing });
    setShowLeasing(!showLeasing);
  };

  const handleSliderChange = (name: string, value: number[]) => {
    if (name === 'carValue') {
      setFormData({ ...formData, carValue: value[0] });
    } else if (name === 'downPayment') {
      setFormData({ ...formData, downPayment: value[0] });
    } else if (name === 'period') {
      setFormData({ ...formData, period: value[0] });
    }
    
    // Calculate monthly payment (simple estimation)
    const loanAmount = formData.carValue * (1 - formData.downPayment / 100);
    const interestRate = 0.08; // 8% annual interest
    const monthlyRate = interestRate / 12;
    const numPayments = formData.period;
    
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    setMonthlyPayment(parseFloat(monthlyPayment.toFixed(2)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Cerere trimisă",
      description: "Vă vom contacta în curând cu detalii despre mașina dorită.",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Spune-ne cum arată mașina ideală pentru tine
            </h2>
            <p className="text-lg text-muted-foreground">
              Completează formularul și te vom contacta cu cele mai bune opțiuni
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 animate-scale-in">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">Marcă:</label>
                  <Input 
                    id="brand"
                    name="brand"
                    placeholder="BMW, Audi, etc"
                    value={formData.brand}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model:</label>
                  <Input 
                    id="model"
                    name="model"
                    placeholder="Q5, A3, Golf, etc"
                    value={formData.model}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="engine" className="block text-sm font-medium text-gray-700 mb-1">Motorizare:</label>
                  <Input 
                    id="engine"
                    name="engine"
                    placeholder="Ex: 2.0, 180CP"
                    value={formData.engine}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="fuel" className="block text-sm font-medium text-gray-700 mb-1">Combustibil:</label>
                  <Input 
                    id="fuel"
                    name="fuel"
                    placeholder="Benzină"
                    value={formData.fuel}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="manufactureYear" className="block text-sm font-medium text-gray-700 mb-1">Fabricată după:</label>
                  <Input 
                    id="manufactureYear"
                    name="manufactureYear"
                    placeholder="2015"
                    value={formData.manufactureYear}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">Transmisie:</label>
                  <Input 
                    id="transmission"
                    name="transmission"
                    placeholder="Manuală"
                    value={formData.transmission}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Bugetul tău (€):</label>
                  <Input 
                    id="budget"
                    name="budget"
                    placeholder="Ex: 10.000"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="acquisitionType" className="block text-sm font-medium text-gray-700 mb-1">Tip achiziție:</label>
                  <Input 
                    id="acquisitionType"
                    name="acquisitionType"
                    placeholder="Persoană juridică"
                    value={formData.acquisitionType}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Numele tău:</label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Numele tău sau al companiei"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon:</label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Numărul tău de telefon"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail:</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Adresa de e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Localitate:</label>
                  <Input 
                    id="location"
                    name="location"
                    placeholder="Localitate"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="md:col-span-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="leasing" 
                      checked={formData.wantsLeasing} 
                      onCheckedChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="leasing"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Doresc leasing auto
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground ml-6 mt-1">
                    Persoane fizice și juridice
                  </p>
                </div>
                
                {showLeasing && (
                  <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg mt-2">
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Valoarea mașinii:</span>
                        <span className="text-sm font-semibold">{formData.carValue.toLocaleString()}€</span>
                      </div>
                      <Slider 
                        defaultValue={[formData.carValue]} 
                        max={50000} 
                        min={5000} 
                        step={1000}
                        onValueChange={(value) => handleSliderChange('carValue', value)}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Avans:</span>
                        <span className="text-sm font-semibold">{formData.downPayment}%</span>
                      </div>
                      <Slider 
                        defaultValue={[formData.downPayment]} 
                        max={90} 
                        min={10} 
                        step={5}
                        onValueChange={(value) => handleSliderChange('downPayment', value)}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Perioadă:</span>
                        <span className="text-sm font-semibold">{formData.period} luni</span>
                      </div>
                      <Slider 
                        defaultValue={[formData.period]} 
                        max={72} 
                        min={12} 
                        step={12}
                        onValueChange={(value) => handleSliderChange('period', value)}
                      />
                    </div>
                    
                    <div className="bg-yellow-100 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-2">Rata lunară estimativă:</p>
                      <p className="text-2xl font-bold text-primary">{monthlyPayment} €/lună</p>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-4">
                      * Acest calcul este unul estimativ, întrucât se bazează pe condiții de finanțare
                      generale, care nu iau în calcul posibile oferte speciale existente, particularități ale 
                      firmelor solicitante sau bonitatea solicitanților. Valorile exprimate sunt disponibile 
                      exclusiv pentru persoanele juridice sau persoanele fizice autorizate.
                    </p>
                  </div>
                )}
                
                <div className="md:col-span-2 mt-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <label
                      htmlFor="terms"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Sunt de acord cu <a href="#" className="text-primary hover:underline">Termenii și condițiile</a> precum și cu <a href="#" className="text-primary hover:underline">Politica de confidențialitate</a>.
                    </label>
                  </div>
                </div>
                
                <div className="md:col-span-2 mt-6">
                  <Button type="submit" className="w-full py-6">
                    Trimite cererea
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRequestForm;
