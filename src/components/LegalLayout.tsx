import { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/sections/Footer';

const WHATSAPP_URL = `https://wa.me/8143710924?text=${encodeURIComponent('SYSTEM')}`;

interface LegalLayoutProps {
  title: string;
  updated?: string;
  children: ReactNode;
}

export const LegalLayout = ({ title, updated = 'July 2026', children }: LegalLayoutProps) => {
  useEffect(() => {
    document.title = `${title} — Nex AI`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border">
        <div className="container flex items-center justify-between py-5">
          <Link to="/" className="text-lg font-bold tracking-tight">
            Nex AI
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </header>

      <section className="flex-1 py-16 md:py-20 px-6">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h1>
            <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
          </div>

          <article className="space-y-8 text-foreground/85 leading-relaxed [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-2 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground">
            {children}
          </article>

          <div className="mt-20 pt-12 border-t border-border text-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Questions, concerns, or ready to build. Reach out directly.
            </p>
            <Button asChild size="lg" className="hover-lift hover-glow text-base px-8 py-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                DM 'SYSTEM'
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
