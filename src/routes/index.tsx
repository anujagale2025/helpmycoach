import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhoWeHelp } from "@/components/site/WhoWeHelp";
import { Problem } from "@/components/site/Problem";
import { WhyHelpMyCoach } from "@/components/site/WhyHelpMyCoach";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { SocialProof } from "@/components/site/SocialProof";
import { AuditForm } from "@/components/site/AuditForm";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HelpMyCoach — Marketing for Spiritual Coaches & Healers" },
      {
        name: "description",
        content:
          "HelpMyCoach is the marketing partner for Reiki healers, astrologers, tarot readers, Vastu consultants & wellness coaches. Content, reels, ads & strategy — handled for you. Get your free Coach Presence Audit.",
      },
      { property: "og:title", content: "HelpMyCoach — Marketing for Spiritual Coaches & Healers" },
      {
        property: "og:description",
        content:
          "Marketing built exclusively for coaches, healers & spiritual practitioners. Content, reels, ads & strategy handled — so you can keep doing the work that matters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HelpMyCoach — Marketing for Spiritual Coaches" },
      {
        name: "twitter:description",
        content: "Content, reels, ads & strategy — handled for spiritual coaches. Get your free audit.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-cosmos min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <Problem />
        <WhyHelpMyCoach />
        <HowItWorks />
        <Pricing />
        <SocialProof />
        <AuditForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
