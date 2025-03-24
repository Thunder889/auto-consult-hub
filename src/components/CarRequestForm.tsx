import { Button } from "@/components/ui/button";

const CarRequestForm = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Preferințele Tale</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Marcă</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md" disabled>
                      <option>Selectează marca</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md" disabled>
                      <option>Selectează modelul</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Anul Fabricației</label>
                    <div className="grid grid-cols-2 gap-4">
                      <select className="w-full p-2 border border-gray-300 rounded-md" disabled>
                        <option>Minim</option>
                      </select>
                      <select className="w-full p-2 border border-gray-300 rounded-md" disabled>
                        <option>Maxim</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Buget (€)</label>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Minim" className="w-full p-2 border border-gray-300 rounded-md" disabled />
                      <input type="text" placeholder="Maxim" className="w-full p-2 border border-gray-300 rounded-md" disabled />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Datele Tale de Contact</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nume și Prenume</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" disabled />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input type="tel" className="w-full p-2 border border-gray-300 rounded-md" disabled />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded-md" disabled />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj (opțional)</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded-md h-24" disabled></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button size="lg" className="rounded-full px-8 py-6">
                Trimite Solicitarea
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Formularul este momentan inactiv. Te rugăm să ne contactezi telefonic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRequestForm;
