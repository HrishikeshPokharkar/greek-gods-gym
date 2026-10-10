import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Trainers } from './components/Trainers';
import { Pricing } from './components/Pricing';
import { IronCode } from './components/IronCode';
import { Footer } from './components/Footer';
import { PassModal } from './components/PassModal';
import { CopywriterDossier } from './components/CopywriterDossier';

export default function App() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | undefined>('spartan-monthly');
  const [selectedTrainer, setSelectedTrainer] = useState<string | undefined>('None');

  const handleOpenPassModal = (tierId?: string) => {
    if (tierId) {
      setSelectedTierId(tierId);
    }
    setSelectedTrainer('None');
    setIsPassModalOpen(true);
  };

  const handleSelectTier = (tierId: string) => {
    setSelectedTierId(tierId);
    setSelectedTrainer('None');
    setIsPassModalOpen(true);
  };

  const handleSelectTrainer = (trainerName: string) => {
    setSelectedTrainer(trainerName);
    setSelectedTierId('spartan-monthly');
    setIsPassModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#e4e4e7] flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Top Bar with Strict 3-Zone Contract */}
      <Navbar onOpenPassModal={() => handleOpenPassModal()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenPassModal={() => handleOpenPassModal()} />

        {/* Features & Equipment Matrix */}
        <Features onOpenPassModal={() => handleOpenPassModal()} />

        {/* Head Trainers: Ares & Athena */}
        <Trainers onSelectTrainerForConsult={handleSelectTrainer} />

        {/* Pricing Tiers: Day Pass, Spartan Monthly, Olympian Annual */}
        <Pricing onSelectTier={handleSelectTier} />

        {/* The Iron Code / Sanctuary Bylaws */}
        <IronCode />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenPassModal={() => handleOpenPassModal()} />

      {/* Initiation Pass Modal */}
      <PassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        initialTierId={selectedTierId}
        initialTrainer={selectedTrainer}
      />

      {/* Copywriter Review & Export Dossier */}
      <CopywriterDossier />
    </div>
  );
}
