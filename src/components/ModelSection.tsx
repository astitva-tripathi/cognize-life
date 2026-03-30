import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Immediate Pulse Check",
    desc: "Real-time distress assessment that captures emotional state with clinical precision, enabling rapid micro-interventions when they matter most.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 12h20M10 6v16" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Curated Resources",
    desc: "Immediate access to grounding content—guided exercises, breathing techniques, and calming materials curated by licensed professionals.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 4.5A10 10 0 0124 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/>
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Clinical Bridge",
    desc: "Seamless referral to verified psychiatrists and mental health professionals, ensuring no one falls through the cracks of the care continuum.",
  },
];

const ModelSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="model" ref={ref} className="py-32">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="aspect-[4/3] rounded-2xl bg-secondary flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/15" />
            <div className="relative text-center">
              <div className="w-24 h-24 rounded-full border-2 border-primary/20 mx-auto mb-4 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Intervention Model</p>
            </div>
          </motion.div>

          {/* Right — Features */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4"
            >
              Our Framework
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-12"
            >
              The Intervention
              <br />
              <span className="italic text-primary">Model</span>
            </motion.h2>
            <div className="space-y-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-primary">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-foreground mb-2">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-[0.95rem]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
