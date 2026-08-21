export type ParMemoria = {
  categoria: string;
  itemNome: string;
  itemEmoji: string;
  lixeiraNome: string;
  lixeiraCorHex: string;
};

export const paresMemoria: ParMemoria[] = [
  { categoria: "papel", itemNome: "Jornal velho", itemEmoji: "📰", lixeiraNome: "Papel", lixeiraCorHex: "#1351b4" },
  { categoria: "plastico", itemNome: "Garrafa PET", itemEmoji: "🧴", lixeiraNome: "Plástico", lixeiraCorHex: "#b31e1e" },
  { categoria: "vidro", itemNome: "Pote de vidro", itemEmoji: "🍾", lixeiraNome: "Vidro", lixeiraCorHex: "#168821" },
  { categoria: "metal", itemNome: "Lata de refrigerante", itemEmoji: "🥫", lixeiraNome: "Metal", lixeiraCorHex: "#ffcd07" },
  { categoria: "organico", itemNome: "Casca de banana", itemEmoji: "🍌", lixeiraNome: "Orgânico", lixeiraCorHex: "#7a4a1f" },
  { categoria: "rejeito", itemNome: "Fralda descartável", itemEmoji: "👶", lixeiraNome: "Rejeito", lixeiraCorHex: "#6b6b6b" },
];
