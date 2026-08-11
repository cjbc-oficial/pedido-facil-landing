import BackToTop from "./BackToTop";

const features = [
  ["PD", "Pedidos padronizados", "Monte pedidos com produtos, quantidades, preços, descontos e condições comerciais em um único fluxo."],
  ["CL", "Clientes organizados", "Mantenha os principais dados comerciais dos clientes disponíveis para consulta e novos pedidos."],
  ["PR", "Produtos e fornecedores", "Organize catálogo, preços e informações comerciais de acordo com a operação."],
  ["RT", "Rotas comerciais", "Agrupe clientes e operações por rota para facilitar o planejamento."],
  ["%", "Comissões", "Acompanhe os valores de comissão conforme as regras configuradas na implantação."],
  ["IN", "Indicadores comerciais", "Visualize informações importantes da operação em um painel simples e objetivo."],
];

const audiences = ["Representantes comerciais", "Distribuidores", "Indústrias", "Atacadistas", "Equipes de vendas"];

const faqs = [
  ["O que é o Pedido Fácil®?", "É uma plataforma White Label para gestão e emissão de pedidos comerciais, desenvolvida pela CJBC | Celso Jr Business Center."],
  ["Para quem o Pedido Fácil® foi desenvolvido?", "Para representantes comerciais, distribuidores, atacadistas, indústrias e pequenas equipes que precisam organizar clientes, produtos, fornecedores e pedidos."],
  ["O Pedido Fácil® funciona online?", "Sim. A plataforma funciona em ambiente web e pode ser acessada por dispositivos compatíveis com navegador."],
  ["O sistema pode utilizar a marca da minha empresa?", "Sim. A arquitetura White Label permite personalizar elementos da implantação de acordo com a identidade e a configuração de cada operação."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Pedido Fácil®",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Plataforma White Label para gestão e emissão de pedidos comerciais destinada a representantes comerciais, distribuidores, atacadistas, indústrias e pequenas equipes de vendas.",
      creator: {
        "@type": "Organization",
        name: "CJBC | Celso Jr Business Center",
        telephone: "+55 31 97221-9836",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55 31 97221-9836",
          contactType: "sales",
          availableLanguage: "Portuguese",
        },
      },
      offers: { "@type": "Offer", priceCurrency: "BRL", price: "79.90", description: "Mensalidade do Plano Essencial. Implantação personalizada por R$ 390,00." },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Navegação principal">
          <a href="#inicio" className="brand" aria-label="Pedido Fácil - início"><span className="brand-mark">P</span><span>Pedido Fácil<sup>®</sup></span></a>
          <div className="nav-links"><a href="#recursos">Recursos</a><a href="#white-label">White Label</a><a href="#plano">Plano</a><a href="#faq">Dúvidas</a></div>
          <div className="nav-actions">
            <a className="nav-contact" href="https://wa.me/5531972219836" target="_blank" rel="noreferrer" aria-label="Falar com a CJBC no WhatsApp"><span className="contact-full">Falar com a CJBC</span><span className="contact-short">CJBC</span></a>
            <a className="btn btn-small" href="https://pedidofacil.cjbc.com.br" target="_blank" rel="noreferrer">Entrar no Pedido Fácil</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Plataforma White Label para gestão comercial</div>
            <h1>Seus pedidos comerciais, <em>organizados do início ao fim.</em></h1>
            <p className="lead">O Pedido Fácil® ajuda representantes comerciais, distribuidores e equipes de vendas a substituir mensagens, planilhas e anotações por um processo digital simples, padronizado e profissional.</p>
            <div className="actions"><a className="btn" href="https://pedidofacil.cjbc.com.br" target="_blank" rel="noreferrer">Entrar no Pedido Fácil <b>→</b></a><a className="btn btn-ghost" href="https://wa.me/5531972219836" target="_blank" rel="noreferrer">Falar com a CJBC no WhatsApp</a></div>
            <div className="trust-row"><span>✓ Implantação personalizada</span><span>✓ Acesso em nuvem</span><span>✓ White Label</span></div>
          </div>
          <div className="product-stage" aria-label="Demonstração visual da plataforma em computador e celular">
            <div className="desktop-mock">
              <div className="mock-top"><i /><i /><i /><strong>Pedido Fácil®</strong></div>
              <div className="mock-body">
                <aside><span className="mini-logo">P</span><b>Visão geral</b><span>Clientes</span><span>Produtos</span><span>Pedidos</span></aside>
                <div className="dash"><div className="dash-head"><div><small>PAINEL COMERCIAL</small><h3>Olá, bem-vindo</h3></div><button>+ Novo pedido</button></div><div className="metrics"><div><small>Pedidos</small><strong>128</strong><em>↑ 12% este mês</em></div><div><small>Em vendas</small><strong>R$ 48,9 mil</strong><em>↑ 8% este mês</em></div><div><small>Clientes</small><strong>64</strong><em>5 novos</em></div></div><div className="orders"><b>Pedidos recentes</b><div className="order-row"><span>#0148</span><strong>Mercado Central</strong><em>R$ 1.840,00</em><i>Concluído</i></div><div className="order-row"><span>#0147</span><strong>Empório Avenida</strong><em>R$ 920,00</em><i>Pendente</i></div><div className="chart"><span /><span /><span /><span /><span /><span /></div></div></div>
              </div>
            </div>
            <div className="phone-mock"><div className="phone-notch" /><div className="phone-brand"><span className="mini-logo">P</span><b>Pedido Fácil®</b></div><small>NOVO PEDIDO</small><h3>Monte seu pedido</h3><label>Cliente</label><div className="phone-field">Mercado Central⌄</div><label>Produtos</label><div className="phone-product"><span>01</span><div><b>Produto selecionado</b><small>24 kg × R$ 38,50</small></div></div><div className="phone-total"><span>Total</span><strong>R$ 924,00</strong></div><button>Gerar pedido →</button></div>
            <div className="float-card"><span>✓</span><div><b>Pedido gerado</b><small>Pronto para compartilhar</small></div></div>
          </div>
        </div>
      </section>

      <section className="problem section" id="sobre"><div className="container"><div className="section-heading centered"><div className="eyebrow"><span /> O desafio</div><h2>Chega de montar pedidos entre<br/><em>mensagens, planilhas e anotações.</em></h2><p>Quando informações de clientes, produtos, preços e pedidos ficam espalhadas, aumentam as chances de erro e o tempo gasto em tarefas operacionais.</p></div><div className="problem-grid">{["Pedidos incompletos", "Erros de preços", "Informações espalhadas", "Retrabalho", "Cálculos manuais", "Falta de padronização"].map((item, i)=><article key={item}><span>0{i+1}</span><b>{item}</b></article>)}</div><div className="solution-note"><span>P</span><p><b>O Pedido Fácil® centraliza essas informações.</b><br/>A emissão de pedidos se transforma em um fluxo organizado e padronizado.</p></div></div></section>

      <section className="process section dark" id="solucao"><div className="container"><div className="section-heading"><div className="eyebrow light"><span /> Como funciona</div><h2>Do cadastro ao pedido<br/><em>em poucos passos.</em></h2></div><div className="steps">{[["01","Configure sua operação", "Cadastre empresa, fornecedores, produtos, clientes e condições comerciais."],["02","Monte o pedido", "Selecione cliente e produtos e informe as condições da negociação."],["03","Gere o pedido padronizado", "Confira as informações e finalize o documento comercial."],["04","Acompanhe a operação", "Consulte pedidos, indicadores e informações comerciais centralizadas."]].map((s,i)=><article key={s[0]}><div className="step-icon">{s[0]}</div><small>ETAPA {s[0]}</small><h3>{s[1]}</h3><p>{s[2]}</p>{i<3&&<b className="step-arrow">→</b>}</article>)}</div></div></section>

      <section className="features section" id="recursos"><div className="container"><div className="section-heading split"><div><div className="eyebrow"><span /> Benefícios para a operação</div><h2>Mais organização para vender.<br/><em>Menos trabalho para emitir pedidos.</em></h2></div><p>Recursos organizados para reduzir erros, padronizar o processo e facilitar a rotina comercial.</p></div><div className="feature-grid">{features.map(([icon,title,text])=><article key={title}><span className="feature-icon">{icon}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div></div></section>

      <section className="benefits section"><div className="container benefit-grid"><div className="benefit-panel"><div className="mini-window"><div className="mini-sidebar"><span className="mini-logo">P</span><i/><i/><i/><i/></div><div className="mini-content"><small>DESEMPENHO COMERCIAL</small><h3>Resultados do mês</h3><div className="growth">+24% <span>mais agilidade</span></div><div className="bars">{[40,64,48,78,58,90,82].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div></div></div><div className="badge-card"><b>✓ Menos erros</b><small>Informações sempre organizadas</small></div></div><div><div className="eyebrow"><span /> Benefícios reais</div><h2>Menos retrabalho.<br/><em>Mais controle comercial.</em></h2><p className="lead-small">Transforme uma rotina manual em um processo profissional e fácil de acompanhar.</p><div className="checks">{["Mais agilidade no dia a dia","Menos erros operacionais","Pedidos padronizados","Informações centralizadas","Imagem mais profissional","Facilidade de utilização"].map(x=><span key={x}>✓ <b>{x}</b></span>)}</div></div></div></section>

      <section className="audience section"><div className="container"><div className="section-heading centered"><div className="eyebrow"><span /> Para quem é</div><h2>Desenvolvido para operações comerciais que precisam<br/><em>ganhar organização e agilidade.</em></h2></div><div className="audience-grid">{audiences.map((x,i)=><article key={x}><span>{["RC","DI","IN","AT","EV"][i]}</span><h3>{x}</h3></article>)}</div><p className="audience-call">Representantes, distribuidores, atacadistas, indústrias e pequenas equipes encontram no <b>Pedido Fácil® uma operação mais organizada.</b></p></div></section>

      <section className="white-label section dark" id="white-label"><div className="container wl-grid"><div><div className="eyebrow light"><span /> Modelo White Label</div><h2>A plataforma com a<br/><em>identidade da sua empresa.</em></h2><p>O Pedido Fácil® utiliza uma arquitetura White Label que permite configurar identidade visual, dados comerciais e parâmetros da operação sem alterar o núcleo da plataforma.</p><div className="wl-list">{["Logo e identidade visual","Dados comerciais","Fornecedores e produtos","Tabelas de preços","Configurações da operação"].map(x=><span key={x}>✓ {x}</span>)}</div><div className="wl-quote">“Sua marca. Sua operação. Uma plataforma profissional.”</div></div><div className="brand-stack"><div className="brand-card gold"><small>SUA MARCA</small><div className="fake-logo">M</div><b>Marca Exemplo</b><span>Gestão comercial</span></div><div className="brand-card blue"><small>SUA IDENTIDADE</small><div className="fake-logo">A</div><b>Alfa Distribuidora</b><span>Pedidos e clientes</span></div><div className="brand-card white"><small>TECNOLOGIA</small><div className="fake-logo pf">PF</div><b>Pedido Fácil®</b><span>por CJBC</span></div></div></div></section>

      <section className="pricing section" id="plano"><div className="container pricing-grid"><div><div className="eyebrow"><span /> Investimento acessível</div><h2>Comece com o<br/><em>Plano Essencial.</em></h2><p>Uma solução profissional, implantada e configurada para sua operação comercial.</p><div className="included">{["Implantação personalizada","Configuração inicial","Identidade visual White Label","Estrutura operacional inicial","Treinamento remoto","Hospedagem em nuvem","Atualizações da plataforma","Suporte inicial"].map(x=><span key={x}>✓ {x}</span>)}</div></div><aside className="price-card"><div className="price-top"><span>PLANO ESSENCIAL</span><b>Mais escolhido</b></div><div className="setup"><small>IMPLANTAÇÃO</small><strong><sup>R$</sup> 390<em>,00</em></strong><p>Pagamento único</p></div><div className="monthly"><div><small>MENSALIDADE</small><strong><sup>R$</sup> 79<em>,90</em></strong></div><span>/mês</span></div><a className="btn" href="https://wa.me/5531972219836" target="_blank" rel="noreferrer">Falar com a CJBC no WhatsApp →</a><small className="safe">✓ Implantação orientada e suporte inicial</small></aside></div></section>

      <section className="faq section" id="faq"><div className="container faq-grid"><div><div className="eyebrow"><span /> Dúvidas frequentes</div><h2>Perguntas<br/><em>e respostas.</em></h2><p>Informações claras para você decidir com segurança.</p></div><div className="accordion">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta" id="contato"><div className="container"><div className="cta-box"><div className="cta-lines"/><div className="eyebrow light"><span /> Próximo passo</div><h2>Sua operação comercial pode ser<br/><em>muito mais simples.</em></h2><p>Conheça o Pedido Fácil® e veja como organizar seus pedidos em uma plataforma criada para a realidade de representantes e pequenas operações comerciais.</p><div className="actions centered-actions"><a className="btn gold-btn" href="https://pedidofacil.cjbc.com.br" target="_blank" rel="noreferrer">Entrar no Pedido Fácil →</a><a className="btn btn-dark-ghost" href="https://wa.me/5531972219836" target="_blank" rel="noreferrer" aria-label="Falar com a CJBC no WhatsApp">Falar com a CJBC no WhatsApp</a></div></div></div></section>

      <footer><div className="container footer-grid"><div><a href="#inicio" className="brand light-brand"><span className="brand-mark">P</span><span>Pedido Fácil<sup>®</sup></span></a><p>Uma solução desenvolvida pela<br/><b>CJBC | Celso Jr Business Center</b></p></div><div className="footer-links"><a href="#sobre">Sobre</a><a href="#recursos">Recursos</a><a href="#plano">Planos</a><a href="#contato">Contato</a><a href="#">Política de Privacidade</a></div></div><div className="container copyright"><span>© 2026 CJBC. Todos os direitos reservados.</span><span>Simplicidade · Organização · Confiança</span></div></footer>
      <BackToTop />
    </main>
  );
}
