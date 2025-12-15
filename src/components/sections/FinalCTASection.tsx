import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const WHATSAPP_NUMBER = '8143710924'; // Placeholder - replace with actual number
const WHATSAPP_MESSAGE = 'SYSTEM';

export const FinalCTASection = () => {
  const whatsappUrl = `https://wa.me/${8143710924}?text=${encodeURIComponent(SYSTEM)}`;

  return (
    <section className="py-32 px-6">
      <div className="container max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
            If you're serious about leverage, DM 'SYSTEM'.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <Button
            asChild
            size="lg"
            className="hover-lift hover-glow text-base px-10 py-6"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              DM 'SYSTEM'
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
