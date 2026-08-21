"use client";

import { useCallback, useEffect, useReducer, useState } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { motion, AnimatePresence } from "motion/react";
import { CircleCheck, CircleX, Trophy, ThumbsUp, BookOpen, Timer } from "lucide-react";
import { perguntasQuiz, type PerguntaQuiz } from "@/data/quiz";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNumeroAnimado } from "@/hooks/useNumeroAnimado";
import { embaralhar } from "@/lib/embaralhar";

const LETRAS = ["A", "B", "C", "D"];
const TEMPO_MINIMO = 8;
const TEMPO_INICIAL = 20;

function tempoLimite(indice: number) {
  return Math.max(TEMPO_MINIMO, TEMPO_INICIAL - indice);
}

function embaralharAlternativas(pergunta: PerguntaQuiz): PerguntaQuiz {
  const ordem = embaralhar(pergunta.opcoes.map((_, indice) => indice));
  return {
    ...pergunta,
    opcoes: ordem.map((indice) => pergunta.opcoes[indice]),
    respostaCorreta: ordem.indexOf(pergunta.respostaCorreta),
  };
}

function novoBaralho(): PerguntaQuiz[] {
  return embaralhar(perguntasQuiz).map(embaralharAlternativas);
}

type Resposta = {
  pergunta: PerguntaQuiz;
  escolhida: number;
  correta: boolean;
};

type Estado = {
  perguntas: PerguntaQuiz[];
  indice: number;
  respostas: Resposta[];
  escolhaAtual: number | null;
  fase: "jogando" | "resultado";
};

type Acao =
  | { tipo: "RESPONDER"; opcao: number }
  | { tipo: "AVANCAR" }
  | { tipo: "REINICIAR" }
  | { tipo: "EMBARALHAR" };

const ESTADO_INICIAL: Estado = {
  perguntas: perguntasQuiz,
  indice: 0,
  respostas: [],
  escolhaAtual: null,
  fase: "jogando",
};

function reducer(estado: Estado, acao: Acao): Estado {
  switch (acao.tipo) {
    case "RESPONDER": {
      if (estado.escolhaAtual !== null) return estado;
      const pergunta = estado.perguntas[estado.indice];
      const correta = pergunta.respostaCorreta === acao.opcao;
      return {
        ...estado,
        escolhaAtual: acao.opcao,
        respostas: [...estado.respostas, { pergunta, escolhida: acao.opcao, correta }],
      };
    }
    case "AVANCAR": {
      const proximo = estado.indice + 1;
      if (proximo >= estado.perguntas.length) return { ...estado, fase: "resultado" };
      return { ...estado, indice: proximo, escolhaAtual: null };
    }
    case "REINICIAR":
    case "EMBARALHAR":
      return { ...ESTADO_INICIAL, perguntas: novoBaralho() };
    default:
      return estado;
  }
}

function classificacao(acertos: number, total: number) {
  const percentual = acertos / total;
  if (percentual === 1)
    return { titulo: "Expert em reciclagem!", texto: "Você acertou tudo. Parabéns pelo conhecimento!", Icone: Trophy, cor: "bg-amarelo text-azul-escuro" };
  if (percentual >= 0.7)
    return { titulo: "Muito bem!", texto: "Você conhece bem os princípios da reciclagem.", Icone: ThumbsUp, cor: "bg-verde text-white" };
  if (percentual >= 0.4)
    return { titulo: "Bom começo", texto: "Você já sabe bastante, mas ainda vale revisar alguns temas.", Icone: BookOpen, cor: "bg-azul text-white" };
  return { titulo: "Continue aprendendo", texto: "Explore o guia \"Como reciclar\" e tente o quiz novamente.", Icone: BookOpen, cor: "bg-cinza-medio text-white" };
}

function rolarParaTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Cronometro({
  segundosLimite,
  pausado,
  aoEsgotar,
}: {
  segundosLimite: number;
  pausado: boolean;
  aoEsgotar: () => void;
}) {
  const [tempoRestante, setTempoRestante] = useState(segundosLimite);

  useEffect(() => {
    if (pausado) return;
    if (tempoRestante === 0) {
      aoEsgotar();
      return;
    }
    const id = setTimeout(() => setTempoRestante((t) => Math.max(0, t - 1)), 1000);
    return () => clearTimeout(id);
  }, [tempoRestante, pausado, aoEsgotar]);

  const percentual = (tempoRestante / segundosLimite) * 100;
  const baixo = tempoRestante <= Math.ceil(segundosLimite * 0.3);

  return (
    <div className={`mt-3 flex items-center gap-2 text-xs font-bold ${baixo && !pausado ? "text-vermelho" : "text-cinza-medio"}`}>
      <Timer className="h-4 w-4" />
      <span className="shrink-0">{pausado ? "Tempo parado" : `${tempoRestante}s para responder`}</span>
      <Progress
        value={pausado ? 100 : percentual}
        className="h-1 flex-1"
        indicatorClassName={baixo && !pausado ? "bg-vermelho" : "bg-azul"}
      />
    </div>
  );
}

