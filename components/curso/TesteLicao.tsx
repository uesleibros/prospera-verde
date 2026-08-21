"use client";

import { useState } from "react";
import Link from "next/link";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { motion, AnimatePresence } from "motion/react";
import { CircleCheck, CircleX, RotateCcw, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useCurso } from "@/app/curso/CursoProvider";
import type { Licao } from "@/data/curso";

const LETRAS = ["A", "B", "C", "D"];

export function TesteLicao({ licao, proximaLicaoSlug }: { licao: Licao; proximaLicaoSlug?: string }) {
  const { concluirLicao, licaoConcluida } = useCurso();
  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [corrigido, setCorrigido] = useState(false);

  if (licaoConcluida(licao.slug)) {
    return (
      <div className="rounded-md border border-verde/30 bg-verde-claro p-6 text-center">
        <p className="flex items-center justify-center gap-2 font-bold text-verde-escuro">
          <CircleCheck className="h-5 w-5" />
          Módulo já concluído
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {proximaLicaoSlug ? (
            <Link href={`/curso/${proximaLicaoSlug}`} className={buttonVariants({})}>
              Próximo módulo
            </Link>
          ) : (
            <Link href="/curso" className={buttonVariants({})}>
              Ver seu progresso
            </Link>
          )}
        </div>
      </div>
    );
  }

  const todasRespondidas = licao.perguntas.every((_, indice) => respostas[indice] !== undefined);
  const acertos = licao.perguntas.filter((pergunta, indice) => respostas[indice] === pergunta.respostaCorreta).length;
  const passou = acertos >= Math.ceil(licao.perguntas.length * 0.6);

  function verificar() {
    setCorrigido(true);
    if (passou) concluirLicao(licao.slug);
  }

  function tentarNovamente() {
    setRespostas({});
    setCorrigido(false);
  }

  return (
    <div className="rounded-md border border-cinza-borda bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-lg font-bold text-azul-escuro">Verificação de aprendizagem</h2>
      <p className="mt-1 text-sm text-cinza-medio">Responda as perguntas para concluir este módulo.</p>

      <div className="mt-5 space-y-6">
        {licao.perguntas.map((pergunta, indicePergunta) => (
          <div key={indicePergunta}>
            <p className="font-semibold text-azul-escuro">
              {indicePergunta + 1}. {pergunta.pergunta}
            </p>
            <RadioGroupPrimitive.Root
              value={respostas[indicePergunta] !== undefined ? String(respostas[indicePergunta]) : undefined}
              onValueChange={(valor) =>
                setRespostas((atual) => ({ ...atual, [indicePergunta]: Number(valor) }))
              }
              disabled={corrigido}
              aria-label={pergunta.pergunta}
              className="mt-3 space-y-2"
            >
              {pergunta.opcoes.map((opcao, indiceOpcao) => {
                const selecionada = respostas[indicePergunta] === indiceOpcao;
                const ehCorreta = corrigido && indiceOpcao === pergunta.respostaCorreta;
                const ehEscolhaErrada = corrigido && selecionada && indiceOpcao !== pergunta.respostaCorreta;
                return (
                  <RadioGroupPrimitive.Item
                    key={opcao}
                    value={String(indiceOpcao)}
                    className={`flex w-full items-center gap-3 rounded-md border-2 p-3 text-left text-sm font-medium transition-colors enabled:hover:border-azul/40 disabled:cursor-default ${
                      ehCorreta
                        ? "border-verde bg-verde-claro text-verde-escuro"
                        : ehEscolhaErrada
                          ? "border-vermelho bg-red-50 text-vermelho"
                          : selecionada
                            ? "border-azul bg-azul-claro/40 text-azul-escuro"
                            : "border-cinza-borda bg-white text-cinza-texto"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        ehCorreta
                          ? "bg-verde text-white"
                          : ehEscolhaErrada
                            ? "bg-vermelho text-white"
                            : selecionada
                              ? "bg-azul text-white"
                              : "bg-cinza-fundo text-cinza-medio"
                      }`}
                    >
                      {LETRAS[indiceOpcao]}
                    </span>
                    <span className="flex-1">{opcao}</span>
                    {ehCorreta && <CircleCheck className="h-5 w-5 shrink-0" />}
                    {ehEscolhaErrada && <CircleX className="h-5 w-5 shrink-0" />}
                  </RadioGroupPrimitive.Item>
                );
              })}
            </RadioGroupPrimitive.Root>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!corrigido ? (
          <motion.div key="botao" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Button type="button" className="mt-6" disabled={!todasRespondidas} onClick={verificar}>
              Verificar respostas
            </Button>
          </motion.div>
        ) : passou ? (
          <motion.div
            key="passou"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-md border border-verde/30 bg-verde-claro p-4"
          >
            <p className="flex items-center gap-2 font-bold text-verde-escuro">
              <CircleCheck className="h-5 w-5" />
              Muito bem! Você acertou {acertos} de {licao.perguntas.length}.
            </p>
            <p className="mt-1 text-sm text-cinza-texto">Módulo concluído.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {proximaLicaoSlug ? (
                <Link href={`/curso/${proximaLicaoSlug}`} className={buttonVariants({ className: "gap-1.5" })}>
                  Próximo módulo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link href="/curso" className={buttonVariants({})}>
                  Ver seu progresso
                </Link>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="repetir"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-md border border-vermelho/30 bg-red-50 p-4"
          >
            <p className="flex items-center gap-2 font-bold text-vermelho">
              <CircleX className="h-5 w-5" />
              Você acertou {acertos} de {licao.perguntas.length}. Dá para revisar o módulo e tentar de novo.
            </p>
            <Button type="button" variant="outline" className="mt-3 gap-1.5" onClick={tentarNovamente}>
              <RotateCcw className="h-4 w-4" />
              Tentar novamente
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
