import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { problems } from "@/lib/site-data";
import { fadeUp, staggerContainer } from "@/lib/anim";

export function Problem() {
  return (
    <section id="problem" className="relative py-20 sm:py-28">
      {/* subtle divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The problem"
          title="You're great at what you do."
          highlight="Your online presence doesn't show it."
          subtitle="Most healers didn't start their practice to become content managers. Here's what's quietly costing you clients every week."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="contents"
          >
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group relative rounded-2xl glass p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-destructive/10 text-2xl">
                    {p.emoji}
                  </span>
                  <span className="font-display text-2xl font-bold text-foreground/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium text-foreground"
        >
          Sound familiar? The good news: every one of these is a{" "}
          <span className="text-gradient-gold">systems problem</span> — and
          systems are exactly what we build.
        </motion.p>
      </div>
    </section>
  );
}
