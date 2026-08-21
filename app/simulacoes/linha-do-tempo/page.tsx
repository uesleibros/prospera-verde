import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { LinhaDoTempo } from "@/components/simulacoes/LinhaDoTempo";

export const metadata: Metadata = {
  title: "Linha do tempo de decomposição",
  description: "Escolha um material e veja quanto tempo ele leva para se decompor na natureza, comparado a outros materiais.",
};

export default function LinhaDoTempoPage() {
  return (
    <div>
      <PageHeader
        titulo="Linha do tempo de decomposição"
        descricao="Escolha um material e descubra quanto tempo ele leva para se decompor na natureza, lado a lado com outros materiais."
        breadcrumb={[{ label: "Simulações", href: "/simulacoes" }, { label: "Linha do tempo de decomposição" }]}
      />
      <Container className="py-10">
        <LinhaDoTempo />
      </Container>
    </div>
  );
}
