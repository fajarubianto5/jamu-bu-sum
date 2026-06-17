"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartButton() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { items, updateQuantity, removeFromCart, clearCart, totalItems, isShaking } = useCart();

  return (
    <>
      <button
        onClick={() => router.push("/cart")}
        data-cart-icon
        className={`relative p-2 text-stone-700 hover:text-amber-700 transition-colors ${
          isShaking ? "animate-shake" : ""
        }`}
      >
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <span className={`absolute -top-1 -right-1 bg-amber-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transition-transform ${
            isShaking ? "scale-125" : "scale-100"
          }`}>
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b bg-white">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Keranjang Belanja</h3>
                <p className="text-sm text-stone-500">{totalItems} item</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-stone-100 rounded-lg transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="h-16 w-16 text-stone-300 mb-4" />
                  <p className="text-stone-500 text-lg">Keranjang masih kosong</p>
                  <p className="text-stone-400 text-sm mt-2">Tambahkan jamu favorit Anda</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-stone-900">{item.name}</h4>
                          <p className="text-sm text-amber-700 font-bold mt-1">{item.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-stone-200">
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-stone-100 rounded-md transition-colors disabled:opacity-30" disabled={item.quantity <= 1}>
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            min="1"
                            max="99"
                            value={item.quantity}
                            onChange={(e) => {
                              const val = parseInt(e.target.value);
                              if (!isNaN(val) && val > 0) updateQuantity(item.id, val);
                            }}
                            className="w-12 text-center font-bold border-0 focus:outline-none focus:ring-0 bg-transparent"
                          />
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-stone-100 rounded-md transition-colors">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:text-red-700 font-medium">Hapus</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t p-6 bg-white space-y-3">
                <button onClick={() => router.push("/cart")} className="w-full py-3 bg-amber-700 text-white font-bold rounded-lg hover:bg-amber-800 transition-colors shadow-lg">
                  Lihat Keranjang
                </button>
                <button onClick={() => setIsOpen(false)} className="w-full py-2 text-sm text-stone-600 hover:text-stone-800 transition-colors">
                  Lanjut Belanja
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}