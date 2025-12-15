import { MessageSquare, Users, FileText, Settings } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

const systems = [
  {
    icon: Users,
    title: 'AI Sales Agent',
    does: 'Qualifies leads, handles objections, and books calls autonomously.',
    removes: 'Hours of manual prospecting and repetitive follow-ups.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Automation Engine',
    does: 'Automates customer communication, support, and sales flows via WhatsApp.',
    removes: 'Manual message handling and delayed response times.',
  },
  {
    icon: FileText,
    title: 'Content-to-Revenue Pipeline',
    does: 'Turns content into leads and leads into revenue through automated sequences.',
    removes: 'Disconnected content efforts with no clear path to conversion.',
  },
  {
    icon: Settings,
    title: 'Founder Ops Automation',
    does: 'Automates recurring operational tasks, reporting, and internal workflows.',
    removes: 'Admin work that drains founder time and focus.',
  },
];

export const SystemsShowcaseSection = () => {
  return (
    <section id="systems" className="py-24 px-6 bg-secondary/30">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Systems We Deploy
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Each system is built to remove specific manual work from your operation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((system, index) => (
            <AnimatedSection key={system.title} delay={index * 100}>
              <div
                className={cn(
                  'group relative p-8 rounded-lg bg-card border border-border',
                  'hover-lift hover-glow h-full'
                )}
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary">
                    <system.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{system.title}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">What it does:</span>
                        <p className="text-foreground/90">{system.does}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">What it removes:</span>
                        <p className="text-foreground/90">{system.removes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
