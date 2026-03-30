import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, HeartHandshake, GraduationCap, CheckCircle2, Building2, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const valueProps = [
  {
    icon: BarChart3,
    title: "Campus-Wide Analytics",
    description:
      "Anonymized, real-time dashboards that track student stress trends, enabling data-informed policy decisions at the institutional level.",
  },
  {
    icon: HeartHandshake,
    title: "Priority Interventions",
    description:
      "A direct clinical bridge connecting students to our verified psychiatric partners — cutting wait times from weeks to hours.",
  },
  {
    icon: GraduationCap,
    title: "Custom Workshops",
    description:
      "Mental health literacy programs contextualised for the Indian academic environment — from exam anxiety to social adaptation.",
  },
];

const Partnerships = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    designation: "",
    institution: "",
    studentBodySize: "",
    email: "",
    message: "",
  });

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.institution || !form.studentBodySize) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    // TODO: Replace with Supabase insert once Cloud is enabled
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-lg">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-10 py-4">
          <Link to="/" className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Project Cognize
          </Link>
          <span className="text-sm font-medium text-muted-foreground">Institutional Partnerships</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-28 px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-sm font-medium tracking-widest uppercase text-primary mb-5"
          >
            For Institutions & Foundations
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading text-5xl md:text-6xl font-semibold leading-tight text-foreground mb-6"
          >
            Empowering Campuses with
            <br />
            <span className="text-primary">Data-Driven Well-being.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-muted-foreground max-w-[720px] mx-auto leading-relaxed"
          >
            Project Cognize partners with educational institutions to provide proactive mental health
            interventions and real-time student wellness analytics.
          </motion.p>
        </div>
      </section>

      {/* Value Props */}
      <section className="pb-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              <Card className="h-full border-border/50 shadow-none hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 px-6 bg-muted/40 border-y border-border/40">
        <div className="max-w-[640px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            {submitted ? (
              <Card className="text-center py-16 border-border/50">
                <CardContent className="flex flex-col items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-muted-foreground max-w-md leading-relaxed">
                    Our partnership team will contact you within 24 hours to schedule a demonstration.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border/50">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="font-heading text-2xl">
                    Request an Institutional Partnership
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fill in the details below and our team will get back to you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Full Name *</label>
                        <Input
                          placeholder="Point of Contact"
                          value={form.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Designation</label>
                        <Input
                          placeholder="e.g., Dean, HOD, Counselor"
                          value={form.designation}
                          onChange={(e) => handleChange("designation", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Institution Name *</label>
                      <Input
                        placeholder="e.g., Aryabhatta College, DU"
                        value={form.institution}
                        onChange={(e) => handleChange("institution", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Student Body Size *</label>
                        <Select
                          value={form.studentBodySize}
                          onValueChange={(v) => handleChange("studentBodySize", v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<500">Less than 500</SelectItem>
                            <SelectItem value="500-2000">500 – 2,000</SelectItem>
                            <SelectItem value="2000+">2,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Official Email *</label>
                        <Input
                          type="email"
                          placeholder="you@institution.edu"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Message / Requirements</label>
                      <Textarea
                        placeholder="Tell us about your institution's specific needs…"
                        rows={4}
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-12 text-base font-semibold rounded-lg"
                    >
                      {submitting ? "Submitting…" : "Initiate Partnership"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Trusted By
            </p>
            <h2 className="font-heading text-3xl font-semibold text-foreground">
              Institutional Credibility
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                label: "Incubated at",
                value: "Aryabhatta College, University of Delhi",
              },
              {
                icon: Award,
                label: "Letter of Intent from",
                value: "Ekaant Foundation",
              },
              {
                icon: Award,
                label: "Recognition",
                value: "Top 15 Finalist — Pitch Perfect Competition",
              },
            ].map((item, i) => (
              <motion.div
                key={item.value}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-card"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Project Cognize · Not a replacement for clinical emergency care.
        </p>
      </footer>
    </div>
  );
};

export default Partnerships;
