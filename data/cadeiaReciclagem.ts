export type EtapaCadeia = {
  id: string;
  ordem: number;
  titulo: string;
  descricao: string;
  emoji: string;
};

export const etapasCadeiaReciclagem: EtapaCadeia[] = [
  {
    id: "separacao",
    ordem: 1,
    titulo: "Separação em casa",
    descricao: "Cada morador separa o lixo por tipo: papel, plástico, vidro, metal, orgânico e rejeito.",
    emoji: "🏠",
  },
  {
    id: "coleta",
    ordem: 2,
    titulo: "Coleta seletiva",
    descricao: "Catadores da cooperativa ou um caminhão específico recolhem o material já separado.",
    emoji: "🚛",
  },
  {
    id: "triagem",
    ordem: 3,
    titulo: "Triagem na cooperativa",
    descricao: "Os cooperados separam o material por tipo e qualidade, retirando o que não pode ser reciclado.",
    emoji: "🧤",
  },
  {
    id: "prensagem",
    ordem: 4,
    titulo: "Prensagem e enfardamento",
    descricao: "O material separado é prensado e enfardado, ocupando menos espaço para o transporte.",
    emoji: "📦",
  },
  {
    id: "venda",
    ordem: 5,
    titulo: "Venda para a indústria",
    descricao: "Os fardos de material são vendidos a indústrias recicladoras, gerando renda para a cooperativa.",
    emoji: "💰",
  },
  {
    id: "transformacao",
    ordem: 6,
    titulo: "Transformação em matéria-prima",
    descricao: "A indústria derrete, tritura ou processa o material, transformando-o em matéria-prima nova.",
    emoji: "🏭",
  },
  {
    id: "produto",
    ordem: 7,
    titulo: "Fabricação de um novo produto",
    descricao: "A matéria-prima reciclada vira um produto novo, que um dia pode voltar ao ciclo de reciclagem.",
    emoji: "🔄",
  },
];
