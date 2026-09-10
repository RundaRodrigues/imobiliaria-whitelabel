/* ============================================================
   brand.js — ARQUIVO ÚNICO DE PERSONALIZAÇÃO (IMOBILIÁRIA)
   Edite somente este arquivo para entregar a um novo cliente.
   ============================================================ */

window.BRAND = {

  nome: 'Terrano Imóveis',
  sigla: 'TR',
  tagline: 'Imóveis selecionados, negociação sem ruído',

  seo: {
    titulo: 'Terrano Imóveis — Casas e apartamentos em Porto Alegre',
    descricao: 'Imobiliária boutique com curadoria de imóveis, avaliação gratuita e acompanhamento jurídico até a escritura.'
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
    mensagemWhatsapp: 'Olá! Vi um imóvel no site e gostaria de mais informações.',
    tituloMensagem: 'Novo contato pelo site'
  },

  redes: [
    { nome: 'Instagram', url: 'https://instagram.com/' },
    { nome: 'YouTube',   url: 'https://youtube.com/' }
  ],

  ui: {
    pularConteudo: 'Pular para o conteúdo',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
    erros: {
      obrigatorio: 'Preencha este campo para continuar.',
      telefone: 'Informe DDD e número, ex.: (51) 97777-0000.',
      email: 'Confira o e-mail, ex.: nome@dominio.com.br.',
      revisar: 'Confira os campos destacados abaixo.',
      enviadoWhatsapp: 'Abrimos o WhatsApp com a sua mensagem pronta. É só enviar.',
      enviadoEmail: 'Abrimos o seu e-mail com a mensagem pronta.'
    }
  },

  nav: {
    imoveis: 'Imóveis',
    bairros: 'Bairros',
    diferenciais: 'Como trabalhamos',
    equipe: 'Time',
    avaliacao: 'Avaliação',
    cta: 'Avaliar meu imóvel'
  },

  hero: {
    eyebrow: 'Curadoria em Porto Alegre',
    tituloHtml: 'Poucos imóveis. <em>Todos visitados</em> por nós.',
    subtitulo: 'Não listamos tudo o que aparece. Cada imóvel do nosso portfólio foi visitado, fotografado e teve a documentação conferida antes de entrar no site.',
    ctaPrimario: 'Ver portfólio',
    ctaSecundario: 'Quero vender meu imóvel',
    imagem: 'assets/hero-wide.svg'
  },

  busca: {
    cta: 'Buscar',
    tituloMensagem: 'Busca de imóvel pelo site',
    labelTipo: 'Tipo',
    labelBairro: 'Bairro',
    labelFaixa: 'Faixa de preço',
    tipos: ['Apartamento', 'Casa', 'Cobertura', 'Terreno', 'Sala comercial'],
    bairros: ['Moinhos de Vento', 'Bela Vista', 'Petrópolis', 'Três Figueiras', 'Menino Deus', 'Cidade Baixa'],
    faixas: ['Até R$ 500 mil', 'R$ 500 mil a 1 milhão', 'R$ 1 a 2 milhões', 'Acima de R$ 2 milhões']
  },

  imoveis: {
    eyebrow: 'Portfólio',
    titulo: 'Selecionados desta semana',
    subtitulo: 'Atualizamos às terças. Imóvel vendido sai do ar no mesmo dia.',
    verTodos: 'Ver todos os imóveis',
    itens: [
      { tag: 'Exclusivo',     bairro: 'Moinhos de Vento', titulo: 'Apartamento alto padrão com terraço privativo', preco: 'R$ 2.480.000', condominio: 'cond. R$ 1.900', area: '186 m²', quartos: '3 suítes',  vagas: '3 vagas', foto: 'assets/card-1.svg' },
      { tag: 'Novo',          bairro: 'Três Figueiras',   titulo: 'Casa em condomínio fechado com jardim',          preco: 'R$ 3.150.000', condominio: 'cond. R$ 2.400', area: '320 m²', quartos: '4 suítes',  vagas: '4 vagas', foto: 'assets/card-2.svg' },
      { tag: 'Reformado',     bairro: 'Bela Vista',       titulo: 'Apartamento reformado de frente para o parque',  preco: 'R$ 1.290.000', condominio: 'cond. R$ 1.100', area: '112 m²', quartos: '3 quartos', vagas: '2 vagas', foto: 'assets/card-3.svg' },
      { tag: 'Exclusivo',     bairro: 'Petrópolis',       titulo: 'Cobertura duplex com vista aberta',              preco: 'R$ 1.870.000', condominio: 'cond. R$ 1.450', area: '164 m²', quartos: '3 quartos', vagas: '2 vagas', foto: 'assets/card-4.svg' },
      { tag: 'Investimento',  bairro: 'Cidade Baixa',     titulo: 'Studio mobiliado com boa liquidez de locação',   preco: 'R$ 385.000',   condominio: 'cond. R$ 480',   area: '38 m²',  quartos: '1 quarto',  vagas: '1 vaga',  foto: 'assets/card-5.svg' },
      { tag: 'Novo',          bairro: 'Menino Deus',      titulo: 'Apartamento familiar próximo ao Beira-Rio',      preco: 'R$ 740.000',   condominio: 'cond. R$ 890',   area: '96 m²',  quartos: '3 quartos', vagas: '2 vagas', foto: 'assets/card-6.svg' }
    ]
  },

  bairros: {
    eyebrow: 'Onde atuamos',
    titulo: 'Conhecemos a rua, não só o CEP',
    subtitulo: 'Atuação concentrada em seis regiões. Sabemos qual prédio tem infiltração, qual condomínio subiu a taxa e onde o trânsito trava às 18h.',
    itens: [
      { nome: 'Moinhos de Vento', qtd: '34 imóveis disponíveis', foto: 'assets/card-1.svg' },
      { nome: 'Petrópolis',       qtd: '21 imóveis disponíveis', foto: 'assets/card-4.svg' },
      { nome: 'Bela Vista',       qtd: '18 imóveis disponíveis', foto: 'assets/card-3.svg' },
      { nome: 'Três Figueiras',   qtd: '12 imóveis disponíveis', foto: 'assets/card-2.svg' }
    ]
  },

  diferenciais: {
    eyebrow: 'Como trabalhamos',
    titulo: 'O que fazemos diferente de uma imobiliária de volume',
    itens: [
      { titulo: 'Visitamos antes de anunciar', texto: 'Nenhum imóvel entra no site sem visita presencial. Se a foto não corresponde, ele não entra.' },
      { titulo: 'Documentação conferida na entrada', texto: 'Matrícula, IPTU e regularidade do condomínio são checados antes, e não na semana da assinatura.' },
      { titulo: 'Um corretor do início ao fim', texto: 'Você não é repassado. O mesmo profissional acompanha da primeira visita até a entrega das chaves.' },
      { titulo: 'Avaliação gratuita e honesta', texto: 'Se o preço que você imagina não fecha com o mercado, dizemos na primeira conversa e mostramos os comparáveis.' }
    ]
  },

  numeros: [
    { valor: '480+', label: 'imóveis negociados' },
    { valor: '19',   label: 'anos em Porto Alegre' },
    { valor: '52',   label: 'dias médios até a venda' },
    { valor: '97%',  label: 'clientes que indicariam' }
  ],

  equipe: {
    eyebrow: 'Time',
    titulo: 'Corretores com nome e telefone',
    subtitulo: 'Todos com CRECI ativo e atuação exclusiva nas nossas regiões.',
    itens: [
      { nome: 'Letícia Fontes',  cargo: 'Alto padrão e coberturas', registro: 'CRECI-RS 45.221', foto: 'assets/equipe-1.svg' },
      { nome: 'Gustavo Lemos',   cargo: 'Casas em condomínio',      registro: 'CRECI-RS 38.907', foto: 'assets/equipe-2.svg' },
      { nome: 'Priscila Arruda', cargo: 'Investimento e locação',   registro: 'CRECI-RS 51.443', foto: 'assets/equipe-3.svg' },
      { nome: 'Diego Salvatti',  cargo: 'Comercial e terrenos',     registro: 'CRECI-RS 29.118', foto: 'assets/equipe-4.svg' }
    ]
  },

  depoimentos: {
    eyebrow: 'Clientes',
    titulo: 'Quem comprou e quem vendeu',
    itens: [
      { texto: 'Me disseram na cara que o meu apartamento estava 18% acima do mercado. Ajustei e vendi em cinco semanas.', autor: 'Marcelo T.', detalhe: 'vendeu no Bela Vista', inicial: 'M' },
      { texto: 'Visitei sete imóveis e nenhuma surpresa: tudo era exatamente como estava na foto e no anúncio.', autor: 'Fernanda R.', detalhe: 'comprou em Petrópolis', inicial: 'F' },
      { texto: 'A parte jurídica foi o que mais me tranquilizou. Acharam uma pendência na matrícula antes de eu assinar.', autor: 'Eduardo K.', detalhe: 'comprou em Moinhos', inicial: 'E' }
    ]
  },

  faq: {
    eyebrow: 'Dúvidas',
    titulo: 'Antes de nos chamar',
    itens: [
      { p: 'Quanto custa anunciar o meu imóvel?', r: 'Nada para anunciar. A comissão só existe se a venda acontecer, e o percentual é combinado por escrito antes de qualquer divulgação.' },
      { p: 'Vocês trabalham com exclusividade?', r: 'Preferimos, e explicamos por quê: com exclusividade investimos em fotografia profissional, vídeo e tráfego pago. Sem ela, o imóvel entra no portfólio padrão.' },
      { p: 'Fazem avaliação de imóvel?', r: 'Sim, gratuita e sem compromisso. Visitamos, comparamos com negócios fechados na região nos últimos 12 meses e entregamos um laudo em PDF.' },
      { p: 'Acompanham o financiamento?', r: 'Acompanhamos. Temos parceria com correspondentes bancários e organizamos a documentação para reduzir o tempo de aprovação.' },
      { p: 'E se o imóvel tiver pendência na documentação?', r: 'Mapeamos na entrada e indicamos como resolver. Se não houver solução viável, avisamos em vez de deixar o problema aparecer na escritura.' }
    ]
  },

  contatoSecao: {
    eyebrow: 'Avaliação gratuita',
    titulo: 'Quanto vale o seu imóvel hoje?',
    subtitulo: 'Preencha e retornamos em até um dia útil com uma faixa de preço baseada em negócios reais da sua região.',
    chaves: { whatsapp: 'WhatsApp', telefone: 'Telefone', endereco: 'Endereço', email: 'E-mail' },
    form: {
      nome: 'Nome',
      nomeHint: 'Ex.: Maria Silva…',
      whats: 'WhatsApp',
      whatsHint: 'Ex.: (51) 99999-0000',
      tipo: 'Tipo de imóvel',
      bairro: 'Bairro',
      bairroHint: 'Ex.: Moinhos de Vento…',
      area: 'Área privativa',
      areaHint: 'Ex.: 96 m²',
      quartos: 'Quartos',
      opcoesQuartos: ['1', '2', '3', '4 ou mais'],
      mensagem: 'Algo que devemos saber?',
      mensagemHint: 'Ex.: reformado em 2024, quero vender até março…',
      enviar: 'Solicitar avaliação gratuita',
      nota: 'Abrimos o WhatsApp com a sua solicitação pronta. Nenhum dado fica salvo no site.'
    }
  },

  rodape: {
    sobre: 'Imobiliária boutique com curadoria de imóveis, avaliação gratuita e acompanhamento jurídico até a escritura.',
    aviso: 'Valores e disponibilidade sujeitos a alteração sem aviso prévio.',
    colImoveis: 'Imóveis',
    colContato: 'Contato',
    colEscritorio: 'Escritório',
    linkPortfolio: 'Portfólio',
    linkAvaliar: 'Avaliar meu imóvel',
    direitos: 'Todos os direitos reservados.'
  }
};
