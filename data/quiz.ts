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
    id: "tempo-decomposicao-comparativo",
    pergunta: "Entre estes materiais, qual leva mais tempo para se decompor na natureza?",
    opcoes: ["Guardanapo de papel", "Copo plástico descartável", "Lata de alumínio", "Garrafa de vidro"],
    respostaCorreta: 3,
    explicacao: "O vidro é o campeão de resistência: praticamente não se decompõe, podendo levar milhares de anos ou mais, muito além do plástico ou do alumínio.",
  },
  {
    id: "cor-residuo-perigoso",
    pergunta: "Segundo o padrão de cores do Conama, qual cor identifica resíduos perigosos, como pilhas, lâmpadas e produtos químicos?",
    opcoes: ["Cinza", "Roxo", "Laranja", "Branco"],
    respostaCorreta: 2,
    explicacao: "Laranja identifica resíduos perigosos. Roxo é usado para resíduos radioativos e branco para resíduos de serviços de saúde, cores diferentes para riscos diferentes.",
  },
  {
    id: "simbolo-numero-plastico",
    pergunta: "O que indica o número de 1 a 7 dentro do símbolo triangular impresso em embalagens plásticas?",
    opcoes: [
      "O tipo de resina plástica usada na fabricação",
      "Se aquele item específico pode ou não ser reciclado",
      "A validade do produto embalado",
      "A temperatura ideal para o descarte do item",
    ],
    respostaCorreta: 0,
    explicacao: "O número identifica o tipo de resina (PET, PEAD, PVC e outras). Ele não garante reciclabilidade por si só: depende também da coleta seletiva disponível na cidade.",
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
    id: "reciclagem-papel-limite",
    pergunta: "Diferente do vidro, que pode ser reciclado quase sem limites, o papel tem um número limitado de reciclagens porque:",
    opcoes: [
      "As fibras de celulose vão encurtando e perdendo qualidade a cada novo ciclo",
      "O papel derrete em temperatura ambiente",
      "É proibido reciclar papel mais de uma vez no Brasil",
      "Não existe indústria compradora de papel reciclado",
    ],
    respostaCorreta: 0,
    explicacao: "A cada reciclagem, as fibras de celulose do papel ficam mais curtas e fracas. Depois de cerca de 5 a 7 ciclos, elas já não servem mais para formar papel novo.",
  },
  {
    id: "divisao-renda",
    pergunta: "Em uma cooperativa de reciclagem, como costuma ser dividida a renda entre os cooperados?",
    opcoes: [
      "Somente a diretoria recebe, o restante é reinvestido sem votação",
      "De forma combinada entre os cooperados, geralmente em assembleia",
      "É repassada inteiramente para a prefeitura local",
      "Cada cooperado vende para si mesmo, sem nenhuma divisão coletiva",
    ],
    respostaCorreta: 1,
    explicacao: "Nas cooperativas, as decisões sobre a divisão da renda são tomadas coletivamente pelos cooperados, um dos princípios do cooperativismo: gestão democrática.",
  },
  {
    id: "pilhas-motivo",
    pergunta: "Por que pilhas e baterias não devem ser descartadas na lixeira comum de metal, mesmo contendo metal?",
    opcoes: [
      "Porque são pequenas demais para os equipamentos da triagem",
      "Porque contêm metais pesados tóxicos que exigem tratamento especializado",
      "Porque na verdade não são feitas de metal de verdade",
      "Porque pesam muito pouco para valer a pena reciclar",
    ],
    respostaCorreta: 1,
    explicacao: "Pilhas e baterias contêm metais pesados, como chumbo, cádmio e mercúrio, que contaminam o solo e a água se descartados incorretamente. Precisam de coleta especializada.",
  },
  {
    id: "vidro-ceramica-fusao",
    pergunta: "Por que cerâmica, porcelana e espelhos quebrados não podem ir junto com o vidro na coleta seletiva?",
    opcoes: [
      "Porque têm ponto de fusão diferente e contaminam o processo de reciclagem do vidro",
      "Porque são materiais mais valiosos que o vidro comum",
      "Porque não quebram do mesmo jeito que o vidro",
      "Porque não existe demanda de mercado para cerâmica reciclada",
    ],
    respostaCorreta: 0,
    explicacao: "Cerâmica e porcelana derretem em temperaturas diferentes do vidro. Misturados, formam pontos de tensão no vidro reciclado, deixando-o fraco e sujeito a rachar.",
  },
  {
    id: "rejeito-item",
    pergunta: "Qual destes itens é considerado rejeito, ou seja, não pode ser reciclado nem compostado?",
    opcoes: ["Casca de banana", "Jornal velho", "Cotonete usado", "Lata de alumínio"],
    respostaCorreta: 2,
    explicacao: "Cotonetes misturam plástico com algodão sujo, uma combinação que não pode ser separada para reciclagem nem serve para compostagem. Por isso, é rejeito.",
  },
  {
    id: "compostagem-nao-pode",
    pergunta: "Qual destes materiais NÃO deve ir em uma composteira doméstica comum?",
    opcoes: ["Casca de laranja", "Borra de café", "Carne, laticínios e alimentos gordurosos", "Folhas secas"],
    respostaCorreta: 2,
    explicacao: "Carnes, laticínios e gordura atraem pragas, geram mau cheiro e desequilibram uma composteira doméstica simples. O ideal é restos vegetais, cascas e borra de café.",
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
  {
    id: "logistica-reversa",
    pergunta: "O que é \"logística reversa\", mecanismo previsto na lei brasileira para produtos como pilhas, pneus e eletrônicos?",
    opcoes: [
      "A devolução de embalagens e produtos pós-consumo aos fabricantes, para descarte ou reaproveitamento correto",
      "O transporte de caminhões de lixo fazendo o trajeto contrário ao habitual",
      "Um processo de reciclagem feito de trás para frente na linha de produção",
      "Um imposto cobrado sobre produtos recicláveis",
    ],
    respostaCorreta: 0,
    explicacao: "Logística reversa obriga fabricantes e importadores de certos produtos a estruturar a coleta e devolução deles após o uso, para dar um destino ambientalmente correto.",
  },
  {
    id: "pnrs-hierarquia",
    pergunta: "A Política Nacional de Resíduos Sólidos (Lei 12.305/2010) define uma ordem de prioridade para lidar com o lixo. Qual é essa ordem?",
    opcoes: [
      "Não geração, redução, reutilização, reciclagem, tratamento e, por último, disposição final adequada",
      "Reciclagem em primeiro lugar, sempre, para qualquer tipo de resíduo",
      "Incineração de tudo, seguida de reciclagem do que sobrar",
      "Aterro sanitário para todo o lixo gerado, sem outra etapa",
    ],
    respostaCorreta: 0,
    explicacao: "A lei prioriza evitar que o resíduo seja gerado, depois reduzir, reutilizar, reciclar e tratar, deixando a disposição final em aterro como último recurso.",
  },
  {
    id: "catador-cbo",
    pergunta: "Desde 2002, a profissão de catador de materiais recicláveis no Brasil:",
    opcoes: [
      "É oficialmente reconhecida na Classificação Brasileira de Ocupações (CBO)",
      "Deixou de ser permitida fora de cooperativas registradas",
      "Passou a ser reconhecida apenas em capitais de estado",
      "Nunca chegou a ser reconhecida oficialmente",
    ],
    respostaCorreta: 0,
    explicacao: "O reconhecimento na CBO foi uma conquista do movimento de catadores, importante para garantir direitos trabalhistas e visibilidade para essa categoria.",
  },
];
