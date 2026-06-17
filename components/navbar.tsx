"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { CartButton } from "./CartButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isCartPage = pathname === "/cart";

  const navLinks = [
    { label: "Home", href: isCartPage ? "/" : "#home" },
    { label: "Produk", href: isCartPage ? "/#produk" : "#produk" },
    { label: "Tentang", href: isCartPage ? "/#tentang" : "#tentang" },
    { label: "Kontak", href: isCartPage ? "/#kontak" : "#kontak" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-stone-900">Jamu Bu Sum</Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <CartButton />
          <Button variant="primary" size="sm">Pesan Sekarang</Button>
        </div>

        <button 
          className="md:hidden p-2 text-stone-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                onClick={handleLinkClick}
                className="text-sm font-medium text-stone-700 py-2 hover:text-amber-700"
              >
                {link.label}
              </Link>
            ))}
            <CartButton />
            <Button variant="primary" className="w-full" onClick={handleLinkClick}>Pesan Sekarang</Button>
          </div>
        </div>
      )}
    </header>
  );
}