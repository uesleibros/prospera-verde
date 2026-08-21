"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CircleCheck, Lock, ChevronRight, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Reveal } from "@/components/ui/reveal";
import { useCurso } from "@/app/curso/CursoProvider";
import type { Licao } from "@/data/curso";

export function ListaLicoes({ licoes }: { licoes: Licao[] }) {
  const { concluidas, licaoConcluida } = useCurso();
  const total = licoes.length;
  const feitas = concluidas.length;
  const tudoConcluido = feitas === total;

  return (
    <div>
      <div className="rounded-md border border-cinza-borda bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between text-sm">
          <span className="font-bold text-azul-escuro">Seu progresso</span>
          <span className="text-cinza-medio">{feitas} de {total} lições concluídas</span>
        </div>
        <Progress value={(feitas / total) * 100} className="mt-3" />
        <p className="mt-2 text-xs text-cinza-medio">
          O progresso fica salvo só durante esta visita ao site. Se você recarregar a página, precisa refazer as lições.
        </p>
      </div>

      {tudoConcluido && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 flex flex-col items-center gap-2 rounded-md border border-amarelo bg-amarelo/15 p-6 text-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amarelo text-azul-escuro">
            <Award className="h-7 w-7" />
          </span>
          <h2 className="text-lg font-bold text-azul-escuro">Curso concluído!</h2>
          <p className="max-w-md text-sm text-cinza-texto">
            Você terminou as 4 lições do curso de reciclagem da Próspera Verde. Não é um certificado oficial, mas o conhecimento é todo seu.
          </p>
        </motion.div>
      )}

      <ol className="mt-5 space-y-3">
        {licoes.map((licao, indice) => {
          const concluida = licaoConcluida(licao.slug);
          const anteriorConcluida = indice === 0 || licaoConcluida(licoes[indice - 1].slug);
          const bloqueada = !anteriorConcluida && !concluida;

          return (
            <Reveal key={licao.slug} delay={indice * 0.05} y={10}>
              {bloqueada ? (
                <div className="flex items-center gap-4 rounded-md border border-cinza-borda bg-cinza-fundo p-4 opacity-70">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-cinza-medio">
                    <Lock className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-cinza-medio">Lição {licao.numero}</p>
                    <p className="font-bold text-cinza-texto">{licao.titulo}</p>
                  </div>
                  <span className="text-xs text-cinza-medio">Termine a lição anterior</span>
                </div>
              ) : (
                <Link
                  href={`/curso/${licao.slug}`}
                  className="flex items-center gap-4 rounded-md border border-cinza-borda bg-white p-4 shadow-sm transition-colors hover:border-azul/40"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      concluida ? "bg-verde text-white" : "bg-azul-claro text-azul"
                    }`}
                  >
                    {concluida ? <CircleCheck className="h-5 w-5" /> : <span className="text-sm font-bold">{licao.numero}</span>}
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-cinza-medio">Lição {licao.numero}</p>
                    <p className="font-bold text-azul-escuro">{licao.titulo}</p>
                    <p className="mt-0.5 text-sm text-cinza-medio">{licao.resumo}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-cinza-medio" />
                </Link>
              )}
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
