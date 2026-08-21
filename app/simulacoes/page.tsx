import type { Metadata } from "next";
import { Trash2, Leaf, History, ListChecks, HandCoins } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FeatureCard } from "@/components/ui/feature-card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Simulações",
  description: "Jogos e simuladores interativos para aprender a reciclar corretamente e entender a cooperativa.",
};

const SIMULACOES = [
  {
    titulo: "Jogo da separação",
    href: "/simulacoes/jogo-da-separacao",
    cor: "vermelho" as const,
    texto: "Veja um item aparecer e arraste até a lixeira colorida correta. Mais de 25 itens, com explicação após cada jogada.",
    Icone: Trash2,
  },
  {
    titulo: "Simulador de impacto ambiental",
    href: "/simulacoes/impacto-ambiental",
    cor: "azul" as const,
    texto: "Informe quanto você recicla por mês e veja água, energia, árvores e CO₂ economizados.",
    Icone: Leaf,
  },
  {
    titulo: "Linha do tempo de decomposição",
    href: "/simulacoes/linha-do-tempo",
    cor: "amarelo" as const,
    texto: "Escolha um material e compare, lado a lado, quanto tempo cada um leva para se decompor na natureza.",
    Icone: History,
  },
  {
    titulo: "Quiz de reciclagem",
    href: "/simulacoes/quiz",
    cor: "verde" as const,
    texto: "Perguntas de múltipla escolha, com tempo cada vez mais curto, explicação da resposta certa e resultado final.",
    Icone: ListChecks,
  },
  {
    titulo: "Simulador da cooperativa",
    href: "/simulacoes/cooperativa",
    cor: "azul" as const,
    texto: "Defina o número de cooperados e os materiais vendidos no mês e veja como a renda é dividida.",
    Icone: HandCoins,
  },
];

export default function SimulacoesPage() {
  return (
    <div>
      <PageHeader
        titulo="Simulações"
        descricao="Aprender reciclagem na prática. Escolha uma simulação e comece: todas explicam o porquê de cada resposta."
        breadcrumb={[{ label: "Simulações" }]}
      />

      <Container className="py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SIMULACOES.map((sim, indice) => (
            <Reveal key={sim.href} delay={indice * 0.05} className="h-full">
              <FeatureCard titulo={sim.titulo} href={sim.href} cor={sim.cor} icone={<sim.Icone className="h-5 w-5" />}>
                {sim.texto}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
