import React from 'react';
import { HERO_COPY } from '../data/copyData';
import { ChevronRight, ShieldCheck, Flame, Compass } from 'lucide-react';

interface HeroProps {
  onOpenPassModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPassModal }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#27272a]/80 bg-[#08080a]">
      {/* Background Architectural Textures & Lighting */}
      <div className="absolute inset-0 pointer-events-none bg-grid-iron opacity-25"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-[#d4af37]/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[420px] h-[320px] bg-red-950/15 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Unboxed Metadata Kicker (Anti-pill discipline) */}
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37]">
              <span>Temple of Iron</span>
              <span className="text-[#52525b]" aria-hidden="true">·</span>
              <span>Olympus Compound 01</span>
              <span className="text-[#52525b]" aria-hidden="true">·</span>
              <span>Underground Facility</span>
            </div>

            {/* The Punchy 4-Word Hero Headline */}
            <h1 className="font-pantheon text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#fafafa] leading-[1.08] text-balance">
              {HERO_COPY.headline}
            </h1>

            {/* Short Sub-headline on legacy and strength */}
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl font-normal">
              {HERO_COPY.subHeadline}
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenPassModal}
                className="group px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-black bg-[#d4af37] hover:bg-[#e5c158] transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] whitespace-nowrap"
              >
                <span>{HERO_COPY.primaryCta}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#features"
                className="px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase text-[#e4e4e7] bg-[#141417] hover:bg-[#1f1f23] hover:text-white border border-[#27272a] transition-all duration-200 active:scale-[0.98] text-center whitespace-nowrap"
              >
                {HERO_COPY.secondaryCta}
              </a>
            </div>

            {/* Quiet Attestation Markers */}
            <div className="pt-4 border-t border-[#1f1f23] flex flex-wrap items-center gap-6 text-xs text-[#71717a]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#d4af37] rotate-45"></span>
                <span>Calibrated Gram Tolerance Iron</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#d4af37] rotate-45"></span>
                <span>Zero Influencer Filming Sanctuary</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#d4af37] rotate-45"></span>
                <span>24/7 Monolith Access</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Monolithic Visual Statement & Kinetic Iron Atmosphere */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#27272a] bg-[#0e0e11] p-6 sm:p-8 overflow-hidden shadow-2xl">
              {/* Corner Gold Notches for Greek Temple Aesthetic */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]"></div>

              {/* Monolithic Badge Header */}
              <div className="flex items-center justify-between border-b border-[#222226] pb-4 mb-6">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#a1a1aa]">
                  FACILITY BLUEPRINT · SECTOR A
                </span>
                <span className="text-[11px] font-bold tracking-widest text-[#d4af37]">
                  SANCTUARY VERIFIED
                </span>
              </div>

              {/* Visual Pillar: Stylized Iron Monolith Vector Display */}
              <div className="relative bg-[#070709] border border-[#1e1e24] p-6 mb-6">
                <div className="h-48 flex flex-col justify-between items-center text-center py-2 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    {/* Greek column / temple geometry */}
                    <svg viewBox="0 0 100 100" className="w-44 h-44 stroke-[#d4af37] fill-none stroke-[1]">
                      <line x1="20" y1="90" x2="80" y2="90" />
                      <line x1="25" y1="85" x2="75" y2="85" />
                      <line x1="30" y1="85" x2="30" y2="25" />
                      <line x1="42" y1="85" x2="42" y2="25" />
                      <line x1="58" y1="85" x2="58" y2="25" />
                      <line x1="70" y1="85" x2="70" y2="25" />
                      <polygon points="15,25 85,25 50,10" />
                    </svg>
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#71717a] font-semibold">
                    The Creed of Heavy Iron
                  </div>

                  <div className="my-auto space-y-1 relative z-10">
                    <p className="font-pantheon text-2xl font-bold tracking-wider text-[#fafafa]">
                      NO WEAKNESS.
                    </p>
                    <p className="font-pantheon text-2xl font-bold tracking-wider text-[#d4af37]">
                      NO COMPROMISE.
                    </p>
                  </div>

                  <div className="text-xs text-[#a1a1aa] font-medium tracking-wide">
                    Olympian Standard Equipment Floor
                  </div>
                </div>
              </div>

              {/* Hardcore Specs Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-[#1b1b20]">
                  <span className="text-[#71717a] uppercase tracking-wider">Atmosphere</span>
                  <span className="font-semibold text-[#e4e4e7]">Dark Industrial / Aggressive</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#1b1b20]">
                  <span className="text-[#71717a] uppercase tracking-wider">Barbell Arsenal</span>
                  <span className="font-semibold text-[#e4e4e7]">Eleiko Power & Texas Bars</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#1b1b20]">
                  <span className="text-[#71717a] uppercase tracking-wider">Max Dumbbell Run</span>
                  <span className="font-semibold text-[#d4af37] font-mono tabular-nums">200 LBS Solid Steel</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#71717a] uppercase tracking-wider">Filming & Tripods</span>
                  <span className="font-semibold text-rose-400">Strictly Prohibited</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1b1b20]">
                <button
                  onClick={onOpenPassModal}
                  className="w-full py-3 text-xs font-bold tracking-widest uppercase text-[#fafafa] bg-[#1a1a20] hover:bg-[#25252d] hover:text-[#d4af37] border border-[#2d2d35] transition-colors"
                >
                  Verify Access Clearance
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Proof & KPI Strip Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-[#1f1f23] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-iron tracking-wider text-[#fafafa] tabular-nums">
              200 LBS
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-[#71717a]">
              Solid Steel Dumbbells
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-iron tracking-wider text-[#fafafa] tabular-nums">
              16 CAGES
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-[#71717a]">
              Competition Power Platforms
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-iron tracking-wider text-[#d4af37] tabular-nums">
              100% IFBB
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-[#71717a]">
              Olympia-Pedigree Staff
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-iron tracking-wider text-[#fafafa] tabular-nums">
              ZERO TRIPODS
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-[#71717a]">
              Strict Sanctuary Law
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
