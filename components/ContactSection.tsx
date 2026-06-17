"use client";
import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="kontak" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-stone-900">Hubungi Kami</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Untuk pemesanan atau kerjasama supply hotel, silakan hubungi kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <MapPin className="h-8 w-8 text-amber-700 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-stone-900">Alamat</h3>
              <p className="text-stone-600">
                Cawang 3, Jl. Darul Khoirot<br />
                Kebon Pala, Makasar<br />
                Jakarta Timur 13650
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <Phone className="h-8 w-8 text-amber-700 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-stone-900">WhatsApp</h3>
              <a href="https://wa.me/6282114507525" className="text-amber-700 font-medium hover:underline">
                +62 821-1450-7525
              </a>
              <p className="text-sm text-stone-500 mt-1">Respon cepat via WhatsApp</p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <Clock className="h-8 w-8 text-amber-700 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-stone-900">Jam Operasional</h3>
              <p className="text-stone-600">
                Buka Setiap Hari<br />
                <strong className="text-amber-800">08:00 - 20:00 WIB</strong>
              </p>
              <p className="text-sm text-stone-500 mt-1">12 jam non-stop setiap hari</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-stone-50 p-8 rounded-2xl border border-stone-200 space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all bg-white"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Nomor WhatsApp</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all bg-white"
                placeholder="08xxxxxxxxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Pesan</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all resize-none bg-white"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-amber-700 text-white font-bold rounded-lg hover:bg-amber-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                "Mengirim..."
              ) : submitted ? (
                "✓ Pesan Terkirim!"
              ) : (
                <>
                  Kirim Pesan <Send className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}