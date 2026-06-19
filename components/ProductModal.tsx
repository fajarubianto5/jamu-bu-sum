"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  priceNumber: number;
  desc: string;
  image: string | null;
  category: string;
  badge: string | null;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  const [mounted, setMounted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) setQuantity(1);
  }, [isOpen]);

  if (!isOpen || !product || !mounted) return null;

  const handleOrder = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const modalContent = (
    // BACKDROP: Klik di sini akan menutup modal
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* CONTENT: e.stopPropagation() mencegah klik di dalam modal menutup popup */}
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-stone-100 rounded-full transition-colors z-10 shadow-sm"
        >
          <X className="h-5 w-5 text-stone-600" />
        </button>

        {/* Layout: Desktop horizontal, Mobile vertical */}
        <div className="flex flex-col md:flex-row">
          {/* Left: Product Image (object-contain untuk modal) */}
          <div className="md:w-1/2 w-full">
            {product.image ? (
              <div className="h-64 md:h-full min-h-[300px] w-full bg-gradient-to-b from-stone-100 to-stone-50 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6"
                />
              </div>
            ) : (
              <div className="h-64 md:h-full min-h-[300px] w-full bg-stone-200 flex items-center justify-center">
                <span className="text-stone-400">Foto tidak tersedia</span>
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col justify-center">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="text-sm font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
              {product.badge && (
                <span className="text-sm font-bold text-white bg-amber-700 px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">{product.name}</h2>

            <p className="text-2xl md:text-3xl font-bold text-amber-700 mb-4">
              {product.price} <span className="text-sm md:text-base text-stone-500 font-normal">(1 Liter)</span>
            </p>

            <div className="w-16 h-1 bg-amber-700 mb-4 rounded-full"></div>

            <p className="text-stone-600 leading-relaxed text-base md:text-lg mb-6">{product.desc}</p>

            <div className="mb-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <p className="text-sm text-stone-600">
                <span className="font-bold text-stone-900">💡 Tips:</span> Simpan di kulkas untuk rasa yang lebih segar. Tahan hingga 7 hari.
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-stone-900 mb-3">Jumlah Pesanan:</label>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors">
                  <Minus className="h-5 w-5 text-stone-700" />
                </button>
                <span className="text-2xl font-bold text-stone-900 min-w-[60px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors">
                  <Plus className="h-5 w-5 text-stone-700" />
                </button>
              </div>
              <p className="text-sm text-stone-500 mt-2">
                Total: <span className="font-bold text-amber-700">Rp {(product.priceNumber * quantity).toLocaleString("id-ID")}</span>
              </p>
            </div>

            {/* Order Button */}
            <button onClick={handleOrder} className="w-full py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
              <ShoppingCart className="h-5 w-5" />
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}