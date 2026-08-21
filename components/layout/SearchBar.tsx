"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { buscar } from "@/data/searchIndex";

export function SearchBar({ className = "", onNavigate }: { className?: string; onNavigate?: () => void }) {
  const [termo, setTermo] = useState("");
  const [aberto, setAberto] = useState(false);
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const raizRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const listaId = useId();

  const resultados = buscar(termo);

  useEffect(() => {
    function aoClicarFora(evento: MouseEvent) {
      if (raizRef.current && !raizRef.current.contains(evento.target as Node)) {
        setAberto(false);
      }
    }
    document.addEventListener("mousedown", aoClicarFora);
    return () => document.removeEventListener("mousedown", aoClicarFora);
  }, []);

  function irPara(href: string) {
    router.push(href);
    setTermo("");
    setAberto(false);
    onNavigate?.();
  }

  function aoTeclar(evento: React.KeyboardEvent<HTMLInputElement>) {
    if (!aberto || resultados.length === 0) return;
    if (evento.key === "ArrowDown") {
      evento.preventDefault();
      setIndiceAtivo((i) => (i + 1) % resultados.length);
    } else if (evento.key === "ArrowUp") {
      evento.preventDefault();
      setIndiceAtivo((i) => (i - 1 + resultados.length) % resultados.length);
    } else if (evento.key === "Enter") {
      evento.preventDefault();
      irPara(resultados[indiceAtivo].href);
    } else if (evento.key === "Escape") {
      setAberto(false);
    }
  }

  return (
    <div ref={raizRef} className={`group relative ${className}`}>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (resultados[0]) irPara(resultados[0].href);
        }}
        className="flex items-center gap-2"
      >
        <label htmlFor="busca-site" className="sr-only">
          Buscar no site
        </label>
        <div className="flex items-center rounded border border-white/40 bg-white/10 px-2 focus-within:bg-white">
          <Search className="h-4 w-4 text-white/80 group-focus-within:text-azul" />
          <input
            id="busca-site"
            type="search"
            placeholder="Buscar"
            autoComplete="off"
            role="combobox"
            aria-expanded={aberto && resultados.length > 0}
            aria-controls={listaId}
            value={termo}
            onChange={(e) => {
              setTermo(e.target.value);
              setIndiceAtivo(0);
              setAberto(true);
            }}
            onFocus={() => setAberto(true)}
            onKeyDown={aoTeclar}
            className="w-32 bg-transparent px-2 py-1.5 text-sm text-white placeholder:text-white/70 focus:text-azul-escuro focus:outline-none focus:placeholder:text-cinza-medio lg:w-48"
          />
        </div>
      </form>

      {aberto && termo.trim() && (
        <ul
          id={listaId}
          role="listbox"
          className="absolute left-0 right-0 z-50 mt-1.5 max-h-80 overflow-y-auto rounded-md border border-cinza-borda bg-white text-left shadow-lg"
        >
          {resultados.length === 0 ? (
            <li className="px-3 py-3 text-sm text-cinza-medio">Nenhum resultado para &ldquo;{termo}&rdquo;</li>
          ) : (
            resultados.map((item, indice) => (
              <li key={item.href}>
                <button
                  type="button"
                  role="option"
                  aria-selected={indice === indiceAtivo}
                  onMouseEnter={() => setIndiceAtivo(indice)}
                  onClick={() => irPara(item.href)}
                  className={`block w-full px-3 py-2.5 text-left text-sm ${
                    indice === indiceAtivo ? "bg-azul-claro" : "bg-white"
                  }`}
                >
                  <span className="block font-semibold text-azul-escuro">{item.titulo}</span>
                  <span className="mt-0.5 flex items-center gap-1.5 text-xs text-cinza-medio">
                    <span className="rounded-full bg-cinza-fundo px-1.5 py-0.5 font-medium">{item.categoria}</span>
                    {item.descricao}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
