import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { niches } from "@/lib/site-data";
import { fadeUp, staggerContainer } from "@/lib/anim";

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Who we help"
          title="Built for the people who"
          highlight="heal, guide & uplift"
          subtitle="If your work changes lives but your Instagram doesn't show it, you're in the right place. We serve the whole spiritual & wellness family."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {niches.map((n) => (
            <motion.article
              key={n.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 text-center transition-colors hover:ring-gold"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-3xl transition-transform group-hover:scale-110 group-hover:rotate-3">
                {n.emoji}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground sm:text-base">
                {n.name}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                {n.blurb}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
