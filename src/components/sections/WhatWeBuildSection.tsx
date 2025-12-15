import { Bot, DollarSign, TrendingUp } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

const pillars = [
  {
    icon: Bot,
    title: 'Automation Systems',
    description: 'AI agents, CRM automation, WhatsApp flows, and internal workflow orchestration.',
    outcome: 'Removes repetitive manual work across sales, support, and operations.',
  },
  {
    icon: DollarSign,
    title: 'Revenue Systems',
    description: 'Funnels, lead capture infrastructure, and end-to-end sales automation.',
    outcome: 'Converts interest into predictable revenue without constant follow-ups.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Systems',
    description: 'Content-to-lead-to-sale pipelines, distribution strategy, and funnel optimization.',
    outcome: 'Turns attention into revenue, not vanity metrics.',
  },
];

export const WhatWeBuildSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            What We Build
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Three core pillars that form the infrastructure of leverage.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 100}>
              <div
                className={cn(
                  'group relative p-8 rounded-lg bg-card border border-border',
                  'hover-lift hover-glow cursor-default'
                )}
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary">
                  <pillar.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {pillar.description}
                </p>
                <p className="text-xs text-foreground/70 font-medium">
                  {pillar.outcome}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
