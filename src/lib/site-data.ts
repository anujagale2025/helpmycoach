// Central content for the HelpMyCoach landing page.
// Keeping copy/data here keeps components focused on presentation.

export type Niche = {
  emoji: string;
  name: string;
  blurb: string;
};

export const niches: Niche[] = [
  { emoji: "🧘", name: "Reiki Practitioners", blurb: "Healing energy, channelled into content that resonates." },
  { emoji: "🔮", name: "Astrologers", blurb: "Your cosmic insights, delivered with star-quality reach." },
  { emoji: "🧭", name: "Vastu Consultants", blurb: "Align spaces and screens — clients find you first." },
  { emoji: "🃏", name: "Tarot Readers", blurb: "Pull the right audience with every card you share." },
  { emoji: "🔢", name: "Numerologists", blurb: "Numbers that convert — followers into booked clients." },
  { emoji: "💎", name: "Crystal Healers", blurb: "Let your stones shine brighter than the scroll." },
  { emoji: "🌱", name: "Life Coaches", blurb: "Build a presence as magnetic as your guidance." },
  { emoji: "🪷", name: "Yoga / Wellness", blurb: "From studio to screen — flow into a fuller audience." },
];

export type Problem = {
  emoji: string;
  title: string;
  desc: string;
};

export const problems: Problem[] = [
  { emoji: "🌀", title: "Inconsistent content", desc: "You post when you remember. The algorithm forgets you faster." },
  { emoji: "📉", title: "Poor social presence", desc: "Your gift is real — but your feed doesn't show it yet." },
  { emoji: "🚪", title: "Difficulty getting leads", desc: "Likes feel nice. Bookings pay the bills. The gap is strategy." },
  { emoji: "🎨", title: "Lack of branding", desc: "No signature look. People scroll past without remembering you." },
  { emoji: "⚙️", title: "No marketing system", desc: "Every week starts from scratch. There's no repeatable engine." },
];

export type Differentiator = {
  emoji: string;
  title: string;
  desc: string;
};

export const differentiators: Differentiator[] = [
  { emoji: "🎯", title: "Niche, not generic", desc: "We work exclusively with coaches, healers & spiritual practitioners — we speak your language." },
  { emoji: "🎬", title: "In-house studio", desc: "Content, reels, captions, ads & strategy — all produced under one roof, no juggling freelancers." },
  { emoji: "🌍", title: "International reach", desc: "Clients across India and abroad. We position you for a global, English-speaking audience too." },
  { emoji: "🧠", title: "We get the niche", desc: "We understand spiritual nuance — so your content feels authentic, never cringe." },
];

export type Step = {
  no: string;
  emoji: string;
  title: string;
  desc: string;
};

export const steps: Step[] = [
  { no: "01", emoji: "🔍", title: "Discovery", desc: "We learn your voice, your niche, and your goals — a deep audit of where you are now." },
  { no: "02", emoji: "🗺️", title: "Strategy", desc: "A content roadmap and brand angle built around what makes you different." },
  { no: "03", emoji: "✍️", title: "Content", desc: "Scripts, captions, visuals and concepts — written and shot for you." },
  { no: "04", emoji: "✂️", title: "Editing", desc: "Our studio edits reels and posts into scroll-stopping, on-brand assets." },
  { no: "05", emoji: "🚀", title: "Publishing", desc: "Scheduled and posted consistently across your channels — you stay hands-free." },
  { no: "06", emoji: "📊", title: "Review", desc: "Monthly performance reports and a strategy call to keep improving." },
];

export type Plan = {
  name: string;
  emoji: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Spark",
    emoji: "✨",
    price: "14,999",
    cadence: "/month",
    tagline: "Get present, get consistent.",
    features: [
      "12 posts / month",
      "4 reels",
      "Captions & hashtags",
      "Grid design",
      "Content calendar",
      "WhatsApp support",
    ],
  },
  {
    name: "Grow",
    emoji: "🌿",
    price: "24,999",
    cadence: "/month",
    tagline: "Build a brand, not just a feed.",
    popular: true,
    features: [
      "20 posts / month",
      "8 reels",
      "Stories & WhatsApp content",
      "Monthly strategy call",
      "Brand voice development",
      "Engagement support",
    ],
  },
  {
    name: "Authority",
    emoji: "👑",
    price: "39,999",
    cadence: "/month",
    tagline: "Own your category.",
    features: [
      "Full content creation",
      "Meta Ads + lead funnel",
      "Video editing",
      "Personal brand strategy",
      "Priority support",
      "Monthly performance report",
    ],
  },
];

export type Testimonial = {
  emoji: string;
  quote: string;
  name: string;
  role: string;
  stat: string;
};

export const testimonials: Testimonial[] = [
  { emoji: "🧭", quote: "Got my first 5 online clients in 30 days. I finally look like the expert I am.", name: "Anjali R.", role: "Vastu Consultant", stat: "5 clients in 30 days" },
  { emoji: "🔮", quote: "My Vastu bookings doubled in 3 months. The reels actually sound like me.", name: "Rohan M.", role: "Astrologer", stat: "2× bookings in 90 days" },
  { emoji: "🃏", quote: "From 400 to 8,000 followers — and they actually book readings now.", name: "Sneha K.", role: "Tarot Reader", stat: "400 → 8,000 followers" },
  { emoji: "🪷", quote: "I stopped worrying about content. My retreats fill up before I even post.", name: "Devika S.", role: "Yoga Teacher", stat: "Retreats sell out" },
];

export const stats: { value: string; label: string }[] = [
  { value: "180+", label: "Spiritual brands scaled" },
  { value: "3.2M", label: "Reel views generated" },
  { value: "5,400+", label: "Qualified leads delivered" },
  { value: "92%", label: "Clients who renew" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  { q: "Do you work with coaches outside India?", a: "Yes. While many clients are India-based, we work with spiritual practitioners internationally — content is delivered in English or Hinglish so it travels well across borders." },
  { q: "What makes you different from a normal marketing agency?", a: "We work exclusively with coaches, healers and spiritual practitioners. That means we already understand your vocabulary, your ethics, and what converts in this niche — no generic fitness or fashion templates." },
  { q: "How does the free audit work?", a: "Submit your name, niche and Instagram handle. Within 2–3 days you get a short, personalised presence audit covering your bio, content gaps, branding and lead-capture — with 3 quick wins you can act on immediately. No payment, no commitment." },
  { q: "How does video content work?", a: "Our in-house production studio handles scripting, shooting guidance, and editing. You can record raw clips and we edit them into reels, or we storyboard concepts for you to film — whatever fits how you work." },
  { q: "Do you create Hindi / English / Hinglish content?", a: "Yes — all three. We pick the language (or mix) that matches where your audience is and where you want to grow. Many clients run Hinglish reels for reach and English posts for authority." },
  { q: "How soon will I see results?", a: "Consistency compounds. Most clients see clearer branding and engagement within the first month, follower growth by month two, and a measurable bump in booked leads by month three. Ads (Authority plan) accelerate this further." },
  { q: "Can I upgrade my package?", a: "Anytime. Plans are month-to-month, so you can move from Spark → Grow → Authority whenever you're ready to go bigger — no lock-in." },
];

export const navLinks = [
  { label: "Who we help", href: "#who-we-help" },
  { label: "Why us", href: "#why-us" },
  { label: "Process", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#social-proof" },
  { label: "FAQ", href: "#faq" },
];
