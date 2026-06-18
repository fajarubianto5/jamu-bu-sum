"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

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
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !product || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
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
          {/* Badge & Category */}
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

          {/* Title */}
          <h2 className="text-3xl font-bold text-stone-900 mb-2">{product.name}</h2>
          
          {/* Price */}
          <p className="text-2xl font-bold text-amber-700 mb-4">
            {product.price}<span className="text-sm text-stone-500">/liter</span>
          </p>

          {/* Description */}
          <p className="text-stone-600 leading-relaxed">{product.desc}</p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}