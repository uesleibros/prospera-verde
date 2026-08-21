import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { JogoSeparacao } from "@/components/simulacoes/JogoSeparacao";
import { criarMetadata } from "@/lib/metadata";

export const metadata = criarMetadata({
  title: "Jogo da separação",
  description: "Arraste cada item até a lixeira colorida correta e aprenda a separar o lixo corretamente.",
  path: "/simulacoes/jogo-da-separacao",
});

export default function JogoDaSeparacaoPage() {
  return (
    <div>
      <PageHeader
        titulo="Jogo da separação"
        descricao="Um item vai aparecer na tela. Arraste até a lixeira colorida correta e veja a explicação de cada resposta."
        breadcrumb={[{ label: "Simulações", href: "/simulacoes" }, { label: "Jogo da separação" }]}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          <JogoSeparacao />
        </div>
      </Container>
    </div>
  );
}
