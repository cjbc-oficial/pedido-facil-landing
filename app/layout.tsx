import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({variable:"--font-montserrat",subsets:["latin"]});
const lato = Lato({variable:"--font-lato",subsets:["latin"],weight:["400","700","900"]});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pedido-facil-landing.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pedido Fácil® | Sistema de Gestão de Pedidos para Representantes Comerciais",
  description: "Plataforma White Label para representantes comerciais, distribuidores e pequenas equipes de vendas. Organize clientes, produtos, fornecedores e pedidos em um único sistema.",
  keywords: ["gestão de pedidos", "sistema para representantes comerciais", "pedidos comerciais", "plataforma White Label", "gestão comercial", "emissão de pedidos"],
  authors: [{ name: "CJBC | Celso Jr Business Center" }],
  creator: "CJBC | Celso Jr Business Center",
  publisher: "CJBC | Celso Jr Business Center",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Pedido Fácil®",
    title: "Pedido Fácil® | Gestão de Pedidos Comerciais",
    description: "Organize clientes, produtos, fornecedores e pedidos em uma plataforma White Label criada para operações comerciais.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedido Fácil® | Gestão de Pedidos Comerciais",
    description: "Plataforma White Label para organizar e emitir pedidos comerciais.",
  },
  icons: {icon:"/favicon.svg",shortcut:"/favicon.svg"},
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body className={`${montserrat.variable} ${lato.variable}`}>{children}</body></html>;
}
