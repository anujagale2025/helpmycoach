import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/anim";

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-background to-accent/15 p-10 text-center ring-gold sm:p-16"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-cosmos opacity-40" />
          <span className="text-4xl">✨</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Your audience is{" "}
            <span className="text-gradient-gold">waiting to find you.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Stop hoping clients stumble onto your profile. Start building a
            presence that makes them choose you. It starts with a free audit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#audit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] gold-glow sm:w-auto"
            >
              Get your free audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
            >
              View pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
