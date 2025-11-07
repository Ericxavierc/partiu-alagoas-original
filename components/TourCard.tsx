
import React from 'react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  onClick: (tour: Tour) => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onClick }) => {
  return (
    <div
      className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
      onClick={() => onClick(tour)}
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-md font-bold text-gray-800 truncate">{tour.title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{tour.shortDescription}</p>
        <div className="flex items-baseline space-x-2 mt-2">
          <p className="text-lg font-bold text-green-600">R$ {tour.price.toFixed(2).replace('.', ',')}</p>
          {tour.originalPrice && (
            <p className="text-sm text-gray-400 line-through">R$ {tour.originalPrice.toFixed(2).replace('.', ',')}</p>
          )}
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default TourCard;
