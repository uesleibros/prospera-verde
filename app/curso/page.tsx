import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { criarMetadata } from "@/lib/metadata";
import { licoesCurso } from "@/data/curso";
import { ListaLicoes } from "@/components/curso/ListaLicoes";

const CARGA_HORARIA_TOTAL = licoesCurso.reduce((soma, licao) => soma + licao.cargaHorariaMinutos, 0);

export const metadata = criarMetadata({
  title: "Curso livre de reciclagem e sustentabilidade",
  description: "Curso livre e gratuito, em 4 módulos, sobre reciclagem, coleta seletiva e cooperativismo, com verificação de aprendizagem em cada módulo.",
  path: "/curso",
});

export default function CursoPage() {
  return (
    <div>
      <PageHeader
        titulo="Curso livre de reciclagem e sustentabilidade"
        descricao="Um curso livre e gratuito, em 4 módulos curtos, sobre reciclagem, coleta seletiva e cooperativismo. Cada módulo termina com uma verificação de aprendizagem."
        breadcrumb={[{ label: "Curso de reciclagem" }]}
        extra={
          <dl className="mt-6 grid max-w-xl grid-cols-3 gap-4 border-t border-cinza-borda pt-5 text-sm">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-cinza-medio">Módulos</dt>
              <dd className="mt-0.5 font-bold text-azul-escuro">{licoesCurso.length}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-cinza-medio">Carga horária</dt>
              <dd className="mt-0.5 font-bold text-azul-escuro">{CARGA_HORARIA_TOTAL} min</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-cinza-medio">Nível</dt>
              <dd className="mt-0.5 font-bold text-azul-escuro">Iniciante</dd>
            </div>
          </dl>
        }
      />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 rounded-md border border-cinza-borda bg-cinza-fundo p-4 text-xs leading-relaxed text-cinza-medio">
            Este é um curso livre, feito para fins educativos pela Próspera Verde. Ele não tem validade
            como certificação oficial nem carga horária reconhecida por instituição de ensino, é só um
            jeito organizado de aprender sobre reciclagem.
          </p>
          <ListaLicoes licoes={licoesCurso} />
        </div>
      </Container>
    </div>
  );
}
