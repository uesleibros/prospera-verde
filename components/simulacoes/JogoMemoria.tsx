"use client";

import { useEffect, useReducer } from "react";
import { motion } from "motion/react";
import { Leaf, RotateCcw } from "lucide-react";
import { paresMemoria } from "@/data/memoria";
import { LixeiraIcon } from "@/components/icons/LixeiraIcon";
import { Button } from "@/components/ui/button";
import { embaralhar } from "@/lib/embaralhar";

type Carta = {
  id: string;
  categoria: string;
  tipo: "item" | "lixeira";
  emoji?: string;
  nome: string;
  corHex: string;
  virada: boolean;
  encontrada: boolean;
};

function montarBaralho(): Carta[] {
  const cartas: Carta[] = paresMemoria.flatMap((par) => [
    {
      id: `${par.categoria}-item`,
      categoria: par.categoria,
      tipo: "item",
      emoji: par.itemEmoji,
      nome: par.itemNome,
      corHex: par.lixeiraCorHex,
      virada: false,
      encontrada: false,
    },
    {
      id: `${par.categoria}-lixeira`,
      categoria: par.categoria,
      tipo: "lixeira",
      nome: par.lixeiraNome,
      corHex: par.lixeiraCorHex,
      virada: false,
      encontrada: false,
    },
  ]);
  return cartas;
}

type Estado = {
  cartas: Carta[];
  selecionadas: number[];
  tentativas: number;
  fase: "jogando" | "resultado";
};

type Acao =
  | { tipo: "VIRAR"; indice: number }
  | { tipo: "RESOLVER" }
  | { tipo: "EMBARALHAR" };

const ESTADO_INICIAL: Estado = {
  cartas: montarBaralho(),
  selecionadas: [],
  tentativas: 0,
  fase: "jogando",
};

function reducer(estado: Estado, acao: Acao): Estado {
  switch (acao.tipo) {
    case "VIRAR": {
      if (estado.selecionadas.length === 2) return estado;
      const carta = estado.cartas[acao.indice];
      if (carta.virada || carta.encontrada) return estado;

      const novasCartas = estado.cartas.map((c, i) => (i === acao.indice ? { ...c, virada: true } : c));
      const novasSelecionadas = [...estado.selecionadas, acao.indice];
      return {
        ...estado,
        cartas: novasCartas,
        selecionadas: novasSelecionadas,
        tentativas: novasSelecionadas.length === 2 ? estado.tentativas + 1 : estado.tentativas,
      };
    }
    case "RESOLVER": {
      if (estado.selecionadas.length !== 2) return estado;
      const [primeiro, segundo] = estado.selecionadas;
      const combinou = estado.cartas[primeiro].categoria === estado.cartas[segundo].categoria;

      const novasCartas = estado.cartas.map((c, i) => {
        if (i !== primeiro && i !== segundo) return c;
        return combinou ? { ...c, encontrada: true } : { ...c, virada: false };
      });

      const todasEncontradas = novasCartas.every((c) => c.encontrada);

      return {
        ...estado,
        cartas: novasCartas,
        selecionadas: [],
        fase: todasEncontradas ? "resultado" : "jogando",
      };
    }
    case "EMBARALHAR":
      return { cartas: embaralhar(montarBaralho()), selecionadas: [], tentativas: 0, fase: "jogando" };
    default:
      return estado;
  }
}

function CartaMemoria({ carta, onClicar }: { carta: Carta; onClicar: () => void }) {
  const revelada = carta.virada || carta.encontrada;

  return (
    <button
      type="button"
      onClick={onClicar}
      disabled={revelada}
      aria-label={revelada ? carta.nome : "Carta virada para baixo"}
      className="aspect-[3/4] [perspective:1000px]"
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: revelada ? 180 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-azul-escuro [backface-visibility:hidden]">
          <Leaf className="h-6 w-6 text-white/70" />
        </div>
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-lg border-2 bg-white p-1 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            carta.encontrada ? "border-verde-escuro ring-2 ring-verde-escuro" : "border-cinza-borda"
          }`}
        >
          {carta.tipo === "item" ? (
            <span className="text-2xl sm:text-3xl" aria-hidden="true">{carta.emoji}</span>
          ) : (
            <LixeiraIcon cor={carta.corHex} className="h-9 w-7 sm:h-11 sm:w-9" />
          )}
          <span className="px-0.5 text-[10px] font-bold leading-tight text-azul-escuro sm:text-xs">{carta.nome}</span>
        </div>
      </motion.div>
    </button>
  );
}

export function JogoMemoria() {
  const [estado, dispatch] = useReducer(reducer, ESTADO_INICIAL);

  useEffect(() => {
    dispatch({ tipo: "EMBARALHAR" });
  }, []);

  useEffect(() => {
    if (estado.selecionadas.length !== 2) return;
    const id = setTimeout(() => dispatch({ tipo: "RESOLVER" }), 700);
    return () => clearTimeout(id);
  }, [estado.selecionadas]);

  const encontradas = estado.cartas.filter((c) => c.encontrada).length / 2;
  const totalPares = paresMemoria.length;

  if (estado.fase === "resultado") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-md border border-cinza-borda bg-white p-6 text-center shadow-sm sm:p-8"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-cinza-medio">Todos os pares encontrados!</p>
        <p className="mt-2 text-4xl font-bold text-azul-escuro">{estado.tentativas} tentativas</p>
        <p className="mt-1 text-cinza-medio">
          {estado.tentativas <= totalPares
            ? "Memória de elefante! Você acertou de primeira quase toda vez."
            : "Bom trabalho combinando cada item com a lixeira certa."}
        </p>
        <Button type="button" size="lg" className="mt-5 gap-1.5" onClick={() => dispatch({ tipo: "EMBARALHAR" })}>
          <RotateCcw className="h-4 w-4" />
          Jogar novamente
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-md border border-cinza-borda bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between text-sm text-cinza-medio">
        <span>Pares encontrados: {encontradas} de {totalPares}</span>
        <span>Tentativas: {estado.tentativas}</span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
        {estado.cartas.map((carta, indice) => (
          <CartaMemoria key={carta.id} carta={carta} onClicar={() => dispatch({ tipo: "VIRAR", indice })} />
        ))}
      </div>
    </div>
  );
}
