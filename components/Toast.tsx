"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsLeaving(false);
      const timer = setTimeout(() => {
        setIsLeaving(true);
        setTimeout(onClose, 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible && !isLeaving) return null;

  const toastContent = (
    <div
      className={`fixed top-24 right-6 z-[100] transition-all duration-300 ${
        isVisible && !isLeaving
          ? "translate-y-0 opacity-100"
          : "-translate-y-4 opacity-0"
      }`}
    >
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3 max-w-sm">
        <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
          <CheckCircle className="h-5 w-5 text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-slate-900 text-sm">Berhasil ditambahkan!</p>
          <p className="text-xs text-slate-600 truncate">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <X className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </div>
  );

  // Portal memaksa toast dirender di luar container animasi
  if (typeof window !== "undefined") {
    return createPortal(toastContent, document.body);
  }
  
  return null;
}