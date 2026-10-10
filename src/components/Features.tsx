import React, { useState } from 'react';
import { FEATURES } from '../data/copyData';
import { Dumbbell, Trophy, EyeOff, Check, ArrowRight, Shield } from 'lucide-react';

interface FeaturesProps {
  onOpenPassModal: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenPassModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'equipment':
        return <Dumbbell className="w-5 h-5 text-[#d4af37]" />;
      case 'trainers':
        return <Trophy className="w-5 h-5 text-[#d4af37]" />;
      case 'environment':
        return <EyeOff className="w-5 h-5 text-[#d4af37]" />;
      default:
        return <Shield className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  const detailedEquipmentSections = [
    {
      title: "The Heavy Iron Floor",
      subtitle: "Custom Eleiko & Texas Bars",
      description: "Over 35,000 lbs of competition-certified cast iron and calibrated bumper plates. Eleiko power bars, Texas deadlift bars, Safety Squat Bars, and Swiss multi-grip bars.",
      specs: ["Eleiko IPF Certified Plates", "16 Custom Power Cages", "Specialty Cambered Bars"]
    },
    {
      title: "The Biomechanical Arsenal",
      subtitle: "Prime, Watson & Arsenal Strength",
      description: "Plate-loaded precision machines engineered for unmatched muscle isolation and customizable resistance curves that safeguard joint health under maximal load.",
      specs: ["Torque-Variable Prime Machines", "Heavy Hack Squats & Pendulums", "Custom Watson Dumbbells to 200 lbs"]
    },
    {
      title: "The Recovery Underworld",
      subtitle: "Thermal & Cryo Contrast",
      description: "Designed for immediate nervous system recovery. Custom dry Finnish cedar sauna running at 190°F coupled with twin sub-zero 38°F cold plunge vats.",
      specs: ["190°F Dry Cedar Finnish Sauna", "38°F Sub-Zero Immersion Vats", "Normatec Compression Pods"]
    }
  ];

  return (
    <section id="features" className="py-24 border-b border-[#27272a]/80 bg-[#0b0b0e] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3">
            <span>The Trinity of Mastery</span>
            <span className="text-[#52525b]" aria-hidden="true">·</span>
            <span>Core Pillars</span>
          </div>
          <h2 className="font-pantheon text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fafafa] leading-tight">
            NO COMPROMISE IN MAN OR METAL
          </h2>
          <p className="mt-4 text-base text-[#a1a1aa] leading-relaxed">
            Every square foot of Greek Gods Gym is engineered to strip away modern distractions and forge pure, unyielding physical strength.
          </p>
        </div>

        {/* 3 Core Requested Feature Bullets in Asymmetric Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {FEATURES.map((feat, index) => (
            <div 
              key={feat.id}
              className="group relative bg-[#0e0e12] border border-[#222227] hover:border-[#d4af37]/50 p-8 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                {/* Unboxed category metadata & icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-[#71717a] font-semibold">
                    <span>0{index + 1}</span>
                    <span aria-hidden="true">/</span>
                    <span className="text-[#d4af37]">{feat.category}</span>
                  </div>
                  <div className="p-2.5 bg-[#141418] border border-[#27272e]">
                    {getFeatureIcon(feat.id)}
                  </div>
                </div>

                {/* Feature Title */}
                <h3 className="font-pantheon text-xl font-bold text-[#fafafa] group-hover:text-[#d4af37] transition-colors mb-3">
                  {feat.title}
                </h3>

                {/* Feature Copy */}
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 font-normal">
                  {feat.description}
                </p>

                {/* Sub-specifications */}
                <div className="space-y-2.5 pt-4 border-t border-[#1b1b22]">
                  {feat.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#d4d4d8]">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717a] group-hover:text-[#a1a1aa] transition-colors flex items-center gap-2">
                  <span>Standard 0{index + 1} Enforced</span>
                  <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Deep-Dive: Facility Arsenal Showcase */}
        <div className="bg-[#0e0e12] border border-[#222227] p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1f1f26]">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2">
                Compound Specifications
              </div>
              <h3 className="font-pantheon text-2xl font-bold text-[#fafafa]">
                THE HARDWARE MATRIX
              </h3>
            </div>
            {/* Segmented Interactive Switcher */}
            <div className="flex items-center gap-2 p-1.5 bg-[#141418] border border-[#24242b] overflow-x-auto">
              {detailedEquipmentSections.map((sec, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === idx
                      ? 'bg-[#d4af37] text-black font-bold'
                      : 'text-[#a1a1aa] hover:text-white'
                  }`}
                >
                  {sec.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Equipment Zone Display */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                {detailedEquipmentSections[activeTab].subtitle}
              </span>
              <h4 className="font-pantheon text-xl sm:text-2xl font-bold text-[#fafafa]">
                {detailedEquipmentSections[activeTab].title}
              </h4>
              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                {detailedEquipmentSections[activeTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {detailedEquipmentSections[activeTab].specs.map((spec, i) => (
                  <div key={i} className="p-3.5 bg-[#121216] border border-[#1f1f26]">
                    <div className="text-[10px] text-[#71717a] uppercase font-mono tracking-wider mb-1">
                      Spec 0{i + 1}
                    </div>
                    <div className="text-xs font-bold text-[#f4f4f5]">
                      {spec}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 bg-[#121216] border border-[#1f1f26] space-y-4">
                <div className="text-xs uppercase tracking-wider text-[#a1a1aa] font-semibold flex items-center justify-between">
                  <span>Audit Verification</span>
                  <span className="text-[#d4af37]">ACTIVE</span>
                </div>
                <div className="h-28 bg-[#09090b] border border-[#222229] p-4 flex flex-col justify-center text-center">
                  <div className="text-xs font-mono text-[#71717a] uppercase">Tolerance Testing</div>
                  <div className="text-xl font-bold font-pantheon text-[#fafafa] tracking-wider mt-1">
                    +/- 10 GRAM CALIBRATION
                  </div>
                  <div className="text-[11px] text-[#d4af37] mt-1">Zero Discrepancy Standard</div>
                </div>
                <button
                  onClick={onOpenPassModal}
                  className="w-full py-3 text-xs font-bold tracking-widest uppercase text-black bg-[#d4af37] hover:bg-[#e5c158] transition-colors"
                >
                  Test This Equipment In Person
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
