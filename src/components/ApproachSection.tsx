import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const gaps = [
  "Fragmented care across disconnected providers",
  "Weeks-long waits for initial assessment",
  "Lack of real-time intervention during crisis",
  "No continuity between digital tools and clinical care",
];

const solutions = [
  "Unified platform from assessment to referral",
  "Immediate micro-intervention upon distress signal",
  "Real-time pulse checks with clinical protocols",
  "Seamless bridge between self-help and professional care",
];

const ApproachSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" ref={ref} className="section-dark py-32">
      <div className="max-w-[1400px] mx-auto px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.25em] uppercase text-dark-surface-foreground/50 mb-4 text-center"
        >
          Problem ↔ Solution
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl lg:text-5xl font-medium tracking-tight text-dark-surface-foreground text-center mb-20"
        >
          From Fragmentation to <span className="italic">Integration</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          {/* The Gap */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-surface-foreground/5 rounded-2xl p-10 lg:p-12"
          >
            <h3 className="font-heading text-2xl font-medium text-dark-surface-foreground/60 mb-8">The Gap</h3>
            <ul className="space-y-5">
              {gaps.map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-destructive/60 flex-shrink-0" />
                  <span className="text-dark-surface-foreground/70 leading-relaxed">{g}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Cognize Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary/15 rounded-2xl p-10 lg:p-12"
          >
            <h3 className="font-heading text-2xl font-medium text-dark-surface-foreground mb-8">The Cognize Way</h3>
            <ul className="space-y-5">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-dark-surface-foreground/90 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
