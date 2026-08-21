import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="border-b border-cinza-borda bg-cinza-fundo">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-2.5 text-sm text-cinza-medio">
        <li className="flex items-center gap-1">
          <Link href="/" className="hover:text-azul hover:underline">
            Início
          </Link>
        </li>
        {items.map((item, index) => {
          const ehUltimo = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5 text-cinza-borda" />
              {item.href && !ehUltimo ? (
                <Link href={item.href} className="hover:text-azul hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-azul-escuro">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
