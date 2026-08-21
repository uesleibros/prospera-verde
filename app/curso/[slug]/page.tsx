import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { criarMetadata } from "@/lib/metadata";
import { licoesCurso } from "@/data/curso";
import { TesteLicao } from "@/components/curso/TesteLicao";

export function generateStaticParams() {
  return licoesCurso.map((licao) => ({ slug: licao.slug }));
}

export async function generateMetadata(props: PageProps<"/curso/[slug]">) {
  const { slug } = await props.params;
  const licao = licoesCurso.find((l) => l.slug === slug);
  if (!licao) return criarMetadata({ title: "Lição", description: "Lição do curso de reciclagem.", path: "/curso" });
  return criarMetadata({
    title: `Lição ${licao.numero}: ${licao.titulo}`,
    description: licao.resumo,
    path: `/curso/${licao.slug}`,
  });
}

export default async function LicaoPage(props: PageProps<"/curso/[slug]">) {
  const { slug } = await props.params;
  const indice = licoesCurso.findIndex((l) => l.slug === slug);
  if (indice === -1) notFound();

  const licao = licoesCurso[indice];
  const proximaLicao = licoesCurso[indice + 1];

  return (
    <div>
      <PageHeader
        titulo={`Lição ${licao.numero}: ${licao.titulo}`}
        descricao={licao.resumo}
        breadcrumb={[{ label: "Curso de reciclagem", href: "/curso" }, { label: `Lição ${licao.numero}` }]}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-2xl">
          <Link href="/curso" className="inline-flex items-center gap-1.5 text-sm font-semibold text-azul hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao curso
          </Link>

          <div className="mt-5 space-y-4 rounded-md border border-cinza-borda bg-white p-6 shadow-sm sm:p-8">
            {licao.conteudo.map((paragrafo, indiceParagrafo) => (
              <p key={indiceParagrafo} className="leading-relaxed text-cinza-texto">
                {paragrafo}
              </p>
            ))}
          </div>

          <div className="mt-6">
            <TesteLicao licao={licao} proximaLicaoSlug={proximaLicao?.slug} />
          </div>
        </div>
      </Container>
    </div>
  );
}
