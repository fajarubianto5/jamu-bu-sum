"use client";
import { useEffect, useState } from "react";

interface FlyingItemProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  onComplete: () => void;
}

export function FlyingItem({ startX, startY, endX, endY, onComplete }: FlyingItemProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Mulai terbang
    const timer1 = setTimeout(() => setPhase(1), 50);
    // Phase 2: Sampai di tujuan
    const timer2 = setTimeout(() => setPhase(2), 500);
    // Phase 3: Selesai
    const timer3 = setTimeout(() => {
      setPhase(3);
      onComplete();
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed z-[200] pointer-events-none"
      style={{
        left: startX,
        top: startY,
        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transform: phase >= 1 
          ? `translate(${endX - startX}px, ${endY - startY}px) scale(0.1) rotate(360deg)` 
          : "scale(1) rotate(0deg)",
        opacity: phase >= 2 ? 0 : 1,
      }}
    >
      {/* Icon dengan gradient amber - sesuai tema */}
      <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-amber-700 to-stone-800 rounded-lg shadow-2xl flex items-center justify-center border-2 border-amber-400">
        <span className="text-white text-xl font-bold">🍵</span>
      </div>
    </div>
  );
}