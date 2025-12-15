import { X } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const exclusions = [
  'People who want "just marketing"',
  'Businesses afraid of automation',
  'Low-budget experimenters',
  'Anyone looking for quick hacks',
];

export const NotForSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Who This Is Not For
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="space-y-4">
            {exclusions.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="h-4 w-4 text-destructive" />
                </div>
                <span className="text-foreground/90">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
