import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { QuizReciclagem } from "@/components/simulacoes/QuizReciclagem";
import { CuriosidadesSimulacao } from "@/components/simulacoes/CuriosidadesSimulacao";
import { criarMetadata } from "@/lib/metadata";
import { perguntasQuiz } from "@/data/quiz";

export const metadata = criarMetadata({
  title: "Quiz de reciclagem",
  description: "Perguntas de múltipla escolha sobre reciclagem com tempo cada vez mais curto, explicação da resposta correta e classificação final.",
  path: "/simulacoes/quiz",
});

export default function QuizPage() {
  return (
    <div>
      <PageHeader
        titulo="Quiz de reciclagem"
        descricao={`Responda ${perguntasQuiz.length} perguntas de múltipla escolha e veja sua classificação final.`}
        breadcrumb={[{ label: "Simulações", href: "/simulacoes" }, { label: "Quiz de reciclagem" }]}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-2xl">
          <QuizReciclagem />
          <CuriosidadesSimulacao
            itens={[
              `Este quiz tem ${perguntasQuiz.length} perguntas, do básico até leis como a Política Nacional de Resíduos Sólidos.`,
              "O tempo para responder cada pergunta diminui aos poucos, de 20 segundos até um mínimo de 8 segundos.",
              "O vidro é o material mais reciclável que existe: pode ser derretido e transformado em vidro novo infinitas vezes, sem perder qualidade.",
            ]}
          />
        </div>
      </Container>
    </div>
  );
}
