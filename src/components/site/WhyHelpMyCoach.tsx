import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { differentiators } from "@/lib/site-data";
import { fadeUp, staggerContainer } from "@/lib/anim";

const handled = [
  "Content strategy",
  "Reels & video editing",
  "Captions & hashtags",
  "Meta ads & lead funnel",
  "Grid design & branding",
  "Monthly reporting",
];

export function WhyHelpMyCoach() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why HelpMyCoach"
          title="A marketing partner that"
          highlight="actually gets the niche"
          subtitle="Generic agencies don't know a Vastu dosha from a chakra. We do — and we handle everything, so you stay focused on your craft."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Left: handled-for-you panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl glass-strong p-8 gold-glow"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              🎬 Handled for you
            </span>
            <h3 className="mt-4 text-2xl font-bold text-foreground">
              Everything, under one roof
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              From the first strategy call to the last edited reel — no
              freelancers to chase, no content to wrangle.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {handled.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            {/* decorative orbit */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-primary/20" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-primary/10" />
          </motion.div>

          {/* Right: differentiator cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {differentiators.map((d) => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl glass p-6 transition-colors hover:ring-gold"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-2xl">
                  {d.emoji}
                </span>
                <h4 className="mt-4 text-base font-semibold text-foreground">
                  {d.title}
                </h4>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
