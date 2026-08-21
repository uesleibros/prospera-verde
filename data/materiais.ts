export type Material = {
  id: string;
  nome: string;
  icone: string;
  corNome: string;
  corHex: string;
  corClasse: string;
  temColetaEspecial: boolean;
  oQuePode: string[];
  oQueNaoPode: string[];
  comoPreparar: string[];
  tempoDecomposicao: string;
  curiosidade: string;
};

export const materiais: Material[] = [
  {
    id: "papel",
    nome: "Papel e papelão",
    icone: "📄",
    corNome: "Azul",
    corHex: "#1351b4",
    corClasse: "bg-azul",
    temColetaEspecial: false,
    oQuePode: [
      "Jornais e revistas",
      "Folhas de caderno e escritório",
      "Caixas de papelão",
      "Envelopes e cartolina",
      "Listas telefônicas e catálogos",
    ],
    oQueNaoPode: [
      "Papel higiênico ou guardanapo usado",
      "Papel carbono",
      "Fotografias reveladas",
      "Papéis plastificados ou metalizados",
      "Caixa de pizza encharcada de gordura",
    ],
    comoPreparar: [
      "Retire clipes, grampos e fitas adesivas sempre que possível",
      "Mantenha o papel seco",
      "Desmonte e achate caixas de papelão para ocupar menos espaço",
    ],
    tempoDecomposicao: "cerca de 3 a 6 meses",
    curiosidade: "Reciclar uma tonelada de papel pode evitar o corte de cerca de 20 árvores.",
  },
  {
    id: "plastico",
    nome: "Plástico",
    icone: "🥤",
    corNome: "Vermelho",
    corHex: "#b31e1e",
    corClasse: "bg-vermelho",
    temColetaEspecial: false,
    oQuePode: [
      "Garrafas PET",
      "Embalagens de produtos de limpeza e higiene",
      "Potes e tampas plásticas",
      "Sacolas e sacos plásticos limpos",
      "Copos e canudos descartáveis",
    ],
    oQueNaoPode: [
      "Plásticos muito sujos de alimento ou óleo",
      "Esponjas de aço",
      "Adesivos, fitas e etiquetas soltas",
      "Brinquedos com muitos materiais misturados",
    ],
    comoPreparar: [
      "Esvazie e enxágue rapidamente as embalagens",
      "Amasse garrafas PET para reduzir o volume",
      "Pode descartar a tampa junto ou separada, as duas são recicláveis",
    ],
    tempoDecomposicao: "mais de 100 anos, podendo passar de 400 anos dependendo do tipo",
    curiosidade: "O plástico é um dos materiais mais valorizados pelas cooperativas de reciclagem.",
  },
  {
    id: "vidro",
    nome: "Vidro",
    icone: "🍾",
    corNome: "Verde",
    corHex: "#168821",
    corClasse: "bg-verde",
    temColetaEspecial: false,
    oQuePode: [
      "Garrafas",
      "Potes de conserva",
      "Frascos de perfume",
      "Copos comuns",
    ],
    oQueNaoPode: [
      "Espelhos e vidros de janela quebrados",
      "Lâmpadas",
      "Cerâmica e porcelana",
      "Óculos e tubos de vidro especial",
    ],
    comoPreparar: [
      "Enxágue para retirar restos de alimento",
      "Não é preciso remover os rótulos",
      "Embrulhe cacos quebrados em papel e sinalize \"vidro\" antes de descartar",
    ],
    tempoDecomposicao: "tempo indeterminado, pode levar milhares de anos e praticamente não se decompõe",
    curiosidade: "O vidro pode ser reciclado infinitas vezes sem perder qualidade.",
  },
  {
    id: "metal",
    nome: "Metal",
    icone: "🥫",
    corNome: "Amarelo",
    corHex: "#ffcd07",
    corClasse: "bg-amarelo",
    temColetaEspecial: false,
    oQuePode: [
      "Latas de alumínio e de aço",
      "Tampas metálicas",
      "Arames e panelas sem cabo",
      "Papel alumínio limpo",
    ],
    oQueNaoPode: [
      "Latas de tinta ou produtos químicos",
      "Aerossóis com resíduo do produto",
      "Esponjas de aço muito enferrujadas",
    ],
    comoPreparar: [
      "Lave as latas para remover restos de comida",
      "Amasse latas de alumínio para economizar espaço",
    ],
    tempoDecomposicao: "cerca de 200 a 500 anos (alumínio) e até 100 anos (aço)",
    curiosidade: "Reciclar alumínio consome até 95% menos energia do que produzir alumínio novo.",
  },
  {
    id: "organico",
    nome: "Orgânico",
    icone: "🍌",
    corNome: "Marrom",
    corHex: "#7a4a1f",
    corClasse: "bg-marrom",
    temColetaEspecial: false,
    oQuePode: [
      "Cascas e restos de frutas, verduras e legumes",
      "Borra de café e saquinhos de chá",
      "Cascas de ovo",
      "Folhas e podas de jardim",
    ],
    oQueNaoPode: [
      "Guardanapos muito sujos de gordura",
      "Grandes quantidades de carne e laticínios em compostagem doméstica simples",
      "Fezes de animais",
    ],
    comoPreparar: [
      "Separe em um recipiente próprio, de preferência com tampa",
      "Sempre que possível, destine à compostagem doméstica ou comunitária",
    ],
    tempoDecomposicao: "algumas semanas a poucos meses",
    curiosidade: "O composto gerado a partir de resíduos orgânicos pode virar adubo para hortas e jardins.",
  },
  {
    id: "rejeito",
    nome: "Rejeito",
    icone: "🗑️",
    corNome: "Cinza",
    corHex: "#6b6b6b",
    corClasse: "bg-cinza-lixeira",
    temColetaEspecial: false,
    oQuePode: [
      "Papel higiênico e guardanapos usados",
      "Fraldas descartáveis e absorventes",
      "Cotonetes",
      "Embalagens muito sujas, sem possibilidade de limpeza",
      "Cerâmica e isopor sujo",
    ],
    oQueNaoPode: [
      "Materiais recicláveis limpos, que devem ir para a coleta seletiva",
      "Pilhas, baterias e eletrônicos",
      "Óleo de cozinha",
      "Remédios vencidos",
    ],
    comoPreparar: [
      "Embale com segurança objetos cortantes ou perfurantes",
      "Reduza o volume sempre que possível",
    ],
    tempoDecomposicao: "varia muito conforme o item, podendo levar centenas de anos",
    curiosidade: "Rejeito é tudo o que não pode ser reciclado nem compostado, por isso reduzir o consumo é tão importante.",
  },
  {
    id: "eletronico",
    nome: "Eletrônico",
    icone: "🔌",
    corNome: "Laranja",
    corHex: "#d2691e",
    corClasse: "bg-laranja",
    temColetaEspecial: true,
    oQuePode: [
      "Celulares, carregadores e cabos antigos",
      "Pequenos eletrodomésticos",
      "Lâmpadas fluorescentes e LED",
      "Computadores e periféricos",
    ],
    oQueNaoPode: [
      "Misturar com o lixo comum",
      "Misturar com os recicláveis da coleta seletiva de rua",
    ],
    comoPreparar: [
      "Não desmonte o aparelho",
      "Apague dados pessoais de celulares e computadores antes de descartar",
      "Leve a um ponto de coleta específico de eletrônicos",
    ],
    tempoDecomposicao: "indeterminado, contém metais pesados que contaminam o solo e a água",
    curiosidade: "O lixo eletrônico é um dos tipos de resíduo que mais cresce no mundo e exige coleta especializada.",
  },
  {
    id: "oleo",
    nome: "Óleo de cozinha",
    icone: "🛢️",
    corNome: "Sem cor padrão, ponto de coleta específico",
    corHex: "#d2691e",
    corClasse: "bg-laranja",
    temColetaEspecial: true,
    oQuePode: [
      "Óleo de fritura já usado e frio, guardado em garrafa PET fechada",
    ],
    oQueNaoPode: [
      "Nunca despeje na pia, no ralo ou no vaso sanitário",
    ],
    comoPreparar: [
      "Espere o óleo esfriar completamente",
      "Use um funil para colocar em uma garrafa PET limpa e seca",
      "Feche bem a tampa e leve a um ponto de coleta",
    ],
    tempoDecomposicao: "não se decompõe na água, um litro de óleo pode contaminar milhares de litros de água",
    curiosidade: "O óleo usado pode virar sabão e até biodiesel depois de reciclado.",
  },
  {
    id: "pilha",
    nome: "Pilhas e baterias",
    icone: "🔋",
    corNome: "Laranja, ponto de coleta específico",
    corHex: "#d2691e",
    corClasse: "bg-laranja",
    temColetaEspecial: true,
    oQuePode: [
      "Pilhas comuns e alcalinas",
      "Baterias de celular, notebook e outros aparelhos",
    ],
    oQueNaoPode: [
      "Descartar no lixo comum",
      "Descartar na coleta seletiva de rua",
    ],
    comoPreparar: [
      "Não abra, fure ou queime pilhas e baterias",
      "Guarde em local seco até levar a um ponto de coleta",
    ],
    tempoDecomposicao: "indeterminado, os metais pesados podem levar centenas de anos para se degradar",
    curiosidade: "Uma única pilha descartada incorretamente pode contaminar milhares de litros de água.",
  },
  {
    id: "tetrapak",
    nome: "Embalagem longa vida (Tetra Pak)",
    icone: "🧃",
    corNome: "Laranja, coleta específica em muitos municípios",
    corHex: "#d2691e",
    corClasse: "bg-laranja",
    temColetaEspecial: true,
    oQuePode: [
      "Caixinhas de leite, suco e outros alimentos",
      "Embalagens limpas e secas, mesmo amassadas",
    ],
    oQueNaoPode: [
      "Embalagens com muito resíduo de alimento por dentro",
      "Misturar com papel comum sem confirmar se a coleta da sua cidade aceita",
    ],
    comoPreparar: [
      "Enxágue rapidamente para tirar o excesso de líquido",
      "Achate a embalagem para ocupar menos espaço",
      "Confirme se o ponto de coleta da sua região recebe esse material, já que a regra varia de cidade para cidade",
    ],
    tempoDecomposicao: "mais de 100 anos, pois mistura papel, plástico e alumínio em camadas difíceis de separar",
    curiosidade: "A embalagem longa vida tem seis camadas de materiais diferentes, por isso o processo de reciclagem é mais complexo que o do papel comum.",
  },
  {
    id: "isopor",
    nome: "Isopor (poliestireno expandido)",
    icone: "📦",
    corNome: "Laranja, coleta específica",
    corHex: "#d2691e",
    corClasse: "bg-laranja",
    temColetaEspecial: true,
    oQuePode: [
      "Embalagens e caixas de isopor limpas",
      "Bandejas de isopor sem resto de alimento",
    ],
    oQueNaoPode: [
      "Isopor sujo de comida ou gordura",
      "Descartar junto com o plástico comum na coleta seletiva de rua, na maioria das cidades",
    ],
    comoPreparar: [
      "Limpe bem antes de descartar",
      "Quebre em pedaços menores para ocupar menos espaço",
      "Procure um ponto de coleta específico, já que a maioria dos serviços de coleta seletiva não aceita isopor junto dos outros plásticos",
    ],
    tempoDecomposicao: "indeterminado, pode levar mais de 150 anos e se fragmenta em pedaços muito pequenos",
    curiosidade: "O isopor é feito majoritariamente de ar (cerca de 95% do volume), por isso ocupa muito espaço no lixo mesmo pesando pouco.",
  },
  {
    id: "medicamentos",
    nome: "Medicamentos vencidos",
    icone: "💊",
    corNome: "Laranja, devolução em farmácias e postos de saúde",
    corHex: "#d2691e",
    corClasse: "bg-laranja",
    temColetaEspecial: true,
    oQuePode: [
      "Remédios vencidos ou que sobraram de um tratamento",
      "Caixas e bulas, que podem ir para o papel separadamente",
    ],
    oQueNaoPode: [
      "Jogar no lixo comum ou na privada",
      "Doar remédios vencidos para outras pessoas",
    ],
    comoPreparar: [
      "Mantenha o remédio na embalagem original, se possível",
      "Leve a uma farmácia, posto de saúde (UBS) ou ponto de coleta específico",
    ],
    tempoDecomposicao: "não se decompõe como lixo comum, contamina o solo e a água e pode ser tóxico para animais",
    curiosidade: "Muitas farmácias e postos de saúde têm coletores próprios para medicamentos vencidos, é só perguntar no balcão.",
  },
];
