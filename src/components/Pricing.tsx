import React from 'react';
import { PRICING_TIERS } from '../data/copyData';
import { Check, Shield, Flame } from 'lucide-react';

interface PricingProps {
  onSelectTier: (tierId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-24 border-b border-[#27272a]/80 bg-[#0b0b0e] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3">
            <span>The Covenant</span>
            <span className="text-[#52525b]" aria-hidden="true">·</span>
            <span>Initiation Tiers</span>
          </div>
          <h2 className="font-pantheon text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fafafa] leading-tight">
            CLAIM YOUR REPUTATION
          </h2>
          <p className="mt-4 text-base text-[#a1a1aa] leading-relaxed">
            No long contracts loaded with hidden fees. Transparent, uncompromising access to the most intense iron sanctuary on earth.
          </p>
        </div>

        {/* Pricing Cards Grid (3 requested tiers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isHighlighted = tier.recommended;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between p-8 sm:p-9 transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#111116] border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.15)] -translate-y-2'
                    : 'bg-[#0d0d10] border border-[#222228] hover:border-[#383842]'
                }`}
              >
                {/* Optional Status Label */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-8 px-3 py-1 bg-[#d4af37] text-black text-[10px] font-black tracking-widest uppercase">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Tier Title and Tagline */}
                  <div className="border-b border-[#1f1f26] pb-6 mb-6">
                    <h3 className="font-pantheon text-2xl font-bold text-[#fafafa] tracking-wide">
                      {tier.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#a1a1aa] mt-1 font-medium">
                      {tier.tagline}
                    </p>

                    {/* Price display with Tabular Numerals */}
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black font-iron text-[#fafafa] tracking-tight tabular-nums">
                        ${tier.price}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#71717a]">
                        / {tier.period}
                      </span>
                    </div>
                  </div>

                  {/* Benefits Checklist (2-3 requested benefits per tier) */}
                  <div className="space-y-4 mb-8">
                    <div className="text-[11px] uppercase tracking-widest text-[#71717a] font-semibold">
                      Guaranteed Privileges
                    </div>
                    {tier.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
                        <div className="p-0.5 mt-0.5 text-[#d4af37] shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier CTA Button */}
                <div className="pt-4 border-t border-[#1f1f26]">
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                      isHighlighted
                        ? 'bg-[#d4af37] text-black hover:bg-[#e5c158] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                        : 'bg-[#18181f] text-[#fafafa] hover:bg-[#23232c] hover:text-[#d4af37] border border-[#2a2a35]'
                    }`}
                  >
                    {tier.ctaText}
                  </button>
                  <p className="text-[11px] text-center text-[#52525b] mt-3 font-mono">
                    Instant access credential · Zero lock-in contracts
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Corporate / Pro Team Notice Strip */}
        <div className="mt-16 p-6 bg-[#0e0e12] border border-[#222227] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#141419] border border-[#25252e]">
              <Shield className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#fafafa] font-pantheon">
                COMPETITIVE TEAM & IFBB CONTEST PREP CAMPS
              </div>
              <div className="text-xs text-[#a1a1aa] mt-0.5">
                Private facility buyout slots available for sanctioned meets and elite national teams.
              </div>
            </div>
          </div>
          <button
            onClick={() => onSelectTier('spartan-monthly')}
            className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-[#fafafa] bg-[#16161c] hover:bg-[#222229] border border-[#2b2b36] whitespace-nowrap cursor-pointer"
          >
            Inquire for Camps
          </button>
        </div>

      </div>
    </section>
  );
};
