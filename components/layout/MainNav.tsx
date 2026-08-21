"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SearchBar } from "@/components/layout/SearchBar";

const LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre a cooperativa" },
  { href: "/como-reciclar", label: "Como reciclar" },
  { href: "/curso", label: "Curso" },
  { href: "/simulacoes", label: "Simulações" },
  { href: "/pontos-de-coleta", label: "Pontos de coleta" },
];

export function MainNav() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  const ehAtivo = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div className="bg-azul">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <button
          type="button"
          className="flex items-center gap-2 py-3 text-sm font-semibold text-white md:hidden"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-principal"
        >
          {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          Menu
        </button>

        <nav
          id="menu-principal"
          aria-label="Menu principal"
          className={`${aberto ? "flex" : "hidden"} w-full flex-col md:flex md:w-auto md:flex-row md:items-center`}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={ehAtivo(link.href) ? "page" : undefined}
              onClick={() => setAberto(false)}
              className={`block border-b-3 px-3 py-3 text-sm font-semibold text-white transition-colors md:border-b-0 md:border-t-3 ${
                ehAtivo(link.href)
                  ? "border-amarelo bg-white/10"
                  : "border-transparent hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-3 py-3 md:hidden">
            <SearchBar onNavigate={() => setAberto(false)} className="[&_input]:w-full" />
          </div>
        </nav>

        <div className="hidden py-2 md:block">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
