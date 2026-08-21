import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { JogoSeparacao } from "@/components/simulacoes/JogoSeparacao";
import { CuriosidadesSimulacao } from "@/components/simulacoes/CuriosidadesSimulacao";
import { criarMetadata } from "@/lib/metadata";
import { itensSeparacao } from "@/data/itensSeparacao";
import { lixeiras } from "@/data/lixeiras";

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
          <CuriosidadesSimulacao
            itens={[
              `Este jogo tem ${itensSeparacao.length} itens diferentes, cobrindo as ${lixeiras.length} categorias usadas na coleta seletiva.`,
              "Uma lata de alumínio reciclada economiza até 95% da energia necessária para produzir uma lata nova a partir da bauxita.",
              "O Brasil está entre os países que mais reciclam latas de alumínio no mundo, com índice acima de 95% ao ano.",
            ]}
          />
        </div>
      </Container>
    </div>
  );
}