export function QuizReciclagem() {
  const [estado, dispatch] = useReducer(reducer, ESTADO_INICIAL);
  const total = estado.perguntas.length;
  const acertos = estado.respostas.filter((r) => r.correta).length;
  const acertosAnimados = useNumeroAnimado(acertos, 350);
  const respondido = estado.escolhaAtual !== null;

  useEffect(() => {
    dispatch({ tipo: "EMBARALHAR" });
  }, []);

  const aoEsgotarTempo = useCallback(() => {
    dispatch({ tipo: "RESPONDER", opcao: -1 });
  }, []);

  function avancar() {
    rolarParaTopo();
    dispatch({ tipo: "AVANCAR" });
  }

  function reiniciar() {
    rolarParaTopo();
    dispatch({ tipo: "REINICIAR" });
  }

  if (estado.fase === "resultado") {
    const erros = estado.respostas.filter((r) => !r.correta);
    const resultado = classificacao(acertos, total);
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
            {acertos} / {total}
          </motion.p>
          <p className="mt-2 text-lg font-bold text-verde-escuro">{resultado.titulo}</p>
          <p className="mt-1 text-cinza-medio">{resultado.texto}</p>
          <Button type="button" size="lg" className="mt-5" onClick={reiniciar}>
            Refazer o quiz
          </Button>
        </div>

        {erros.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-bold text-azul-escuro">Perguntas para revisar</h2>
            <ul className="mt-4 space-y-3">
              {erros.map((resposta, indice) => (
                <motion.li
                  key={resposta.pergunta.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: indice * 0.05 }}
                  className="rounded-md border border-vermelho/30 bg-red-50 p-4"
                >
                  <p className="font-semibold text-azul-escuro">{resposta.pergunta.pergunta}</p>
                  <p className="mt-1 text-sm text-cinza-texto">
                    {resposta.escolhida === -1 ? (
                      "Você não respondeu a tempo."
                    ) : (
                      <>
                        Você escolheu <strong>{resposta.pergunta.opcoes[resposta.escolhida]}</strong>.
                      </>
                    )}{" "}
                    Resposta correta: <strong>{resposta.pergunta.opcoes[resposta.pergunta.respostaCorreta]}</strong>
                  </p>
                  <p className="mt-1 text-sm text-cinza-medio">{resposta.pergunta.explicacao}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    );
  }

  const pergunta = estado.perguntas[estado.indice];

  return (
    <div className="rounded-md border border-cinza-borda bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between text-sm text-cinza-medio">
        <span>
          Pergunta {estado.indice + 1} de {total}
        </span>
        <span>Acertos: {Math.round(acertosAnimados)}</span>
      </div>

      <Progress value={(estado.indice / total) * 100} className="mt-4" />

      <Cronometro
        key={estado.indice}
        segundosLimite={tempoLimite(estado.indice)}
        pausado={respondido}
        aoEsgotar={aoEsgotarTempo}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={pergunta.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="mt-6 text-xl font-bold text-azul-escuro">{pergunta.pergunta}</h2>

          <RadioGroupPrimitive.Root
            value={estado.escolhaAtual !== null ? String(estado.escolhaAtual) : undefined}
            onValueChange={(valor) => dispatch({ tipo: "RESPONDER", opcao: Number(valor) })}
            disabled={respondido}
            aria-label={pergunta.pergunta}
            className="mt-5 space-y-2.5"
          >
            {pergunta.opcoes.map((opcao, indiceOpcao) => {
              const ehCorreta = respondido && indiceOpcao === pergunta.respostaCorreta;
              const ehEscolhaErrada = respondido && indiceOpcao === estado.escolhaAtual && indiceOpcao !== pergunta.respostaCorreta;
              return (
                <RadioGroupPrimitive.Item
                  key={opcao}
                  value={String(indiceOpcao)}
                  className={`flex w-full items-center gap-3 rounded-md border-2 p-3.5 text-left text-sm font-medium transition-colors enabled:hover:border-azul/40 disabled:cursor-default ${
                    ehCorreta
                      ? "border-verde bg-verde-claro text-verde-escuro"
                      : ehEscolhaErrada
                        ? "border-vermelho bg-red-50 text-vermelho"
                        : "border-cinza-borda bg-white text-cinza-texto"
                  }`}
                >
                  <motion.span
                    animate={ehEscolhaErrada ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-1 items-center gap-3"
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        ehCorreta
                          ? "bg-verde text-white"
                          : ehEscolhaErrada
                            ? "bg-vermelho text-white"
                            : "bg-cinza-fundo text-cinza-medio"
                      }`}
                    >
                      {LETRAS[indiceOpcao]}
                    </span>
                    <span className="flex-1">{opcao}</span>
                    {ehCorreta && <CircleCheck className="h-5 w-5 shrink-0" />}
                    {ehEscolhaErrada && <CircleX className="h-5 w-5 shrink-0" />}
                  </motion.span>
                </RadioGroupPrimitive.Item>
              );
            })}
          </RadioGroupPrimitive.Root>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {respondido && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="status"
            aria-live="polite"
            className="mt-5 overflow-hidden rounded-md border border-cinza-borda bg-cinza-fundo p-4"
          >
            <p className="text-sm leading-relaxed text-cinza-texto">
              {estado.escolhaAtual === -1 && (
                <strong className="mb-1 block text-vermelho">Tempo esgotado!</strong>
              )}
              {pergunta.explicacao}
            </p>
            <Button type="button" className="mt-4" onClick={avancar}>
              {estado.indice + 1 >= total ? "Ver resultado" : "Próxima pergunta"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
