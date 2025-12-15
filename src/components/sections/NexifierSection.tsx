import { Megaphone, Share2, Target } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const focuses = [
  { icon: Megaphone, label: 'Attention' },
  { icon: Share2, label: 'Distribution' },
  { icon: Target, label: 'Funnel-Driven Growth' },
];

export const NexifierSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border text-sm font-medium">
              Sub-Brand
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Nexifier — Growth Systems Division
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Nexifier is the growth systems division inside Nex AI. It focuses exclusively on acquiring attention, 
              building distribution, and driving funnel-based growth. All systems are powered and 
              automated by Nex AI's core infrastructure.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="flex flex-wrap justify-center gap-4">
            {focuses.map((focus) => (
              <div
                key={focus.label}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border"
              >
                <focus.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{focus.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
