"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const isCartPage = pathname === "/cart";

  const quickLinks = [
    { label: "Home", href: isCartPage ? "/" : "#home" },
    { label: "Produk", href: isCartPage ? "/#produk" : "#produk" },
    { label: "Tentang", href: isCartPage ? "/#tentang" : "#tentang" },
    { label: "Kontak", href: isCartPage ? "/#kontak" : "#kontak" },
  ];

  return (
    <footer
      className="relative py-16"
      style={{
        backgroundColor: "#0c0a09",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='batik' x='0' y='0' width='120' height='120' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 10 L 30 30 M 40 10 L 60 30 M 70 10 L 90 30 M 100 10 L 120 30' stroke='%23fbbf24' stroke-width='3' fill='none' opacity='0.9'/%3E%3Cpath d='M 10 40 L 30 60 M 40 40 L 60 60 M 70 40 L 90 60 M 100 40 L 120 60' stroke='%23fbbf24' stroke-width='3' fill='none' opacity='0.9'/%3E%3Cpath d='M 10 70 L 30 90 M 40 70 L 60 90 M 70 70 L 90 90 M 100 70 L 120 90' stroke='%23fbbf24' stroke-width='3' fill='none' opacity='0.9'/%3E%3Cpath d='M 10 100 L 30 120 M 40 100 L 60 120 M 70 100 L 90 120 M 100 100 L 120 120' stroke='%23fbbf24' stroke-width='3' fill='none' opacity='0.9'/%3E%3Cellipse cx='20' cy='20' rx='10' ry='14' fill='none' stroke='%23fbbf24' stroke-width='2.5' opacity='0.8'/%3E%3Cellipse cx='80' cy='20' rx='10' ry='14' fill='none' stroke='%23fbbf24' stroke-width='2.5' opacity='0.8'/%3E%3Cellipse cx='20' cy='80' rx='10' ry='14' fill='none' stroke='%23fbbf24' stroke-width='2.5' opacity='0.8'/%3E%3Cellipse cx='80' cy='80' rx='10' ry='14' fill='none' stroke='%23fbbf24' stroke-width='2.5' opacity='0.8'/%3E%3Ccircle cx='50' cy='50' r='4' fill='%23fbbf24' opacity='0.7'/%3E%3Ccircle cx='110' cy='50' r='4' fill='%23fbbf24' opacity='0.7'/%3E%3Ccircle cx='50' cy='110' r='4' fill='%23fbbf24' opacity='0.7'/%3E%3Ccircle cx='110' cy='110' r='4' fill='%23fbbf24' opacity='0.7'/%3E%3Cpath d='M 0 60 Q 30 50 60 60 T 120 60' stroke='%23fbbf24' stroke-width='2' fill='none' opacity='0.6'/%3E%3Cpath d='M 0 0 Q 30 10 60 0 T 120 0' stroke='%23fbbf24' stroke-width='2' fill='none' opacity='0.6'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23batik)'/%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "120px 120px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Overlay gelap agar motif tidak terlalu kuat */}
      <div className="absolute inset-0 bg-stone-950/92 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Tagline */}
        <div className="text-center mb-12">
          <p className="text-stone-400 text-lg">Warisan Tradisional Sejak 1990</p>
        </div>

        {/* Menu & Kontak - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Menu */}
          <div className="text-center">
            <h3 className="text-amber-500 font-bold mb-4 text-lg">Menu</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-stone-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="text-center">
            <h3 className="text-amber-500 font-bold mb-4 text-lg">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center gap-2 text-stone-300">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span>Jakarta Timur</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-stone-300">
                <Phone className="h-4 w-4 text-amber-500" />
                <a href="https://wa.me/6282114507525" className="hover:text-amber-400 transition-colors">
                  +62 821-1450-7525
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 text-stone-300">
                <Clock className="h-4 w-4 text-amber-500" />
                <span>08:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <a
            href="https://wa.me/6282114507525"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Pesan Sekarang
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Jamu Tradisional Bu Sum. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <p className="text-amber-500 text-xs font-medium">
              Supplier Hotel Bintang 5
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}