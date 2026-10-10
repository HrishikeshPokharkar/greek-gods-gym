import React from 'react';
import { SANCTUARY_RULES } from '../data/copyData';
import { Skull, AlertTriangle, ShieldX } from 'lucide-react';

export const IronCode: React.FC = () => {
  return (
    <section id="code" className="py-24 border-b border-[#27272a]/80 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3">
            <span>The Bylaws</span>
            <span className="text-[#52525b]" aria-hidden="true">·</span>
            <span>Unforgiving Standards</span>
          </div>
          <h2 className="font-pantheon text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fafafa] leading-tight">
            THE SANCTUARY PROTOCOL
          </h2>
          <p className="mt-4 text-base text-[#a1a1aa] leading-relaxed">
            We are not a leisure health club. We are a crucible for serious lifters. Violations of the sanctuary code result in immediate revocation of access without refund.
          </p>
        </div>

        {/* The 4 Hardcore Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SANCTUARY_RULES.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#0c0c0f] border border-[#1f1f26] hover:border-[#383844] transition-colors space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4af37]">
                  {item.rule}
                </span>
                <span className="text-[10px] uppercase font-bold text-rose-500 tracking-wider">
                  NON-NEGOTIABLE
                </span>
              </div>
              <p className="text-sm text-[#d4d4d8] leading-relaxed pt-2 border-t border-[#18181f]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Hardcore Statement Banner */}
        <div className="mt-12 p-8 bg-[#0e0e13] border-l-2 border-[#d4af37] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-pantheon text-lg font-bold text-[#fafafa] tracking-wide">
              "LEAVE YOUR EGO AT THE ANTEChAMBER."
            </h4>
            <p className="text-xs text-[#a1a1aa]">
              Every champion in this building started beneath a loaded bar they could barely move. Respect the pursuit of strength.
            </p>
          </div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#71717a] shrink-0">
            Greek Gods Gym High Council
          </div>
        </div>

      </div>
    </section>
  );
};
