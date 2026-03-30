import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VisionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" ref={ref} className="py-32">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-72 h-80 rounded-2xl bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 mb-3" />
                <p className="text-sm font-medium text-foreground">Founder</p>
                <p className="text-xs text-muted-foreground">Project Cognize</p>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Founder's Vision
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-8">
              A Message from
              <br />
              the <span className="italic text-primary">Founder</span>
            </h2>
            <blockquote className="text-lg leading-relaxed text-muted-foreground mb-6 border-l-2 border-primary/30 pl-6">
              "Mental health support shouldn't begin at crisis — it should be woven into our daily lives. 
              Project Cognize exists to make intervention proactive rather than reactive, accessible 
              rather than gatekept, and human rather than clinical."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to build the bridge between someone's first moment of distress and 
              the professional care they deserve — and to fill that gap with immediate, 
              evidence-based micro-interventions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
