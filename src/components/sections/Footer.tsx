export const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold tracking-tight">Nex AI</div>
        <div className="text-sm text-muted-foreground">
          Growth systems by <span className="text-foreground/70">Nexifier</span>
        </div>
      </div>
    </footer>
  );
};
