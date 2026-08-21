import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { GuiaMaterial } from "@/components/como-reciclar/GuiaMaterial";
import { Accordion } from "@/components/ui/accordion";
import { FotoCreditada } from "@/components/ui/FotoCreditada";
import { materiais } from "@/data/materiais";
import { criarMetadata } from "@/lib/metadata";

export const metadata = criarMetadata({
  title: "Como reciclar",
  description: "Guia didático de como separar corretamente papel, plástico, vidro, metal, orgânico, rejeito, eletrônico, óleo de cozinha e pilhas.",
  path: "/como-reciclar",
});

export default function ComoReciclarPage() {
  return (
    <div>
      <PageHeader
        titulo="Como reciclar"
        descricao="Toque em cada material para ver a cor da lixeira, o que pode e o que não pode ser descartado, como preparar antes de jogar fora e quanto tempo ele leva para se decompor na natureza."
        breadcrumb={[{ label: "Como reciclar" }]}
      />

      <Container className="py-10">
        <FotoCreditada
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Recyclables.JPG/960px-Recyclables.JPG"
          alt="Garrafas PET recicláveis amontoadas, prontas para a reciclagem"
          credito="Foto: Streetwise Cycle, Wikimedia Commons, domínio público"
          className="mx-auto mb-8 max-w-3xl"
        />
        <Accordion type="single" collapsible defaultValue={materiais[0].id} className="space-y-3">
          {materiais.map((material) => (
            <GuiaMaterial key={material.id} material={material} />
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
