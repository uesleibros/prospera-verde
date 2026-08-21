"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LixeiraIcon } from "@/components/icons/LixeiraIcon";
import { materiais } from "@/data/materiais";
import type { PontoDeColeta } from "@/data/pontosDeColeta";

export function PontoDeColetaCard({ ponto, atraso = 0 }: { ponto: PontoDeColeta; atraso?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: atraso }}
      className="flex h-full flex-col rounded-md border border-cinza-borda bg-white p-5 shadow-sm"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azul-claro text-azul">
          <MapPin className="h-5 w-5" />
        </span>
        <div>
          <Badge variant="secondary">{ponto.tipo}</Badge>
          <h2 className="mt-1 text-lg font-bold text-azul-escuro">{ponto.nome}</h2>
        </div>
      </div>

      <div className="mt-3 space-y-1.5 pl-[52px] text-sm text-cinza-texto">
        <p>
          {ponto.endereco}, {ponto.bairro}
        </p>
        <p className="text-cinza-medio">{ponto.horario}</p>
      </div>

      <div className="mt-auto pt-4 pl-[52px]">
        <p className="text-xs font-bold uppercase tracking-wide text-cinza-medio">Materiais aceitos</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {ponto.materiais.map((idMaterial) => {
            const material = materiais.find((m) => m.id === idMaterial);
            if (!material) return null;
            return (
              <li key={idMaterial} className="flex items-center gap-1 rounded-full border border-cinza-borda py-0.5 pl-0.5 pr-2.5 text-xs font-semibold text-cinza-texto">
                <LixeiraIcon cor={material.corHex} className="h-6 w-5" />
                {material.nome}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.article>
  );
}
