"use client";
import { useEffect, useState } from "react";
import { MapPin, Clock, Phone, CheckCircle, XCircle } from "lucide-react";

const operatingHours = [
  { day: "Senin - Jumat", hours: "08:00 - 21:00" },
  { day: "Sabtu", hours: "09:00 - 22:00" },
  { day: "Minggu", hours: "10:00 - 20:00" },
];

export function MapsSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Minggu, 1 = Senin, dst
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour * 60 + minute;

      let openTime, closeTime;

      if (day >= 1 && day <= 5) {
        // Senin - Jumat
        openTime = 8 * 60; // 08:00
        closeTime = 21 * 60; // 21:00
      } else if (day === 6) {
        // Sabtu
        openTime = 9 * 60; // 09:00
        closeTime = 22 * 60; // 22:00
      } else {
        // Minggu
        openTime = 10 * 60; // 10:00
        closeTime = 20 * 60; // 20:00
      }

      setIsOpen(currentTime >= openTime && currentTime < closeTime);
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check setiap menit
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Kunjungi Kami</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Datang langsung ke toko kami untuk pengalaman terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.123456789!2d109.6833!3d-7.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjMnMDAuMCJTIDEwOcKwNDAnNTkuOSJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Ndangjo Drink"
            ></iframe>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Status */}
            <div className={`p-6 rounded-2xl border-2 ${isOpen ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
              <div className="flex items-center gap-3 mb-2">
                {isOpen ? (
                  <>
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="font-bold text-green-800 text-lg">Buka Sekarang</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-6 w-6 text-red-600" />
                    <span className="font-bold text-red-800 text-lg">Tutup</span>
                  </>
                )}
              </div>
              <p className="text-sm text-slate-600">
                {isOpen ? "Kami siap melayani pesanan Anda!" : "Kami akan buka kembali besok pagi."}
              </p>
            </div>

            {/* Address */}
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Alamat</h3>
                  <p className="text-slate-600">
                    Jl. Raya Ndangjo No. 123<br />
                    Banjarnegara, Jawa Tengah 53411
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Telepon</h3>
                  <p className="text-slate-600">+62 821-1450-7525</p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-3">Jam Operasional</h3>
                  <div className="space-y-2">
                    {operatingHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-slate-600">{schedule.day}</span>
                        <span className="font-medium text-slate-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}