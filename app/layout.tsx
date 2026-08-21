import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { SITE_URL, SITE_NAME, SITE_TITLE_PADRAO, SITE_DESCRICAO_PADRAO } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_PADRAO,
    template: "%s | Próspera Verde",
  },
  description: SITE_DESCRICAO_PADRAO,
  keywords: [
    "reciclagem",
    "cooperativa de reciclagem",
    "coleta seletiva",
    "educação ambiental",
    "Itaberaba",
    "Bahia",
    "cooperativismo",
    "reciclagem para crianças",
    "simulação de reciclagem",
    "como reciclar lixo",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE_PADRAO,
    description: SITE_DESCRICAO_PADRAO,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_PADRAO,
    description: SITE_DESCRICAO_PADRAO,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
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
