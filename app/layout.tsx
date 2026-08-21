import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/MotionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Próspera Verde - Cooperativa de Reciclagem",
    template: "%s | Próspera Verde",
  },
  description:
    "Próspera Verde é uma cooperativa de reciclagem e gestão de resíduos sólidos que ensina a população a reciclar corretamente por meio de simulações interativas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={inter.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col antialiased">
        <a href="#conteudo-principal" className="pular-para-conteudo">
          Pular para o conteúdo principal
        </a>
        <MotionProvider>
          <TopBar />
          <Header />
          <main id="conteudo-principal" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
