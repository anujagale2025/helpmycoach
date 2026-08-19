import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { testimonials, stats } from "@/lib/site-data";
import { fadeUp, staggerContainer } from "@/lib/anim";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  // Extract numeric prefix/suffix for animation
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const pre = match?.[1] ?? "";
  const numStr = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";
  const target = Number(numStr.replace(/,/g, ""));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  const formatted =
    numStr.includes(",") || target >= 1000
      ? display.toLocaleString("en-IN")
      : String(display);

  return (
    <span ref={ref}>
      {pre}
      {formatted}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="social-proof" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Social proof"
          title="Real coaches,"
          highlight="real results"
          subtitle="Numbers from clients who stopped posting randomly and started building a system."
        />

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-2xl glass p-6 text-center"
            >
              <div className="font-display text-3xl font-extrabold text-gradient-gold sm:text-4xl">
                <Counter value={s.value} />
              </div>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative mt-14">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-primary/20" />
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  const t = testimonials[idx];
                  if (!t) return null;
                  return (
                    <>
                      <div className="text-4xl">{t.emoji}</div>
                      <p className="mt-4 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                        “{t.quote}”
                      </p>
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-foreground">
                            {t.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {t.role}
                          </p>
                        </div>
                        <span className="rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
                          {t.stat}
                        </span>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/5 text-foreground transition-colors hover:bg-primary/15 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/5 text-foreground transition-colors hover:bg-primary/15 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
