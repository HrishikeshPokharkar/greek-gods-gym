import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, QrCode, ArrowRight, Clock, MapPin, User, Mail, Award } from 'lucide-react';
import { PRICING_TIERS } from '../data/copyData';

interface PassModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTierId?: string;
  initialTrainer?: string;
}

export const PassModal: React.FC<PassModalProps> = ({
  isOpen,
  onClose,
  initialTierId,
  initialTrainer,
}) => {
  const [selectedTier, setSelectedTier] = useState<string>(initialTierId || 'spartan-monthly');
  const [selectedTrainer, setSelectedTrainer] = useState<string>(initialTrainer || 'None');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [discipline, setDiscipline] = useState('Bodybuilding / Hypertrophy');
  const [submitted, setSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');

  useEffect(() => {
    if (initialTierId) {
      setSelectedTier(initialTierId);
    }
  }, [initialTierId]);

  useEffect(() => {
    if (initialTrainer) {
      setSelectedTrainer(initialTrainer);
    }
  }, [initialTrainer]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    
    // Generate an authentic Greek Gods Gym member credential
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    setPassCode(`GGG-${randomHex}-OLYMPUS`);
    setSubmitted(true);
  };

  const currentTierObj = PRICING_TIERS.find(t => t.id === selectedTier) || PRICING_TIERS[1];

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#0d0d10] border border-[#27272e] shadow-2xl p-6 sm:p-8 my-8 text-[#e4e4e7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#71717a] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="border-b border-[#1f1f26] pb-5 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-1">
                <span>Sanctuary Initiation</span>
                <span>·</span>
                <span>Verification Form</span>
              </div>
              <h3 className="font-pantheon text-2xl sm:text-3xl font-black text-[#fafafa] tracking-wide">
                CLAIM YOUR INITIATION PASS
              </h3>
              <p className="text-xs text-[#a1a1aa] mt-1">
                Complete your identification to receive your digital entry clearance and bypass the outer gates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tier Selection */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#a1a1aa] mb-2">
                  Select Access Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRICING_TIERS.map((tier) => (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        selectedTier === tier.id
                          ? 'border-[#d4af37] bg-[#17171d]'
                          : 'border-[#222228] bg-[#09090b] hover:border-[#33333d]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-pantheon text-xs font-bold text-[#fafafa]">
                          {tier.name}
                        </span>
                        {selectedTier === tier.id && (
                          <span className="w-2 h-2 bg-[#d4af37] rotate-45"></span>
                        )}
                      </div>
                      <div className="text-sm font-iron font-bold text-[#d4af37] mt-1 tabular-nums">
                        ${tier.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Consultation Option if selected */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#a1a1aa] mb-2">
                  Head Coach Assessment Priority
                </label>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  {['None', 'Ares', 'Athena'].map((trainer) => (
                    <button
                      type="button"
                      key={trainer}
                      onClick={() => setSelectedTrainer(trainer)}
                      className={`p-2.5 text-center border transition-all cursor-pointer ${
                        selectedTrainer === trainer
                          ? 'border-[#d4af37] bg-[#17171d] text-[#fafafa] font-bold'
                          : 'border-[#222228] bg-[#09090b] text-[#a1a1aa] hover:border-[#33333d]'
                      }`}
                    >
                      {trainer === 'None' ? 'General Access' : `Coach ${trainer}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#a1a1aa] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-4 py-3 bg-[#09090b] border border-[#222228] focus:border-[#d4af37] focus:outline-none text-sm text-[#fafafa] placeholder:text-[#52525b]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#a1a1aa] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@ironstrength.com"
                    className="w-full px-4 py-3 bg-[#09090b] border border-[#222228] focus:border-[#d4af37] focus:outline-none text-sm text-[#fafafa] placeholder:text-[#52525b]"
                  />
                </div>
              </div>

              {/* Primary Discipline */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#a1a1aa] mb-1.5">
                  Primary Discipline
                </label>
                <select
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                  className="w-full px-4 py-3 bg-[#09090b] border border-[#222228] focus:border-[#d4af37] focus:outline-none text-sm text-[#fafafa]"
                >
                  <option value="Bodybuilding / Hypertrophy">Bodybuilding / Hypertrophy</option>
                  <option value="Competitive Powerlifting">Competitive Powerlifting</option>
                  <option value="Olympic Weightlifting">Olympic Weightlifting</option>
                  <option value="Raw Strength Conditioning">Raw Strength Conditioning</option>
                  <option value="Strongman Heavy Events">Strongman Heavy Events</option>
                </select>
              </div>

              {/* Price summary & CTA button */}
              <div className="pt-4 border-t border-[#1f1f26] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <div className="text-[11px] uppercase tracking-wider text-[#71717a]">
                    Total Investment
                  </div>
                  <div className="text-2xl font-bold font-iron text-[#d4af37] tabular-nums">
                    ${currentTierObj.price} <span className="text-xs font-normal text-[#a1a1aa]">({currentTierObj.period})</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-black bg-[#d4af37] hover:bg-[#e5c158] transition-all cursor-pointer whitespace-nowrap shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                >
                  Authorize Initiation Pass
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submitted state: Digital Credential / Pass View */
          <div className="text-center py-4 space-y-6">
            <div className="w-12 h-12 mx-auto bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#d4af37]" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono tracking-widest uppercase text-[#d4af37]">
                ACCESS AUTHORIZED
              </span>
              <h3 className="font-pantheon text-2xl sm:text-3xl font-black text-[#fafafa]">
                WELCOME TO THE TEMPLE
              </h3>
              <p className="text-xs text-[#a1a1aa] max-w-md mx-auto">
                Your initiation credential has been written to the gate ledger. Present this card at the Underground Security Gate.
              </p>
            </div>

            {/* The Digital Membership Card */}
            <div className="max-w-md mx-auto bg-[#070709] border border-[#d4af37]/50 p-6 text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between border-b border-[#1f1f26] pb-4 mb-4">
                <div>
                  <div className="font-pantheon text-sm font-black tracking-widest text-[#fafafa]">
                    GREEK GODS GYM
                  </div>
                  <div className="text-[10px] text-[#71717a] uppercase font-mono">
                    Underground Sanctuary Pass
                  </div>
                </div>
                <div className="px-2 py-1 bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-wider">
                  {currentTierObj.name}
                </div>
              </div>

              <div className="space-y-3 text-xs mb-6">
                <div>
                  <span className="text-[#71717a] uppercase text-[10px] block">Initiate Name</span>
                  <span className="font-bold text-[#fafafa] text-sm">{fullName}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[#71717a] uppercase text-[10px] block">Discipline</span>
                    <span className="text-[#d4d4d8] font-medium">{discipline}</span>
                  </div>
                  <div>
                    <span className="text-[#71717a] uppercase text-[10px] block">Coach Protocol</span>
                    <span className="text-[#d4af37] font-medium">{selectedTrainer === 'None' ? 'Self-Directed Iron' : `Coach ${selectedTrainer}`}</span>
                  </div>
                </div>
              </div>

              {/* Barcode & Code */}
              <div className="border-t border-[#1f1f26] pt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#71717a] uppercase block">Security Pass Token</span>
                  <span className="font-mono text-xs font-bold text-[#d4af37] tracking-wider">{passCode}</span>
                </div>
                <div className="p-1.5 bg-[#141419] border border-[#272730]">
                  <QrCode className="w-8 h-8 text-[#fafafa]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 text-xs font-bold tracking-widest uppercase text-black bg-[#d4af37] hover:bg-[#e5c158] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
