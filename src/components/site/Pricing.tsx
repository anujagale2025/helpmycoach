import { useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { plans } from "@/lib/site-data";
import { fadeUp, staggerContainer } from "@/lib/anim";

// Quarterly = ~2 months free (pay for 10).
const discount = (monthly: string) => {
  const n = Number(monthly.replace(/,/g, ""));
  return Math.round((n * 10) / 12);
};
const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans that"
          highlight="scale with you"
          subtitle="Month-to-month. No lock-in. Start where you are, grow when you're ready."
        />

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span
            className={`text-sm font-medium ${
              !yearly ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            onClick={() => setYearly((v) => !v)}
            className="relative h-8 w-14 rounded-full border border-border bg-secondary transition-colors"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
              className={`absolute top-1 h-6 w-6 rounded-full bg-primary shadow ${
                yearly ? "left-7" : "left-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              yearly ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Quarterly{" "}
            <span className="ml-1 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
              2 months free
            </span>
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {plans.map((p) => {
            const monthlyNum = p.price.replace(/,/g, "");
            const price = yearly ? discount(p.price) : Number(monthlyNum);
            return (
              <motion.div
                key={p.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col rounded-3xl p-7 ${
                  p.popular
                    ? "glass-strong gold-glow ring-gold"
                    : "glass"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-2xl">
                    {p.emoji}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {p.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{p.tagline}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-end gap-1">
                  <motion.span
                    key={price + String(yearly)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-4xl font-extrabold text-foreground"
                  >
                    {inr(price)}
                  </motion.span>
                  <span className="mb-1 text-sm text-muted-foreground">
                    {p.cadence}
                  </span>
                </div>
                {yearly && (
                  <p className="mt-1 text-xs text-primary">
                    billed quarterly · was {inr(Number(monthlyNum))}/mo
                  </p>
                )}

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#audit"
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    p.popular
                      ? "bg-primary text-primary-foreground gold-glow"
                      : "border border-border bg-white/5 text-foreground hover:bg-white/10"
                  }`}
                >
                  Start with {p.name}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All plans include onboarding, a content calendar & WhatsApp support.
          Cancel anytime.
        </p>
      </div>
    </section>
  );
}
