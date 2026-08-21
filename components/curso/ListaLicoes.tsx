"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CircleCheck, Lock, ChevronRight, Award, Clock } from "lucide-react";
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
          <span className="text-cinza-medio">{feitas} de {total} módulos concluídos</span>
        </div>
        <Progress value={(feitas / total) * 100} className="mt-3" />
        <p className="mt-2 text-xs text-cinza-medio">
          O progresso fica salvo só durante esta visita ao site. Se você recarregar a página, precisa refazer os módulos.
        </p>
      </div>

      {tudoConcluido ? (
        <DeclaracaoConclusao licoes={licoes} />
      ) : (
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
                      <p className="text-xs font-bold uppercase tracking-wide text-cinza-medio">Módulo {licao.numero}</p>
                      <p className="font-bold text-cinza-texto">{licao.titulo}</p>
                    </div>
                    <span className="text-xs text-cinza-medio">Termine o módulo anterior</span>
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
                      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-cinza-medio">
                        Módulo {licao.numero}
                        <span className="flex items-center gap-1 font-normal normal-case text-cinza-medio">
                          <Clock className="h-3 w-3" />
                          {licao.cargaHorariaMinutos} min
                        </span>
                      </p>
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
      )}
    </div>
  );
}

function DeclaracaoConclusao({ licoes }: { licoes: Licao[] }) {
  const cargaHorariaTotal = licoes.reduce((soma, licao) => soma + licao.cargaHorariaMinutos, 0);
  const hoje = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mt-5 overflow-hidden rounded-md border-2 border-amarelo bg-white p-8 text-center"
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-amarelo" aria-hidden="true" />
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amarelo text-azul-escuro">
        <Award className="h-8 w-8" />
      </span>
      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-cinza-medio">Declaração de conclusão</p>
      <h2 className="mt-1 text-xl font-bold text-azul-escuro">Curso livre de reciclagem e sustentabilidade</h2>
      <p className="mt-3 text-sm leading-relaxed text-cinza-texto">
        Concluído em {hoje}, com os {licoes.length} módulos e carga horária total de {cargaHorariaTotal} minutos.
      </p>
      <p className="mx-auto mt-4 max-w-sm text-xs text-cinza-medio">
        Esta declaração é apenas simbólica: não é um certificado oficial nem tem validade como carga
        horária reconhecida. É só um jeito de dizer &ldquo;parabéns, você terminou&rdquo;.
      </p>
    </motion.div>
  );
}
