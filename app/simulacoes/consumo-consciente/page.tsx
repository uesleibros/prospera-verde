import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ConsumoConsciente } from "@/components/simulacoes/ConsumoConsciente";
import { CuriosidadesSimulacao } from "@/components/simulacoes/CuriosidadesSimulacao";
import { criarMetadata } from "@/lib/metadata";
import { cenariosConsumo } from "@/data/consumoConsciente";

export const metadata = criarMetadata({
  title: "Simulador de consumo consciente",
  description: "Situações do dia a dia com duas escolhas possíveis: veja qual pesa menos no meio ambiente e por quê.",
  path: "/simulacoes/consumo-consciente",
});

export default function ConsumoConscientePage() {
  return (
    <div>
      <PageHeader
        titulo="Simulador de consumo consciente"
        descricao="Em cada situação, escolha entre duas opções. No final, veja o que pesa menos no meio ambiente e por quê."
        breadcrumb={[{ label: "Simulações", href: "/simulacoes" }, { label: "Consumo consciente" }]}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-2xl">
          <ConsumoConsciente />
          <CuriosidadesSimulacao
            itens={[
              `Este simulador tem ${cenariosConsumo.length} situações reais do dia a dia, cada uma com duas escolhas possíveis.`,
              "Deixar a torneira aberta por 2 minutos ao escovar os dentes pode desperdiçar mais de 10 litros de água.",
              "A indústria da moda está entre as que mais consomem água e energia no mundo, o que torna reaproveitar roupas uma escolha de alto impacto.",
            ]}
          />
        </div>
      </Container>
    </div>
  );
}
