"use client";
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function FloatingTime() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      // Ambil waktu real-time zona Jakarta (WIB)
      const now = new Date();
      const jakartaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
      
      const hours = jakartaTime.getHours();
      const minutes = jakartaTime.getMinutes();
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      
      setTime(formattedTime);
      
      // Cek jam operasional (08:00 - 20:00)
      setIsOpen(hours >= 8 && hours < 20);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update setiap detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-24 right-6 z-40 bg-white/95 backdrop-blur-md border border-stone-200 shadow-xl rounded-full px-4 py-2.5 flex items-center gap-2 transition-all hover:scale-105 cursor-default">
      <Clock className="h-4 w-4 text-amber-700" />
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-stone-800 tracking-wide">
          {time}
        </span>
        <span className="text-[10px] font-medium text-stone-500 uppercase">WIB</span>
      </div>
      
      {/* Indikator Buka/Tutup */}
      <div className="flex items-center gap-1.5 ml-1 pl-2 border-l border-stone-200">
        <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
        <span className={`text-[10px] font-bold ${isOpen ? 'text-green-600' : 'text-red-500'}`}>
          {isOpen ? 'BUKA' : 'TUTUP'}
        </span>
      </div>
    </div>
  );
}