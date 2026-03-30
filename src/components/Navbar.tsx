import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Model", href: "#model" },
  { label: "Approach", href: "#approach" },
  { label: "Vision", href: "#vision" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-10 py-5">
        <a href="#" className="font-heading text-xl font-semibold tracking-tight text-foreground">
          Project Cognize
        </a>
        <div className="flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#model"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
