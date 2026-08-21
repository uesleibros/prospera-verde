import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { criarMetadata } from "@/lib/metadata";
import { licoesCurso } from "@/data/curso";
import { ListaLicoes } from "@/components/curso/ListaLicoes";

export const metadata = criarMetadata({
  title: "Curso de reciclagem",
  description: "Um curso curto e gratuito, em 4 lições, sobre reciclagem, coleta seletiva e cooperativismo, com uma verificação de aprendizado em cada uma.",
  path: "/curso",
});

export default function CursoPage() {
  return (
    <div>
      <PageHeader
        titulo="Curso de reciclagem"
        descricao="Quatro lições curtas para entender de vez como reciclar, por que a coleta seletiva importa e qual é o papel de uma cooperativa. Cada lição termina com uma verificação rápida."
        breadcrumb={[{ label: "Curso de reciclagem" }]}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          <ListaLicoes licoes={licoesCurso} />
        </div>
      </Container>
    </div>
  );
}
