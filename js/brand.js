/* ============================================================
   brand.js — ARQUIVO UNICO DE PERSONALIZACAO (IMOBILIARIA)
   Edite somente este arquivo para entregar a um novo cliente.
   ============================================================ */

window.BRAND = {

  nome: 'Terrano Imoveis',
  sigla: 'TR',
  tagline: 'Imoveis selecionados, negociacao sem ruido',

  seo: {
    titulo: 'Terrano Imoveis — Casas e apartamentos em Porto Alegre',
    descricao: 'Imobiliaria boutique com curadoria de imoveis, avaliacao gratuita e acompanhamento juridico ate a escritura.'
  },

  tema: {
    'primary':       '#8a6a3c',
    'primary-hover': '#6f5430',
    'primary-soft':  '#f1eade',
    'primary-tint':  '#faf7f1',
    'accent':        '#2f4438',
    'accent-soft':   '#e6ebe6'
  },
  fontes: {
    display: "'Instrument Serif', Georgia, 'Times New Roman', serif",
    corpo:   "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },

  contato: {
    whatsapp: '+55 51 97777-0000',
    telefone: '+55 51 3011-0000',
    telefoneLabel: '(51) 3011-0000',
    whatsappLabel: '(51) 97777-0000',
    email: 'contato@terranoimoveis.com.br',
    endereco: 'Rua Padre Chagas, 415 — Moinhos de Vento, Porto Alegre/RS',
    enderecoCurto: 'Moinhos de Vento, Porto Alegre',
    creci: 'CRECI-RS 12.345-J',
    mensagemWhatsapp: 'Ola! Vi um imovel no site e gostaria de mais informacoes.',
    tituloMensagem: 'Novo contato pelo site'
  },

  redes: [
    { nome: 'Instagram', url: 'https://instagram.com/' },
    { nome: 'YouTube',   url: 'https://youtube.com/' }
  ],

  hero: {
    eyebrow: 'Curadoria em Porto Alegre',
    tituloHtml: 'Poucos imoveis. <em>Todos visitados</em> por nos.',
    subtitulo: 'Nao listamos tudo o que aparece. Cada imovel do nosso portfolio foi visitado, fotografado e teve a documentacao conferida antes de entrar no site.',
    ctaPrimario: 'Ver portfolio',
    ctaSecundario: 'Quero vender meu imovel',
    imagem: 'assets/hero-wide.svg'
  },

  busca: {
    cta: 'Buscar',
    tipos: ['Apartamento', 'Casa', 'Cobertura', 'Terreno', 'Sala comercial'],
    bairros: ['Moinhos de Vento', 'Bela Vista', 'Petropolis', 'Tres Figueiras', 'Menino Deus', 'Cidade Baixa'],
    faixas: ['Ate R$ 500 mil', 'R$ 500 mil a 1 mi', 'R$ 1 mi a 2 mi', 'Acima de R$ 2 mi']
  },

  imoveis: {
    eyebrow: 'Portfolio',
    titulo: 'Selecionados desta semana',
    subtitulo: 'Atualizamos as tercas. Imovel vendido sai do ar no mesmo dia.',
    verTodos: 'Ver todos os imoveis',
    itens: [
      { tag: 'Exclusivo', destaque: true, bairro: 'Moinhos de Vento', titulo: 'Apartamento alto padrao com terraco privativo', preco: 'R$ 2.480.000', condominio: 'cond. R$ 1.900', area: '186 m²', quartos: '3 suites', vagas: '3 vagas', foto: 'assets/card-1.svg' },
      { tag: 'Novo',      destaque: false, bairro: 'Tres Figueiras', titulo: 'Casa em condominio fechado com jardim', preco: 'R$ 3.150.000', condominio: 'cond. R$ 2.400', area: '320 m²', quartos: '4 suites', vagas: '4 vagas', foto: 'assets/card-2.svg' },
      { tag: 'Reformado', destaque: false, bairro: 'Bela Vista', titulo: 'Apartamento reformado de frente para o parque', preco: 'R$ 1.290.000', condominio: 'cond. R$ 1.100', area: '112 m²', quartos: '3 quartos', vagas: '2 vagas', foto: 'assets/card-3.svg' },
      { tag: 'Exclusivo', destaque: true, bairro: 'Petropolis', titulo: 'Cobertura duplex com vista aberta', preco: 'R$ 1.870.000', condominio: 'cond. R$ 1.450', area: '164 m²', quartos: '3 quartos', vagas: '2 vagas', foto: 'assets/card-4.svg' },
      { tag: 'Investimento', destaque: false, bairro: 'Cidade Baixa', titulo: 'Studio mobiliado com boa liquidez de locacao', preco: 'R$ 385.000', condominio: 'cond. R$ 480', area: '38 m²', quartos: '1 quarto', vagas: '1 vaga', foto: 'assets/card-5.svg' },
      { tag: 'Novo',      destaque: false, bairro: 'Menino Deus', titulo: 'Apartamento familiar proximo ao Beira-Rio', preco: 'R$ 740.000', condominio: 'cond. R$ 890', area: '96 m²', quartos: '3 quartos', vagas: '2 vagas', foto: 'assets/card-6.svg' }
    ]
  },

  bairros: {
    eyebrow: 'Onde atuamos',
    titulo: 'Conhecemos a rua, nao so o CEP',
    subtitulo: 'Atuacao concentrada em seis regioes. Sabemos qual predio tem infiltracao, qual condominio subiu a taxa e onde o transito trava as 18h.',
    itens: [
      { nome: 'Moinhos de Vento', qtd: '34 imoveis disponiveis', foto: 'assets/card-1.svg' },
      { nome: 'Petropolis',       qtd: '21 imoveis disponiveis', foto: 'assets/card-4.svg' },
      { nome: 'Bela Vista',       qtd: '18 imoveis disponiveis', foto: 'assets/card-3.svg' },
      { nome: 'Tres Figueiras',   qtd: '12 imoveis disponiveis', foto: 'assets/card-2.svg' }
    ]
  },

  diferenciais: {
    eyebrow: 'Como trabalhamos',
    titulo: 'O que fazemos diferente de uma imobiliaria de volume',
    itens: [
      { titulo: 'Visitamos antes de anunciar', texto: 'Nenhum imovel entra no site sem visita presencial. Se a foto nao corresponde, ele nao entra.' },
      { titulo: 'Documentacao conferida na entrada', texto: 'Matricula, IPTU e regularidade do condominio sao checados antes, nao na semana da assinatura.' },
      { titulo: 'Um corretor do inicio ao fim', texto: 'Voce nao e repassado. O mesmo profissional acompanha da primeira visita ate a entrega das chaves.' },
      { titulo: 'Avaliacao gratuita e honesta', texto: 'Se o preco que voce imagina nao fecha com o mercado, dizemos na primeira conversa e mostramos os comparaveis.' }
    ]
  },

  numeros: [
    { valor: '480+', label: 'imoveis negociados' },
    { valor: '19',   label: 'anos em Porto Alegre' },
    { valor: '52',   label: 'dias medios ate a venda' },
    { valor: '97%',  label: 'clientes que indicariam' }
  ],

  equipe: {
    eyebrow: 'Time',
    titulo: 'Corretores com nome e telefone',
    subtitulo: 'Todos com CRECI ativo e atuacao exclusiva em nossas regioes.',
    itens: [
      { nome: 'Leticia Fontes',  cargo: 'Alto padrao e coberturas', registro: 'CRECI-RS 45.221', foto: 'assets/equipe-1.svg' },
      { nome: 'Gustavo Lemos',   cargo: 'Casas em condominio',      registro: 'CRECI-RS 38.907', foto: 'assets/equipe-2.svg' },
      { nome: 'Priscila Arruda', cargo: 'Investimento e locacao',   registro: 'CRECI-RS 51.443', foto: 'assets/equipe-3.svg' },
      { nome: 'Diego Salvatti',  cargo: 'Comercial e terrenos',     registro: 'CRECI-RS 29.118', foto: 'assets/equipe-4.svg' }
    ]
  },

  depoimentos: {
    eyebrow: 'Clientes',
    titulo: 'Quem comprou e quem vendeu',
    itens: [
      { texto: 'Me disseram na cara que meu apartamento estava 18% acima do mercado. Ajustei e vendi em cinco semanas.', autor: 'Marcelo T.', detalhe: 'vendeu no Bela Vista', inicial: 'M' },
      { texto: 'Visitei sete imoveis e nenhum surpresa: tudo era exatamente como estava na foto e no anuncio.', autor: 'Fernanda R.', detalhe: 'comprou em Petropolis', inicial: 'F' },
      { texto: 'A parte juridica foi o que mais me tranquilizou. Acharam uma pendencia na matricula antes de eu assinar.', autor: 'Eduardo K.', detalhe: 'comprou em Moinhos', inicial: 'E' }
    ]
  },

  faq: {
    eyebrow: 'Duvidas',
    titulo: 'Antes de nos chamar',
    itens: [
      { p: 'Quanto custa anunciar meu imovel?', r: 'Nada para anunciar. A comissao so existe se a venda acontecer, e o percentual e combinado por escrito antes de qualquer divulgacao.' },
      { p: 'Voces trabalham com exclusividade?', r: 'Preferimos, e explicamos por que: com exclusividade investimos em fotografia profissional, video e trafego pago. Sem ela, o imovel entra no portfolio padrao.' },
      { p: 'Fazem avaliacao de imovel?', r: 'Sim, gratuita e sem compromisso. Visitamos, comparamos com negocios fechados na regiao nos ultimos 12 meses e entregamos um laudo em PDF.' },
      { p: 'Acompanham o financiamento?', r: 'Acompanhamos. Temos parceria com correspondentes bancarios e organizamos a documentacao para reduzir o tempo de aprovacao.' },
      { p: 'E se o imovel tiver pendencia na documentacao?', r: 'Mapeamos na entrada e indicamos como resolver. Se nao houver solucao viavel, avisamos em vez de deixar o problema aparecer na escritura.' }
    ]
  },

  contatoSecao: {
    eyebrow: 'Avaliacao gratuita',
    titulo: 'Quanto vale o seu imovel hoje?',
    subtitulo: 'Preencha e retornamos em ate um dia util com uma faixa de preco baseada em negocios reais da sua regiao.'
  },

  rodape: {
    sobre: 'Imobiliaria boutique com curadoria de imoveis, avaliacao gratuita e acompanhamento juridico ate a escritura.',
    aviso: 'Valores e disponibilidade sujeitos a alteracao sem aviso previo.'
  }
};
