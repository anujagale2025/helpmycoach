import { Sparkles, Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-foreground">
                HelpMy<span className="text-gradient-gold">Coach</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Marketing built exclusively for coaches, healers & spiritual
              practitioners. Your gift, amplified.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Youtube, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white/5 text-muted-foreground transition-colors hover:bg-primary/15 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Get started</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#audit"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Free Coach Presence Audit
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Plans & pricing
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@helpmycoach.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  hello@helpmycoach.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HelpMyCoach. Built with care for the
            spiritual community.
          </p>
          <p className="text-xs text-muted-foreground">
            A frontend challenge project · not affiliated with the original
            site.
          </p>
        </div>
      </div>
    </footer>
  );
}
