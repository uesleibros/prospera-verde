import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { GuiaMaterial } from "@/components/como-reciclar/GuiaMaterial";
import { Accordion } from "@/components/ui/accordion";
import { materiais } from "@/data/materiais";

export const metadata: Metadata = {
  title: "Como reciclar",
  description: "Guia didático de como separar corretamente papel, plástico, vidro, metal, orgânico, rejeito, eletrônico, óleo de cozinha e pilhas.",
};

export default function ComoReciclarPage() {
  return (
    <div>
      <PageHeader
        titulo="Como reciclar"
        descricao="Toque em cada material para ver a cor da lixeira, o que pode e o que não pode ser descartado, como preparar antes de jogar fora e quanto tempo ele leva para se decompor na natureza."
        breadcrumb={[{ label: "Como reciclar" }]}
      />

      <Container className="py-10">
        <Accordion type="single" collapsible defaultValue={materiais[0].id} className="space-y-3">
          {materiais.map((material) => (
            <GuiaMaterial key={material.id} material={material} />
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
