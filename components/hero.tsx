import { Button } from "./ui/Button";
import { ArrowRight, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Leaf className="h-4 w-4" />
          <span>Warisan Turun Temurun Sejak 1990</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-stone-900">
          Jamu Tradisional <span className="text-amber-700">Bu Sum</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
          Jamu gendong asli dengan resep warisan keluarga. Dipercaya oleh hotel-hotel bintang 5 di Jakarta. 
          Rasakan sendiri perbedaannya.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#produk">
            <Button size="lg">
              Lihat Produk <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#tentang">
            <Button variant="outline" size="lg">Tentang Kami</Button>
          </a>
        </div>
      </div>
    </section>
  );
}