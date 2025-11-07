
import React, { useState } from 'react';
import { Tour } from '../types';
import { CloseIcon, PlusIcon, MinusIcon } from './icons';

interface TourDetailModalProps {
  tour: Tour;
  onClose: () => void;
}

const TourDetailModal: React.FC<TourDetailModalProps> = ({ tour, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState('');

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  const total = (tour.price * quantity).toFixed(2).replace('.', ',');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col">
        <div className="relative">
          <img src={tour.imageUrl} alt={tour.title} className="w-full h-48 object-cover rounded-t-xl" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black bg-opacity-40 text-white rounded-full p-1.5 hover:bg-opacity-60 transition-colors"
            aria-label="Fechar"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{tour.title}</h2>
          {tour.discount && <span className="text-sm font-bold text-white bg-red-500 px-2 py-1 rounded-md mt-1 inline-block">{tour.discount}</span>}
          
          <div className="flex items-baseline space-x-2 my-3">
            {tour.originalPrice && (
              <p className="text-lg text-gray-500 line-through">De: R$ {tour.originalPrice.toFixed(2).replace('.', ',')}</p>
            )}
            <p className="text-2xl font-extrabold text-green-600">Por: R$ {tour.price.toFixed(2).replace('.', ',')}</p>
          </div>
          
          <p className="text-gray-600 text-base leading-relaxed">{tour.fullDescription}</p>
          
          <div className="mt-6">
            <label htmlFor="observation" className="block text-sm font-medium text-gray-700">Alguma observação?</label>
            <textarea
              id="observation"
              rows={2}
              maxLength={140}
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              placeholder="Ex: alergias, pedidos especiais..."
            ></textarea>
            <p className="text-right text-xs text-gray-400 mt-1">{observation.length}/140</p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t rounded-b-xl">
          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold text-gray-700">Quantidade</p>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button onClick={handleDecrement} className="p-2 text-gray-600 hover:bg-gray-200 rounded-l-lg"><MinusIcon className="w-5 h-5"/></button>
              <span className="px-4 font-bold text-lg">{quantity}</span>
              <button onClick={handleIncrement} className="p-2 text-gray-600 hover:bg-gray-200 rounded-r-lg"><PlusIcon className="w-5 h-5"/></button>
            </div>
          </div>
          <button className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors text-lg">
            Adicionar R$ {total}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourDetailModal;
