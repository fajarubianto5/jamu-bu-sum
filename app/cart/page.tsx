"use client";
import { BatikBackground } from "@/components/BatikBackground";
import { PromoBanner } from "@/components/PromoBanner";
import { FloatingTime } from "@/components/FloatingTime";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, MessageCircle, CheckCircle, Award, Truck } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const recommendedProducts = [
  { id: 1, name: "Kunyit Asem", price: "Rp 45.000", color: "from-yellow-400 to-orange-500", badge: "Best Seller" },
  { id: 3, name: "Beras Kencur", price: "Rp 45.000", color: "from-green-400 to-emerald-600", badge: "Favorit" },
  { id: 2, name: "Jahe Manis", price: "Rp 45.000", color: "from-amber-400 to-red-500", badge: null },
];

const trustBadges = [
  { icon: CheckCircle, title: "100% Bahan Alami", desc: "Tanpa pengawet buatan" },
  { icon: Award, title: "Kualitas Terjamin", desc: "Resep warisan 1990" },
  { icon: Truck, title: "Gratis Ongkir", desc: "Pembelian 6 botol/liter" },
];

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);
  };

  // Hitung ongkos kirim: gratis jika 6+ botol, Rp 10rb per botol kurang
  const calculateShipping = (items: number): number => {
    if (items >= 6) return 0;
    return (6 - items) * 10000;
  };

  const shippingCost = calculateShipping(totalItems);
  const grandTotal = totalPrice + shippingCost;
  const bottlesNeededForFreeShipping = Math.max(0, 6 - totalItems);

  const handleWhatsAppOrder = () => {
    const adminNumber = "6282114507525";
    let message = "*🛒 PESANAN BARU DARI WEBSITE JAMU BU SUM*\n\n";
    message += "*Detail Pesanan:*\n";
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Qty: ${item.quantity}x ${formatPrice(item.priceNumber)}\n`;
      message += `   Subtotal: ${formatPrice(item.priceNumber * item.quantity)}\n\n`;
    });
    message += `💰 *Subtotal: ${formatPrice(totalPrice)}*\n`;
    
    if (shippingCost === 0) {
      message += `🚚 *Ongkos Kirim: GRATIS* (6+ botol)\n`;
    } else {
      message += `🚚 Ongkos Kirim: ${formatPrice(shippingCost)}\n`;
    }
    
    message += `\n💵 *TOTAL: ${formatPrice(grandTotal)}*\n`;
    message += `\nAlamat pengiriman akan dikonfirmasi via chat`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${adminNumber}?text=${encodedMessage}`, "_blank");
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <BatikBackground />
      <PromoBanner />
      <Navbar />
      <main className="flex-1 py-12 mt-[80px]">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header dengan animasi */}
          <ScrollAnimation>
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Kembali Belanja
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-stone-900">
                <ShoppingCart className="h-8 w-8 text-amber-700" />
                Keranjang Belanja
              </h1>
              <p className="text-stone-600 mt-2">{totalItems} item dalam keranjang</p>
            </div>
          </ScrollAnimation>

          {items.length === 0 ? (
            <ScrollAnimation>
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-stone-200">
                <ShoppingCart className="h-24 w-24 text-stone-300 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Keranjang Masih Kosong</h2>
                <p className="text-stone-600 mb-6">Yuk, tambahkan jamu favorit Anda!</p>
                <Link href="/#produk" className="inline-flex items-center px-6 py-3 bg-amber-700 text-white font-bold rounded-lg hover:bg-amber-800 transition-colors">
                  Lihat Produk
                </Link>
              </div>
            </ScrollAnimation>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Cart Items dengan animasi stagger */}
              <div className="md:col-span-2 space-y-4">
                {items.map((item, idx) => (
                  <ScrollAnimation key={item.id} delay={idx * 100}>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-stone-900">{item.name}</h3>
                          <p className="text-sm text-stone-500 mb-2">{item.category}</p>
                          <p className="text-amber-700 font-bold">{formatPrice(item.priceNumber)}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center bg-stone-50 rounded-lg border border-stone-200">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-stone-100 rounded-l-lg transition-colors">
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 font-bold text-stone-900">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-stone-100 rounded-r-lg transition-colors">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-stone-200 text-right">
                        <span className="text-sm text-stone-600">Subtotal: </span>
                        <span className="font-bold text-stone-900">{formatPrice(item.priceNumber * item.quantity)}</span>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
                <ScrollAnimation delay={items.length * 100}>
                  <button onClick={clearCart} className="w-full py-3 text-red-600 font-medium hover:bg-red-50 rounded-lg transition-colors">
                    Kosongkan Keranjang
                  </button>
                </ScrollAnimation>
              </div>

              {/* Order Summary dengan animasi */}
              <ScrollAnimation delay={200}>
                <div className="md:col-span-1">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 sticky top-24">
                    <h3 className="text-lg font-bold mb-4 text-stone-900">Ringkasan Pesanan</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-stone-600">
                        <span>Subtotal ({totalItems} item)</span>
                        <span>{formatPrice(totalPrice)}</span>
                      </div>
                      <div className="flex justify-between text-stone-600">
                        <span>Ongkos Kirim</span>
                        {shippingCost === 0 ? (
                          <span className="text-green-600 font-bold">GRATIS 🎉</span>
                        ) : (
                          <span>{formatPrice(shippingCost)}</span>
                        )}
                      </div>
                      
                      {/* Progress Gratis Ongkir */}
                      {shippingCost === 0 ? (
                        <p className="text-xs text-green-600 bg-green-50 p-2 rounded-lg">
                          🚚 <strong>GRATIS ONGKIR</strong> (6+ botol)
                        </p>
                      ) : (
                        <p className="text-xs text-amber-700 bg-amber-50 p-2 rounded-lg">
                          🚚 Nambah <strong>{bottlesNeededForFreeShipping} botol</strong> lagi untuk <strong>GRATIS ONGKIR</strong>
                        </p>
                      )}
                      
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-amber-700">{formatPrice(grandTotal)}</span>
                        </div>
                      </div>
                    </div>
                    <button onClick={handleWhatsAppOrder} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Pesan via WhatsApp
                    </button>
                    <p className="text-xs text-stone-500 mt-3 text-center">
                      Anda akan diarahkan ke WhatsApp untuk menyelesaikan pesanan
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          )}

          {/* Rekomendasi Produk dengan animasi stagger */}
          {items.length === 0 && (
            <div className="mt-16">
              <ScrollAnimation>
                <h3 className="text-xl font-bold text-stone-900 mb-6 text-center">
                  Produk Populer Kami
                </h3>
              </ScrollAnimation>
              <div className="grid md:grid-cols-3 gap-6">
                {recommendedProducts.map((product, idx) => (
                  <ScrollAnimation key={product.id} delay={idx * 150}>
                    <Link 
                      href="/#produk"
                      className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
                    >
                      <div className={`h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative`}>
                        {product.badge && (
                          <span className="absolute top-3 right-3 bg-white/90 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">
                            {product.badge}
                          </span>
                        )}
                        <ShoppingCart className="h-12 w-12 text-white/80" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-stone-900 mb-1 group-hover:text-amber-700 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-amber-700 font-bold">{product.price} <span className="text-sm text-stone-500 font-normal">(1 Liter)</span></p>
                      </div>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          )}

          {/* Trust Badges dengan animasi stagger */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <ScrollAnimation key={idx} delay={idx * 150}>
                  <div className="bg-white rounded-xl p-6 border border-stone-200 text-center hover:shadow-md transition-shadow h-full">
                    <Icon className="h-10 w-10 text-amber-700 mx-auto mb-3" />
                    <h4 className="font-bold text-stone-900 mb-1">{badge.title}</h4>
                    <p className="text-sm text-stone-600">{badge.desc}</p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingTime />
    </div>
  );
}