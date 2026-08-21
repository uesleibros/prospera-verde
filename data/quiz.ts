export type PerguntaQuiz = {
  id: string;
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
  explicacao: string;
};

export const perguntasQuiz: PerguntaQuiz[] = [
  {
    id: "cor-papel",
    pergunta: "Qual é a cor de lixeira destinada ao papel na coleta seletiva?",
    opcoes: ["Azul", "Vermelho", "Verde", "Amarelo"],
    respostaCorreta: 0,
    explicacao: "O azul representa o papel na coleta seletiva. Cada cor identifica um tipo de material, facilitando a separação.",
  },
  {
    id: "oleo-cozinha",
    pergunta: "O que deve ser feito com o óleo de cozinha já usado?",
    opcoes: [
      "Jogar na pia da cozinha",
      "Jogar no vaso sanitário",
      "Guardar em garrafa fechada e levar a um ponto de coleta",
      "Misturar com o lixo orgânico",
    ],
    respostaCorreta: 2,
    explicacao: "Um litro de óleo pode contaminar milhares de litros de água. Por isso, deve ser guardado em garrafa fechada e levado a um ponto de coleta.",
  },
  {
    id: "tempo-plastico",
    pergunta: "Aproximadamente quanto tempo uma garrafa plástica leva para se decompor na natureza?",
    opcoes: ["Alguns dias", "Cerca de 6 meses", "Mais de 100 anos", "Não é descartada"],
    respostaCorreta: 2,
    explicacao: "O plástico pode levar mais de 100 anos para se decompor, podendo passar de 400 anos dependendo do tipo.",
  },
  {
    id: "divisao-renda",
    pergunta: "Em uma cooperativa de reciclagem, como costuma ser dividida a renda entre os cooperados?",
    opcoes: [
      "Somente a diretoria recebe",
      "De forma justa, combinada entre os cooperados em assembleia",
      "É repassada inteiramente para o governo",
      "É dividida por sorteio mensal",
    ],
    respostaCorreta: 1,
    explicacao: "Nas cooperativas, as decisões sobre a divisão da renda são tomadas coletivamente pelos cooperados, um dos princípios do cooperativismo.",
  },
  {
    id: "pilhas-baterias",
    pergunta: "Pilhas e baterias usadas devem ser descartadas:",
    opcoes: ["No lixo comum", "Na lixeira de metal", "Em pontos de coleta especializados", "Enterradas no quintal"],
    respostaCorreta: 2,
    explicacao: "Pilhas e baterias contêm metais pesados que contaminam o solo e a água, por isso precisam de coleta especializada.",
  },
  {
    id: "o-que-e-rejeito",
    pergunta: "O que é \"rejeito\", no contexto da coleta de lixo?",
    opcoes: [
      "Material muito valioso para a reciclagem",
      "O que não pode ser reciclado nem compostado",
      "Apenas restos de comida",
      "Papel já utilizado",
    ],
    respostaCorreta: 1,
    explicacao: "Rejeito é tudo aquilo que não tem outro destino além do aterro sanitário, pois não pode ser reciclado nem compostado.",
  },
  {
    id: "vidro-infinito",
    pergunta: "Por que o vidro pode ser reciclado praticamente sem limites?",
    opcoes: ["Porque é leve", "Porque derrete em qualquer temperatura", "Porque não perde qualidade ao ser reciclado", "Porque não polui"],
    respostaCorreta: 2,
    explicacao: "O vidro pode ser reciclado repetidamente sem perder suas propriedades, ao contrário de outros materiais.",
  },
  {
    id: "residuo-organico",
    pergunta: "Qual desses materiais é considerado resíduo orgânico?",
    opcoes: ["Casca de banana", "Copo plástico", "Lata de alumínio", "Pilha"],
    respostaCorreta: 0,
    explicacao: "Cascas de fruta e restos de alimentos são resíduos orgânicos, ideais para compostagem.",
  },
  {
    id: "reduzir-consumo",
    pergunta: "Qual é a forma mais eficaz de reduzir a quantidade de lixo que produzimos?",
    opcoes: [
      "Reciclar tudo depois de usar",
      "Comprar mais produtos descartáveis",
      "Reduzir o consumo, repensando o que compramos",
      "Queimar o lixo em casa",
    ],
    respostaCorreta: 2,
    explicacao: "Dos 3 Rs (Reduzir, Reutilizar e Reciclar), reduzir o consumo é o passo mais eficaz, pois evita que o resíduo seja gerado.",
  },
  {
    id: "preparo-embalagens",
    pergunta: "Antes de descartar embalagens recicláveis sujas de alimento, o que deve ser feito?",
    opcoes: [
      "Nada, pode descartar do jeito que está",
      "Enxaguar rapidamente para retirar restos de comida",
      "Guardar suja para facilitar a identificação",
      "Queimar antes de descartar",
    ],
    respostaCorreta: 1,
    explicacao: "Enxaguar rapidamente as embalagens evita mau cheiro, contaminação de outros materiais e facilita o trabalho de quem faz a triagem.",
  },
];
