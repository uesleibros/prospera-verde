export type PerguntaCurso = {
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
};

export type ImagemLicao = {
  src: string;
  alt: string;
  credito: string;
};

export type VideoLicao = {
  videoId: string;
  titulo: string;
  canal: string;
};

export type Licao = {
  slug: string;
  numero: number;
  titulo: string;
  resumo: string;
  cargaHorariaMinutos: number;
  objetivos: string[];
  conteudo: string[];
  imagem: ImagemLicao;
  video: VideoLicao;
  perguntas: PerguntaCurso[];
};

export const licoesCurso: Licao[] = [
  {
    slug: "por-que-reciclar-importa",
    numero: 1,
    titulo: "Por que a reciclagem importa",
    resumo: "Entenda o que acontece com o lixo depois que ele sai de casa e por que reduzir vem antes de reciclar.",
    cargaHorariaMinutos: 12,
    objetivos: [
      "Diferenciar aterro sanitário de lixão e explicar os impactos de cada um",
      "Enunciar a hierarquia dos 3 Rs e justificar por que reduzir vem primeiro",
      "Relacionar o tempo de decomposição dos materiais com a geração de lixo",
    ],
    conteudo: [
      "Todos os dias, cada pessoa produz uma quantidade de lixo sem nem perceber: embalagens, restos de comida, papel, plástico. Quando esse lixo não é separado corretamente, tudo vai junto para aterros sanitários ou, em muitos lugares que ainda não têm um sistema adequado, para lixões a céu aberto.",
      "Um lixão contamina o solo e os lençóis freáticos (a água que fica embaixo da terra), atrai pragas e libera gases que contribuem para o aquecimento global. Já um aterro sanitário é mais controlado, mas ainda assim é um recurso limitado: quanto mais lixo é enviado para lá, mais rápido ele se enche.",
      "É por isso que existe uma ordem de prioridade conhecida como os 3 Rs: Reduzir, Reutilizar e só depois Reciclar. Reduzir o consumo é sempre a opção mais eficaz, porque evita que o resíduo seja gerado. Reutilizar dá uma segunda vida a um objeto antes de descartá-lo. Reciclar transforma o que sobrou em matéria-prima de novo, mas gasta energia e água no processo, por isso vem por último.",
      "Cada material tem um tempo de decomposição diferente na natureza, e alguns, como o vidro, praticamente não desaparecem. Você pode comparar isso na simulação de linha do tempo, mas o ponto principal é: o lixo que a gente gera hoje pode continuar existindo por gerações.",
    ],
    imagem: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lix%C3%A3o_da_Estrutural_(15674124552).jpg/960px-Lix%C3%A3o_da_Estrutural_(15674124552).jpg",
      alt: "Lixão da Estrutural, em Brasília, com resíduos a céu aberto e urubus sobrevoando",
      credito: "Foto: Edilson Rodrigues/Agência Senado, Wikimedia Commons, CC BY 2.0",
    },
    video: {
      videoId: "I_5-K_pV814",
      titulo: "Qual a diferença entre Lixão, Aterro Controlado, Aterro Sanitário e Compostagem?",
      canal: "Circuito Ambiental",
    },
    perguntas: [
      {
        pergunta: "Qual é a ordem correta dos 3 Rs, da opção mais eficaz para a menos eficaz?",
        opcoes: [
          "Reciclar, reduzir, reutilizar",
          "Reduzir, reutilizar, reciclar",
          "Reutilizar, reciclar, reduzir",
          "Reciclar, reutilizar, reduzir",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta: "O que diferencia um lixão de um aterro sanitário?",
        opcoes: [
          "Não existe diferença, são a mesma coisa",
          "O aterro sanitário é controlado para reduzir a contaminação, o lixão não",
          "O lixão só recebe material reciclável",
          "O lixão recebe menos lixo do que o aterro sanitário",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta: "Por que reduzir o consumo é considerado o R mais eficaz?",
        opcoes: [
          "Porque é o mais fácil de fazer",
          "Porque gera mais renda para as cooperativas",
          "Porque evita que o resíduo seja gerado, antes mesmo de precisar reciclar",
          "Porque é a única opção prevista em lei",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta: "Qual a relação entre o tempo de decomposição de um material e a importância de reduzir o consumo?",
        opcoes: [
          "Quanto mais tempo um material leva para desaparecer, mais ele se acumula na natureza se não for bem gerido",
          "Não existe relação, decomposição e consumo são temas completamente separados",
          "Materiais que se decompõem rápido são sempre mais perigosos que os de decomposição lenta",
          "Reduzir o consumo só faz diferença para materiais orgânicos",
        ],
        respostaCorreta: 0,
      },
    ],
  },
  {
    slug: "como-separar-o-lixo",
    numero: 2,
    titulo: "Como separar o lixo corretamente",
    resumo: "As cores das lixeiras, o que é reciclável de verdade e como preparar cada material antes de descartar.",
    cargaHorariaMinutos: 10,
    objetivos: [
      "Identificar o padrão de cores da coleta seletiva definido pelo Conama",
      "Reconhecer materiais que parecem recicláveis mas não são",
      "Explicar por que preparar o material antes de descartar afeta a triagem",
    ],
    conteudo: [
      "No Brasil, existe um padrão de cores para a coleta seletiva definido pelo Conama (Conselho Nacional do Meio Ambiente): azul para papel, vermelho para plástico, verde para vidro, amarelo para metal, marrom para orgânico e cinza para rejeito. Materiais que precisam de coleta especializada, como eletrônicos e pilhas, costumam usar a cor laranja.",
      "Nem tudo que parece reciclável realmente é. Papel higiênico usado, por exemplo, é papel, mas não pode ser reciclado porque já cumpriu sua função e está contaminado. Da mesma forma, cerâmica e porcelana parecem vidro, mas têm um ponto de fusão diferente e atrapalham o processo de reciclagem se forem misturadas.",
      "Preparar o material antes de descartar faz muita diferença para quem trabalha na triagem. Embalagens sujas de comida ou gordura podem contaminar um lote inteiro de material reciclável, fazendo com que ele perca o valor e, às vezes, precise ser descartado como rejeito mesmo sendo, em teoria, reciclável.",
      "Você pode consultar o guia completo, material por material, na página \"Como reciclar\", com a cor da lixeira, o que pode e o que não pode, e como preparar cada item antes de descartar.",
    ],
    imagem: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Glass_and_plastic_recycling_065_ubt.JPG/960px-Glass_and_plastic_recycling_065_ubt.JPG",
      alt: "Contêiner de coleta de vidro e uma gaiola cheia de garrafas plásticas prensadas para reciclagem",
      credito: "Foto: Tomasz Sienicki (Tsca), Wikimedia Commons, CC BY 3.0",
    },
    video: {
      videoId: "t-0b1k83h5g",
      titulo: "Explicando para as crianças sobre lixo, coleta seletiva e reciclagem",
      canal: "Unimed Ponta Grossa",
    },
    perguntas: [
      {
        pergunta: "Qual é a cor padrão da lixeira de plástico na coleta seletiva?",
        opcoes: ["Azul", "Vermelho", "Verde", "Marrom"],
        respostaCorreta: 1,
      },
      {
        pergunta: "Por que papel higiênico usado não pode ser reciclado, mesmo sendo papel?",
        opcoes: [
          "Porque não existe reciclagem de papel no Brasil",
          "Porque já cumpriu sua função e está contaminado",
          "Porque é considerado metal",
          "Porque não é feito de fibra de celulose",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta: "O que pode acontecer se uma embalagem suja de comida for descartada junto com os recicláveis?",
        opcoes: [
          "Nada, a sujeira é removida automaticamente",
          "Pode contaminar o lote inteiro e fazer o material perder valor",
          "O material vira automaticamente adubo",
          "O material vira automaticamente rejeito perigoso",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta: "Por que um prato de cerâmica quebrado não deve ir na lixeira verde do vidro?",
        opcoes: [
          "Porque tem ponto de fusão diferente e contamina o processo de reciclagem do vidro",
          "Porque cerâmica não é considerada um resíduo",
          "Porque é proibido por lei descartar cerâmica",
          "Porque a cerâmica pesa mais do que o vidro",
        ],
        respostaCorreta: 0,
      },
    ],
  },
  {
    slug: "coleta-seletiva-e-cooperativa",
    numero: 3,
    titulo: "A coleta seletiva e o papel da cooperativa",
    resumo: "Quem são os catadores, o que é a triagem e por que apoiar uma cooperativa gera renda justa.",
    cargaHorariaMinutos: 10,
    objetivos: [
      "Descrever as etapas da coleta seletiva, da separação em casa à triagem",
      "Explicar como funciona a gestão coletiva de uma cooperativa",
      "Relacionar a qualidade da separação doméstica com a renda dos cooperados",
    ],
    conteudo: [
      "Coleta seletiva é o nome do sistema em que o lixo é separado por tipo de material logo na origem, seja em casa, no trabalho ou na escola, para facilitar a reciclagem depois. Sem essa separação inicial, o trabalho de recuperar materiais recicláveis fica muito mais difícil e caro.",
      "Depois de coletado, o material passa por um processo chamado triagem: cooperados separam cada item por tipo e qualidade, retiram o que não pode ser reciclado e preparam o material para ser vendido às indústrias que vão transformá-lo em matéria-prima nova.",
      "Esse trabalho é feito, em grande parte do Brasil, por cooperativas de catadores. Uma cooperativa é uma organização coletiva: os cooperados são, ao mesmo tempo, donos e trabalhadores do negócio, e as decisões importantes são tomadas em conjunto, em assembleia.",
      "Quando a população separa o lixo corretamente, o trabalho da cooperativa fica mais rápido e o material chega com mais qualidade, o que também aumenta o valor de venda e a renda de cada cooperado. Ou seja: reciclar bem em casa impacta diretamente a vida de quem trabalha com isso.",
    ],
    imagem: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/TriagemDeLixo.jpg/960px-TriagemDeLixo.jpg",
      alt: "Trabalhadores realizando a triagem manual de materiais recicláveis em esteira",
      credito: "Foto: Ignácio Costa, Wikimedia Commons, CC BY 3.0",
    },
    video: {
      videoId: "Pxnv8RDHy5s",
      titulo: "Cooperativas de Reciclagem são opções para destino de resíduos",
      canal: "Câmara Municipal de São Paulo",
    },
    perguntas: [
      {
        pergunta: "O que é a triagem, no processo de reciclagem?",
        opcoes: [
          "O transporte do lixo até o aterro",
          "A separação dos materiais por tipo e qualidade após a coleta",
          "A queima do lixo para gerar energia",
          "A pesagem do lixo antes da coleta",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta: "Como as decisões importantes são tomadas em uma cooperativa?",
        opcoes: [
          "Por um único dono, como em uma empresa comum",
          "Pelo governo",
          "Em conjunto, pelos próprios cooperados, em assembleia",
          "Apenas pelos cooperados fundadores",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta: "Por que separar bem o lixo em casa ajuda a cooperativa?",
        opcoes: [
          "Não faz diferença nenhuma para a cooperativa",
          "O material chega com mais qualidade, o que aumenta o valor de venda",
          "Porque reduz o número de cooperados necessários",
          "Porque aumenta a quantidade de rejeito gerado",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta: "Desde 2002, a profissão de catador de materiais recicláveis no Brasil:",
        opcoes: [
          "É oficialmente reconhecida pela Classificação Brasileira de Ocupações",
          "Deixou de existir formalmente no país",
          "Passou a ser proibida fora de cooperativas registradas",
          "Só é reconhecida em capitais de estado",
        ],
        respostaCorreta: 0,
      },
    ],
  },
  {
    slug: "reduzir-e-reutilizar",
    numero: 4,
    titulo: "Reduzir e reutilizar no dia a dia",
    resumo: "Ideias práticas para gerar menos lixo antes mesmo de pensar em reciclagem.",
    cargaHorariaMinutos: 8,
    objetivos: [
      "Listar hábitos de consumo que reduzem a geração de resíduos",
      "Dar exemplos práticos de reutilização de materiais comuns",
      "Explicar o princípio da compostagem doméstica",
    ],
    conteudo: [
      "Reduzir não significa abrir mão de tudo, mas repensar hábitos de consumo. Levar sacola própria ao mercado, recusar canudos e talheres descartáveis, e preferir produtos com menos embalagem são exemplos simples que, somados ao longo do tempo, fazem bastante diferença.",
      "Reutilizar é dar uma nova função a algo antes de descartar. Potes de vidro podem virar organizadores, roupas que não servem mais podem ser doadas, e caixas de papelão podem ser usadas em mudanças ou como material de artesanato antes de irem para a reciclagem.",
      "A compostagem doméstica é uma forma de reutilização dos resíduos orgânicos: cascas de fruta, borra de café e restos de vegetais podem virar adubo em poucas semanas, em vez de ir para o rejeito. Isso reduz o volume de lixo enviado para a coleta e ainda gera um produto útil para plantas e hortas.",
      "Pequenas mudanças de hábito, multiplicadas por muitas pessoas em uma cidade, reduzem de forma real a quantidade de lixo que precisa ser coletada, transportada e processada todos os dias.",
    ],
    imagem: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Compost_bin_%282%29.jpg/960px-Compost_bin_%282%29.jpg",
      alt: "Composteira doméstica de madeira com material orgânico em decomposição",
      credito: "Foto: Pavel Ševela, Wikimedia Commons, CC BY-SA 3.0",
    },
    video: {
      videoId: "o0EYneEPUmQ",
      titulo: "Composteira doméstica - Como fazer",
      canal: "Epagri TV",
    },
    perguntas: [
      {
        pergunta: "Qual das opções abaixo é um exemplo de reduzir o consumo?",
        opcoes: [
          "Levar sacola própria ao mercado",
          "Jogar o lixo orgânico na lixeira de reciclável",
          "Comprar mais produtos descartáveis",
          "Comprar produtos com mais embalagem individual",
        ],
        respostaCorreta: 0,
      },
      {
        pergunta: "O que é a compostagem doméstica?",
        opcoes: [
          "Um tipo de coleta seletiva de eletrônicos",
          "A transformação de resíduos orgânicos em adubo",
          "A queima de resíduos para gerar energia em casa",
          "A retirada de restos orgânicos para incineração controlada",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta: "Dar uma nova função a um pote de vidro antes de descartá-lo é um exemplo de qual R?",
        opcoes: ["Reduzir", "Reutilizar", "Reciclar", "Rejeitar"],
        respostaCorreta: 1,
      },
      {
        pergunta: "Qual destes materiais NÃO deve ir em uma composteira doméstica comum?",
        opcoes: [
          "Casca de fruta",
          "Borra de café",
          "Carne, laticínios e alimentos gordurosos",
          "Folhas secas",
        ],
        respostaCorreta: 2,
      },
    ],
  },
];
