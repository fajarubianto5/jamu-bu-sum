export function BatikBackground() {
  return (
    // Opacity dinaikkan ke 0.06 (6%) agar lebih tebal
    <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.09]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="batik-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Motif Parang */}
            <path d="M 10 10 L 30 30 M 40 10 L 60 30 M 70 10 L 90 30 M 100 10 L 120 30" 
                  stroke="#92400e" strokeWidth="3" fill="none" opacity="0.9"/>
            <path d="M 10 40 L 30 60 M 40 40 L 60 60 M 70 40 L 90 60 M 100 40 L 120 60" 
                  stroke="#92400e" strokeWidth="3" fill="none" opacity="0.9"/>
            <path d="M 10 70 L 30 90 M 40 70 L 60 90 M 70 70 L 90 90 M 100 70 L 120 90" 
                  stroke="#92400e" strokeWidth="3" fill="none" opacity="0.9"/>
            <path d="M 10 100 L 30 120 M 40 100 L 60 120 M 70 100 L 90 120 M 100 100 L 120 120" 
                  stroke="#92400e" strokeWidth="3" fill="none" opacity="0.9"/>
            
            {/* Motif Kawung */}
            <ellipse cx="20" cy="20" rx="10" ry="14" fill="none" stroke="#92400e" strokeWidth="2.5" opacity="0.8"/>
            <ellipse cx="80" cy="20" rx="10" ry="14" fill="none" stroke="#92400e" strokeWidth="2.5" opacity="0.8"/>
            <ellipse cx="20" cy="80" rx="10" ry="14" fill="none" stroke="#92400e" strokeWidth="2.5" opacity="0.8"/>
            <ellipse cx="80" cy="80" rx="10" ry="14" fill="none" stroke="#92400e" strokeWidth="2.5" opacity="0.8"/>
            
            {/* Titik Dekoratif */}
            <circle cx="50" cy="50" r="4" fill="#92400e" opacity="0.7"/>
            <circle cx="110" cy="50" r="4" fill="#92400e" opacity="0.7"/>
            <circle cx="50" cy="110" r="4" fill="#92400e" opacity="0.7"/>
            <circle cx="110" cy="110" r="4" fill="#92400e" opacity="0.7"/>
            
            {/* Garis Lengkung */}
            <path d="M 0 60 Q 30 50 60 60 T 120 60" stroke="#92400e" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M 0 0 Q 30 10 60 0 T 120 0" stroke="#92400e" strokeWidth="2" fill="none" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#batik-pattern)" />
      </svg>
    </div>
  );
}