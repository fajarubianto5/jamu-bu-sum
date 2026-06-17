"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    price: string;
    priceNumber: number;
    desc: string;
    category: string;
    icon: any;
    color: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const sizes = [
  { label: "1 Liter", multiplier: 1, desc: "Ukuran standar" },
  { label: "2 Liter", multiplier: 2, desc: "Hemat 5%" },
  { label: "5 Liter", multiplier: 4.75, desc: "Hemat 10% (Best Value)" },
];

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("1 Liter");
  const [quantity, setQuantity] = useState(1);

  // Lock body scroll saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const Icon = product.icon;
  const sizeMultiplier = sizes.find(s => s.label === selectedSize)?.multiplier || 1;
  const finalPrice = Math.round(product.priceNumber * sizeMultiplier);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: `${product.name} (${selectedSize})`,
        price: `Rp ${finalPrice.toLocaleString("id-ID")}`,
        priceNumber: finalPrice,
        category: product.category
      });
    }
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
        >
          <X className="h-5 w-5 text-stone-700" />
        </button>

        {/* Product Image/Header */}
        <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden rounded-t-3xl`}>
          <div className="absolute inset-0 bg-black/10" />
          <Icon className="h-24 w-24 text-white relative z-10" />
          <span className="absolute top-4 left-4 bg-white/90 text-stone-800 text-xs font-bold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title & Price */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">{product.name}</h2>
            <p className="text-stone-600 leading-relaxed">{product.desc}</p>
            <p className="text-3xl font-bold text-amber-700 mt-4">
              Rp {finalPrice.toLocaleString("id-ID")}
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold text-stone-900 mb-3">Pilih Ukuran</h3>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map(size => (
                <button
                  key={size.label}
                  onClick={() => setSelectedSize(size.label)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedSize === size.label
                      ? "border-amber-700 bg-amber-50"
                      : "border-stone-200 hover:border-amber-300"
                  }`}
                >
                  <p className="font-bold text-lg text-stone-900">{size.label}</p>
                  <p className="text-xs text-stone-600">{size.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-3 bg-stone-100 rounded-lg p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-stone-200 rounded-md transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-bold w-8 text-center text-stone-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-stone-200 rounded-md transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 py-3 bg-amber-700 text-white font-bold rounded-lg hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Portal: render modal langsung di document.body
  if (typeof window !== "undefined") {
    return createPortal(modalContent, document.body);
  }
  
  return null;
}