import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { QuizReciclagem } from "@/components/simulacoes/QuizReciclagem";

export const metadata: Metadata = {
  title: "Quiz de reciclagem",
  description: "10 perguntas de múltipla escolha sobre reciclagem, com explicação da resposta correta e classificação final.",
};

export default function QuizPage() {
  return (
    <div>
      <PageHeader
        titulo="Quiz de reciclagem"
        descricao="Responda 10 perguntas de múltipla escolha e veja sua classificação final."
        breadcrumb={[{ label: "Simulações", href: "/simulacoes" }, { label: "Quiz de reciclagem" }]}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-2xl">
          <QuizReciclagem />
        </div>
      </Container>
    </div>
  );
}
