import Link from "next/link";
import { Leaf } from "lucide-react";
import { MainNav } from "@/components/layout/MainNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cinza-borda bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-verde">
            <Leaf className="h-5 w-5 text-white" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-azul-escuro">Próspera Verde</span>
            <span className="block text-xs text-cinza-medio">Cooperativa de reciclagem</span>
          </span>
        </Link>
      </div>
      <MainNav />
    </header>
  );
}
