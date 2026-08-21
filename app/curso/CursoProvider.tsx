"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type CursoContextValor = {
  concluidas: string[];
  licaoConcluida: (slug: string) => boolean;
  concluirLicao: (slug: string) => void;
};

const CursoContext = createContext<CursoContextValor | null>(null);

export function CursoProvider({ children }: { children: ReactNode }) {
  const [concluidas, setConcluidas] = useState<string[]>([]);

  const concluirLicao = useCallback((slug: string) => {
    setConcluidas((atual) => (atual.includes(slug) ? atual : [...atual, slug]));
  }, []);

  const licaoConcluida = useCallback((slug: string) => concluidas.includes(slug), [concluidas]);

  const valor = useMemo(
    () => ({ concluidas, licaoConcluida, concluirLicao }),
    [concluidas, licaoConcluida, concluirLicao]
  );

  return <CursoContext.Provider value={valor}>{children}</CursoContext.Provider>;
}

export function useCurso() {
  const contexto = useContext(CursoContext);
  if (!contexto) throw new Error("useCurso precisa estar dentro de um CursoProvider");
  return contexto;
}
