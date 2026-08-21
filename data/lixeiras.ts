export type CategoriaJogo =
  | "papel"
  | "plastico"
  | "vidro"
  | "metal"
  | "organico"
  | "rejeito"
  | "especial";

export type Lixeira = {
  id: CategoriaJogo;
  nome: string;
  corClasse: string;
  corHex: string;
};

export const lixeiras: Lixeira[] = [
  { id: "papel", nome: "Papel", corClasse: "bg-azul", corHex: "#1351b4" },
  { id: "plastico", nome: "Plástico", corClasse: "bg-vermelho", corHex: "#b31e1e" },
  { id: "vidro", nome: "Vidro", corClasse: "bg-verde", corHex: "#168821" },
  { id: "metal", nome: "Metal", corClasse: "bg-amarelo", corHex: "#ffcd07" },
  { id: "organico", nome: "Orgânico", corClasse: "bg-marrom", corHex: "#7a4a1f" },
  { id: "rejeito", nome: "Rejeito", corClasse: "bg-cinza-lixeira", corHex: "#6b6b6b" },
  { id: "especial", nome: "Resíduo especial", corClasse: "bg-laranja", corHex: "#d2691e" },
];
