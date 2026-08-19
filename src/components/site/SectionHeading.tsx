import { motion } from "motion/react";
import { fadeUp } from "@/lib/anim";

type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  id,
}: Props) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-[2.7rem]">
        {title}{" "}
        {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
