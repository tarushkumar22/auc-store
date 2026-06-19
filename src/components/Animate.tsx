"use client";
import { motion, useInView, useScroll, useSpring, useTransform, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const scale: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
};

export { fadeUp, stagger, fadeLeft, fadeRight, scale };

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "stagger";
  once?: boolean;
}

// Per-variant starting offsets used for the scroll-linked fade.
const variantOffsets: Record<string, { x: number; y: number; s: number }> = {
  up: { x: 0, y: 60, s: 1 },
  left: { x: -60, y: 0, s: 1 },
  right: { x: 60, y: 0, s: 1 },
  scale: { x: 0, y: 0, s: 0.9 },
};

export default function Animate({
  children,
  className,
  variant = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Track this element's progress through the viewport:
  // 0 = its top just entered from the bottom, 1 = its bottom just left at the top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth the raw scroll value for a buttery, eased motion.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.35,
  });

  const o = variantOffsets[variant] ?? variantOffsets.up;

  // Fade/translate IN on the way up into view, hold, then fade/translate OUT at the top.
  const opacity = useTransform(progress, [0, 0.22, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(progress, [0, 0.22, 0.8, 1], [o.y, 0, 0, -o.y]);
  const x = useTransform(progress, [0, 0.22, 0.8, 1], [o.x, 0, 0, -o.x]);
  const scaleV = useTransform(
    progress,
    [0, 0.22, 0.8, 1],
    [o.s, 1, 1, o.s]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, x, y, scale: scaleV, willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateStagger({
  children,
  className,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

export function AnimateItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
