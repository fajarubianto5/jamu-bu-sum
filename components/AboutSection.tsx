"use client";
import { ScrollAnimation } from "./ScrollAnimation";
import { CheckCircle, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Bagian Kiri: Foto */}
          <ScrollAnimation>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] bg-white/40 backdrop-blur-sm border border-white/30">
              {/* GANTI '/about.jpg' DENGAN NAMA FILE FOTO ANDA */}
              <img 
                src="/about.jpg" 
                alt="Proses Pembuatan Jamu Bu Sum" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.classList.add("flex", "items-center", "justify-center");
                    target.parentElement.innerHTML += '<span class="text-stone-400 text-lg font-medium absolute">Foto Tentang Kami</span>';
                  }
                }}
              />
              
              {/* Badge Mengambang */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-stone-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Award className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-medium">Terpercaya Sejak</p>
                    <p className="text-xl font-bold text-stone-900">1990</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Bagian Kanan: Teks dengan Glassmorphism */}
          <ScrollAnimation delay={200}>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-lg border border-white/40">
              <span className="text-amber-700 font-bold tracking-wider uppercase text-sm">Tentang Kami</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mt-2 mb-6 leading-tight">
                Warisan Rasa <br/> <span className="text-amber-700">Alami & Autentik</span>
              </h2>
              
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                Jamu Bu Sum berawal dari resep warisan keluarga yang telah diracik dengan penuh cinta selama lebih dari 3 dekade. Kami berkomitmen untuk selalu menggunakan 100% bahan alami pilihan tanpa pengawet buatan.
              </p>
              
              <p className="text-stone-700 text-lg leading-relaxed mb-8">
                Kualitas dan kebersihan adalah prioritas kami. Tidak heran jika jamu gendong kami telah dipercaya menjadi supplier tetap untuk berbagai hotel bintang 5 di Jakarta.
              </p>
              
              <div className="space-y-4">
                {[
                  "100% Bahan Alami Pilihan",
                  "Tanpa Pengawet & Pemanis Buatan",
                  "Dipercaya Hotel Bintang 5"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-green-100/80 p-1 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-stone-800 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}