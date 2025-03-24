import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LeasingCalculatorProps {
  onUpdate: (values: {
    downPayment: number;
    loanTerm: number;
    interestRate: number;
    monthlyPayment: number;
  }) => void;
}

const LeasingCalculator = ({ onUpdate }: LeasingCalculatorProps) => {
  const [carPrice, setCarPrice] = useState(30000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(8);

  const calculateMonthlyPayment = () => {
    const loanAmount = carPrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 12 / 100;
    const numberOfPayments = loanTerm;
    
    const monthlyPayment = 
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return Math.round(monthlyPayment);
  };

  const handleChange = (value: number, type: 'price' | 'downPayment' | 'loanTerm' | 'interestRate') => {
    switch (type) {
      case 'price':
        setCarPrice(value);
        break;
      case 'downPayment':
        setDownPayment(value);
        break;
      case 'loanTerm':
        setLoanTerm(value);
        break;
      case 'interestRate':
        setInterestRate(value);
        break;
    }

    const monthlyPayment = calculateMonthlyPayment();
    onUpdate({
      downPayment,
      loanTerm,
      interestRate,
      monthlyPayment
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Calculator Leasing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Preț Mașină (€)</Label>
          <div className="flex gap-4">
            <Input
              type="number"
              value={carPrice}
              onChange={(e) => handleChange(Number(e.target.value), 'price')}
              className="flex-1"
            />
            <Slider
              value={[carPrice]}
              onValueChange={([value]) => handleChange(value, 'price')}
              min={10000}
              max={100000}
              step={1000}
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Avans ({downPayment}%)</Label>
          <div className="flex gap-4">
            <Input
              type="number"
              value={downPayment}
              onChange={(e) => handleChange(Number(e.target.value), 'downPayment')}
              className="flex-1"
            />
            <Slider
              value={[downPayment]}
              onValueChange={([value]) => handleChange(value, 'downPayment')}
              min={0}
              max={50}
              step={5}
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Perioada (luni)</Label>
          <div className="flex gap-4">
            <Input
              type="number"
              value={loanTerm}
              onChange={(e) => handleChange(Number(e.target.value), 'loanTerm')}
              className="flex-1"
            />
            <Slider
              value={[loanTerm]}
              onValueChange={([value]) => handleChange(value, 'loanTerm')}
              min={12}
              max={84}
              step={12}
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Rata Dobânzii ({interestRate}%)</Label>
          <div className="flex gap-4">
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => handleChange(Number(e.target.value), 'interestRate')}
              className="flex-1"
            />
            <Slider
              value={[interestRate]}
              onValueChange={([value]) => handleChange(value, 'interestRate')}
              min={4}
              max={12}
              step={0.5}
              className="flex-1"
            />
          </div>
        </div>

        <div className="bg-primary/10 p-4 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600">Rata Lunara Estimata</p>
            <p className="text-2xl font-bold text-primary">
              {calculateMonthlyPayment()} €
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeasingCalculator; 