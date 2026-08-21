export function rolarParaTopo(duracaoMs = 500) {
  if (typeof window === "undefined") return;

  const inicioY = window.scrollY || document.documentElement.scrollTop;
  if (inicioY <= 0) return;

  const inicioTempo = performance.now();

  function passo(agora: number) {
    const progresso = Math.min(1, (agora - inicioTempo) / duracaoMs);
    const suavizado = 1 - Math.pow(1 - progresso, 3);
    window.scrollTo(0, inicioY * (1 - suavizado));
    if (progresso < 1) {
      requestAnimationFrame(passo);
    }
  }

  requestAnimationFrame(passo);
}
