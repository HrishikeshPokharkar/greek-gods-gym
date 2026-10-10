import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenPassModal: (tierId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPassModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#08080a]/95 backdrop-blur-md border-b border-[#27272a]/70">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="font-pantheon text-xl font-bold tracking-[0.2em] text-[#f4f4f5] hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <span className="w-2 h-2 bg-[#d4af37] rotate-45 inline-block"></span>
          GREEK GODS GYM
        </a>

        {/* Zone 2: 4–5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-widest uppercase text-[#a1a1aa]">
          <a href="#features" className="hover:text-[#f4f4f5] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            The Arsenal
          </a>
          <a href="#trainers" className="hover:text-[#f4f4f5] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Head Trainers
          </a>
          <a href="#pricing" className="hover:text-[#f4f4f5] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Memberships
          </a>
          <a href="#code" className="hover:text-[#f4f4f5] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Sanctuary Code
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => onOpenPassModal()}
            className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase text-black bg-[#d4af37] hover:bg-[#e5c158] transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            Claim Pass
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => onOpenPassModal()}
            className="px-3.5 py-1.5 text-[11px] font-bold tracking-wider uppercase text-black bg-[#d4af37] active:scale-95 whitespace-nowrap shrink-0"
          >
            Pass
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#27272a] bg-[#0c0c0e] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-xs font-semibold tracking-widest uppercase text-[#a1a1aa]">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#f4f4f5] hover:text-[#d4af37]"
            >
              The Arsenal & Features
            </a>
            <a 
              href="#trainers" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#f4f4f5] hover:text-[#d4af37]"
            >
              Olympia-Tier Trainers
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#f4f4f5] hover:text-[#d4af37]"
            >
              Pricing Tiers
            </a>
            <a 
              href="#code" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#f4f4f5] hover:text-[#d4af37]"
            >
              Sanctuary Code
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPassModal();
              }}
              className="w-full py-3 text-center text-xs font-bold tracking-widest uppercase text-black bg-[#d4af37] active:scale-95"
            >
              Claim Initiation Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
