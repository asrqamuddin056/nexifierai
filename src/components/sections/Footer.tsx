import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-lg font-bold tracking-tight">Nex AI</div>
          <div className="text-sm text-muted-foreground">
            Growth systems by <span className="text-foreground/70">Nexifier</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/support" className="hover:text-foreground transition-colors">
            Support
          </Link>
          <Link to="/termsofservice" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link to="/privacypolicy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link to="/cancellation" className="hover:text-foreground transition-colors">
            Cancellation
          </Link>
        </div>
      </div>
    </footer>
  );
};

