
import React from 'react';
import { ShoppingCartIcon } from './icons';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold text-cyan-600">PartiuAlagoas</h1>
            <p className="text-sm text-gray-600">Guia & Passeios</p>
          </div>
          <div className="flex items-center space-x-6 mt-2 md:mt-0">
            <div className="text-sm text-gray-700 md:text-right">
              <p className="font-semibold"><i className="fas fa-map-marker-alt mr-2 text-red-500"></i>Maceió - AL • <a href="#" className="text-cyan-500 hover:underline">Mais informações</a></p>
              <p className="text-green-600 font-medium"><i className="fas fa-clock mr-2"></i>Aberto todos os dias das 8h00 às 18h00</p>
            </div>
            <button onClick={onCartClick} className="relative text-gray-600 hover:text-cyan-600 transition-colors" aria-label="Ver carrinho">
                <ShoppingCartIcon className="w-8 h-8"/>
                {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                        {cartItemCount}
                    </span>
                )}
            </button>
          </div>
        </div>
        <div className="border-t mt-3 pt-3 flex flex-col md:flex-row justify-between items-start text-sm">
            <div className="flex items-center space-x-4">
                <a href="#" className="text-cyan-600 font-semibold hover:underline"><i className="fas fa-route mr-2"></i>Calcular Rota e Tempo de Viagem</a>
            </div>
            <div className="mt-2 md:mt-0 text-gray-600 bg-amber-100 border border-amber-300 rounded-md p-2">
                <p><i className="fas fa-star mr-2 text-amber-500"></i><span className="font-bold">Programa de Fidelidade:</span> A cada R$ 100,00 em passeios, ganhe 1 ponto!</p>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
