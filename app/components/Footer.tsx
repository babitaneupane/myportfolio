const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="rgba(255,255,255,0.03)" className="backdrop-blur-sm" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <path d="M30 70V30H45C51.6274 30 57 35.3726 57 42C57 46.1264 54.9126 49.7656 51.6853 51.7858C56.2407 53.6401 59.5 58.0772 59.5 63.5C59.5 70.1274 54.1274 70 47.5 70H30Z" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 50H55" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round"/>
    <path d="M70 70V30L55 70" stroke="var(--foreground)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-12 border-t border-surface-border bg-surface/50 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-accent/5 blur-[100px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <Logo />
          <p className="text-xl font-bold tracking-widest text-foreground/80">BABITA</p>
        </div>

        <div className="flex gap-8 mt-2">
          <a href="https://github.com/babitaneupane" className="text-foreground/60 hover:text-accent transition-colors text-sm uppercase tracking-widest">GitHub</a>
          <a href="https://www.linkedin.com/in/babita-neupane-a0248a275/" className="text-foreground/60 hover:text-accent transition-colors text-sm uppercase tracking-widest">LinkedIn</a>
        </div>

        <div className="w-full h-[1px] bg-surface-border/50 my-4"></div>
        
        <p className="text-foreground/40 text-sm font-light">
          &copy; {new Date().getFullYear()} Babita Neupane. Crafted with intention.
        </p>
      </div>
    </footer>
  );
}