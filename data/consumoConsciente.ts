export type CenarioConsumo = {
  id: string;
  situacao: string;
  opcaoA: { texto: string; emoji: string };
  opcaoB: { texto: string; emoji: string };
  melhorEscolha: "a" | "b";
  explicacao: string;
};

export const cenariosConsumo: CenarioConsumo[] = [
  {
    id: "sacola",
    situacao: "Você vai ao mercado municipal de Itaberaba fazer as compras da semana.",
    opcaoA: { texto: "Levar sacolas retornáveis de casa", emoji: "🧺" },
    opcaoB: { texto: "Pedir sacolinhas plásticas novas no caixa", emoji: "🛍️" },
    melhorEscolha: "a",
    explicacao: "Uma sacola retornável pode ser usada centenas de vezes, enquanto a sacolinha plástica é descartada em minutos e leva décadas para se decompor.",
  },
  {
    id: "garrafa",
    situacao: "Está calor e você precisa beber água ao longo do dia.",
    opcaoA: { texto: "Levar uma garrafa reutilizável cheia de casa", emoji: "🚰" },
    opcaoB: { texto: "Comprar uma garrafinha de plástico nova toda vez", emoji: "💧" },
    melhorEscolha: "a",
    explicacao: "Uma garrafa reutilizável evita dezenas de garrafas PET descartadas por mês. Se a garrafa for reciclável, ainda assim é melhor gastar menos plástico novo.",
  },
  {
    id: "celular",
    situacao: "Seu celular está com dois anos, funciona bem, mas saiu um modelo novo.",
    opcaoA: { texto: "Trocar de celular mesmo funcionando bem", emoji: "📱" },
    opcaoB: { texto: "Continuar usando até realmente não dar mais", emoji: "🔧" },
    melhorEscolha: "b",
    explicacao: "Trocar de eletrônico antes da hora aumenta o lixo eletrônico, um dos resíduos mais difíceis de reciclar por causa dos metais e componentes misturados.",
  },
  {
    id: "impressao",
    situacao: "Você precisa imprimir um trabalho da escola.",
    opcaoA: { texto: "Imprimir frente e verso, só o essencial", emoji: "🖨️" },
    opcaoB: { texto: "Imprimir cada página separada, com bastante espaço em branco", emoji: "📄" },
    melhorEscolha: "a",
    explicacao: "Imprimir frente e verso e revisar antes de imprimir reduz o consumo de papel pela metade ou mais, sem perder informação nenhuma.",
  },
  {
    id: "torneira",
    situacao: "Hora de escovar os dentes.",
    opcaoA: { texto: "Deixar a torneira aberta o tempo todo", emoji: "🚿" },
    opcaoB: { texto: "Fechar a torneira enquanto escova", emoji: "🚱" },
    melhorEscolha: "b",
    explicacao: "Uma torneira aberta desnecessariamente por dois minutos pode desperdiçar mais de 10 litros de água. Um hábito pequeno que faz bastante diferença.",
  },
  {
    id: "trajeto",
    situacao: "Você precisa ir até o centro de Itaberaba, um trajeto de poucos quarteirões.",
    opcaoA: { texto: "Ir a pé ou de bicicleta", emoji: "🚲" },
    opcaoB: { texto: "Pegar o carro para um trajeto curto", emoji: "🚗" },
    melhorEscolha: "a",
    explicacao: "Trajetos curtos de carro gastam combustível de forma pouco eficiente e liberam mais poluentes proporcionalmente. A pé ou de bicicleta, o impacto é praticamente zero.",
  },
  {
    id: "roupa",
    situacao: "Está na hora de comprar uma roupa nova.",
    opcaoA: { texto: "Buscar em brechó ou reaproveitar o que já tem", emoji: "👕" },
    opcaoB: { texto: "Comprar sempre roupa nova, trocando o guarda-roupa com frequência", emoji: "🛍️" },
    melhorEscolha: "a",
    explicacao: "A indústria da moda usa muita água e energia na produção. Reaproveitar roupas ou comprar de segunda mão reduz esse consumo sem gastar mais.",
  },
  {
    id: "compras",
    situacao: "Você vai fazer a compra de comida para a semana.",
    opcaoA: { texto: "Planejar as compras para não sobrar comida e estragar", emoji: "📝" },
    opcaoB: { texto: "Comprar bastante sem planejar, por via das dúvidas", emoji: "🛒" },
    melhorEscolha: "a",
    explicacao: "Comida jogada fora desperdiça também toda a água, energia e transporte usados para produzi-la. Planejar as compras evita esse desperdício duplo.",
  },
];
