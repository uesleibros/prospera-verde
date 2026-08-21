import { CursoProvider } from "./CursoProvider";

export default function CursoLayout({ children }: LayoutProps<"/curso">) {
  return <CursoProvider>{children}</CursoProvider>;
}
