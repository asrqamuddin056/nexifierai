import { HeroSection } from '@/components/sections/HeroSection';
import { WhatWeBuildSection } from '@/components/sections/WhatWeBuildSection';
import { SystemsShowcaseSection } from '@/components/sections/SystemsShowcaseSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { NexifierSection } from '@/components/sections/NexifierSection';
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection';
import { NotForSection } from '@/components/sections/NotForSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <WhatWeBuildSection />
      <SystemsShowcaseSection />
      <ProofSection />
      <NexifierSection />
      <HowWeWorkSection />
      <NotForSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
