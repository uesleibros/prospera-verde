import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ConsumoConsciente } from "@/components/simulacoes/ConsumoConsciente";
import { criarMetadata } from "@/lib/metadata";

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
        </div>
      </Container>
    </div>
  );
}
