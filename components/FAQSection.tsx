"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Apakah Jamu Bu Sum memiliki sertifikat Halal dan PIRT?",
    answer: "Ya, seluruh produk Jamu Bu Sum sudah tersertifikasi Halal dan memiliki izin PIRT (Pangan Industri Rumah Tangga) dari Dinas Kesehatan. Dokumen dapat kami lampirkan untuk keperluan pengadaan hotel."
  },
  {
    question: "Berapa minimum order untuk supply ke hotel?",
    answer: "Untuk supply rutin hotel, minimum order adalah 5 liter per varian per pengiriman. Untuk trial awal, kami menyediakan sample 1 liter per varian agar tim purchasing dapat menilai kualitas terlebih dahulu."
  },
  {
    question: "Apakah bisa pengiriman rutin (kontrak supply)?",
    answer: "Ya, kami melayani kontrak supply rutin harian/mingguan/bulanan untuk hotel. Jadwal pengiriman dapat disesuaikan dengan kebutuhan operasional hotel. Kami sudah berpengalaman supply ke Morrissey Hotel, Royal Kuningan, Orchardz, dan Santika Hotel."
  },
  {
    question: "Berapa lama jamu dapat bertahan (shelf life)?",
    answer: "Jamu kami dibuat fresh setiap hari tanpa pengawet. Dalam suhu ruang, jamu tahan 6-8 jam. Dalam kulkas (suhu 4°C), jamu dapat bertahan 3-5 hari dengan rasa dan khasiat tetap terjaga. Kami rekomendasikan konsumsi dalam 24 jam untuk hasil terbaik."
  },
  {
    question: "Apakah bisa custom kemasan sesuai branding hotel?",
    answer: "Ya, kami menyediakan layanan private label untuk hotel dengan minimum order tertentu. Kemasan dapat disesuaikan dengan branding hotel, termasuk botol, label, dan stiker."
  },
  {
    question: "Bagaimana sistem pembayaran untuk hotel?",
    answer: "Untuk hotel, kami menerima sistem pembayaran TOP (Terms of Payment) 14-30 hari setelah invoice, sesuai kebijakan pengadaan hotel. Untuk pelanggan retail, pembayaran dilakukan saat pengiriman via transfer bank atau tunai."
  },
  {
    question: "Apakah ada layanan sample untuk trial sebelum order besar?",
    answer: "Ya, kami menyediakan sample gratis 250ml per varian untuk tim purchasing hotel. Silakan hubungi kami via WhatsApp untuk mengatur pengiriman sample."
  },
  {
    question: "Apa keunggulan Jamu Bu Sum dibanding supplier lain?",
    answer: "Resep warisan turun-temurun sejak 1990, bahan baku pilihan langsung dari petani lokal, proses pembuatan higienis, dan sudah dipercaya oleh hotel-hotel bintang 4-5 di Jakarta. Rasakan sendiri perbedaannya."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-stone-900">Pertanyaan Umum</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Jawaban untuk pertanyaan yang sering diajukan oleh pelanggan dan tim purchasing hotel
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-stone-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-amber-700 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 mb-4">Masih ada pertanyaan lain?</p>
          <a
            href="https://wa.me/6282114507525"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}