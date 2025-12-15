import { Clock, Zap, Eye } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

const proofs = [
  {
    icon: Clock,
    metric: '10+ hrs/week',
    label: 'Time Reclaimed',
    description: 'Automated workflows replace repetitive manual tasks that drain founder bandwidth.',
  },
  {
    icon: Zap,
    metric: '<2 min',
    label: 'Lead Response Time',
    description: 'AI agents respond instantly, qualifying and routing leads 24/7.',
  },
  {
    icon: Eye,
    metric: 'Full Visibility',
    label: 'Pipeline Clarity',
    description: 'Every lead, touchpoint, and conversion tracked in one unified system.',
  },
];

export const ProofSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Proof Through Capability
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-4">
            We don't show testimonials. We show what the systems actually deliver.
          </p>
          <p className="text-xs text-foreground/50 text-center max-w-xl mx-auto mb-16">
            Results shown reflect typical outcomes from deployed systems, not guarantees.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {proofs.map((proof, index) => (
            <AnimatedSection key={proof.label} delay={index * 100}>
              <div
                className={cn(
                  'relative p-8 rounded-lg bg-card border border-border text-center',
                  'hover-lift hover-glow'
                )}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                  <proof.icon className="h-6 w-6 text-foreground" />
                </div>
                <div className="text-3xl font-bold mb-1">{proof.metric}</div>
                <div className="text-sm font-medium text-muted-foreground mb-4">{proof.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {proof.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
