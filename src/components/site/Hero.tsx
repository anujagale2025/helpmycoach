import { motion } from "motion/react";
import { ArrowRight, Star, Play } from "lucide-react";
import heroCosmos from "@/assets/hero-cosmos.jpg";

// Deterministic star positions (avoids hydration mismatch from Math.random).
const stars = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  top: (i * 53) % 100,
  left: (i * 37) % 100,
  delay: (i % 7) * 0.6,
  size: (i % 3) + 1,
}));

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      {/* Cosmic background image */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src={heroCosmos}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Twinkling starfield */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {stars.map((s) => (
          <span
            key={s.id}
            className="animate-twinkle absolute rounded-full bg-primary"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6 sm:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
        >
          ✦ Marketing built for spiritual coaches
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] text-foreground sm:text-6xl md:text-7xl"
        >
          Your healing is{" "}
          <span className="text-gradient-gold">powerful.</span>
          <br className="hidden sm:block" /> Your online presence should match.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          HelpMyCoach is the marketing partner for Reiki healers, astrologers,
          tarot readers, Vastu consultants & wellness coaches. We turn your gift
          into content that books clients — so you can keep doing the work that
          matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#audit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] gold-glow sm:w-auto"
          >
            Get Your Free Coach Presence Audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
          >
            <Play className="h-4 w-4" />
            See how it works
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["🧘", "🔮", "🃏", "🪷"].map((e, i) => (
                <span
                  key={i}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-base"
                >
                  {e}
                </span>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                180+ spiritual brands scaled
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Soft fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
