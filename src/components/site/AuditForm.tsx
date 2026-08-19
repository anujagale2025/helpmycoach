import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  niche: z.string().min(2, "Tell us your practice"),
  instagram: z
    .string()
    .min(3, "Enter your Instagram handle")
    .refine((v) => v.replace(/^@/, "").length >= 2, "Enter a valid handle"),
});

type FormData = z.infer<typeof schema>;

const nicheOptions = [
  "Reiki / Energy healing",
  "Astrology",
  "Vastu",
  "Tarot",
  "Numerology",
  "Crystal healing",
  "Life coaching",
  "Yoga / Wellness",
  "Other",
];

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    // Simulated submission — no backend required.
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="audit" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12 gold-glow">
          {/* glow accents */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Free audit"
                title="Get your"
                highlight="Coach Presence Audit"
                subtitle="Free, personalised, and yours in 2–3 days. We review your bio, content gaps, branding and lead capture — then send 3 quick wins you can act on today."
              />
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Bio & profile review",
                  "Content & branding gaps",
                  "3 quick wins to act on now",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl glass p-8 text-center"
                  >
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground">
                      You're on the list! ✨
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Your free audit is on its way. Check your inbox in 2–3
                      days — we'll review everything and send your quick wins.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-5 rounded-full border border-border bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10"
                    >
                      Submit another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-4 rounded-2xl glass p-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        autoComplete="name"
                        placeholder="e.g. Anjali Sharma"
                        {...register("name")}
                        className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="niche"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Your niche
                      </label>
                      <select
                        id="niche"
                        defaultValue=""
                        {...register("niche")}
                        className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="" disabled>
                          Select your practice
                        </option>
                        {nicheOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      {errors.niche && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.niche.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="instagram"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Instagram handle
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                          @
                        </span>
                        <input
                          id="instagram"
                          inputMode="url"
                          placeholder="yourhandle"
                          {...register("instagram")}
                          className="w-full rounded-xl border border-input bg-background/60 py-3 pl-8 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                      {errors.instagram && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.instagram.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60 gold-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Get my free audit
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-muted-foreground">
                      No payment. No commitment. Just value.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
