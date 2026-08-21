"use client";

import { useEffect, useReducer, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  type DragEndEvent,
} from "@dnd-kit/core";
import { CircleCheck, CircleX, ArrowUp } from "lucide-react";
import { itensSeparacao, type ItemSeparacao } from "@/data/itensSeparacao";
import { lixeiras, type CategoriaJogo, type Lixeira } from "@/data/lixeiras";
import { LixeiraIcon } from "@/components/icons/LixeiraIcon";
import { Button } from "@/components/ui/button";
import { embaralhar } from "@/lib/embaralhar";

type Resposta = {
  item: ItemSeparacao;
  escolhidaId: CategoriaJogo;
  acertou: boolean;
};

type Estado = {
  itens: ItemSeparacao[];
  indice: number;
  respostas: Resposta[];
  escolhaAtual: CategoriaJogo | null;
  fase: "jogando" | "resultado";
};

type Acao =
  | { tipo: "RESPONDER"; categoria: CategoriaJogo }
  | { tipo: "AVANCAR" }
  | { tipo: "REINICIAR" }
  | { tipo: "EMBARALHAR" };

const ESTADO_INICIAL: Estado = {
  itens: itensSeparacao,
  indice: 0,
  respostas: [],
  escolhaAtual: null,
  fase: "jogando",
};

function reducer(estado: Estado, acao: Acao): Estado {
  switch (acao.tipo) {
    case "RESPONDER": {
      if (estado.escolhaAtual) return estado;
      const itemAtual = estado.itens[estado.indice];
      const acertou = itemAtual.categoria === acao.categoria;
      return {
        ...estado,
        escolhaAtual: acao.categoria,
        respostas: [...estado.respostas, { item: itemAtual, escolhidaId: acao.categoria, acertou }],
      };
    }
    case "AVANCAR": {
      const proximoIndice = estado.indice + 1;
      if (proximoIndice >= estado.itens.length) {
        return { ...estado, fase: "resultado" };
      }
      return { ...estado, indice: proximoIndice, escolhaAtual: null };
    }
    case "REINICIAR":
    case "EMBARALHAR":
      return { ...ESTADO_INICIAL, itens: embaralhar(itensSeparacao) };
    default:
      return estado;
  }
}

function nomeLixeira(id: CategoriaJogo) {
  return lixeiras.find((l) => l.id === id)?.nome ?? id;
}

function rolarParaTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function CartaoItem({ item }: { item: ItemSeparacao }) {
  return (
    <>
      <span className="text-5xl" aria-hidden="true">
        {item.emoji}
      </span>
      <h2 className="mt-2 text-xl font-bold text-azul-escuro">{item.nome}</h2>
    </>
  );
}

function ItemArrastavel({ item, desabilitado, tremer }: { item: ItemSeparacao; desabilitado: boolean; tremer: boolean }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: "item-atual",
    disabled: desabilitado,
  });

  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={
        tremer
          ? { opacity: 1, y: 0, scale: 1, x: [0, -10, 10, -8, 8, 0] }
          : { opacity: isDragging ? 0.35 : 1, y: 0, scale: 1, x: 0 }
      }
      exit={{ opacity: 0, y: -16, scale: 0.95 }}
      transition={tremer ? { duration: 0.45 } : { type: "spring", stiffness: 300, damping: 24 }}
      style={{ touchAction: "none" }}
      className={`flex w-48 flex-col items-center rounded-lg border-2 border-dashed border-azul/30 bg-azul-claro/40 px-6 py-6 text-center ${
        desabilitado ? "cursor-default" : "cursor-grab active:cursor-grabbing hover:border-azul/60"
      }`}
    >
      <CartaoItem item={item} />
    </motion.div>
  );
}

function ItemFlutuante({ item }: { item: ItemSeparacao }) {
  return (
    <div className="flex w-48 cursor-grabbing flex-col items-center rounded-lg border-2 border-azul bg-white px-6 py-6 text-center shadow-2xl">
      <CartaoItem item={item} />
    </div>
  );
}

