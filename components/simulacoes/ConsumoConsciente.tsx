"use client";

import { useEffect, useReducer } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CircleCheck, CircleX, Sprout, Leaf, TreePine, Recycle } from "lucide-react";
import { cenariosConsumo, type CenarioConsumo } from "@/data/consumoConsciente";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { embaralhar } from "@/lib/embaralhar";
import { rolarParaTopo } from "@/lib/rolarParaTopo";

type Resposta = {
  cenario: CenarioConsumo;
  escolhida: "a" | "b";
  consciente: boolean;
};

type Estado = {
  cenarios: CenarioConsumo[];
  indice: number;
  respostas: Resposta[];
  escolhaAtual: "a" | "b" | null;
  fase: "jogando" | "resultado";
};

type Acao =
  | { tipo: "ESCOLHER"; opcao: "a" | "b" }
  | { tipo: "AVANCAR" }
  | { tipo: "REINICIAR" }
  | { tipo: "EMBARALHAR" };

const ESTADO_INICIAL: Estado = {
  cenarios: cenariosConsumo,
  indice: 0,
  respostas: [],
  escolhaAtual: null,
  fase: "jogando",
};

function reducer(estado: Estado, acao: Acao): Estado {
  switch (acao.tipo) {
    case "ESCOLHER": {
      if (estado.escolhaAtual !== null) return estado;
      const cenario = estado.cenarios[estado.indice];
      const consciente = cenario.melhorEscolha === acao.opcao;
      return {
        ...estado,
        escolhaAtual: acao.opcao,
        respostas: [...estado.respostas, { cenario, escolhida: acao.opcao, consciente }],
      };
    }
    case "AVANCAR": {
      const proximo = estado.indice + 1;
      if (proximo >= estado.cenarios.length) return { ...estado, fase: "resultado" };
      return { ...estado, indice: proximo, escolhaAtual: null };
    }
    case "REINICIAR":
    case "EMBARALHAR":
      return { ...ESTADO_INICIAL, cenarios: embaralhar(cenariosConsumo) };
    default:
      return estado;
  }
}

function classificacao(pontos: number, total: number) {
  const percentual = pontos / total;
  if (percentual === 1)
    return { titulo: "Consumidor consciente!", texto: "Você escolheu a opção mais sustentável em todas as situações.", Icone: TreePine, cor: "bg-verde text-white" };
  if (percentual >= 0.7)
    return { titulo: "No caminho certo", texto: "A maioria das suas escolhas ajuda o meio ambiente. Só faltam alguns ajustes.", Icone: Sprout, cor: "bg-verde-claro text-verde-escuro" };
  if (percentual >= 0.4)
    return { titulo: "Dá para melhorar", texto: "Algumas escolhas do dia a dia ainda podem pesar menos no ambiente.", Icone: Leaf, cor: "bg-azul text-white" };
  return { titulo: "Hora de repensar hábitos", texto: "Pequenas mudanças na rotina já fazem bastante diferença.", Icone: Recycle, cor: "bg-cinza-medio text-white" };
}

