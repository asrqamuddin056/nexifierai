import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const WHATSAPP_NUMBER = '1234567890'; // Placeholder - replace with actual number
const WHATSAPP_MESSAGE = 'SYSTEM';

export const HeroSection = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const scrollToSystems = () => {
    document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="container max-w-4xl text-center">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Nex AI builds automated systems that run growth and operations without manual effort.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            If growth slows down when you step away, automation is missing. 
            If operations still depend on daily manual effort, the systems are broken.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="hover-lift hover-glow text-base px-8 py-6"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                DM 'SYSTEM'
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToSystems}
              className="hover-lift text-base px-8 py-6 border-muted-foreground/30"
            >
              View Systems
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};
