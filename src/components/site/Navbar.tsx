import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_18px_-2px] shadow-primary/60">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            HelpMy<span className="text-gradient-gold">Coach</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#audit"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] gold-glow"
          >
            Free Audit
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-4 mt-2 glass-strong rounded-2xl p-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#audit"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get Your Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
