import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SimuladorCooperativa } from "@/components/simulacoes/SimuladorCooperativa";

export const metadata: Metadata = {
  title: "Simulador da cooperativa",
  description: "Defina o número de cooperados e os materiais vendidos no mês e veja como o faturamento é dividido de forma justa.",
};

export default function SimuladorCooperativaPage() {
  return (
    <div>
      <PageHeader
        titulo="Simulador da cooperativa"
        descricao="Defina quantos cooperados existem e quanto foi vendido de cada material no mês para entender como é calculada a renda de cada um."
        breadcrumb={[{ label: "Simulações", href: "/simulacoes" }, { label: "Simulador da cooperativa" }]}
      />
      <Container className="py-10">
        <SimuladorCooperativa />
      </Container>
    </div>
  );
}
