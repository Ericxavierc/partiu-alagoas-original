
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PromotionModal from './components/PromotionModal';
import TourDetailModal from './components/TourDetailModal';
import TourCard from './components/TourCard';
import { Tour } from './types';
import { TOURS_DATA, CATEGORIES_DATA } from './constants';

const App: React.FC = () => {
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  useEffect(() => {
    // Show the promo modal on initial load
    const timer = setTimeout(() => setIsPromoModalOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const promotionalTours = TOURS_DATA.filter(tour => tour.isPromo);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
  };

  const closePromoModal = () => {
    setIsPromoModalOpen(false);
  };

  const closeDetailModal = () => {
    setSelectedTour(null);
  };

  return (
    <div className="font-sans">
      <Header />

      <main className="container mx-auto p-4 md:p-6">
        <section id="destaques" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 border-l-4 border-cyan-500 pl-4">Destaques</h2>
          <p className="text-gray-500 mb-6 pl-5">As melhores promoções para você!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotionalTours.map(tour => (
              <TourCard key={tour.id} tour={tour} onClick={handleTourSelect} />
            ))}
          </div>
        </section>

        <section id="categorias">
           <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-cyan-500 pl-4">Todos os Passeios</h2>
           <div className="space-y-10">
            {CATEGORIES_DATA.map(category => (
                <div key={category.name}>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">{category.name}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {category.tours.map(tour => (
                             <TourCard key={tour.id} tour={tour} onClick={handleTourSelect} />
                        ))}
                    </div>
                </div>
            ))}
           </div>
        </section>
      </main>

      {isPromoModalOpen && (
        <PromotionModal 
          promos={promotionalTours} 
          onClose={closePromoModal}
          onTourSelect={handleTourSelect}
        />
      )}
      
      {selectedTour && (
        <TourDetailModal 
          tour={selectedTour} 
          onClose={closeDetailModal}
        />
      )}
    </div>
  );
};

export default App;
