"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { itensDecomposicao } from "@/data/decomposicao";
import { materiais } from "@/data/materiais";

const itensOrdenados = [...itensDecomposicao].sort((a, b) => a.anosAprox - b.anosAprox);
const maiorValor = Math.max(...itensDecomposicao.map((item) => item.anosAprox));

function corDoItem(categoria: string) {
  return materiais.find((m) => m.id === categoria)?.corClasse ?? "bg-cinza-lixeira";
}

function calcularLargura(anos: number) {
  const percentual = (Math.log10(anos + 1) / Math.log10(maiorValor + 1)) * 100;
  return Math.max(2, percentual);
}

export function LinhaDoTempo() {
  const [selecionadoId, setSelecionadoId] = useState(itensOrdenados[0].id);
  const selecionado = itensDecomposicao.find((item) => item.id === selecionadoId)!;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold text-azul-escuro">Escolha um material</h2>
        <div
          role="radiogroup"
          aria-label="Escolha um material para destacar na comparação"
          className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
        >
          {itensDecomposicao.map((item) => {
            const ativo = item.id === selecionadoId;
            return (
              <motion.button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={ativo}
                onClick={() => setSelecionadoId(item.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex flex-col items-center gap-1 rounded-md border-2 p-3 text-center text-sm font-semibold transition-colors ${
                  ativo
                    ? "border-azul bg-azul-claro text-azul-escuro"
                    : "border-cinza-borda bg-white text-cinza-texto hover:border-azul/40"
                }`}
              >
                <span className="text-2xl" aria-hidden="true">
                  {item.icone}
                </span>
                {item.nome}
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selecionado.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="rounded-md border border-cinza-borda bg-white p-6 text-center shadow-sm"
        >
          <span className={`inline-flex h-16 w-16 items-center justify-center rounded-full text-3xl ${corDoItem(selecionado.categoria)}`} aria-hidden="true">
            {selecionado.icone}
          </span>
          <h3 className="mt-2 text-xl font-bold text-azul-escuro">{selecionado.nome}</h3>
          <p className="mt-1 text-cinza-texto">
            Leva <strong>{selecionado.tempoTexto}</strong> para se decompor na natureza.
          </p>
        </motion.div>
      </AnimatePresence>

      <div>
        <h2 className="text-lg font-bold text-azul-escuro">Comparação entre materiais</h2>
        <p className="mt-1 text-sm text-cinza-medio">
          Do que decompõe mais rápido para o que demora mais (escala logarítmica).
        </p>

        <ul className="mt-5 space-y-3">
          {itensOrdenados.map((item, indice) => {
            const ativo = item.id === selecionadoId;
            return (
              <li key={item.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 text-sm">
                  <span className={`flex items-center gap-1.5 ${ativo ? "font-bold text-azul-escuro" : "text-cinza-texto"}`}>
                    <span aria-hidden="true">{item.icone}</span>
                    {item.nome}
                  </span>
                  <span className={`text-xs sm:text-sm ${ativo ? "font-bold text-azul-escuro" : "text-cinza-medio"}`}>
                    {item.tempoTexto}
                  </span>
                </div>
                <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-cinza-fundo">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${calcularLargura(item.anosAprox)}%` }}
                    transition={{ duration: 0.6, delay: indice * 0.03, ease: "easeOut" }}
                    className={`h-3 rounded-full ${corDoItem(item.categoria)} ${
                      ativo ? "ring-2 ring-azul-escuro ring-offset-1" : ""
                    }`}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
