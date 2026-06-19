import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jamu Tradisional Bu Sum - Supplier Hotel Bintang 5 Sejak 1990",
  description: "Jamu gendong tradisional berkualitas tinggi. 100% bahan alami tanpa pengawet. Supplier tetap hotel-hotel bintang 5 di Jakarta. Kunyit Asem, Jahe Manis, Beras Kencur, Temulawak.",
  keywords: ["jamu tradisional", "jamu gendong", "jamu Jakarta", "supplier jamu", "jamu hotel", "kunyit asem", "jahe manis", "beras kencur", "jamu alami", "Jamu Bu Sum"],
  authors: [{ name: "Jamu Bu Sum" }],
  creator: "Jamu Bu Sum",
  publisher: "Jamu Bu Sum",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  
  // Open Graph untuk WhatsApp, Facebook, Instagram
  openGraph: {
    title: "Jamu Tradisional Bu Sum - Supplier Hotel Bintang 5",
    description: "Warisan resep keluarga sejak 1990. 100% bahan alami tanpa pengawet. Gratis ongkir pembelian 6 botol/liter area Jakarta.",
    url: "https://jamu-bu-sum.vercel.app",
    siteName: "Jamu Bu Sum",
    images: [
      {
        url: "/og-image.jpg", // Ganti dengan foto produk terbaik Anda
        width: 1200,
        height: 630,
        alt: "Jamu Tradisional Bu Sum - Produk Jamu Alami",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jamu Tradisional Bu Sum - Supplier Hotel Bintang 5",
    description: "Warisan resep keluarga sejak 1990. 100% bahan alami tanpa pengawet. Gratis ongkir pembelian 6 botol/liter.",
    images: ["/og-image.jpg"],
    creator: "@jamubusum", // Optional: ganti dengan username Twitter Anda
  },
  
  // Verification (optional - untuk Google Search Console)
  verification: {
    google: "your-google-verification-code", // Optional: tambahkan kode dari Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://jamu-bu-sum.vercel.app" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}