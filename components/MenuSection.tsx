"use client";
import { useState } from "react";
import { Leaf, Droplet, Heart, Flower2, Search } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { FlyingItem } from "./FlyingItem";
import { Toast } from "./Toast";
import { ProductModal } from "./ProductModal";

const products = [
  { 
    id: 1, 
    name: "Kunyit Asem", 
    price: "Rp 45.000", 
    priceNumber: 45000, 
    desc: "Minuman tradisional dari kunyit dan asam jawa. Menyegarkan dan baik untuk pencernaan.", 
    icon: Leaf, 
    color: "from-yellow-400 to-orange-500", 
    category: "Jamu Tradisional",
    badge: "Best Seller"
  },
  { 
    id: 2, 
    name: "Jahe Manis", 
    price: "Rp 45.000", 
    priceNumber: 45000, 
    desc: "Wedang jahe hangat dengan gula aren. Menghangatkan tubuh dan meningkatkan daya tahan tubuh.", 
    icon: Droplet, 
    color: "from-amber-400 to-red-500", 
    category: "Jamu Tradisional",
    badge: null
  },
  { 
    id: 3, 
    name: "Beras Kencur", 
    price: "Rp 45.000", 
    priceNumber: 45000, 
    desc: "Perpaduan beras dan kencur yang khas. Baik untuk stamina dan kesehatan tubuh.", 
    icon: Heart, 
    color: "from-green-400 to-emerald-600", 
    category: "Jamu Tradisional",
    badge: "Favorit"
  },
  { 
    id: 4, 
    name: "Temulawak", 
    price: "Rp 45.000", 
    priceNumber: 45000, 
    desc: "Jamu temulawak asli untuk menjaga kesehatan hati dan meningkatkan nafsu makan.", 
    icon: Flower2, 
    color: "from-orange-400 to-yellow-600", 
    category: "Jamu Tradisional",
    badge: null
  },
  { 
    id: 5, 
    name: "Sambiloto (Pahitan)", 
    price: "Rp 45.000", 
    priceNumber: 45000, 
    desc: "Jamu pahitan dari daun sambiloto. Baik untuk diabetes dan menjaga kadar gula darah.", 
    icon: Leaf, 
    color: "from-green-600 to-teal-700", 
    category: "Jamu Tradisional",
    badge: null
  },
  { 
    id: 6, 
    name: "Daun Sirih", 
    price: "Rp 45.000", 
    priceNumber: 45000, 
    desc: "Ekstrak daun sirih tradisional. Baik untuk kesehatan mulut dan pencernaan.", 
    icon: Leaf, 
    color: "from-emerald-400 to-green-600", 
    category: "Jamu Tradisional",
    badge: "Baru"
  },
];

export function MenuSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [flyingItem, setFlyingItem] = useState<{ startX: number; startY: number; endX: number; endY: number; key: number } | null>(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleAddToCart = (product: typeof products[0], event: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Ambil posisi tombol yang diklik langsung dari event
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const startX = buttonRect.left + buttonRect.width / 2;
    const startY = buttonRect.top + buttonRect.height / 2;

    // 2. Ambil posisi cart icon
    const cartElement = document.querySelector('[data-cart-icon]') as HTMLElement;
    let endX = window.innerWidth - 100;
    let endY = 80;
    
    if (cartElement) {
      const cartRect = cartElement.getBoundingClientRect();
      endX = cartRect.left + cartRect.width / 2;
      endY = cartRect.top + cartRect.height / 2;
    }

    // 3. Trigger animasi dengan key unik
    setFlyingItem({ 
      startX, 
      startY, 
      endX, 
      endY, 
      key: Date.now()
    });

    // 4. Tambah ke cart setelah animasi mulai
    setTimeout(() => {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        priceNumber: product.priceNumber,
        category: product.category
      });
      setToastMessage(`${product.name} ditambahkan ke keranjang`);
      setShowToast(true);
    }, 100);
  };

  const handleCardClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
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
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-amber-700 font-medium hover:underline"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative bg-white rounded-2xl border border-stone-200 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {product.badge && (
                    <div className="absolute top-4 right-4 z-20 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {product.badge}
                    </div>
                  )}
                  <div 
                    onClick={() => handleCardClick(product)}
                    className={`h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    <Icon className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold group-hover:text-amber-700 transition-colors duration-300 mb-2 text-stone-900">
                      {product.name}
                    </h3>
                    <p className="text-stone-600 text-sm mb-4 leading-relaxed">{product.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-700">{product.price}<span className="text-sm text-stone-500">/liter</span></span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product, e);
                        }}
                        className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors duration-300"
                      >
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Flying Item Animation */}
      {flyingItem && (
        <FlyingItem
          key={flyingItem.key}
          startX={flyingItem.startX}
          startY={flyingItem.startY}
          endX={flyingItem.endX}
          endY={flyingItem.endY}
          onComplete={() => setFlyingItem(null)}
        />
      )}

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}