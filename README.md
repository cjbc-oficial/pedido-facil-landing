# Landing Pedido Fácil®

Landing comercial oficial do Pedido Fácil®, desenvolvida para publicação independente pela **CJBC | Celso Jr Business Center**.

## Dados homologados

- Aplicativo: `https://pedidofacil.cjbc.com.br`
- WhatsApp CJBC: `https://wa.me/5531972219836`
- Implantação: `R$ 390,00` — pagamento único
- Mensalidade: `R$ 79,90`

O domínio `pedidofacil.cjbc.com.br` pertence exclusivamente ao aplicativo e não deve ser usado como hostname da landing.

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

## Build e validação Cloudflare

```bash
npm run build
npm run deploy:dry
```

## Publicação pelo GitHub + Cloudflare

1. Crie o repositório `pedido-facil-landing` no GitHub e envie estes arquivos.
2. Na Cloudflare, conecte o repositório ao fluxo de build/deploy de Workers.
3. Use `npm install` como instalação e `npm run deploy` como comando de implantação.
4. Defina `NEXT_PUBLIC_SITE_URL` com a URL temporária fornecida pela Cloudflare.
5. Homologue desktop, tablet, celular, SEO e links.
6. Após definir o hostname comercial, atualize `NEXT_PUBLIC_SITE_URL` e conecte o domínio da landing.

Nenhum banco de dados, login ou segredo é necessário para esta landing.
