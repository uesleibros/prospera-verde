"use client";

import { useId, useMemo, useState } from "react";
import { Droplet, Zap, TreePine, Cloud, Coins } from "lucide-react";
import { fatoresImpacto, fonteFatoresImpacto } from "@/data/impacto";
import { precoPorKg, nomesMateriaisImpacto, type MaterialImpacto } from "@/data/precificacao";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { useNumeroAnimado } from "@/hooks/useNumeroAnimado";

const MATERIAIS: MaterialImpacto[] = ["papel", "plastico", "vidro", "metal"];

function formatarNumero(valor: number, casas = 0) {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });
}

export function SimuladorImpacto() {
  const [quantidades, setQuantidades] = useState<Record<MaterialImpacto, number>>({
    papel: 0,
    plastico: 0,
    vidro: 0,
    metal: 0,
  });
  const idBase = useId();

  const resultado = useMemo(() => {
    return MATERIAIS.reduce(
      (acc, material) => {
        const kg = quantidades[material] || 0;
        const fator = fatoresImpacto[material];
        acc.agua += kg * fator.aguaLitrosPorKg;
        acc.energia += kg * fator.energiaKwhPorKg;
        acc.arvores += kg * fator.arvoresPorKg;
        acc.co2 += kg * fator.co2KgPorKg;
        acc.renda += kg * precoPorKg[material];
        return acc;
      },
      { agua: 0, energia: 0, arvores: 0, co2: 0, renda: 0 }
    );
  }, [quantidades]);

  const totalKg = MATERIAIS.reduce((soma, m) => soma + (quantidades[m] || 0), 0);

  const aguaAnimada = useNumeroAnimado(resultado.agua);
  const energiaAnimada = useNumeroAnimado(resultado.energia);
  const arvoresAnimadas = useNumeroAnimado(resultado.arvores);
  const co2Animado = useNumeroAnimado(resultado.co2);
  const rendaAnimada = useNumeroAnimado(resultado.renda);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Reveal>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quanto você recicla por mês?</CardTitle>
            <CardDescription>Informe a quantidade aproximada, em quilos.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MATERIAIS.map((material) => {
                const inputId = `${idBase}-${material}`;
                return (
                  <div key={material} className="space-y-1.5">
                    <Label htmlFor={inputId} className="flex items-center justify-between font-semibold text-azul-escuro">
                      {nomesMateriaisImpacto[material]}
                      <span className="font-normal text-muted-foreground">kg/mês</span>
                    </Label>
                    <Input
                      id={inputId}
                      type="number"
                      min={0}
                      max={1000}
                      inputMode="numeric"
                      value={quantidades[material] === 0 ? "" : quantidades[material]}
                      placeholder="0"
                      onChange={(e) => {
                        const valor = e.target.value === "" ? 0 : Math.max(0, Number(e.target.value));
                        setQuantidades((atual) => ({ ...atual, [material]: valor }));
                      }}
                      className="h-10"
                    />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </Reveal>

      <div className="space-y-4">
        <Reveal delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Seu impacto estimado</CardTitle>
            <CardDescription>
              Reciclando {formatarNumero(totalKg, 1)} kg por mês, você ajuda a economizar:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-3">
              <div className="rounded-md bg-azul-claro p-4">
                <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-azul">
                  <Droplet className="h-4 w-4" /> Água
                </dt>
                <dd className="mt-1 text-xl font-bold text-azul-escuro">{formatarNumero(aguaAnimada)} L</dd>
              </div>
              <div className="rounded-md bg-amarelo/15 p-4">
                <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amarelo-escuro">
                  <Zap className="h-4 w-4" /> Energia
                </dt>
                <dd className="mt-1 text-xl font-bold text-azul-escuro">{formatarNumero(energiaAnimada, 1)} kWh</dd>
              </div>
              <div className="rounded-md bg-verde-claro p-4">
                <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-verde-escuro">
                  <TreePine className="h-4 w-4" /> Árvores
                </dt>
                <dd className="mt-1 text-xl font-bold text-azul-escuro">{formatarNumero(arvoresAnimadas, 2)}</dd>
              </div>
              <div className="rounded-md bg-cinza-fundo p-4">
                <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-cinza-medio">
                  <Cloud className="h-4 w-4" /> CO₂ evitado
                </dt>
                <dd className="mt-1 text-xl font-bold text-azul-escuro">{formatarNumero(co2Animado, 1)} kg</dd>
              </div>
            </dl>

            <div className="mt-3 flex items-center gap-3 rounded-md border border-verde/30 bg-white p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-verde text-white">
                <Coins className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-cinza-medio">
                  Renda estimada gerada para a cooperativa
                </p>
                <p className="text-xl font-bold text-verde-escuro">
                  R$ {formatarNumero(rendaAnimada, 2)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </Reveal>

        <Reveal delay={0.18}>
          <details className="rounded-md border border-cinza-borda bg-white p-4 text-sm">
            <summary className="cursor-pointer font-semibold text-azul-escuro">
              Ver fatores de conversão usados no cálculo
            </summary>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-cinza-borda text-cinza-medio">
                    <th className="py-1.5 pr-3">Material</th>
                    <th className="py-1.5 pr-3">Água/kg</th>
                    <th className="py-1.5 pr-3">Energia/kg</th>
                    <th className="py-1.5 pr-3">CO₂/kg</th>
                    <th className="py-1.5">Preço/kg</th>
                  </tr>
                </thead>
                <tbody>
                  {MATERIAIS.map((material) => (
                    <tr key={material} className="border-b border-cinza-borda/60">
                      <td className="py-1.5 pr-3 font-semibold text-azul-escuro">{nomesMateriaisImpacto[material]}</td>
                      <td className="py-1.5 pr-3">{fatoresImpacto[material].aguaLitrosPorKg} L</td>
                      <td className="py-1.5 pr-3">{fatoresImpacto[material].energiaKwhPorKg} kWh</td>
                      <td className="py-1.5 pr-3">{fatoresImpacto[material].co2KgPorKg} kg</td>
                      <td className="py-1.5">R$ {precoPorKg[material].toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-cinza-medio">{fonteFatoresImpacto}</p>
          </details>
        </Reveal>
      </div>
    </div>
  );
}
