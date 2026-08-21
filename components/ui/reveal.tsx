"use client";

import { motion } from "motion/react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const TAGS = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  aside: motion.aside,
} as const;

type Tag = keyof typeof TAGS;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: Tag;
} & Omit<ComponentPropsWithoutRef<ElementType>, "children" | "className">;

export function Reveal({ children, className, delay = 0, y = 16, as = "div", ...props }: RevealProps) {
  const MotionTag = TAGS[as];
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
