"use client";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const adminNumber = "6282114507525";
  const defaultMessage = "Halo Jamu Bu Sum! Saya mau tanya tentang produk jamu.";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${adminNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat dengan kami!
      </span>
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
    </button>
  );
}