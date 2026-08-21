import Link from "next/link";
import { Leaf, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-azul-escuro text-white/90">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-verde">
                <Leaf className="h-4 w-4 text-white" />
              </span>
              <span className="text-base font-bold text-white">Próspera Verde</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Cooperativa de reciclagem e gestão de resíduos sólidos, dedicada à
              educação ambiental e à geração de renda justa para cooperados.
            </p>
          </div>

          <nav aria-label="Links institucionais do rodapé">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">Institucional</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link className="hover:text-white hover:underline" href="/sobre">Sobre a cooperativa</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/simulacoes">Simulações</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/pontos-de-coleta">Pontos de coleta</Link></li>
            </ul>
          </nav>

          <nav aria-label="Links de educação ambiental do rodapé">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">Aprenda a reciclar</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link className="hover:text-white hover:underline" href="/curso">Curso de reciclagem</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/como-reciclar">Guia por material</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/simulacoes/jogo-da-separacao">Jogo da separação</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/simulacoes/quiz">Quiz de reciclagem</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/simulacoes/impacto-ambiental">Simulador de impacto</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">Localização</h2>
            <p className="mt-3 flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Itaberaba, Bahia
                <br />
                Região Centro-Norte Baiana
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-white/60">
          Projeto desenvolvido para a Oficina Pedagógica 02 de Tecnologias Sociais e Cooperativismo.
        </div>
      </div>
    </footer>
  );
}
