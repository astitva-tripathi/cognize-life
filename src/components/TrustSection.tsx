import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TrustSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-10 text-center"
        >
          Backed & Validated By
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-16"
        >
          <div className="text-lg font-heading font-medium text-muted-foreground/70">
            Ekaant Foundation
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-lg font-heading font-medium text-muted-foreground/70">
            Clinical Psychiatric Partners
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="inline-flex items-center gap-2 border border-primary/20 rounded-full px-5 py-2 text-sm font-medium text-primary">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l1.76 3.57L13 5.24l-3 2.92.71 4.13L7 10.27l-3.71 2.02.71-4.13-3-2.92 4.24-.67L7 1z" fill="currentColor"/>
            </svg>
            Top 15 Finalist — Pitch Perfect Competition
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
