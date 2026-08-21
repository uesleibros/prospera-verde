"use client";

import { useEffect, useRef, useState } from "react";

export function useNumeroAnimado(valorAlvo: number, duracaoMs = 500) {
  const [valorExibido, setValorExibido] = useState(valorAlvo);
  const valorAnteriorRef = useRef(valorAlvo);

  useEffect(() => {
    const valorInicial = valorAnteriorRef.current;
    const diferenca = valorAlvo - valorInicial;
    if (diferenca === 0) return;

    const inicio = performance.now();
    let frameId: number;

    function tick(agora: number) {
      const progresso = Math.min(1, (agora - inicio) / duracaoMs);
      const suavizado = 1 - Math.pow(1 - progresso, 3);
      setValorExibido(valorInicial + diferenca * suavizado);
      if (progresso < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        valorAnteriorRef.current = valorAlvo;
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [valorAlvo, duracaoMs]);

  return valorExibido;
}
