import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SimuladorImpacto } from "@/components/simulacoes/SimuladorImpacto";

export const metadata: Metadata = {
  title: "Simulador de impacto ambiental",
  description: "Informe quanto você recicla por mês e veja água, energia, árvores e CO2 economizados, além da renda gerada para a cooperativa.",
};

export default function ImpactoAmbientalPage() {
  return (
    <div>
      <PageHeader
        titulo="Simulador de impacto ambiental"
        descricao="Informe quantos quilos de cada material você recicla por mês e veja o impacto ambiental e econômico gerado."
        breadcrumb={[{ label: "Simulações", href: "/simulacoes" }, { label: "Simulador de impacto ambiental" }]}
      />
      <Container className="py-10">
        <SimuladorImpacto />
      </Container>
    </div>
  );
}
