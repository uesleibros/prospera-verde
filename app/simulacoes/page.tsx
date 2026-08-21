import { Trash2, Leaf, History, ListChecks, HandCoins, Brain, Scale, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FeatureCard } from "@/components/ui/feature-card";
import { Reveal } from "@/components/ui/reveal";
import { criarMetadata } from "@/lib/metadata";

export const metadata = criarMetadata({
  title: "Simulações",
  description: "Jogos e simuladores interativos para aprender a reciclar corretamente e entender a cooperativa.",
  path: "/simulacoes",
});

type Categoria = "jogos" | "simuladores" | "conhecimento";

const NOMES_CATEGORIA: Record<Categoria, string> = {
  jogos: "Jogos",
  simuladores: "Simuladores e calculadoras",
  conhecimento: "Teste seus conhecimentos",
};

const SIMULACOES: {
  titulo: string;
  href: string;
  cor: "azul" | "verde" | "amarelo" | "vermelho";
  texto: string;
  Icone: typeof Trash2;
  categoria: Categoria;
}[] = [
  {
    titulo: "Jogo da separação",
    href: "/simulacoes/jogo-da-separacao",
    cor: "vermelho",
    texto: "Veja um item aparecer e arraste até a lixeira colorida correta. Mais de 25 itens, com explicação após cada jogada.",
    Icone: Trash2,
    categoria: "jogos",
  },
  {
    titulo: "Jogo da memória",
    href: "/simulacoes/jogo-da-memoria",
    cor: "verde",
    texto: "Vire as cartas e combine cada item com a lixeira certa. Encontre todos os pares no menor número de tentativas.",
    Icone: Brain,
    categoria: "jogos",
  },
  {
    titulo: "Cadeia de reciclagem",
    href: "/simulacoes/cadeia-de-reciclagem",
    cor: "vermelho",
    texto: "Coloque em ordem as etapas reais da cadeia de reciclagem, da separação em casa até virar um produto novo.",
    Icone: Workflow,
    categoria: "jogos",
  },
  {
    titulo: "Simulador de impacto ambiental",
    href: "/simulacoes/impacto-ambiental",
    cor: "azul",
    texto: "Informe quanto você recicla por mês e veja água, energia, árvores e CO₂ economizados.",
    Icone: Leaf,
    categoria: "simuladores",
  },
  {
    titulo: "Simulador da cooperativa",
    href: "/simulacoes/cooperativa",
    cor: "azul",
    texto: "Defina o número de cooperados e os materiais vendidos no mês e veja como a renda é dividida.",
    Icone: HandCoins,
    categoria: "simuladores",
  },
  {
    titulo: "Simulador de consumo consciente",
    href: "/simulacoes/consumo-consciente",
    cor: "amarelo",
    texto: "Situações do dia a dia com duas escolhas possíveis. Veja qual pesa menos no meio ambiente e por quê.",
    Icone: Scale,
    categoria: "simuladores",
  },
  {
    titulo: "Linha do tempo de decomposição",
    href: "/simulacoes/linha-do-tempo",
    cor: "amarelo",
    texto: "Escolha um material e compare, lado a lado, quanto tempo cada um leva para se decompor na natureza.",
    Icone: History,
    categoria: "simuladores",
  },
  {
    titulo: "Quiz de reciclagem",
    href: "/simulacoes/quiz",
    cor: "verde",
    texto: "Perguntas de múltipla escolha, com tempo cada vez mais curto, explicação da resposta certa e resultado final.",
    Icone: ListChecks,
    categoria: "conhecimento",
  },
];

const CATEGORIAS_ORDENADAS: Categoria[] = ["jogos", "simuladores", "conhecimento"];

export default function SimulacoesPage() {
  return (
    <div>
      <PageHeader
        titulo="Simulações"
        descricao="Aprender reciclagem na prática. Escolha uma simulação e comece: todas explicam o porquê de cada resposta."
        breadcrumb={[{ label: "Simulações" }]}
      />

      <Container className="space-y-10 py-10">
        {CATEGORIAS_ORDENADAS.map((categoria) => {
          const simulacoesDaCategoria = SIMULACOES.filter((sim) => sim.categoria === categoria);
          return (
            <section key={categoria} aria-labelledby={`categoria-${categoria}`}>
              <h2 id={`categoria-${categoria}`} className="text-lg font-bold text-azul-escuro">
                {NOMES_CATEGORIA[categoria]}
              </h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {simulacoesDaCategoria.map((sim, indice) => (
                  <Reveal key={sim.href} delay={indice * 0.05} className="h-full">
                    <FeatureCard titulo={sim.titulo} href={sim.href} cor={sim.cor} icone={<sim.Icone className="h-5 w-5" />}>
                      {sim.texto}
                    </FeatureCard>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </Container>
    </div>
  );
}
