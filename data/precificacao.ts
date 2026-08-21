export type MaterialImpacto = "papel" | "plastico" | "vidro" | "metal";

export const precoPorKg: Record<MaterialImpacto, number> = {
  papel: 0.4,
  plastico: 1.2,
  vidro: 0.1,
  metal: 5.0,
};

export const nomesMateriaisImpacto: Record<MaterialImpacto, string> = {
  papel: "Papel",
  plastico: "Plástico",
  vidro: "Vidro",
  metal: "Metal (alumínio)",
};

export const percentualCustosOperacionais = 0.35;