export function ConsumoConsciente() {
  const [estado, dispatch] = useReducer(reducer, ESTADO_INICIAL);
  const total = estado.cenarios.length;
  const pontos = estado.respostas.filter((r) => r.consciente).length;
  const escolhido = estado.escolhaAtual !== null;

  useEffect(() => {
    dispatch({ tipo: "EMBARALHAR" });
  }, []);

  function escolher(opcao: "a" | "b") {
    dispatch({ tipo: "ESCOLHER", opcao });
  }

  function avancar() {
    rolarParaTopo();
    dispatch({ tipo: "AVANCAR" });
  }

  function reiniciar() {
    rolarParaTopo();
    dispatch({ tipo: "REINICIAR" });
  }

  if (estado.fase === "resultado") {
    const inconscientes = estado.respostas.filter((r) => !r.consciente);
    const resultado = classificacao(pontos, total);
    const Icone = resultado.Icone;

    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-md border border-cinza-borda bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`flex h-14 w-14 items-center justify-center rounded-full ${resultado.cor}`}
          >
            <Icone className="h-7 w-7" />
          </motion.span>
          <p className="mt-4 text-sm font-bold uppercase tracking-wide text-cinza-medio">Resultado final</p>
          <motion.p
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
            className="mt-1 text-4xl font-bold text-azul-escuro"
          >
            {pontos} / {total}
          </motion.p>
          <p className="mt-2 text-lg font-bold text-verde-escuro">{resultado.titulo}</p>
          <p className="mt-1 text-cinza-medio">{resultado.texto}</p>
          <Button type="button" size="lg" className="mt-5" onClick={reiniciar}>
            Jogar novamente
          </Button>
        </div>

        {inconscientes.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-bold text-azul-escuro">Situações para repensar</h2>
            <ul className="mt-4 space-y-3">
              {inconscientes.map((resposta, indice) => (
                <motion.li
                  key={resposta.cenario.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: indice * 0.05 }}
                  className="rounded-md border border-vermelho/30 bg-red-50 p-4"
                >
                  <p className="font-semibold text-azul-escuro">{resposta.cenario.situacao}</p>
                  <p className="mt-1 text-sm text-cinza-texto">
                    Você escolheu{" "}
                    <strong>
                      {resposta.escolhida === "a" ? resposta.cenario.opcaoA.texto : resposta.cenario.opcaoB.texto}
                    </strong>
                    . Opção mais consciente:{" "}
                    <strong>
                      {resposta.cenario.melhorEscolha === "a" ? resposta.cenario.opcaoA.texto : resposta.cenario.opcaoB.texto}
                    </strong>
                  </p>
                  <p className="mt-1 text-sm text-cinza-medio">{resposta.cenario.explicacao}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    );
  }

  const cenario = estado.cenarios[estado.indice];

  return (
    <div className="rounded-md border border-cinza-borda bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between text-sm text-cinza-medio">
        <span>Situação {estado.indice + 1} de {total}</span>
        <span>Escolhas conscientes: {pontos}</span>
      </div>

      <Progress value={(estado.indice / total) * 100} className="mt-4" />

      <AnimatePresence mode="wait">
        <motion.div
          key={cenario.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="mt-6 text-xl font-bold text-azul-escuro">{cenario.situacao}</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(["a", "b"] as const).map((opcao) => {
              const dados = opcao === "a" ? cenario.opcaoA : cenario.opcaoB;
              const ehConsciente = escolhido && opcao === cenario.melhorEscolha;
              const ehEscolhaErrada = escolhido && opcao === estado.escolhaAtual && opcao !== cenario.melhorEscolha;

              return (
                <button
                  key={opcao}
                  type="button"
                  disabled={escolhido}
                  onClick={() => escolher(opcao)}
                  className={`flex flex-col items-center gap-2 rounded-md border-2 p-5 text-center text-sm font-medium transition-colors enabled:hover:border-azul/40 disabled:cursor-default ${
                    ehConsciente
                      ? "border-verde bg-verde-claro text-verde-escuro"
                      : ehEscolhaErrada
                        ? "border-vermelho bg-red-50 text-vermelho"
                        : "border-cinza-borda bg-white text-cinza-texto"
                  }`}
                >
                  <motion.span
                    animate={ehEscolhaErrada ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-3xl" aria-hidden="true">{dados.emoji}</span>
                    <span>{dados.texto}</span>
                    {ehConsciente && <CircleCheck className="h-5 w-5 shrink-0" />}
                    {ehEscolhaErrada && <CircleX className="h-5 w-5 shrink-0" />}
                  </motion.span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {escolhido && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="status"
            aria-live="polite"
            className="mt-5 overflow-hidden rounded-md border border-cinza-borda bg-cinza-fundo p-4"
          >
            <p className="text-sm leading-relaxed text-cinza-texto">{cenario.explicacao}</p>
            <Button type="button" className="mt-4" onClick={avancar}>
              {estado.indice + 1 >= total ? "Ver resultado" : "Próxima situação"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
