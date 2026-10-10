import React, { useState } from 'react';
import { FileText, Copy, Check, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import { HERO_COPY, FEATURES, PRICING_TIERS, TRAINERS } from '../data/copyData';

export const CopywriterDossier: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const fullCopyText = `
=== GREEK GODS GYM: PREMIUM COPYWRITING DOSSIER ===
VIBE: Dark, Aggressive, Elite
TARGET: Serious Bodybuilders, Strength Athletes, Olympia Aspirants

1. HERO HEADLINE (4 words):
"${HERO_COPY.headline}"

SUB-HEADLINE:
"${HERO_COPY.subHeadline}"

PRIMARY CTA:
"${HERO_COPY.primaryCta}"

SECONDARY CTA:
"${HERO_COPY.secondaryCta}"

2. THREE CORE FEATURE BULLET POINTS:
- ${FEATURES[0].title}: ${FEATURES[0].description}
- ${FEATURES[1].title}: ${FEATURES[1].description}
- ${FEATURES[2].title}: ${FEATURES[2].description}

3. THREE PRICING TIERS:
- ${PRICING_TIERS[0].name} ($${PRICING_TIERS[0].price} / ${PRICING_TIERS[0].period}):
  • ${PRICING_TIERS[0].benefits.join('\n  • ')}

- ${PRICING_TIERS[1].name} ($${PRICING_TIERS[1].price} / ${PRICING_TIERS[1].period}):
  • ${PRICING_TIERS[1].benefits.join('\n  • ')}

- ${PRICING_TIERS[2].name} ($${PRICING_TIERS[2].price} / ${PRICING_TIERS[2].period}):
  • ${PRICING_TIERS[2].benefits.join('\n  • ')}

4. HEAD TRAINER BIOS:
- ${TRAINERS[0].name} (${TRAINERS[0].title}):
"${TRAINERS[0].bio}"

- ${TRAINERS[1].name} (${TRAINERS[1].title}):
"${TRAINERS[1].bio}"
`.trim();

  return (
    <>
      {/* Floating Pill Toggle at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-2.5 bg-[#141418] hover:bg-[#1c1c22] border border-[#d4af37]/50 text-xs font-bold tracking-wider uppercase text-[#fafafa] shadow-2xl transition-all cursor-pointer hover:border-[#d4af37]"
        >
          <FileText className="w-4 h-4 text-[#d4af37]" />
          <span>Copywriter Dossier</span>
          {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Slide-over Drawer / Modal for the Copy Breakdown */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 z-40 w-full max-w-xl bg-[#0c0c0f] border-l border-[#26262e] shadow-2xl p-6 sm:p-8 overflow-y-auto text-[#e4e4e7]">
          <div className="flex items-center justify-between border-b border-[#202027] pb-5 mb-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">
                Executive Copy Audit
              </div>
              <h3 className="font-pantheon text-xl font-bold text-[#fafafa]">
                COPYWRITING DOSSIER & MANIFESTO
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#71717a] hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

          <div className="mb-6 flex items-center justify-between bg-[#131317] border border-[#23232c] p-4">
            <div>
              <div className="text-xs font-bold text-[#fafafa]">Complete Raw Copy Package</div>
              <div className="text-[11px] text-[#71717a]">All headlines, features, tiers, and bios</div>
            </div>
            <button
              onClick={() => copyToClipboard(fullCopyText, 'full')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#e5c158] transition-colors cursor-pointer"
            >
              {copiedKey === 'full' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'full' ? 'Copied' : 'Copy All'}</span>
            </button>
          </div>

          <div className="space-y-6 text-xs leading-relaxed">
            
            {/* Tone & Voice Strategy */}
            <div className="p-4 bg-[#111115] border border-[#1e1e24] space-y-2">
              <span className="font-mono text-[10px] uppercase text-[#d4af37] font-bold">
                Tone Architecture
              </span>
              <p className="text-[#a1a1aa]">
                <strong className="text-white">Dark, Aggressive, Elite:</strong> Purged of generic gym clichés ("get fit", "transform your life", "reach your goals"). Every sentence uses visceral mechanical tension, raw iron metaphor, and commanding high-status prose.
              </p>
            </div>

            {/* 1. Hero Headline & Sub-headline */}
            <div className="border border-[#1e1e24] p-4 space-y-3 bg-[#0d0d10]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-[#d4af37] font-bold">
                  1. Hero Headline (4 words)
                </span>
                <button
                  onClick={() => copyToClipboard(HERO_COPY.headline, 'hero_head')}
                  className="text-[11px] text-[#71717a] hover:text-[#d4af37] flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedKey === 'hero_head' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="font-pantheon text-base font-bold text-white">
                "{HERO_COPY.headline}"
              </p>
              
              <div className="pt-2 border-t border-[#18181f]">
                <span className="font-mono text-[10px] uppercase text-[#71717a] block mb-1">
                  Sub-Headline (Legacy & Strength)
                </span>
                <p className="text-[#d4d4d8]">
                  "{HERO_COPY.subHeadline}"
                </p>
              </div>

              <div className="pt-2 border-t border-[#18181f] flex gap-4 text-[11px]">
                <div>
                  <span className="text-[#71717a] block">Primary CTA:</span>
                  <span className="font-bold text-[#d4af37]">"{HERO_COPY.primaryCta}"</span>
                </div>
                <div>
                  <span className="text-[#71717a] block">Secondary CTA:</span>
                  <span className="font-bold text-white">"{HERO_COPY.secondaryCta}"</span>
                </div>
              </div>
            </div>

            {/* 2. Feature Bullets */}
            <div className="border border-[#1e1e24] p-4 space-y-3 bg-[#0d0d10]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-[#d4af37] font-bold">
                  2. Three Feature Bullet Points
                </span>
              </div>
              {FEATURES.map((feat, idx) => (
                <div key={feat.id} className="pt-2 first:pt-0 border-t first:border-0 border-[#18181f] space-y-1">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{idx + 1}. {feat.title}</span>
                    <button
                      onClick={() => copyToClipboard(`${feat.title}: ${feat.description}`, `feat_${idx}`)}
                      className="text-[10px] text-[#71717a] hover:text-[#d4af37] cursor-pointer"
                    >
                      {copiedKey === `feat_${idx}` ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-[#a1a1aa]">{feat.description}</p>
                </div>
              ))}
            </div>

            {/* 3. Pricing Tiers */}
            <div className="border border-[#1e1e24] p-4 space-y-3 bg-[#0d0d10]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-[#d4af37] font-bold">
                  3. Three Pricing Tiers (2-3 Benefits Each)
                </span>
              </div>
              {PRICING_TIERS.map((tier, idx) => (
                <div key={tier.id} className="pt-2 first:pt-0 border-t first:border-0 border-[#18181f] space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[#fafafa] font-pantheon">
                      {tier.name} (${tier.price} / {tier.period})
                    </span>
                    <span className="text-[10px] font-mono text-[#d4af37]">{tier.ctaText}</span>
                  </div>
                  <ul className="list-disc list-inside text-[#a1a1aa] space-y-0.5">
                    {tier.benefits.map((b, bI) => (
                      <li key={bI}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 4. Head Trainer Bios */}
            <div className="border border-[#1e1e24] p-4 space-y-3 bg-[#0d0d10]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-[#d4af37] font-bold">
                  4. Head Trainer Bios (Ares & Athena)
                </span>
              </div>
              {TRAINERS.map((t, idx) => (
                <div key={t.id} className="pt-2 first:pt-0 border-t first:border-0 border-[#18181f] space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white font-pantheon">{t.name} — {t.title}</span>
                    <button
                      onClick={() => copyToClipboard(t.bio, `trainer_${idx}`)}
                      className="text-[10px] text-[#71717a] hover:text-[#d4af37] cursor-pointer"
                    >
                      {copiedKey === `trainer_${idx}` ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-[#a1a1aa] italic">"{t.bio}"</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
};
