import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "We'll be in touch as Project Cognize evolves.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setSubmitting(false);
    }, 800);
  };

  return (
    <section id="waitlist" ref={ref} className="py-32 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Get Early Access
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6">
              Join the
              <br />
              <span className="italic text-primary">Waitlist</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Be among the first to experience Project Cognize. Whether you're a clinician,
              institution, or someone passionate about mental health — we'd love to hear from you.
            </p>
            <div className="space-y-4">
              {[
                "Priority access to the platform",
                "Exclusive updates on our progress",
                "Opportunity to shape the product",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-border space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Full Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                How can we help? <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your interest in Project Cognize..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                rows={4}
                className="bg-background resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "Submitting…" : "Join the Waitlist"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. No spam, ever.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
