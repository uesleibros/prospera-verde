import type { ReactNode } from "react";
import { Breadcrumb, type BreadcrumbItem } from "@/components/layout/Breadcrumb";

type PageHeaderProps = {
  titulo: string;
  descricao?: string;
  breadcrumb: BreadcrumbItem[];
  extra?: ReactNode;
};

export function PageHeader({ titulo, descricao, breadcrumb, extra }: PageHeaderProps) {
  return (
    <div>
      <Breadcrumb items={breadcrumb} />
      <div className="border-b border-cinza-borda bg-cinza-fundo">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-3xl font-bold text-azul-escuro sm:text-4xl">{titulo}</h1>
          {descricao && (
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-cinza-medio">{descricao}</p>
          )}
          {extra}
        </div>
      </div>
    </div>
  );
}
