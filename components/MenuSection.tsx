"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Toast } from "./Toast";
import { ProductModal } from "./ProductModal";

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

const products: Product[] = [
  { id: 1, name: "Kunyit Asem", price: "Rp 45.000", priceNumber: 45000, desc: "Minuman tradisional dari kunyit dan asam jawa. Menyegarkan dan baik untuk pencernaan.", image: "/products/kunyit-asem.jpg", category: "Jamu Tradisional", badge: "Best Seller" },
  { id: 2, name: "Jahe Manis", price: "Rp 45.000", priceNumber: 45000, desc: "Wedang jahe hangat dengan gula aren. Menghangatkan tubuh dan meningkatkan daya tahan tubuh.", image: "/products/jahe-manis.jpg", category: "Jamu Tradisional", badge: null },
  { id: 3, name: "Beras Kencur", price: "Rp 45.000", priceNumber: 45000, desc: "Perpaduan beras dan kencur yang khas. Baik untuk stamina dan kesehatan tubuh.", image: "/products/beras-kencur.jpg", category: "Jamu Tradisional", badge: "Favorit" },
  { id: 4, name: "Temulawak", price: "Rp 45.000", priceNumber: 45000, desc: "Jamu temulawak asli untuk menjaga kesehatan hati dan meningkatkan nafsu makan.", image: "/products/temulawak.jpg", category: "Jamu Tradisional", badge: null },
  { id: 5, name: "Sambiloto (Pahitan)", price: "Rp 45.000", priceNumber: 45000, desc: "Jamu pahitan dari daun sambiloto. Baik untuk diabetes dan menjaga kadar gula darah.", image: "/products/sambiloto.jpg", category: "Jamu Tradisional", badge: null },
  { id: 6, name: "Daun Sirih", price: "Rp 45.000", priceNumber: 45000, desc: "Ekstrak daun sirih tradisional. Baik untuk kesehatan mulut dan pencernaan.", image: null, category: "Jamu Tradisional", badge: "Baru" },
];

export function MenuSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: `${product.name} (1 Liter)`,
        price: product.price,
        priceNumber: product.priceNumber,
        category: product.category
      });
    }
    setToastMessage(`${quantity}x ${product.name} ditambahkan ke keranjang`);
    setShowToast(true);
  };

  return (
    <section id="produk" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-stone-900">Produk Jamu Kami</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Semua jamu dijual Rp 45.000/liter. Dibuat dari bahan alami pilihan dengan resep warisan keluarga.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
            <input
              type="text"
              placeholder="Cari jamu favorit Anda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-stone-300 mx-auto mb-4" />
            <p className="text-stone-600 text-lg">Tidak ada produk yang cocok dengan pencarian Anda</p>
            <button onClick={() => setSearchQuery("")} className="mt-4 text-amber-700 font-medium hover:underline">Reset Pencarian</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl border border-stone-200 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                onClick={() => handleCardClick(product)}
              >
                {product.badge && (
                  <div className="absolute top-4 right-4 z-20 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {product.badge}
                  </div>
                )}
                {/* FOTO PRODUK: Kembali ke object-cover (mengisi penuh) */}
                <div className="h-48 relative overflow-hidden bg-stone-100">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-stone-200">
                      <span className="text-stone-400 text-sm font-medium">Foto segera hadir</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-amber-700 transition-colors duration-300 mb-2 text-stone-900">{product.name}</h3>
                  <p className="text-stone-600 text-sm mb-4 leading-relaxed">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-700">{product.price} <span className="text-sm text-stone-500 font-normal">(1 Liter)</span></span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleCardClick(product); }}
                      className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors duration-300"
                    >
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Toast message={toastMessage} isVisible={showToast} onClose={() => setShowToast(false)} />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
}