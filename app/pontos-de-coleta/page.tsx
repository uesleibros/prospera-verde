import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PontoDeColetaCard } from "@/components/pontos-de-coleta/PontoDeColetaCard";
import { pontosDeColeta } from "@/data/pontosDeColeta";
import { criarMetadata } from "@/lib/metadata";

export const metadata = criarMetadata({
  title: "Pontos de coleta",
  description: "Encontre pontos de coleta de materiais recicláveis em Itaberaba, BA, com endereço, horário de funcionamento e materiais aceitos.",
  path: "/pontos-de-coleta",
});

export default function PontosDeColetaPage() {
  return (
    <div>
      <PageHeader
        titulo="Pontos de coleta"
        descricao="Encontre o ponto de coleta mais perto de você em Itaberaba e veja quais materiais cada local aceita."
        breadcrumb={[{ label: "Pontos de coleta" }]}
      />

      <Container className="py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {pontosDeColeta.map((ponto, indice) => (
            <PontoDeColetaCard key={ponto.id} ponto={ponto} atraso={indice * 0.05} />
          ))}
        </div>
      </Container>
    </div>
  );
}
