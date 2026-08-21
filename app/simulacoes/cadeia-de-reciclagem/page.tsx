import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CadeiaReciclagem } from "@/components/simulacoes/CadeiaReciclagem";
import { CuriosidadesSimulacao } from "@/components/simulacoes/CuriosidadesSimulacao";
import { criarMetadata } from "@/lib/metadata";
import { etapasCadeiaReciclagem } from "@/data/cadeiaReciclagem";

export const metadata = criarMetadata({
  title: "Cadeia de reciclagem",
  description: "Coloque em ordem as etapas reais da cadeia de reciclagem, da separação em casa até virar um produto novo.",
  path: "/simulacoes/cadeia-de-reciclagem",
});

export default function CadeiaDeReciclagemPage() {
  return (
    <div>
      <PageHeader
        titulo="Cadeia de reciclagem"
        descricao="Toque nas etapas na ordem em que elas acontecem de verdade, da separação em casa até virar um produto novo."
        breadcrumb={[{ label: "Simulações", href: "/simulacoes" }, { label: "Cadeia de reciclagem" }]}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-2xl">
          <CadeiaReciclagem />
          <CuriosidadesSimulacao
            itens={[
              `Esta simulação tem ${etapasCadeiaReciclagem.length} etapas, da separação em casa até a fabricação de um produto novo.`,
              "Depois de prensado e enfardado, o material reciclável ocupa bem menos espaço, o que reduz o custo do transporte até a indústria.",
              "Um produto feito de material reciclado pode, no futuro, ser descartado corretamente e voltar para o início dessa mesma cadeia.",
            ]}
          />
        </div>
      </Container>
    </div>
  );
}
