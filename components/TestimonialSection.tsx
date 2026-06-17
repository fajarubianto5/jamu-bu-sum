"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Purchasing Manager",
    role: "Morrissey Hotel",
    content: "Kualitas jamu Bu Sum sangat konsisten. Sudah 3 tahun kami menjadi pelanggan tetap dan tidak pernah kecewa. Tamu hotel kami sangat menyukai Kunyit Asem dan Beras Kencurnya.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ibu Ratna",
    role: "Pelanggan Setia",
    content: "Sudah langganan dari tahun 2010. Jamu Bu Sum ini benar-benar jamu gendong asli, bukan jamu kemasan pabrik. Rasanya autentik dan khasiatnya terasa!",
    rating: 5,
  },
  {
    id: 3,
    name: "Chef de Cuisine",
    role: "Royal Kuningan Hotel",
    content: "Kami memilih Jamu Bu Sum karena bahan bakunya alami dan proses pembuatannya higienis. Cocok untuk disajikan kepada tamu hotel kami yang mengutamakan kesehatan.",
    rating: 5,
  },
  {
    id: 4,
    name: "Pak Hendra",
    role: "Pengusaha",
    content: "Saya rutin minum Jahe Manis dan Temulawak dari Bu Sum setiap pagi. Stamina terjaga dan badan terasa lebih fit. Recommended!",
    rating: 5,
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-stone-900">Apa Kata Mereka?</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Testimoni dari pelanggan setia dan partner hotel kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-stone-200">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-amber-300 opacity-50" />
            
            <div className="text-center relative z-10">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-stone-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-amber-700 font-medium">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border border-stone-200"
            >
              <ChevronLeft className="h-6 w-6 text-amber-700" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border border-stone-200"
            >
              <ChevronRight className="h-6 w-6 text-amber-700" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all ${
                  idx === currentIndex ? "bg-amber-700 w-8" : "bg-stone-300 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}