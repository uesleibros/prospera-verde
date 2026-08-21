"use client";

import { useEffect, useReducer } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CircleCheck, CircleX, RotateCcw, Undo2 } from "lucide-react";
import { etapasCadeiaReciclagem, type EtapaCadeia } from "@/data/cadeiaReciclagem";
import { Button } from "@/components/ui/button";
import { embaralhar } from "@/lib/embaralhar";
import { rolarParaTopo } from "@/lib/rolarParaTopo";

type Estado = {
  disponiveis: EtapaCadeia[];
  sequencia: EtapaCadeia[];
  fase: "jogando" | "resultado";
};

type Acao =
  | { tipo: "ESCOLHER"; id: string }
  | { tipo: "DESFAZER" }
  | { tipo: "REINICIAR" }
  | { tipo: "EMBARALHAR" };

const ESTADO_INICIAL: Estado = {
  disponiveis: etapasCadeiaReciclagem,
  sequencia: [],
  fase: "jogando",
};

function reducer(estado: Estado, acao: Acao): Estado {
  switch (acao.tipo) {
    case "ESCOLHER": {
      const etapa = estado.disponiveis.find((e) => e.id === acao.id);
      if (!etapa) return estado;
      const novaSequencia = [...estado.sequencia, etapa];
      const novosDisponiveis = estado.disponiveis.filter((e) => e.id !== acao.id);
      return {
        ...estado,
        disponiveis: novosDisponiveis,
        sequencia: novaSequencia,
        fase: novaSequencia.length === etapasCadeiaReciclagem.length ? "resultado" : "jogando",
      };
    }
    case "DESFAZER": {
      if (estado.sequencia.length === 0) return estado;
      const ultima = estado.sequencia[estado.sequencia.length - 1];
      return {
        ...estado,
        sequencia: estado.sequencia.slice(0, -1),
        disponiveis: [...estado.disponiveis, ultima],
        fase: "jogando",
      };
    }
    case "REINICIAR":
    case "EMBARALHAR":
      return { disponiveis: embaralhar(etapasCadeiaReciclagem), sequencia: [], fase: "jogando" };
    default:
      return estado;
  }
}

export function CadeiaReciclagem() {
  const [estado, dispatch] = useReducer(reducer, ESTADO_INICIAL);
  const total = etapasCadeiaReciclagem.length;

  useEffect(() => {
    dispatch({ tipo: "EMBARALHAR" });
  }, []);

  function reiniciar() {
    rolarParaTopo();
    dispatch({ tipo: "REINICIAR" });
  }

  if (estado.fase === "resultado") {
    const acertos = estado.sequencia.filter((etapa, indice) => etapa.ordem === indice + 1).length;

    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-md border border-cinza-borda bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-cinza-medio">Resultado final</p>
          <motion.p
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-azul-escuro"
          >
            {acertos} de {total}
          </motion.p>
          <p className="mt-1 text-cinza-medio">etapas na posição correta.</p>
          <Button type="button" size="lg" className="mt-5 gap-1.5" onClick={reiniciar}>
            <RotateCcw className="h-4 w-4" />
            Jogar novamente
          </Button>
        </div>

        <h2 className="mt-8 text-lg font-bold text-azul-escuro">A ordem certa da cadeia de reciclagem</h2>
        <ol className="mt-4 space-y-3">
          {estado.sequencia.map((etapa, indice) => {
            const correta = etapa.ordem === indice + 1;
            return (
              <motion.li
                key={etapa.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: indice * 0.05 }}
                className={`rounded-md border p-4 ${correta ? "border-verde/30 bg-verde-claro" : "border-vermelho/30 bg-red-50"}`}
              >
                <p className="flex items-center gap-2 font-semibold text-azul-escuro">
                  <span aria-hidden="true">{etapa.emoji}</span>
                  {indice + 1}. {etapa.titulo}
                  {correta ? (
                    <CircleCheck className="h-4 w-4 shrink-0 text-verde-escuro" />
                  ) : (
                    <CircleX className="h-4 w-4 shrink-0 text-vermelho" />
                  )}
                </p>
                {!correta && (
                  <p className="mt-1 text-sm text-cinza-texto">
                    Na cadeia real, esta é a etapa <strong>{etapa.ordem}</strong> de {total}.
                  </p>
                )}
                <p className="mt-1 text-sm text-cinza-medio">{etapa.descricao}</p>
              </motion.li>
            );
          })}
        </ol>
      </motion.div>
    );
  }

  return (
    <div className="rounded-md border border-cinza-borda bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between text-sm text-cinza-medio">
        <span>
          {estado.sequencia.length} de {total} etapas escolhidas
        </span>
        {estado.sequencia.length > 0 && (
          <button
            type="button"
            onClick={() => dispatch({ tipo: "DESFAZER" })}
            className="flex items-center gap-1 font-semibold text-azul hover:underline"
          >
            <Undo2 className="h-3.5 w-3.5" />
            Desfazer última
          </button>
        )}
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-cinza-fundo">
        <motion.div
          className="h-1.5 rounded-full bg-verde"
          animate={{ width: `${(estado.sequencia.length / total) * 100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>

      <h2 className="mt-6 text-lg font-bold text-azul-escuro">Sua sequência</h2>
      {estado.sequencia.length === 0 ? (
        <p className="mt-2 text-sm text-cinza-medio">
          Toque nas etapas abaixo, na ordem em que elas acontecem de verdade, do início ao fim da cadeia.
        </p>
      ) : (
        <ol className="mt-3 space-y-2">
          <AnimatePresence initial={false}>
            {estado.sequencia.map((etapa, indice) => (
              <motion.li
                key={etapa.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                className="flex items-center gap-3 rounded-md border border-azul/30 bg-azul-claro/40 p-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-azul text-xs font-bold text-white">
                  {indice + 1}
                </span>
                <span aria-hidden="true">{etapa.emoji}</span>
                <span className="text-sm font-semibold text-azul-escuro">{etapa.titulo}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      )}

      {estado.disponiveis.length > 0 && (
        <>
          <h2 className="mt-6 text-lg font-bold text-azul-escuro">Etapas disponíveis</h2>
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            <AnimatePresence initial={false}>
              {estado.disponiveis.map((etapa) => (
                <motion.button
                  key={etapa.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => dispatch({ tipo: "ESCOLHER", id: etapa.id })}
                  className="flex flex-col items-center gap-1.5 rounded-md border-2 border-cinza-borda bg-white p-3 text-center text-sm font-semibold text-cinza-texto transition-colors hover:border-azul/40"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {etapa.emoji}
                  </span>
                  {etapa.titulo}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}
