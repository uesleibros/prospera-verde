import { Lightbulb } from "lucide-react";

export function CuriosidadesSimulacao({ titulo, itens }: { titulo?: string; itens: string[] }) {
  return (
    <div className="mt-6 rounded-md border border-cinza-borda bg-cinza-fundo p-5 sm:p-6">
      <h2 className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-cinza-medio">
        <Lightbulb className="h-4 w-4" />
        {titulo ?? "Você sabia?"}
      </h2>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-cinza-texto">
        {itens.map((texto) => (
          <li key={texto} className="flex gap-2">
            <span aria-hidden="true">•</span>
            {texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
