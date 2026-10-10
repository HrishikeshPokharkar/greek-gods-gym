import React from 'react';
import { Shield } from 'lucide-react';

interface FooterProps {
  onOpenPassModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPassModal }) => {
  return (
    <footer className="border-t border-[#1f1f24] bg-[#070709] text-[#71717a] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#18181d]">
          {/* Col 1: Wordmark & Mandate */}
          <div className="md:col-span-2 space-y-4">
            <a 
              href="#" 
              className="font-pantheon text-xl font-bold tracking-[0.2em] text-[#fafafa] flex items-center gap-2.5"
            >
              <span className="w-2 h-2 bg-[#d4af37] rotate-45 inline-block"></span>
              GREEK GODS GYM
            </a>
            <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-sm">
              An underground cathedral of raw iron, heavy tension, and Olympic mastery. Built exclusively for those who demand physical immortality.
            </p>
            <div className="text-xs font-mono text-[#52525b] uppercase tracking-wider">
              Sanctuary 01 · 800 Iron Forged Way, Underground Sector
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">The Arsenal & Features</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-white transition-colors">Head Coaches Ares & Athena</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Membership Tiers</a>
              </li>
              <li>
                <a href="#code" className="hover:text-white transition-colors">Sanctuary Bylaws</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Facility Access
            </div>
            <div className="text-xs space-y-1.5 text-[#a1a1aa]">
              <div className="flex justify-between">
                <span>Spartan / Olympian:</span>
                <span className="text-white font-mono">24/7/365</span>
              </div>
              <div className="flex justify-between">
                <span>Day Pass Entry:</span>
                <span className="text-white font-mono">05:00 – 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Staff Assessment:</span>
                <span className="text-white font-mono">By Appointment</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenPassModal}
                className="w-full py-2.5 text-[11px] font-bold tracking-widest uppercase text-black bg-[#d4af37] hover:bg-[#e5c158] transition-colors"
              >
                Claim Pass
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Greek Gods Gym. All rights reserved. Zero compromises.
          </div>
          <div className="flex items-center gap-6 text-[#52525b]">
            <span>Privacy Covenant</span>
            <span aria-hidden="true">·</span>
            <span>Liability Waiver</span>
            <span aria-hidden="true">·</span>
            <span>Iron Etiquette</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
