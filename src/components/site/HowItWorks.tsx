import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { steps } from "@/lib/site-data";
import { fadeUp, staggerContainer } from "@/lib/anim";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From hidden to"
          highlight="fully booked"
          subtitle="A repeatable engine — not a one-off campaign. Scroll to watch your journey from discovery to booked clients."
        />

        <div ref={ref} className="relative mx-auto mt-14 max-w-3xl">
          {/* Track */}
          <div className="absolute left-[27px] top-2 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
          {/* Animated progress fill */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[27px] top-2 h-full w-px origin-top bg-gradient-to-b from-primary via-primary to-accent sm:left-1/2 sm:-translate-x-1/2"
          />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-10"
          >
            {steps.map((s, i) => (
              <motion.li
                key={s.no}
                variants={fadeUp}
                className={`relative flex items-start gap-5 sm:gap-0 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Node */}
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-primary/40 bg-card text-2xl shadow-[0_0_20px_-4px] shadow-primary/50 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  {s.emoji}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 sm:w-[calc(50%-3rem)] sm:flex-1 ${
                    i % 2 === 1 ? "sm:pl-12" : "sm:pr-12 sm:text-right"
                  }`}
                >
                  <div className="rounded-2xl glass p-5">
                    <span className="font-display text-xs font-bold tracking-widest text-primary">
                      STEP {s.no}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
