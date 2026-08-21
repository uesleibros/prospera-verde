import Link from "next/link";
import { Recycle, MapPin, Leaf, Check, Users, Gamepad2, Trash2, History, ListChecks, HandCoins, GraduationCap, Brain, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/feature-card";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { LixeiraIcon } from "@/components/icons/LixeiraIcon";
import { materiais } from "@/data/materiais";

const ACESSO_RAPIDO = [
  {
    titulo: "Como reciclar",
    texto: "Guia completo por tipo de material: cor da lixeira, o que pode e o que não pode.",
    href: "/como-reciclar",
    cor: "azul" as const,
    Icone: Recycle,
  },
  {
    titulo: "Simulações",
    texto: "Jogos e simuladores interativos para aprender reciclagem na prática.",
    href: "/simulacoes",
    cor: "verde" as const,
    Icone: Gamepad2,
  },
  {
    titulo: "Pontos de coleta",
    texto: "Encontre onde entregar cada tipo de material na sua região.",
    href: "/pontos-de-coleta",
    cor: "amarelo" as const,
    Icone: MapPin,
  },
  {
    titulo: "Sobre a cooperativa",
    texto: "Conheça a Próspera Verde, nossa missão e como funciona uma cooperativa.",
    href: "/sobre",
    cor: "vermelho" as const,
    Icone: Users,
  },
  {
    titulo: "Curso de reciclagem",
    texto: "Quatro lições curtas, cada uma com uma verificação rápida no final.",
    href: "/curso",
    cor: "azul" as const,
    Icone: GraduationCap,
  },
];

const SIMULACOES_DESTAQUE = [
  { titulo: "Jogo da separação", href: "/simulacoes/jogo-da-separacao", texto: "Arraste os itens até a lixeira certa.", Icone: Trash2 },
  { titulo: "Simulador de impacto", href: "/simulacoes/impacto-ambiental", texto: "Veja quanto sua reciclagem economiza de água e energia.", Icone: Leaf },
  { titulo: "Linha do tempo", href: "/simulacoes/linha-do-tempo", texto: "Descubra quanto tempo cada material leva para se decompor.", Icone: History },
  { titulo: "Quiz de reciclagem", href: "/simulacoes/quiz", texto: "Teste seus conhecimentos com 10 perguntas.", Icone: ListChecks },
  { titulo: "Simulador da cooperativa", href: "/simulacoes/cooperativa", texto: "Entenda como é calculada a renda dos cooperados.", Icone: HandCoins },
  { titulo: "Jogo da memória", href: "/simulacoes/jogo-da-memoria", texto: "Combine cada item com a lixeira certa no menor número de tentativas.", Icone: Brain },
  { titulo: "Consumo consciente", href: "/simulacoes/consumo-consciente", texto: "Escolha entre duas opções em situações do dia a dia e veja o impacto de cada uma.", Icone: Scale },
];

export default function Home() {
  return (
    <div>
      <section className="bg-azul-escuro text-white">
        <Container className="grid gap-8 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-amarelo">
              <Leaf className="h-4 w-4" />
              Cooperativa de reciclagem em Itaberaba, Bahia
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Reciclar bem começa por entender bem.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              A Próspera Verde é uma cooperativa que transforma resíduos em renda
              e ensina a população a separar o lixo corretamente por meio de
              simulações interativas, gratuitas e feitas para qualquer idade.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/simulacoes" className={buttonVariants({ size: "lg", className: "bg-amarelo text-azul-escuro hover:bg-amarelo/90" })}>
                Começar a aprender
              </Link>
              <Link href="/sobre" className={buttonVariants({ variant: "outline", size: "lg", className: "border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white" })}>
                Conhecer a cooperativa
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="rounded-lg border border-white/15 bg-white/5 p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-amarelo">
              Por que separar corretamente?
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-verde-claro" />
                Reduz o volume de lixo enviado a aterros sanitários.
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-verde-claro" />
                Gera renda justa para os cooperados da reciclagem.
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-verde-claro" />
                Economiza água, energia e recursos naturais.
              </li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-cinza-borda bg-cinza-fundo py-10">
        <Container>
          <h2 className="text-center text-sm font-bold uppercase tracking-wide text-cinza-medio">
            Cada material tem a sua lixeira
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-5">
            {materiais.map((material, indice) => (
              <Reveal key={material.id} delay={indice * 0.03} y={10}>
                <Link
                  href={`/como-reciclar#${material.id}`}
                  className="flex w-20 flex-col items-center gap-1.5 text-center transition-transform hover:-translate-y-1"
                >
                  <LixeiraIcon cor={material.corHex} className="h-16 w-13" />
                  <span className="text-xs font-semibold text-cinza-texto">{material.nome}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-cinza-borda bg-white py-12">
        <Container>
          <h2 className="text-2xl font-bold text-azul-escuro">Acesso rápido</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ACESSO_RAPIDO.map((item, indice) => (
              <Reveal key={item.href} delay={indice * 0.06} className="h-full">
                <FeatureCard titulo={item.titulo} href={item.href} cor={item.cor} icone={<item.Icone className="h-5 w-5" />}>
                  {item.texto}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-azul-escuro">
                <Recycle className="h-6 w-6 text-verde" />
                Simulações interativas
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-cinza-medio">
                Aprenda brincando: jogos e simuladores que explicam o porquê de cada resposta.
              </p>
            </div>
            <Link href="/simulacoes" className="text-sm font-bold text-azul hover:underline">
              Ver todas as simulações
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SIMULACOES_DESTAQUE.map((sim, indice) => (
              <Reveal key={sim.href} delay={indice * 0.06} className="h-full">
                <FeatureCard titulo={sim.titulo} href={sim.href} cor="verde" icone={<sim.Icone className="h-5 w-5" />}>
                  {sim.texto}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-azul-escuro py-12 text-white">
        <Container>
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <GraduationCap className="h-8 w-8 text-amarelo" />
            <h2 className="text-2xl font-bold">Quer ir mais a fundo? Faça o curso completo.</h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/80">
              Quatro lições curtas sobre reciclagem, coleta seletiva e cooperativismo, cada uma com uma
              verificação rápida no final. Não é um certificado oficial, mas no final você sabe que concluiu.
            </p>
            <Link href="/curso" className={buttonVariants({ size: "lg", className: "bg-amarelo text-azul-escuro hover:bg-amarelo/90" })}>
              Começar o curso
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cinza-fundo py-12">
        <Container>
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <MapPin className="h-8 w-8 text-azul" />
            <h2 className="text-2xl font-bold text-azul-escuro">
              Não sabe onde descartar seu material reciclável?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-cinza-medio">
              Consulte nossa lista de pontos de coleta, com endereço, horário de
              funcionamento e os materiais aceitos em cada local.
            </p>
            <Link href="/pontos-de-coleta" className={buttonVariants({ size: "lg" })}>
              Ver pontos de coleta
            </Link>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
