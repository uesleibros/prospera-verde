import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { JogoMemoria } from "@/components/simulacoes/JogoMemoria";
import { CuriosidadesSimulacao } from "@/components/simulacoes/CuriosidadesSimulacao";
import { criarMetadata } from "@/lib/metadata";
import { paresMemoria } from "@/data/memoria";

export const metadata = criarMetadata({
  title: "Jogo da memória",
  description: "Encontre os pares combinando cada item de lixo com a lixeira colorida correta, no menor número de tentativas.",
  path: "/simulacoes/jogo-da-memoria",
});

export default function JogoDaMemoriaPage() {
  return (
    <div>
      <PageHeader
        titulo="Jogo da memória"
        descricao="Vire as cartas e combine cada item com a lixeira certa. Encontre todos os pares no menor número de tentativas."
        breadcrumb={[{ label: "Simulações", href: "/simulacoes" }, { label: "Jogo da memória" }]}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-2xl">
          <JogoMemoria />
          <CuriosidadesSimulacao
            itens={[
              `O jogo tem ${paresMemoria.length} pares para encontrar: cada item de lixo precisa ser combinado com a lixeira colorida certa.`,
              "As cores usadas seguem o mesmo padrão oficial da coleta seletiva no Brasil, definido pela Resolução Conama 275/2001.",
              "Praticar essa associação ajuda a tornar a separação do lixo em casa um hábito automático, sem precisar pensar muito.",
            ]}
          />
        </div>
      </Container>
    </div>
  );
}
