const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="max-w-[1400px] mx-auto px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Project Cognize</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Redefining mental health interventions through technology, empathy, and clinical rigor.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Resources</p>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-foreground hover:text-primary transition-colors">Investor Deck</a></li>
            <li><a href="#" className="text-foreground hover:text-primary transition-colors">Partnership Program</a></li>
            <li><a href="#" className="text-foreground hover:text-primary transition-colors">Safety Guidelines</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Emergency</p>
          <a
            href="tel:988"
            className="inline-flex items-center gap-2 border-2 border-destructive text-destructive rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-destructive hover:text-destructive-foreground transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 11.35v2a1.33 1.33 0 01-1.45 1.33 13.18 13.18 0 01-5.75-2.04 13 13 0 01-4-4 13.18 13.18 0 01-2.04-5.78A1.33 1.33 0 012.09 1.5h2a1.33 1.33 0 011.33 1.15 8.56 8.56 0 00.47 1.87 1.33 1.33 0 01-.3 1.4l-.85.85a10.67 10.67 0 004 4l.85-.85a1.33 1.33 0 011.4-.3 8.56 8.56 0 001.87.47A1.33 1.33 0 0114 11.35z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Emergency Support
          </a>
        </div>
      </div>
      <div className="border-t border-border pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed">
          Project Cognize is a support platform, not a replacement for clinical emergency care. 
          If you or someone you know is in immediate danger, please call your local emergency services.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Project Cognize. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
