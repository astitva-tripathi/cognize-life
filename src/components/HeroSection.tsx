import { motion } from "framer-motion";

const Hero = () => (
  <section className="min-h-screen flex items-center pt-24 pb-20">
    <div className="max-w-[1400px] mx-auto px-10 w-full">
      <div className="max-w-[900px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6"
        >
          Mental Health · Reimagined
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-6xl lg:text-7xl xl:text-[5.25rem] font-medium leading-[1.08] tracking-tight text-foreground mb-8"
        >
          Bridging the Gap
          <br />
          in Mental Health
          <br />
          <span className="italic text-primary">Interventions.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg leading-relaxed text-muted-foreground max-w-[620px] mb-12"
        >
          Project Cognize is redefining how we identify, intervene, and support
          mental well-being through professional-grade micro-interventions.
        </motion.p>
        <motion.a
          href="#model"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
        >
          View the Intervention Model
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
            <path d="M8 3v10M8 13l4-4M8 13L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </div>
    </div>
  </section>
);

export default Hero;
