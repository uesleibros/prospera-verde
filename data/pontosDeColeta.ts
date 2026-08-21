export type PontoDeColeta = {
  id: string;
  nome: string;
  tipo: string;
  endereco: string;
  bairro: string;
  horario: string;
  materiais: string[];
};

export const pontosDeColeta: PontoDeColeta[] = [
  {
    id: "sede-prospera-verde",
    nome: "Sede da Cooperativa Próspera Verde",
    tipo: "Cooperativa",
    endereco: "Rua Rui Barbosa, s/n",
    bairro: "Centro, Itaberaba - BA",
    horario: "Segunda a sexta, das 8h às 17h",
    materiais: ["papel", "plastico", "vidro", "metal", "eletronico"],
  },
  {
    id: "ecoponto-central",
    nome: "Ecoponto Central",
    tipo: "Ecoponto municipal",
    endereco: "Avenida Luiz Viana Filho, s/n",
    bairro: "Centro, Itaberaba - BA",
    horario: "Terça a domingo, das 7h às 19h",
    materiais: ["papel", "plastico", "vidro", "metal", "organico", "eletronico", "pilha"],
  },
  {
    id: "ecoponto-alameda-umburanas",
    nome: "Ecoponto Alameda das Umburanas",
    tipo: "Ecoponto municipal",
    endereco: "Alameda das Umburanas, s/n",
    bairro: "Itaberaba - BA",
    horario: "Segunda a sábado, das 8h às 18h",
    materiais: ["papel", "plastico", "vidro", "metal"],
  },
  {
    id: "posto-oleo-mercado",
    nome: "Posto de Troca de Óleo do Mercado Municipal",
    tipo: "Ponto de troca",
    endereco: "Praça Nossa Senhora do Rosário, s/n",
    bairro: "Centro, Itaberaba - BA",
    horario: "Segunda a sábado, das 8h às 16h",
    materiais: ["oleo"],
  },
  {
    id: "escola-municipal-rui-barbosa",
    nome: "Escola Municipal Rui Barbosa",
    tipo: "Ponto de coleta comunitário",
    endereco: "Rua Josué Ribeiro, s/n",
    bairro: "Centro, Itaberaba - BA",
    horario: "Segunda a sexta, das 7h30 às 17h30",
    materiais: ["papel", "pilha", "eletronico"],
  },
  {
    id: "comercio-francisco-gil",
    nome: "Ponto de Coleta Rua Francisco Gil",
    tipo: "Ponto de coleta parceiro",
    endereco: "Rua Francisco Gil, s/n",
    bairro: "Centro, Itaberaba - BA",
    horario: "Todos os dias, das 8h às 20h",
    materiais: ["pilha", "eletronico", "oleo"],
  },
  {
    id: "conteineres-alfredo-hayne",
    nome: "Contêineres da Rua Alfredo Hayne",
    tipo: "Contêineres de coleta seletiva",
    endereco: "Rua Alfredo Hayne, s/n",
    bairro: "Centro, Itaberaba - BA",
    horario: "Disponível 24 horas",
    materiais: ["papel", "plastico", "vidro", "metal"],
  },
  {
    id: "galpao-triagem-br242",
    nome: "Galpão de Triagem BR-242",
    tipo: "Cooperativa parceira",
    endereco: "Rodovia BR-242, Km 3",
    bairro: "Zona rural, Itaberaba - BA",
    horario: "Segunda a sexta, das 7h às 16h",
    materiais: ["papel", "plastico", "vidro", "metal", "organico"],
  },
];
