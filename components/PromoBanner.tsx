"use client";
import { useState } from "react";
import { X, Gift, Truck } from "lucide-react";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-stone-900 via-amber-800 to-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 bg-white/20 p-2 rounded-lg">
              <Truck className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm md:text-base truncate">
                🚚 Gratis Ongkir untuk pembelian minimal 5 liter dalam area Jakarta!
              </p>
              <p className="text-xs md:text-sm opacity-90 flex items-center gap-1 mt-0.5">
                <Gift className="h-3 w-3" />
                Supplier terpercaya hotel bintang 5 sejak 1990
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#produk"
              className="hidden md:inline-flex px-4 py-1.5 bg-amber-700 text-white font-bold text-sm rounded-full hover:bg-amber-600 transition-colors"
            >
              Pesan Sekarang
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Tutup banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}