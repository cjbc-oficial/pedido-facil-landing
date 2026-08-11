import { readFile } from "node:fs/promises";

const [page, layout, backToTop] = await Promise.all([
  readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  readFile(new URL("../app/BackToTop.tsx", import.meta.url), "utf8"),
]);

const required = [
  "https://pedidofacil.cjbc.com.br",
  "https://wa.me/5531972219836",
  "R$</sup> 390<em>,00",
  "R$</sup> 79<em>,90",
  "Entrar no Pedido Fácil",
  "Falar com a CJBC no WhatsApp",
  "Falar com a CJBC",
];

for (const value of required) {
  if (!page.includes(value)) throw new Error(`Conteúdo homologado ausente: ${value}`);
}

if (!layout.includes("NEXT_PUBLIC_SITE_URL")) {
  throw new Error("A URL canônica da landing deve permanecer configurável.");
}

if (!backToTop.includes("window.scrollTo") || !backToTop.includes("window.scrollY > 520")) {
  throw new Error("O botão de voltar ao topo não está configurado corretamente.");
}

console.log("Conteúdo oficial e configuração SEO validados.");
