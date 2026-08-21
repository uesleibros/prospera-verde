import type { Material } from "@/data/materiais";
import { Check, X } from "lucide-react";
import { LixeiraIcon } from "@/components/icons/LixeiraIcon";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function GuiaMaterial({ material }: { material: Material }) {
  return (
    <AccordionItem value={material.id} id={material.id} className="scroll-mt-32">
      <AccordionTrigger>
        <LixeiraIcon cor={material.corHex} className="h-14 w-11 shrink-0" />
        <span className="flex-1">
          <span className="flex items-center gap-1.5 text-base font-bold text-azul-escuro">
            <span aria-hidden="true">{material.icone}</span>
            {material.nome}
          </span>
          <span className="mt-0.5 block text-xs text-cinza-medio">Lixeira {material.corNome}</span>
        </span>
      </AccordionTrigger>

      <AccordionContent>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-md bg-verde-claro/50 p-4">
            <h3 className="flex items-center gap-1.5 text-sm font-bold text-verde-escuro">
              <Check className="h-4 w-4" />
              O que pode descartar
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-cinza-texto">
              {material.oQuePode.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-verde-escuro" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md bg-red-50 p-4">
            <h3 className="flex items-center gap-1.5 text-sm font-bold text-vermelho">
              <X className="h-4 w-4" />
              O que não pode descartar
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-cinza-texto">
              {material.oQueNaoPode.map((item) => (
                <li key={item} className="flex gap-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-vermelho" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-bold text-azul-escuro">Como preparar antes de descartar</h3>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-cinza-texto">
              {material.comoPreparar.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className="rounded-md bg-cinza-fundo p-4">
              <h3 className="text-sm font-bold text-azul-escuro">Tempo de decomposição</h3>
              <p className="mt-1 text-sm leading-relaxed text-cinza-texto">{material.tempoDecomposicao}</p>
            </div>
            <div className="rounded-md bg-amarelo/15 p-4">
              <h3 className="text-sm font-bold text-amarelo-escuro">Você sabia?</h3>
              <p className="mt-1 text-sm leading-relaxed text-cinza-texto">{material.curiosidade}</p>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
