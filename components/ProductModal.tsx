"use client";
import { X } from "lucide-react";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    price: string;
    priceNumber: number;
    desc: string;
    image: string | null;
    category: string;
    badge: string | null;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors z-10"
        >
          <X className="h-5 w-5 text-stone-600" />
        </button>

        {/* Product Image */}
        {product.image ? (
          <div className="h-64 w-full relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="h-64 w-full bg-stone-200 flex items-center justify-center">
            <span className="text-stone-400">Foto tidak tersedia</span>
          </div>
        )}

        {/* Product Info */}
        <div className="p-6">
          <div className="mb-4">
            <span className="text-sm font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              {product.category}
            </span>
            {product.badge && (
              <span className="ml-2 text-sm font-bold text-white bg-amber-700 px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          <h2 className="text-3xl font-bold text-stone-900 mb-2">{product.name}</h2>
          
          <p className="text-2xl font-bold text-amber-700 mb-4">
            {product.price}<span className="text-sm text-stone-500">/liter</span>
          </p>

          <p className="text-stone-600 mb-6 leading-relaxed">{product.desc}</p>

          {/* Size Options */}
          <div className="mb-6">
            <h3 className="font-bold text-stone-900 mb-3">Pilih Ukuran:</h3>
            <div className="grid grid-cols-3 gap-3">
              <button className="p-3 border-2 border-amber-700 bg-amber-50 text-amber-700 font-semibold rounded-lg">
                1 Liter
              </button>
              <button className="p-3 border-2 border-stone-200 hover:border-amber-600 text-stone-700 font-semibold rounded-lg transition-colors">
                5 Liter
              </button>
              <button className="p-3 border-2 border-stone-200 hover:border-amber-600 text-stone-700 font-semibold rounded-lg transition-colors">
                10 Liter
              </button>
            </div>
          </div>

          {/* Order Button */}
          <a
            href={`https://wa.me/6282114507525?text=Halo Bu Sum, saya ingin pesan ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl transition-colors text-center block"
          >
            Pesan Sekarang via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}