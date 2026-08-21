import Link from "next/link";
import { Check, Target, Flag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FeatureCard } from "@/components/ui/feature-card";
import { FotoCreditada } from "@/components/ui/FotoCreditada";
import { Reveal } from "@/components/ui/reveal";
import { criarMetadata } from "@/lib/metadata";

export const metadata = criarMetadata({
  title: "Sobre a cooperativa",
  description: "Conheça a Próspera Verde: missão, objetivos e como funciona uma cooperativa de reciclagem em Itaberaba, Bahia.",
  path: "/sobre",
});

const PRINCIPIOS_COOPERATIVISMO = [
  {
    titulo: "Adesão livre e voluntária",
    texto: "Qualquer pessoa pode se tornar cooperada, sem discriminação de qualquer natureza.",
  },
  {
    titulo: "Gestão democrática",
    texto: "Cada cooperado tem direito a um voto nas decisões, independentemente de sua cota.",
  },
  {
    titulo: "Participação econômica",
    texto: "Os cooperados contribuem e se beneficiam de forma equitativa dos resultados da cooperativa.",
  },
  {
    titulo: "Autonomia e independência",
    texto: "A cooperativa é controlada por seus próprios cooperados, e não por terceiros.",
  },
  {
    titulo: "Educação, formação e informação",
    texto: "Investimento constante em capacitação dos cooperados e em educação ambiental para a comunidade.",
  },
  {
    titulo: "Intercooperação",
    texto: "Trabalho conjunto com outras cooperativas para fortalecer o movimento cooperativista.",
  },
  {
    titulo: "Interesse pela comunidade",
    texto: "Atuação voltada para o desenvolvimento sustentável da comunidade em que a cooperativa está inserida.",
  },
];

export default function SobrePage() {
  return (
    <div>
      <PageHeader
        titulo="Sobre a cooperativa"
        descricao="A Próspera Verde é uma cooperativa de catadores dedicada à coleta, triagem e reciclagem de resíduos sólidos, com um compromisso forte com a educação ambiental."
        breadcrumb={[{ label: "Sobre a cooperativa" }]}
      />

      <Container className="grid gap-10 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Reveal as="section" aria-labelledby="o-que-e">
            <h2 id="o-que-e" className="text-xl font-bold text-azul-escuro">
              O que é a Próspera Verde
            </h2>
            <p className="mt-3 leading-relaxed text-cinza-texto">
              A Próspera Verde nasceu em Itaberaba, na Bahia, da união de
              catadores e catadoras de materiais recicláveis que decidiram
              trabalhar juntos, de forma organizada e coletiva. Hoje, a
              cooperativa recolhe, separa e vende materiais recicláveis,
              gerando renda para seus cooperados e reduzindo a quantidade de
              resíduos que vai parar em aterros e lixões da região.
            </p>
            <p className="mt-3 leading-relaxed text-cinza-texto">
              Além do trabalho de triagem, a cooperativa também atua na
              educação da população, ensinando de forma simples e acessível
              como separar corretamente cada tipo de material, o que
              melhora a qualidade da coleta seletiva e valoriza o trabalho de
              todos os cooperados.
            </p>
            <FotoCreditada
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Panorama_Itaberaba.png/1280px-Panorama_Itaberaba.png"
              alt="Vista aérea de Itaberaba, Bahia, com o pórtico de entrada da cidade e a avenida principal"
              credito="Itaberaba, Bahia, cidade onde a Próspera Verde é ambientada. Foto: Ronaldosst, Wikimedia Commons, CC BY-SA 4.0"
              className="mt-5"
            />
          </Reveal>

          <Reveal as="section" aria-labelledby="missao" className="mt-10">
            <h2 id="missao" className="text-xl font-bold text-azul-escuro">
              Missão e objetivo
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <FeatureCard titulo="Missão" cor="verde" icone={<Target className="h-5 w-5" />}>
                Transformar resíduos em renda digna para os cooperados, com
                responsabilidade ambiental e organização coletiva.
              </FeatureCard>
              <FeatureCard titulo="Objetivo" cor="azul" icone={<Flag className="h-5 w-5" />}>
                Ampliar a coleta seletiva na cidade e ensinar a população a
                reciclar corretamente, reduzindo a contaminação de materiais
                recicláveis.
              </FeatureCard>
            </div>
          </Reveal>

          <Reveal as="section" aria-labelledby="como-funciona" className="mt-10">
            <h2 id="como-funciona" className="text-xl font-bold text-azul-escuro">
              Como funciona uma cooperativa
            </h2>
            <p className="mt-3 leading-relaxed text-cinza-texto">
              Uma cooperativa é uma organização formada por pessoas que se
              unem voluntariamente para satisfazer necessidades e aspirações
              econômicas, sociais e culturais em comum, por meio de uma
              empresa de propriedade coletiva e de gestão democrática.
            </p>
            <p className="mt-3 leading-relaxed text-cinza-texto">
              Diferente de uma empresa comum, na cooperativa não existem
              &ldquo;donos&rdquo; que concentram o lucro: todos os cooperados são, ao
              mesmo tempo, donos e trabalhadores do negócio. As decisões
              importantes são tomadas em assembleias, onde cada pessoa tem
              direito a um voto, independentemente de quanto material cada
              uma recolheu.
            </p>
            <FotoCreditada
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Recyclers_with_old_computers_S%C3%A3o_Paulo_March_2012.jpg/960px-Recyclers_with_old_computers_S%C3%A3o_Paulo_March_2012.jpg"
              alt="Catadores com computadores e sucata eletrônica recolhida em uma carroça, em São Paulo"
              credito="Foto ilustrativa de catadores em São Paulo, não da Próspera Verde. Foto: Victorgrigas, Wikimedia Commons, CC BY-SA 3.0"
              className="mt-5"
            />
          </Reveal>

          <Reveal as="section" aria-labelledby="divisao-renda" className="mt-10">
            <h2 id="divisao-renda" className="text-xl font-bold text-azul-escuro">
              Como é dividida a renda entre os cooperados
            </h2>
            <p className="mt-3 leading-relaxed text-cinza-texto">
              Todo mês, a cooperativa soma o valor arrecadado com a venda dos
              materiais recicláveis. Desse total, são descontados os custos
              operacionais, como transporte, energia, manutenção de
              equipamentos e taxas administrativas. O valor que sobra, chamado
              de sobra líquida, é dividido entre os cooperados de forma justa,
              combinada em assembleia, geralmente proporcional ao trabalho e
              ao tempo dedicado por cada um.
            </p>
            <p className="mt-3 leading-relaxed text-cinza-texto">
              Você pode simular esse cálculo na página de{" "}
              <Link href="/simulacoes/cooperativa" className="font-semibold text-azul hover:underline">
                simulação da cooperativa
              </Link>
              .
            </p>
          </Reveal>
        </div>

        <aside aria-labelledby="principios" className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="principios" className="text-xl font-bold text-azul-escuro">
            Princípios do cooperativismo
          </h2>
          <ul className="mt-4 space-y-4">
            {PRINCIPIOS_COOPERATIVISMO.map((principio, indice) => (
              <Reveal key={principio.titulo} as="li" delay={indice * 0.06} y={10} className="flex gap-3 rounded-md border border-cinza-borda bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-verde" />
                <div>
                  <p className="text-sm font-bold text-azul-escuro">{principio.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-cinza-medio">{principio.texto}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </aside>
      </Container>
    </div>
  );
}
