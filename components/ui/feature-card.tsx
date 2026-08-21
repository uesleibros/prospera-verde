"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

type CorCard = "azul" | "verde" | "amarelo" | "vermelho";

const CORES_ICONE: Record<CorCard, string> = {
  azul: "bg-azul text-white",
  verde: "bg-verde text-white",
  amarelo: "bg-amarelo text-azul-escuro",
  vermelho: "bg-vermelho text-white",
};

type FeatureCardProps = {
  cor?: CorCard;
  titulo: string;
  children?: ReactNode;
  icone?: ReactNode;
  href?: string;
  className?: string;
};

export function FeatureCard({ cor = "azul", titulo, children, icone, href, className }: FeatureCardProps) {
  const conteudo = (
    <>
      {icone && (
        <span className={cn("mb-3 flex h-11 w-11 items-center justify-center rounded-full", CORES_ICONE[cor])}>
          {icone}
        </span>
      )}
      <h3 className="text-base font-bold text-azul-escuro">{titulo}</h3>
      {children && <div className="mt-1.5 text-sm leading-relaxed text-cinza-medio">{children}</div>}
    </>
  );

  const classesBase = cn("flex h-full flex-col rounded-md border border-cinza-borda bg-white p-5 shadow-sm", className);

  if (href) {
    return (
      <MotionLink
        href={href}
        whileHover={{ y: -4, boxShadow: "0 10px 20px -8px rgba(7,29,65,0.25)" }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className={classesBase}
      >
        {conteudo}
      </MotionLink>
    );
  }

  return <div className={classesBase}>{conteudo}</div>;
}
