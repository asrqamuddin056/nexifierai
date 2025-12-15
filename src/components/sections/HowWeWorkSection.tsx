import { Search, Hammer, RotateCcw } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Identify Bottlenecks',
    description: 'We find where manual work is slowing you down.',
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Build the System',
    description: 'We design and deploy automated infrastructure.',
  },
  {
    number: '03',
    icon: RotateCcw,
    title: 'Automate & Optimize',
    description: 'We refine until it runs without you.',
  },
];

export const HowWeWorkSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            How We Work
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 150}>
                <div className="relative text-center">
                  <div className="relative z-10 inline-flex flex-col items-center">
                    <div className="mb-4 w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono mb-2">{step.number}</span>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
