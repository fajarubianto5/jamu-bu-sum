import { Award, Users, Coffee, Hotel, Star } from "lucide-react";

const stats = [
  { icon: Award, number: "34+", label: "Tahun Pengalaman" },
  { icon: Users, number: "1000+", label: "Pelanggan Setia" },
  { icon: Coffee, number: "6", label: "Varian Jamu" },
  { icon: Hotel, number: "4+", label: "Hotel Bintang 5 & 4" },
];

const hotels = [
  { name: "Morrissey Hotel", stars: 5, desc: "Hotel boutique bintang 5" },
  { name: "Royal Kuningan Hotel", stars: 4, desc: "Hotel bisnis premium" },
  { name: "Orchardz Hotel Group", stars: 4, desc: "Jaringan hotel internasional" },
  { name: "Santika Hotel", stars: 4, desc: "Hotel nasional terpercaya" },
];

export function AboutSection() {
  return (
    <section id="tentang" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-700 to-stone-900 flex items-center justify-center shadow-2xl">
              <Coffee className="h-40 w-40 text-white/90" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-stone-200">
              <p className="text-3xl font-bold text-amber-700">100%</p>
              <p className="text-sm text-stone-600">Bahan Alami</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-stone-900">
              Tentang <span className="text-amber-700">Jamu Bu Sum</span>
            </h2>
            <p className="text-lg text-stone-600 mb-4 leading-relaxed">
              Berawal dari jamu gendong tradisional yang telah diwariskan turun-temurun sejak <strong className="text-amber-800">tahun 1990</strong>. 
              Lebih dari tiga dekade kami menjaga kualitas dan keaslian resep keluarga.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Kini, Jamu Bu Sum dipercaya sebagai <strong className="text-amber-800">supplier tetap hotel-hotel besar</strong> di Jakarta. 
              Rasakan sendiri perbedaannya.
            </p>

            {/* Hotel Partners */}
            <div className="mb-8">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Hotel className="h-5 w-5 text-amber-700" />
                Dipercaya Oleh Hotel-Hotel Ternama
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {hotels.map((hotel, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(hotel.stars)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="font-semibold text-sm text-stone-900">{hotel.name}</p>
                    <p className="text-xs text-stone-500">{hotel.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="text-center p-3 bg-white rounded-xl shadow-sm border border-stone-200">
                    <Icon className="h-6 w-6 text-amber-700 mx-auto mb-1" />
                    <p className="text-xl font-bold text-stone-900">{stat.number}</p>
                    <p className="text-xs text-stone-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}