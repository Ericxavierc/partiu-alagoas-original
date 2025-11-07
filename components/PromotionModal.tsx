
import React from 'react';
import { Tour } from '../types';
import TourCard from './TourCard';
import { CloseIcon } from './icons';

interface PromotionModalProps {
  promos: Tour[];
  onClose: () => void;
  onTourSelect: (tour: Tour) => void;
}

const PromotionModal: React.FC<PromotionModalProps> = ({ promos, onClose, onTourSelect }) => {
  const handleCardClick = (tour: Tour) => {
    onClose();
    onTourSelect(tour);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-95 hover:scale-100">
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-cyan-600">Promoções de Passeios</h2>
            <p className="text-gray-500">Aproveite nossas ofertas exclusivas!</p>
          </div>
          <div className="space-y-4">
            {promos.map(promo => (
              <TourCard key={promo.id} tour={promo} onClick={handleCardClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
