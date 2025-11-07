
import React from 'react';
import { CartItem } from '../types';
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon } from './icons';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (tourId: number, quantity: number) => void;
  onRemoveItem: (tourId: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.tour.price * item.quantity, 0);

  const handleCheckout = () => {
    const phoneNumber = '5582999999999'; // REPLACE with your WhatsApp number
    let message = 'Olá PartiuAlagoas! Gostaria de reservar os seguintes passeios:\n\n';
    cartItems.forEach(item => {
      message += `*${item.tour.title}*\n`;
      message += `Quantidade: ${item.quantity}\n`;
      if (item.observation) {
        message += `Observação: ${item.observation}\n`;
      }
      message += `Subtotal: R$ ${(item.tour.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });
    message += `*Total: R$ ${subtotal.toFixed(2).replace('.', ',')}*`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-4 border-b">
            <h2 id="cart-heading" className="text-xl font-bold text-gray-800">Seu Carrinho</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Fechar carrinho">
              <CloseIcon className="w-6 h-6" />
            </button>
          </header>

          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <i className="fas fa-shopping-cart text-gray-300 text-6xl mb-4"></i>
                <h3 className="text-lg font-semibold text-gray-700">Seu carrinho está vazio</h3>
                <p className="text-gray-500 mt-1">Adicione passeios para vê-los aqui.</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.map(item => (
                <div key={item.tour.id} className="flex items-start space-x-3 p-2 border rounded-lg">
                  <img src={item.tour.imageUrl} alt={item.tour.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 truncate">{item.tour.title}</h4>
                    <p className="text-sm text-green-600 font-bold">R$ {item.tour.price.toFixed(2).replace('.', ',')}</p>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-200 rounded-md">
                            <button onClick={() => onUpdateQuantity(item.tour.id, item.quantity - 1)} className="p-1 text-gray-500 hover:bg-gray-100 rounded-l-md" aria-label={`Diminuir quantidade de ${item.tour.title}`}><MinusIcon className="w-4 h-4"/></button>
                            <span className="px-3 text-sm font-bold">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.tour.id, item.quantity + 1)} className="p-1 text-gray-500 hover:bg-gray-100 rounded-r-md" aria-label={`Aumentar quantidade de ${item.tour.title}`}><PlusIcon className="w-4 h-4"/></button>
                        </div>
                        <button onClick={() => onRemoveItem(item.tour.id)} className="text-red-500 hover:text-red-700" aria-label={`Remover ${item.tour.title} do carrinho`}>
                            <TrashIcon className="w-5 h-5" />
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <footer className="p-4 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-gray-700">Total</span>
                <span className="text-2xl font-bold text-gray-900">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <button onClick={handleCheckout} className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors text-lg flex items-center justify-center space-x-2">
                <i className="fab fa-whatsapp"></i>
                <span>Finalizar Compra</span>
              </button>
            </footer>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