function LixeiraAlvo({
  lixeira,
  respondido,
  categoriaCorreta,
  categoriaEscolhida,
}: {
  lixeira: Lixeira;
  respondido: boolean;
  categoriaCorreta: CategoriaJogo;
  categoriaEscolhida: CategoriaJogo | null;
}) {
  const { isOver, setNodeRef } = useDroppable({ id: lixeira.id, disabled: respondido });
  const ehCorreta = respondido && lixeira.id === categoriaCorreta;
  const foiEscolhida = categoriaEscolhida === lixeira.id;

  return (
    <motion.div
      ref={setNodeRef}
      animate={{ scale: isOver ? 1.08 : ehCorreta ? [1, 1.15, 1] : 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`flex flex-col items-center gap-1.5 rounded-lg border-2 bg-white p-3 ${
        ehCorreta
          ? "border-verde-escuro ring-2 ring-verde-escuro"
          : foiEscolhida
            ? "border-vermelho ring-2 ring-vermelho"
            : isOver
              ? "border-azul ring-2 ring-azul"
              : "border-cinza-borda"
      }`}
    >
      <LixeiraIcon cor={lixeira.corHex} className="h-20 w-16 sm:h-24 sm:w-20" />
      <span className="text-xs font-bold text-azul-escuro sm:text-sm">{lixeira.nome}</span>
    </motion.div>
  );
}

export function JogoSeparacao() {
  const [estado, dispatch] = useReducer(reducer, ESTADO_INICIAL);
  const [arrastando, setArrastando] = useState(false);
  const total = estado.itens.length;
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor)
  );

  useEffect(() => {
    dispatch({ tipo: "EMBARALHAR" });
  }, []);

  function aoIniciarArraste() {
    setArrastando(true);
  }

  function aoTerminarArraste(evento: DragEndEvent) {
    setArrastando(false);
    if (!evento.over) return;
    dispatch({ tipo: "RESPONDER", categoria: evento.over.id as CategoriaJogo });
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
    const acertos = estado.respostas.filter((r) => r.acertou).length;
    const erros = estado.respostas.filter((r) => !r.acertou);
    const percentual = Math.round((acertos / total) * 100);

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
          <p className="mt-1 text-cinza-medio">Você acertou {percentual}% dos itens.</p>
          <Button type="button" size="lg" className="mt-5" onClick={reiniciar}>
            Jogar novamente
          </Button>
        </div>

        {erros.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-lg font-bold text-azul-escuro">Itens para revisar</h2>
            <ul className="mt-4 space-y-3">
              {erros.map((resposta, indice) => (
                <motion.li
                  key={resposta.item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: indice * 0.05 }}
                  className="rounded-md border border-vermelho/30 bg-red-50 p-4"
                >
                  <p className="flex items-center gap-2 font-semibold text-azul-escuro">
                    <span aria-hidden="true">{resposta.item.emoji}</span>
                    {resposta.item.nome}
                  </p>
                  <p className="mt-1 text-sm text-cinza-texto">
                    Você escolheu <strong>{nomeLixeira(resposta.escolhidaId)}</strong>, mas o certo era{" "}
                    <strong>{nomeLixeira(resposta.item.categoria)}</strong>.
                  </p>
                  <p className="mt-1 text-sm text-cinza-medio">{resposta.item.explicacao}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-8 text-center font-semibold text-verde-escuro">
            Você acertou todos os itens! Parabéns.
          </p>
        )}
      </motion.div>
    );
  }

  const itemAtual = estado.itens[estado.indice];
  const respostaAtual = estado.respostas[estado.respostas.length - 1];
  const respondido = estado.escolhaAtual !== null;
  const acertos = estado.respostas.filter((r) => r.acertou).length;
  const errou = respondido && respostaAtual && !respostaAtual.acertou;

  return (
    <div className="rounded-md border border-cinza-borda bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between text-sm text-cinza-medio">
        <span>
          Item {estado.indice + 1} de {total}
        </span>
        <span>Acertos: {acertos}</span>
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-cinza-fundo">
        <motion.div
          className="h-1.5 rounded-full bg-verde"
          animate={{ width: `${(estado.indice / total) * 100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>

      <DndContext id="jogo-separacao" sensors={sensors} onDragStart={aoIniciarArraste} onDragEnd={aoTerminarArraste}>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {lixeiras.map((lixeira) => (
            <LixeiraAlvo
              key={lixeira.id}
              lixeira={lixeira}
              respondido={respondido}
              categoriaCorreta={itemAtual.categoria}
              categoriaEscolhida={estado.escolhaAtual}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-col items-center gap-1 text-azul">
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
          <p className="text-center text-xs font-semibold">
            Arraste o item até a lixeira certa (ou pressione Tab, espaço e as setas do teclado)
          </p>
        </div>

        <div className="mt-3 flex justify-center">
          <AnimatePresence mode="wait">
            <ItemArrastavel key={itemAtual.id} item={itemAtual} desabilitado={respondido} tremer={Boolean(errou)} />
          </AnimatePresence>
        </div>

        <DragOverlay dropAnimation={null}>
          {arrastando ? <ItemFlutuante item={itemAtual} /> : null}
        </DragOverlay>
      </DndContext>

      <AnimatePresence>
        {respondido && respostaAtual && (
          <motion.div
            initial={{ opacity: 0, y: 12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="status"
            aria-live="polite"
            className={`mt-6 overflow-hidden rounded-md border p-4 ${
              respostaAtual.acertou ? "border-verde/30 bg-verde-claro" : "border-vermelho/30 bg-red-50"
            }`}
          >
            <p className="flex items-center gap-2 font-bold">
              {respostaAtual.acertou ? (
                <>
                  <CircleCheck className="h-5 w-5 text-verde-escuro" />
                  <span className="text-verde-escuro">Isso mesmo!</span>
                </>
              ) : (
                <>
                  <CircleX className="h-5 w-5 text-vermelho" />
                  <span className="text-vermelho">
                    Quase, o correto era a lixeira de {nomeLixeira(itemAtual.categoria)}.
                  </span>
                </>
              )}
            </p>
            <p className="mt-1.5 text-sm text-cinza-texto">{itemAtual.explicacao}</p>
            <Button type="button" className="mt-4" onClick={avancar}>
              {estado.indice + 1 >= total ? "Ver resultado" : "Próximo item"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
