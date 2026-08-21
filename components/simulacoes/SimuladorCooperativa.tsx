"use client";

import { useId, useMemo, useState } from "react";
import {
  precoPorKg,
  nomesMateriaisImpacto,
  percentualCustosOperacionais,
  type MaterialImpacto,
} from "@/data/precificacao";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { useNumeroAnimado } from "@/hooks/useNumeroAnimado";

const MATERIAIS: MaterialImpacto[] = ["papel", "plastico", "vidro", "metal"];

function formatarReais(valor: number) {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function SimuladorCooperativa() {
  const [cooperados, setCooperados] = useState(10);
  const [quantidades, setQuantidades] = useState<Record<MaterialImpacto, number>>({
    papel: 0,
    plastico: 0,
    vidro: 0,
    metal: 0,
  });
  const idBase = useId();

  const resultado = useMemo(() => {
    const porMaterial = MATERIAIS.map((material) => {
      const kg = quantidades[material] || 0;
      const valor = kg * precoPorKg[material];
      return { material, kg, valor };
    });
    const faturamento = porMaterial.reduce((soma, item) => soma + item.valor, 0);
    const custos = faturamento * percentualCustosOperacionais;
    const liquido = faturamento - custos;
    const numCooperados = Math.max(1, cooperados);
    const porCooperado = liquido / numCooperados;
    return { porMaterial, faturamento, custos, liquido, porCooperado };
  }, [quantidades, cooperados]);

  const faturamentoAnimado = useNumeroAnimado(resultado.faturamento);
  const custosAnimados = useNumeroAnimado(resultado.custos);
  const liquidoAnimado = useNumeroAnimado(resultado.liquido);
  const porCooperadoAnimado = useNumeroAnimado(resultado.porCooperado);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Reveal>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Dados do mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1.5">
              <Label htmlFor={`${idBase}-cooperados`} className="font-semibold text-azul-escuro">
                Número de cooperados
              </Label>
              <Input
                id={`${idBase}-cooperados`}
                type="number"
                min={1}
                max={500}
                value={cooperados === 0 ? "" : cooperados}
                onChange={(e) => setCooperados(e.target.value === "" ? 0 : Math.max(0, Number(e.target.value)))}
                className="h-10"
              />
            </div>

            <div className="mt-5 space-y-4">
              {MATERIAIS.map((material) => {
                const inputId = `${idBase}-${material}`;
                return (
                  <div key={material} className="space-y-1.5">
                    <Label htmlFor={inputId} className="flex items-center justify-between font-semibold text-azul-escuro">
                      {nomesMateriaisImpacto[material]} vendido
                      <span className="font-normal text-muted-foreground">kg no mês</span>
                    </Label>
                    <Input
                      id={inputId}
                      type="number"
                      min={0}
                      max={100000}
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
              <CardTitle className="text-lg">Faturamento por material</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[280px] border-collapse text-sm">
                  <tbody>
                    {resultado.porMaterial.map((item) => (
                      <tr key={item.material} className="border-b border-cinza-borda/60">
                        <td className="py-2 text-cinza-texto">{nomesMateriaisImpacto[item.material]}</td>
                        <td className="py-2 text-right text-cinza-medio">{item.kg} kg</td>
                        <td className="py-2 text-right font-semibold text-azul-escuro">R$ {formatarReais(item.valor)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <dl className="mt-4 space-y-2 border-t border-cinza-borda pt-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-cinza-texto">Faturamento total</dt>
                  <dd className="font-bold text-azul-escuro">R$ {formatarReais(faturamentoAnimado)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-cinza-texto">
                    Custos operacionais ({Math.round(percentualCustosOperacionais * 100)}%)
                  </dt>
                  <dd className="font-semibold text-vermelho">- R$ {formatarReais(custosAnimados)}</dd>
                </div>
                <div className="flex justify-between border-t border-cinza-borda pt-2">
                  <dt className="font-bold text-azul-escuro">Sobra líquida do mês</dt>
                  <dd className="font-bold text-verde-escuro">R$ {formatarReais(liquidoAnimado)}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.18} className="rounded-md border border-verde/30 bg-verde-claro p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-verde-escuro">
            Valor recebido por cooperado
          </p>
          <p className="mt-1 text-3xl font-bold text-verde-escuro">R$ {formatarReais(porCooperadoAnimado)}</p>
          <p className="mt-2 text-sm text-cinza-texto">
            Cálculo: sobra líquida dividida por {Math.max(1, cooperados)} cooperados. Numa
            cooperativa, a divisão é combinada em assembleia, geralmente
            igualitária ou proporcional ao trabalho de cada um, nunca
            concentrada em um único &ldquo;dono&rdquo;.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
