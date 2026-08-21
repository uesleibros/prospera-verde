import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { JogoMemoria } from "@/components/simulacoes/JogoMemoria";
import { criarMetadata } from "@/lib/metadata";

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
        </div>
      </Container>
    </div>
  );
}
