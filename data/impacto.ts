import type { MaterialImpacto } from "@/data/precificacao";

export type FatorImpacto = {
  aguaLitrosPorKg: number;
  energiaKwhPorKg: number;
  arvoresPorKg: number;
  co2KgPorKg: number;
};

export const fatoresImpacto: Record<MaterialImpacto, FatorImpacto> = {
  papel: {
    aguaLitrosPorKg: 10,
    energiaKwhPorKg: 0.9,
    arvoresPorKg: 0.02,
    co2KgPorKg: 1.6,
  },
  plastico: {
    aguaLitrosPorKg: 22,
    energiaKwhPorKg: 5.7,
    arvoresPorKg: 0,
    co2KgPorKg: 1.5,
  },
  vidro: {
    aguaLitrosPorKg: 2,
    energiaKwhPorKg: 0.3,
    arvoresPorKg: 0,
    co2KgPorKg: 0.3,
  },
  metal: {
    aguaLitrosPorKg: 15,
    energiaKwhPorKg: 14,
    arvoresPorKg: 0,
    co2KgPorKg: 9,
  },
};

export const fonteFatoresImpacto =
  "Valores aproximados, usados para fins educativos, com base em referências de reciclagem como o CEMPRE (Compromisso Empresarial para Reciclagem) e estudos de ciclo de vida de materiais.";
