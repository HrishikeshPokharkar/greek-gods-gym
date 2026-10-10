import React from 'react';
import { TRAINERS } from '../data/copyData';
import { ShieldAlert, Award, Compass, Zap, ArrowUpRight } from 'lucide-react';

interface TrainersProps {
  onSelectTrainerForConsult: (trainerName: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onSelectTrainerForConsult }) => {
  return (
    <section id="trainers" className="py-24 border-b border-[#27272a]/80 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3">
            <span>High Command</span>
            <span className="text-[#52525b]" aria-hidden="true">·</span>
            <span>Master Coaches</span>
          </div>
          <h2 className="font-pantheon text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fafafa] leading-tight">
            THE ARCHITECTS OF FORCE
          </h2>
          <p className="mt-4 text-base text-[#a1a1aa] leading-relaxed">
            No cheerleading. No pseudo-scientific fads. Our head coaches operate as ruthless biomechanical engineers tasked with one singular objective: constructing superhuman physical capability.
          </p>
        </div>

        {/* 2 Head Trainers Grid: Ares & Athena */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="relative bg-[#0d0d10] border border-[#222228] hover:border-[#d4af37]/60 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]/30"></div>

              <div>
                {/* Header row with Name and Title */}
                <div className="border-b border-[#1d1d24] pb-6 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                      {trainer.experience}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#71717a]">
                      HEAD COMMAND
                    </span>
                  </div>

                  <h3 className="font-pantheon text-3xl sm:text-4xl font-black text-[#fafafa] tracking-wide">
                    {trainer.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#d4af37] tracking-wider uppercase mt-1">
                    {trainer.title}
                  </div>
                </div>

                {/* Intense Bio */}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#71717a] mb-2">
                    Command Dossier
                  </div>
                  <p className="text-base text-[#d4d4d8] leading-relaxed font-normal">
                    {trainer.bio}
                  </p>
                </div>

                {/* Personal Creed / Quote */}
                <blockquote className="p-4 bg-[#121217] border-l border-[#d4af37] my-6">
                  <p className="text-sm italic text-[#e4e4e7] leading-relaxed">
                    "{trainer.quote}"
                  </p>
                </blockquote>

                {/* Credentials & Accolades */}
                <div className="space-y-2 pt-4 border-t border-[#1d1d24]">
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#71717a] mb-3">
                    Verified Credentials
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#a1a1aa]">
                    {trainer.accolades.map((acc, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 shrink-0"></span>
                        <span className="font-medium text-[#f4f4f5]">{acc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#1d1d24]">
                <button
                  onClick={() => onSelectTrainerForConsult(trainer.name)}
                  className="w-full py-3.5 text-xs font-bold tracking-widest uppercase text-[#fafafa] bg-[#16161c] hover:bg-[#d4af37] hover:text-black border border-[#2b2b36] hover:border-[#d4af37] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Assessment with {trainer.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
