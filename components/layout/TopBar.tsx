"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Contrast } from "lucide-react";

const ESCALA_MIN = 0.85;
const ESCALA_MAX = 1.4;
const ESCALA_PASSO = 0.1;

export function TopBar() {
  const [escalaFonte, setEscalaFonte] = useState(1);
  const [altoContraste, setAltoContraste] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(escalaFonte));
  }, [escalaFonte]);

  useEffect(() => {
    document.documentElement.classList.toggle("alto-contraste", altoContraste);
  }, [altoContraste]);

  return (
    <div className="bg-azul-escuro text-white text-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5">
        <nav aria-label="Links institucionais" className="flex items-center gap-4">
          <Link href="/sobre" className="hover:underline underline-offset-2">
            Sobre a cooperativa
          </Link>
          <Link href="/pontos-de-coleta" className="hover:underline underline-offset-2">
            Pontos de coleta
          </Link>
        </nav>

        <div
          className="flex items-center gap-3"
          role="group"
          aria-label="Ferramentas de acessibilidade"
        >
          <span className="hidden sm:inline text-white/80">Acessibilidade:</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setEscalaFonte((v) => Math.max(ESCALA_MIN, +(v - ESCALA_PASSO).toFixed(2)))}
              disabled={escalaFonte <= ESCALA_MIN}
              aria-label="Diminuir tamanho da fonte"
              className="h-7 w-7 rounded border border-white/40 text-xs font-bold leading-none hover:bg-white/10 disabled:opacity-40"
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => setEscalaFonte(1)}
              aria-label="Redefinir tamanho da fonte"
              className="h-7 w-7 rounded border border-white/40 text-sm font-bold leading-none hover:bg-white/10"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setEscalaFonte((v) => Math.min(ESCALA_MAX, +(v + ESCALA_PASSO).toFixed(2)))}
              disabled={escalaFonte >= ESCALA_MAX}
              aria-label="Aumentar tamanho da fonte"
              className="h-7 w-7 rounded border border-white/40 text-base font-bold leading-none hover:bg-white/10 disabled:opacity-40"
            >
              A+
            </button>
          </div>
          <button
            type="button"
            onClick={() => setAltoContraste((v) => !v)}
            aria-pressed={altoContraste}
            className="flex items-center gap-1.5 rounded border border-white/40 px-2 py-1 text-xs font-semibold hover:bg-white/10"
          >
            <Contrast className="h-4 w-4" />
            Alto contraste
          </button>
        </div>
      </div>
    </div>
  );
}
