import { materiais } from "@/data/materiais";
import { licoesCurso } from "@/data/curso";
import { perguntasQuiz } from "@/data/quiz";

export type ItemBusca = {
  titulo: string;
  descricao: string;
  href: string;
  categoria: string;
};

const PAGINAS: ItemBusca[] = [
  { titulo: "Início", descricao: "Página inicial da Próspera Verde", href: "/", categoria: "Página" },
  { titulo: "Sobre a cooperativa", descricao: "Missão, objetivo e princípios do cooperativismo", href: "/sobre", categoria: "Página" },
  { titulo: "Como reciclar", descricao: "Guia por tipo de material", href: "/como-reciclar", categoria: "Página" },
  { titulo: "Curso de reciclagem", descricao: "Curso livre em 4 módulos, com verificação de aprendizagem", href: "/curso", categoria: "Página" },
  { titulo: "Pontos de coleta", descricao: "Onde entregar cada material em Itaberaba", href: "/pontos-de-coleta", categoria: "Página" },
  { titulo: "Simulações", descricao: "Jogos e simuladores interativos", href: "/simulacoes", categoria: "Página" },
  { titulo: "Jogo da separação", descricao: "Arraste os itens até a lixeira certa", href: "/simulacoes/jogo-da-separacao", categoria: "Simulação" },
  { titulo: "Simulador de impacto ambiental", descricao: "Água, energia, árvores e CO2 economizados", href: "/simulacoes/impacto-ambiental", categoria: "Simulação" },
  { titulo: "Linha do tempo de decomposição", descricao: "Quanto tempo cada material leva para se decompor", href: "/simulacoes/linha-do-tempo", categoria: "Simulação" },
  { titulo: "Quiz de reciclagem", descricao: `${perguntasQuiz.length} perguntas sobre reciclagem`, href: "/simulacoes/quiz", categoria: "Simulação" },
  { titulo: "Simulador da cooperativa", descricao: "Como é calculada a renda dos cooperados", href: "/simulacoes/cooperativa", categoria: "Simulação" },
  { titulo: "Jogo da memória", descricao: "Combine cada item com a lixeira certa no menor número de tentativas", href: "/simulacoes/jogo-da-memoria", categoria: "Simulação" },
  { titulo: "Simulador de consumo consciente", descricao: "Escolha entre duas opções em situações do dia a dia e veja o impacto de cada uma", href: "/simulacoes/consumo-consciente", categoria: "Simulação" },
  { titulo: "Cadeia de reciclagem", descricao: "Coloque em ordem as etapas reais da cadeia de reciclagem, da separação em casa até virar um produto novo", href: "/simulacoes/cadeia-de-reciclagem", categoria: "Simulação" },
];

const MATERIAIS_BUSCA: ItemBusca[] = materiais.map((material) => ({
  titulo: material.nome,
  descricao: `Lixeira ${material.corNome.toLowerCase()}: o que pode, o que não pode e tempo de decomposição`,
  href: `/como-reciclar#${material.id}`,
  categoria: "Material",
}));

const LICOES_BUSCA: ItemBusca[] = licoesCurso.map((licao) => ({
  titulo: `Módulo ${licao.numero}: ${licao.titulo}`,
  descricao: licao.resumo,
  href: `/curso/${licao.slug}`,
  categoria: "Curso",
}));

export const indiceBusca: ItemBusca[] = [...PAGINAS, ...MATERIAIS_BUSCA, ...LICOES_BUSCA];

export function buscar(termo: string, limite = 6): ItemBusca[] {
  const alvo = termo.trim().toLowerCase();
  if (!alvo) return [];
  return indiceBusca
    .filter(
      (item) =>
        item.titulo.toLowerCase().includes(alvo) ||
        item.descricao.toLowerCase().includes(alvo) ||
        item.categoria.toLowerCase().includes(alvo)
    )
    .slice(0, limite);
}
