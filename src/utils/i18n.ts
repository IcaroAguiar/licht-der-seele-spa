export const languages = {
  'pt-br': 'Português (BR)',
  'pt-pt': 'Português (PT)',
  'de-ch': 'Deutsch (CH)',
  'en': 'English'
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'pt-br';

export const translations = {
  'pt-br': {
    seo: {
      title: "Licht der Seele | Rituais e Bem-Estar Holístico",
      description: "Apoio holístico e ferramentas tangíveis para integrar o autocuidado à sua rotina diária no coração de Zurique e online."
    },
    nav: {
      therapies: "Terapias",
      products: "Produtos",
      about: "Sobre",
      book: "Reservar",
      home: "Home",
      shop: "Loja",
      terms: "Termos de Uso",
      privacy: "Privacidade",
      contact: "Contato",
      faq: "FAQ",
      copyright: "© 2026 Licht der Seele Spa. Todos os direitos reservados. Luminous Holism."
    },
    hero: {
      tagline: "Holismo Moderno",
      location: "Zurique, CH",
      h1_start: "Rituais para cuidar da ",
      h1_highlight: "sua energia",
      description: "Apoio holístico e ferramentas tangíveis para integrar o autocuidado à sua rotina diária.",
      description_mobile: "Holismo luminoso para o seu bem-estar profundo.",
      book_btn: "Agendar sessão",
      book_btn_mobile: "Agendar Ritual",
      products_btn: "Ver produtos",
      view_boutique: "Ver Boutique Completa"
    },
    promise: {
      quote: "Acreditamos que a clareza mental e a paz espiritual não são destinos, mas rituais diários de intenção e presença."
    },
    store: {
      tagline: "A Loja",
      title: "Ferramentas de Intenção",
      view_all: "Ver coleção completa",
      page_title: "Coleção completa",
      page_desc: "Sabonetes artesanais, combos e sessões terapêuticas para levar o ritual de cuidado para o seu dia a dia.",
      page_cta: "Falar com a Daiane",
      sabonetes: {
        title: "Sabonetes Energéticos",
        desc: "Feitos à mão com óleos essenciais e ervas específicas para limpeza áurica e proteção energética.",
        badge: "Limpeza"
      },
      combo: {
        title: "Combo 4 Sabonetes",
        desc: "Quatro sabonetes energéticos à escolha com desconto especial. Presente perfeito — para você ou para presentear.",
        badge: "MAIS PEDIDO"
      },
      oraculo: {
        title: "Leitura de Oráculo / Cabala Terapêutica",
        desc: "Sessão individual de leitura com análise do momento atual, identificação de bloqueios e orientação para o próximo ciclo. Online ou presencial.",
        badge: "Sabedoria"
      },
      banhoterapia: {
        title: "Banhoterapia + Limpeza Completa",
        desc: "Protocolo intensivo com banhoterapia, limpeza espiritual e energética completa. Inclui 21 dias de acompanhamento após o processo.",
        badge: "Intensivo"
      },
      banhos: { title: "Banhos de Ervas", desc: "Misturas ancestrais para infusão." },
      oleos: { title: "Óleos Essenciais", desc: "Blends exclusivos para meditação e foco.", badge: "Foco" },
      kits: { title: "Kits de Ritual", desc: "Experiências completas de cura." },
      ebooks: { title: "E-books & Guias", desc: "Conhecimento para sua jornada." }
    },
    services: {
      tagline: "Experiências",
      title: "Terapias que elevam a alma",
      desc_desktop: "Sessões individuais focadas no equilíbrio energético e autoconhecimento profundo.",
      desc_mobile: "Práticas ancestrais para o homem moderno.",
      book_btn: "Agendar Consultoria",
      reiki: {
        title: "Reiki Usui",
        desc: "Harmonização dos chakras e redução profunda do estresse através da imposição de mãos. Promove calma profunda e clareza mental.",
        price: "CHF 150",
        duration: "60 min",
        badge: "Energia"
      },
      cabala: {
        title: "Leitura de Cabala",
        desc: "Um mapa para entender sua missão de alma e os desafios de crescimento pessoal.",
        price: "CHF 150",
        badge: "Sabedoria"
      }
    },
    programa: {
      tagline: "Acompanhamento Completo",
      title: "Programa Luz e Essência",
      subtitle: "Um programa completo de 4 sessões para quem quer um acompanhamento real, personalizado e contínuo — não apenas uma sessão isolada.",
      incluido_titulo: "O que está incluído",
      incluido_grupos: [
        {
          label: "Diagnóstico e abertura",
          icon: "search",
          items: [
            "Entrevista inicial de 30 minutos por vídeo (antes da 1ª sessão)",
            "Anamnese terapêutica completa",
            "Abertura da Cabala Terapêutica para compreensão do seu momento"
          ]
        },
        {
          label: "Sessões e acompanhamento",
          icon: "spa",
          items: [
            "4 Sessões de Reiki Terapêutico",
            "Aromaterapia personalizada em todas as sessões",
            "Técnicas de PNL (Programação Neurolinguística)",
            "Terapia guiada para fortalecimento emocional",
            "Acompanhamento durante todo o período do programa"
          ]
        }
      ],
      flag_principal: "Produto principal",
      investimento_titulo: "Investimento",
      inv_economia: "Economiza CHF 100",
      inv_avulsa: "Valor por sessão avulsa: CHF 150",
      inv_total: "Valor total (4 sessões): CHF 600",
      inv_total_valor: "CHF 600",
      inv_programa: "CHF 500",
      inv_programa_label: "Valor especial do programa completo",
      inv_sessao: "Cada sessão no programa: CHF 125",
      inv_sessao_curta: "CHF 125 por sessão",
      inv_cmp_avulsa: "Avulsa",
      inv_cmp_programa: "No programa",
      inv_cmp_avulsa_valor: "CHF 150 / sessão",
      trust_sessoes: "4 sessões",
      trust_acomp: "Acompanhamento contínuo",
      pagamento_titulo: "Formas de pagamento",
      pagamento: ["CHF 500 à vista no início do programa", "2 parcelas de CHF 250 (mediante acordo prévio)"],
      cta: "Quero começar o Programa",
      cronograma_titulo: "Cronograma sugerido",
      cronograma_obs: "O cronograma é exibido como sugestão visual — as datas são combinadas individualmente com cada cliente.",
      sessoes: [
        { titulo: "Sessão 1", desc: "Avaliação, abertura do processo terapêutico e início do tratamento", icon: "psychology" },
        { titulo: "Sessão 2", desc: "Limpeza energética e fortalecimento emocional com Reiki", icon: "auto_awesome" },
        { titulo: "Sessão 3", desc: "Reequilíbrio energético e reprogramação mental com Reiki", icon: "balance" },
        { titulo: "Sessão 4", desc: "Harmonização, integração e encerramento do primeiro ciclo", icon: "spa" }
      ]
    },
    local: {
      tagline: "Onde nos encontrar",
      title: "Onde nos encontrar",
      presencial_titulo: "Atendimento presencial",
      presencial: "Espaço Essência Coiffeur, Dübendorf — Suíça",
      online_titulo: "Atendimento online",
      online: "Disponível para qualquer localidade via videochamada",
      domicilio_titulo: "Atendimento em domicílio",
      domicilio: "Possível mediante taxa de deslocamento de acordo com a localização (combinar previamente com a Daiane)"
    },
    founder: {
      tagline: "A Alma por trás",
      title: "Nossa Missão em Zurique",
      desc1: "Licht der Seele nasceu do desejo de criar uma ponte entre a espiritualidade ancestral e a vida contemporânea acelerada.",
      desc2: "Em nosso refúgio em Zurique, selecionamos cada erva, cada óleo e cada técnica para garantir que sua jornada de cura seja tão luxuosa quanto eficaz. Não buscamos curas rápidas, mas transformações sustentáveis.",
      badge: "Fundado em Zurique por Daiane, uma jornada de volta à essência.",
      link: "Conheça minha história"
    },
    journey: {
      title: "Sua Jornada de Cuidado",
      subtitle: "Simplicidade e intenção em cada passo.",
      step1: {
        title: "Agende seu tempo",
        desc: "Escolha a terapia que mais ressoa com seu momento atual através do nosso sistema online."
      },
      step2: {
        title: "Receba o Cuidado",
        desc: "Uma sessão personalizada, seja presencial ou online, focada inteiramente na sua energia."
      },
      step3: {
        title: "Ritualize em casa",
        desc: "Mantenha a vibração com nossos produtos exclusivos e orientações pós-sessão."
      }
    },
    testimonials: {
      title: "O que dizem sobre nós",
      subtitle: "Histórias reais de quem se permitiu pausar.",
      items: [
        { quote: "A sessão de Reiki com a Daiane mudou minha perspectiva sobre o estresse diário. Sinto-me renovada e com muito mais clareza." },
        { quote: "Os sabonetes energéticos são um ritual sagrado para mim agora. A qualidade das ervas é visível em cada detalhe." },
        { quote: "A leitura de Cabala foi um divisor de águas. Consegui entender padrões que me travavam há anos." }
      ]
    },
    cta: {
      title: "Inicie sua jornada de clareza",
      desc_desktop: "Estamos prontos para acolher você e sua energia. Reserve seu espaço de cura hoje mesmo.",
      desc_mobile: "Permita-se um momento de pausa autêntica no coração de Zurique.",
      btn: "Agendar Agora",
      footer_desc: "Harmonizando espaços e almas através de rituais conscientes."
    },
    checkout: {
      title: "Iniciar minha jornada com a Daiane",
      description: "Preencha abaixo para entrar em contato. A Daiane responde dentro de 24 horas para combinar os detalhes da sua sessão ou programa.",
      form_name: "Nome completo",
      form_name_ph: "Seu nome",
      form_contact: "WhatsApp ou e-mail",
      form_contact_ph: "Para a Daiane entrar em contato e confirmar",
      form_subject: "O que você está buscando?",
      form_subjects: ["Programa Luz e Essência (4 sessões)", "Sessão avulsa de Reiki", "Leitura de Oráculo / Cabala", "Banhoterapia + Limpeza", "Produtos", "Tenho dúvidas, quero conversar"],
      form_preference: "Preferência de atendimento",
      form_preferences: ["Presencial (Dübendorf)", "Online", "Em domicílio", "Sem preferência"],
      form_message: "Mensagem (opcional)",
      form_message_ph: "Conte um pouco sobre o que você está vivendo ou o que busca no atendimento",
      submit_btn: "Enviar minha solicitação",
      back_btn: "Voltar"
    },
    success: {
      title: "Recebido com carinho",
      description: "A Daiane entrará em contato em até 24 horas pelo canal que você informou.",
      card_title: "Sua solicitação",
      ritual: "Interesse",
      ritual_val: "Solicitação de contato",
      therapist: "Terapeuta",
      therapist_val: "Daiane",
      datetime: "Prazo de resposta",
      datetime_val: "Até 24 horas",
      location: "Local",
      location_val: "A combinar com a Daiane",
      prep_title: "Preparando seu Espaço Interno",
      step1_title: "Hidrate-se",
      step1_desc: "Beba água pura e fresca antes da nossa sessão.",
      step2_title: "Silêncio",
      step2_desc: "Escolha um local tranquilo, sereno e sem interrupções.",
      step3_title: "Intenção",
      step3_desc: "Reserve 5 minutos antes para respirar e definir sua intenção.",
      back_home: "Voltar para Home",
      dashboard: "Acessar meu Dashboard"
    }
  },
  'pt-pt': {
    seo: {
      title: "Licht der Seele | Rituais e Bem-Estar Holístico",
      description: "Apoio holístico e ferramentas tangíveis para integrar o autocuidado na sua rotina diária no coração de Zurique e online."
    },
    nav: {
      therapies: "Terapias",
      products: "Produtos",
      about: "Sobre",
      book: "Agendar",
      home: "Home",
      shop: "Loja",
      terms: "Termos de Utilização",
      privacy: "Privacidade",
      contact: "Contacto",
      faq: "FAQ",
      copyright: "© 2026 Licht der Seele Spa. Todos os direitos reservados. Luminous Holism."
    },
    hero: {
      tagline: "Holismo Moderno",
      location: "Zurique, CH",
      h1_start: "Rituais para cuidar da ",
      h1_highlight: "sua energia",
      description: "Apoio holístico e ferramentas tangíveis para integrar o autocuidado na sua rotina diária.",
      description_mobile: "Holismo luminoso para o seu bem-estar profundo.",
      book_btn: "Agendar sessão",
      book_btn_mobile: "Agendar Ritual",
      products_btn: "Ver produtos",
      view_boutique: "Ver Boutique Completa"
    },
    promise: {
      quote: "Acreditamos que a clareza mental e a paz espiritual não são destinos, mas sim rituais diários de intenção e presença."
    },
    store: {
      tagline: "A Loja",
      title: "Ferramentas de Intenção",
      view_all: "Ver coleção completa",
      page_title: "Coleção completa",
      page_desc: "Sabonetes artesanais, combos e sessões terapêuticas para integrar o ritual de cuidado no seu dia a dia.",
      page_cta: "Falar com a Daiane",
      sabonetes: {
        title: "Sabonetes Energéticos",
        desc: "Feitos à mão com óleos essenciais e ervas específicas para limpeza áurica e proteção energética.",
        badge: "Limpeza"
      },
      combo: {
        title: "Combo 4 Sabonetes",
        desc: "Quatro sabonetes energéticos à escolha com desconto especial. Presente perfeito — para si ou para oferecer.",
        badge: "MAIS PEDIDO"
      },
      oraculo: {
        title: "Leitura de Oráculo / Cabala Terapêutica",
        desc: "Sessão individual de leitura com análise do momento atual, identificação de bloqueios e orientação para o próximo ciclo. Online ou presencial.",
        badge: "Sabedoria"
      },
      banhoterapia: {
        title: "Banhoterapia + Limpeza Completa",
        desc: "Protocolo intensivo com banhoterapia, limpeza espiritual e energética completa. Inclui 21 dias de acompanhamento após o processo.",
        badge: "Intensivo"
      },
      banhos: { title: "Banhos de Ervas", desc: "Misturas ancestrais para infusão." },
      oleos: { title: "Óleos Essenciais", desc: "Blends exclusivos para meditação e foco.", badge: "Foco" },
      kits: { title: "Kits de Ritual", desc: "Experiências completas de cura." },
      ebooks: { title: "E-books & Guias", desc: "Conhecimento para a sua jornada." }
    },
    services: {
      tagline: "Experiências",
      title: "Terapias que elevam a alma",
      desc_desktop: "Sessões individuais focadas no equilíbrio energético e autoconhecimento profundo.",
      desc_mobile: "Práticas ancestrais para o homem moderno.",
      book_btn: "Agendar Consulta",
      reiki: {
        title: "Reiki Usui",
        desc: "Harmonização dos chakras e redução profunda do stresse através da imposição de mãos. Promove calma profunda e clareia mental.",
        price: "CHF 150",
        duration: "60 min",
        badge: "Energia"
      },
      cabala: {
        title: "Leitura de Cabala",
        desc: "Um mapa para entender a sua missão de alma e os desafios de crescimento pessoal.",
        price: "CHF 150",
        badge: "Sabedoria"
      }
    },
    programa: {
      tagline: "Acompanhamento Completo",
      title: "Programa Luz e Essência",
      subtitle: "Um programa completo de 4 sessões para quem quer um acompanhamento real, personalizado e contínuo — não apenas uma sessão isolada.",
      incluido_titulo: "O que está incluído",
      incluido_grupos: [
        {
          label: "Diagnóstico e abertura",
          icon: "search",
          items: [
            "Entrevista inicial de 30 minutos por vídeo (antes da 1ª sessão)",
            "Anamnese terapêutica completa",
            "Abertura da Cabala Terapêutica para compreensão do seu momento"
          ]
        },
        {
          label: "Sessões e acompanhamento",
          icon: "spa",
          items: [
            "4 Sessões de Reiki Terapêutico",
            "Aromaterapia personalizada em todas as sessões",
            "Técnicas de PNL (Programação Neurolinguística)",
            "Terapia guiada para fortalecimento emocional",
            "Acompanhamento durante todo o período do programa"
          ]
        }
      ],
      flag_principal: "Produto principal",
      investimento_titulo: "Investimento",
      inv_economia: "Poupa CHF 100",
      inv_avulsa: "Valor por sessão avulsa: CHF 150",
      inv_total: "Valor total (4 sessões): CHF 600",
      inv_total_valor: "CHF 600",
      inv_programa: "CHF 500",
      inv_programa_label: "Valor especial do programa completo",
      inv_sessao: "Cada sessão no programa: CHF 125",
      inv_sessao_curta: "CHF 125 por sessão",
      inv_cmp_avulsa: "Avulsa",
      inv_cmp_programa: "No programa",
      inv_cmp_avulsa_valor: "CHF 150 / sessão",
      trust_sessoes: "4 sessões",
      trust_acomp: "Acompanhamento contínuo",
      pagamento_titulo: "Formas de pagamento",
      pagamento: ["CHF 500 à vista no início do programa", "2 parcelas de CHF 250 (mediante acordo prévio)"],
      cta: "Quero começar o Programa",
      cronograma_titulo: "Cronograma sugerido",
      cronograma_obs: "O cronograma é exibido como sugestão visual — as datas são combinadas individualmente com cada cliente.",
      sessoes: [
        { titulo: "Sessão 1", desc: "Avaliação, abertura do processo terapêutico e início do tratamento", icon: "psychology" },
        { titulo: "Sessão 2", desc: "Limpeza energética e fortalecimento emocional com Reiki", icon: "auto_awesome" },
        { titulo: "Sessão 3", desc: "Reequilíbrio energético e reprogramação mental com Reiki", icon: "balance" },
        { titulo: "Sessão 4", desc: "Harmonização, integração e encerramento do primeiro ciclo", icon: "spa" }
      ]
    },
    local: {
      tagline: "Onde nos encontrar",
      title: "Onde nos encontrar",
      presencial_titulo: "Atendimento presencial",
      presencial: "Espaço Essência Coiffeur, Dübendorf — Suíça",
      online_titulo: "Atendimento online",
      online: "Disponível para qualquer localidade via videochamada",
      domicilio_titulo: "Atendimento em domicílio",
      domicilio: "Possível mediante taxa de deslocação de acordo com a localização (combinar previamente com a Daiane)"
    },
    founder: {
      tagline: "A Alma por trás",
      title: "Nossa Missão em Zurique",
      desc1: "Licht der Seele nasceu do desejo de criar uma ponte entre a espiritualidade ancestral e a vida contemporânea acelerada.",
      desc2: "No nosso refúgio em Zurique, selecionamos cada erva, cada óleo e cada técnica para garantir que a sua jornada de cura seja tão luxuosa quanto eficaz. Não buscamos curas rápidas, mas transformações sustentáveis.",
      badge: "Fundado em Zurique por Daiane, uma jornada de volta à essência.",
      link: "Conheça a minha história"
    },
    journey: {
      title: "Sua Jornada de Cuidado",
      subtitle: "Simplicidade e intenção em cada passo.",
      step1: {
        title: "Agende o seu tempo",
        desc: "Escolha a terapia que mais ressoa com o seu momento atual através do nosso sistema online."
      },
      step2: {
        title: "Receba o Cuidado",
        desc: "Uma sessão personalizada, seja presencial ou online, focada inteiramente na sua energia."
      },
      step3: {
        title: "Ritualize em casa",
        desc: "Mantenha a vibração com os nossos produtos exclusivos e orientações pós-sessão."
      }
    },
    testimonials: {
      title: "O que dizem sobre nós",
      subtitle: "Histórias reais de quem se permitiu uma pausa.",
      items: [
        { quote: "A sessão de Reiki com a Daiane mudou a minha perspetiva sobre o stresse diário. Sinto-me renovada e com muito mais clareia." },
        { quote: "Os sabonetes energéticos são um ritual sagrado para mim agora. A qualidade das ervas é visível em cada detalhe." },
        { quote: "A leitura de Cabala foi um divisor de águas. Consegui entender padrões que me bloqueavam há anos." }
      ]
    },
    cta: {
      title: "Inicie a sua jornada de clareza",
      desc_desktop: "Estamos prontos para acolher a si e à sua energia. Reserve o seu espaço de cura hoje mesmo.",
      desc_mobile: "Permita-se um momento de pausa autêntica no coração de Zurique.",
      btn: "Agendar Agora",
      footer_desc: "Harmonizando espaços e almas através de rituais conscientes."
    },
    checkout: {
      title: "Iniciar a minha jornada com a Daiane",
      description: "Preencha abaixo para entrar em contacto. A Daiane responde dentro de 24 horas para combinar os detalhes da sua sessão ou programa.",
      form_name: "Nome completo",
      form_name_ph: "O seu nome",
      form_contact: "WhatsApp ou e-mail",
      form_contact_ph: "Para a Daiane entrar em contacto e confirmar",
      form_subject: "O que está à procura?",
      form_subjects: ["Programa Luz e Essência (4 sessões)", "Sessão avulsa de Reiki", "Leitura de Oráculo / Cabala", "Banhoterapia + Limpeza", "Produtos", "Tenho dúvidas, quero conversar"],
      form_preference: "Preferência de atendimento",
      form_preferences: ["Presencial (Dübendorf)", "Online", "Em domicílio", "Sem preferência"],
      form_message: "Mensagem (opcional)",
      form_message_ph: "Conte um pouco sobre o que está a viver ou o que procura no atendimento",
      submit_btn: "Enviar a minha solicitação",
      back_btn: "Voltar"
    },
    success: {
      title: "Recebido com carinho",
      description: "A Daiane entrará em contacto em até 24 horas pelo canal que indicou.",
      card_title: "A sua solicitação",
      ritual: "Interesse",
      ritual_val: "Solicitação de contacto",
      therapist: "Terapeuta",
      therapist_val: "Daiane",
      datetime: "Prazo de resposta",
      datetime_val: "Até 24 horas",
      location: "Local",
      location_val: "A combinar com a Daiane",
      prep_title: "Preparando o seu Espaço Interno",
      step1_title: "Hidrate-se",
      step1_desc: "Beba água pura e fresca antes da nossa sessão.",
      step2_title: "Silêncio",
      step2_desc: "Escolha um local tranquilo, sereno e sem interrupções.",
      step3_title: "Intenção",
      step3_desc: "Reserve 5 minutos antes para respirar e definir a sua intenção.",
      back_home: "Voltar para Home",
      dashboard: "Aceder ao meu Dashboard"
    }
  },
  'de-ch': {
    seo: {
      title: "Licht der Seele | Rituale & ganzheitliches Wohlbefinden",
      description: "Ganzheitliche Begleitung und greifbare Werkzeuge zur Integration der Selbstfürsorge in Ihren Alltag im Herzen von Zürich und online."
    },
    nav: {
      therapies: "Therapien",
      products: "Produkte",
      about: "Über uns",
      book: "Buchen",
      home: "Home",
      shop: "Shop",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutz",
      contact: "Kontakt",
      faq: "FAQ",
      copyright: "© 2026 Licht der Seele Spa. Alle Rechte vorbehalten. Luminous Holism."
    },
    hero: {
      tagline: "Ganzheitliche Pflege",
      location: "Zürich, CH",
      h1_start: "Rituale zur Pflege ",
      h1_highlight: "Ihrer Energie",
      description: "Ganzheitliche Begleitung und greifbare Werkzeuge zur Integration der Selbstfürsorge in Ihren Alltag.",
      description_mobile: "Lichtvoller Holismus für Ihr tiefes Wohlbefinden.",
      book_btn: "Sitzung buchen",
      book_btn_mobile: "Ritual buchen",
      products_btn: "Produkte ansehen",
      view_boutique: "Ganze Boutique ansehen"
    },
    promise: {
      quote: "Wir glauben, dass mentale Klarheit und spiritueller Frieden keine Ziele sind, sondern tägliche Rituale der Absicht und Präsenz."
    },
    store: {
      tagline: "Der Shop",
      title: "Werkzeuge der Absicht",
      view_all: "Vollständige Kollektion ansehen",
      page_title: "Vollständige Kollektion",
      page_desc: "Handgemachte Seifen, Sets und therapeutische Sitzungen für Ihr tägliches Ritual der Selbstfürsorge.",
      page_cta: "Daiane kontaktieren",
      sabonetes: {
        title: "Energetische Seifen",
        desc: "Handgemacht mit ätherischen Ölen und spezifischen Kräutern für aurische Reinigung und energetischen Schutz.",
        badge: "Reinigung"
      },
      combo: {
        title: "Set 4 Seifen",
        desc: "Vier energetische Seifen nach Wahl mit Sonder rabatt. Perfektes Geschenk — für sich selbst oder zum Verschenken.",
        badge: "AM BELIEBTESTEN"
      },
      oraculo: {
        title: "Orakel-Lesung / Therapeutische Kabbala",
        desc: "Einzelsitzung mit Lesung, Analyse des aktuellen Moments, Erkennung von Blockaden und Orientierung für den nächsten Zyklus. Online oder vor Ort.",
        badge: "Weisheit"
      },
      banhoterapia: {
        title: "Badetherapie + Vollständige Reinigung",
        desc: "Intensives Protokoll mit Badetherapie, vollständiger spiritueller und energetischer Reinigung. Umfasst 21 Tage Begleitung nach dem Prozess.",
        badge: "Intensiv"
      },
      banhos: { title: "Kräuterbäder", desc: "Traditionelle Mischungen zum Aufgiessen." },
      oleos: { title: "Ätherische Öle", desc: "Exklusive Blends für Meditation und Fokus.", badge: "Fokus" },
      kits: { title: "Ritual-Sets", desc: "Vollständige Heilungserlebnisse." },
      ebooks: { title: "E-Books & Ratgeber", desc: "Wissen für Ihre Reise." }
    },
    services: {
      tagline: "Erlebnisse",
      title: "Therapien, die die Seele erheben",
      desc_desktop: "Einzelsitzungen mit Fokus auf energetisches Gleichgewicht und tiefe Selbsterkenntnis.",
      desc_mobile: "Traditionelle Praktiken für den modernen Menschen.",
      book_btn: "Beratung buchen",
      reiki: {
        title: "Reiki Usui",
        desc: "Chakra-Harmonisierung und tiefe Stresslinderung durch Handauflegen. Fördert tiefe Ruhe und mentale Klarheit.",
        price: "CHF 150",
        duration: "60 min",
        badge: "Energie"
      },
      cabala: {
        title: "Kabbala-Lesung",
        desc: "Ein Wegweiser, um Ihre Seelenmission und die Herausforderungen des persönlichen Wachstums zu verstehen.",
        price: "CHF 150",
        badge: "Weisheit"
      }
    },
    programa: {
      tagline: "Vollständige Begleitung",
      title: "Programm Licht und Essenz",
      subtitle: "Ein vollständiges Programm von 4 Sitzungen für alle, die eine echte, personalisierte und kontinuierliche Begleitung möchten — nicht nur eine einzelne Sitzung.",
      incluido_titulo: "Was inbegriffen ist",
      incluido_grupos: [
        {
          label: "Diagnose und Einstieg",
          icon: "search",
          items: [
            "Initiales 30-minütiges Videointerview (vor der 1. Sitzung)",
            "Vollständige therapeutische Anamnese",
            "Öffnung der Therapeutischen Kabbala zum Verständnis Ihres Moments"
          ]
        },
        {
          label: "Sitzungen und Begleitung",
          icon: "spa",
          items: [
            "4 Sitzungen Therapeutisches Reiki",
            "Personalisierte Aromatherapie in allen Sitzungen",
            "NLP-Techniken (Neurolinguistische Programmierung)",
            "Geleitete Therapie zur emotionalen Stärkung",
            "Begleitung während des gesamten Programms"
          ]
        }
      ],
      flag_principal: "Hauptangebot",
      investimento_titulo: "Investition",
      inv_economia: "Sie sparen CHF 100",
      inv_avulsa: "Wert pro Einzelsitzung: CHF 150",
      inv_total: "Gesamtwert (4 Sitzungen): CHF 600",
      inv_total_valor: "CHF 600",
      inv_programa: "CHF 500",
      inv_programa_label: "Sonderpreis für das komplette Programm",
      inv_sessao: "Jede Sitzung im Programm: CHF 125",
      inv_sessao_curta: "CHF 125 pro Sitzung",
      inv_cmp_avulsa: "Einzeln",
      inv_cmp_programa: "Im Programm",
      inv_cmp_avulsa_valor: "CHF 150 / Sitzung",
      trust_sessoes: "4 Sitzungen",
      trust_acomp: "Begleitung laufend",
      pagamento_titulo: "Zahlungsarten",
      pagamento: ["CHF 500 bar bei Programmbeginn", "2 Raten zu CHF 250 (nach vorheriger Absprache)"],
      cta: "Ich möchte das Programm beginnen",
      cronograma_titulo: "Empfohlener Zeitplan",
      cronograma_obs: "Der Zeitplan wird als visueller Vorschlag gezeigt — die Termine werden individuell mit jeder Kundin vereinbart.",
      sessoes: [
        { titulo: "Sitzung 1", desc: "Auswertung, Eröffnung des therapeutischen Prozesses und Beginn der Behandlung", icon: "psychology" },
        { titulo: "Sitzung 2", desc: "Energetische Reinigung und emotionale Stärkung mit Reiki", icon: "auto_awesome" },
        { titulo: "Sitzung 3", desc: "Energetisches Neu-Gleichgewicht und mentale Umprogrammierung mit Reiki", icon: "balance" },
        { titulo: "Sitzung 4", desc: "Harmonisierung, Integration und Abschluss des ersten Zyklus", icon: "spa" }
      ]
    },
    local: {
      tagline: "Wo Sie uns finden",
      title: "Wo Sie uns finden",
      presencial_titulo: "Persönliche Beratung",
      presencial: "Espaço Essência Coiffeur, Dübendorf — Schweiz",
      online_titulo: "Online-Beratung",
      online: "Verfügbar für jeden Ort per Videoanruf",
      domicilio_titulo: "Hausbesuch",
      domicilio: "Möglich gegen Fahrtkostenpauschale je nach Wohnort (vorher mit Daiane vereinbaren)"
    },
    founder: {
      tagline: "Die Seele dahinter",
      title: "Unsere Mission in Zürich",
      desc1: "Licht der Seele entstand aus dem Wunsch, eine Brücke zwischen traditioneller Spiritualität und dem beschleunigten modernen Leben zu schlagen.",
      desc2: "In unserer Oase in Zürich wählen wir jedes Kraut, jedes Öl und jede Technik sorgfältig aus, um sicherzustellen, dass Ihre Heilungsreise ebenso luxuriös wie wirksam ist. Wir suchen keine schnellen Heilungen, sondern nachhaltige Veränderungen.",
      badge: "Gegründet in Zürich von Daiane, eine Reise zurück zur Essenz.",
      link: "Lernen Sie meine Geschichte kennen"
    },
    journey: {
      title: "Ihre Pflege-Reise",
      subtitle: "Einfachheit und Absicht bei jedem Schritt.",
      step1: {
        title: "Buchen Sie Ihre Zeit",
        desc: "Wählen Sie über unser Online-System die Therapie, die am besten zu Ihrem aktuellen Zustand passt."
      },
      step2: {
        title: "Erhalten Sie Zuwendung",
        desc: "Eine massgeschneiderte Sitzung, entweder persönlich oder online, ganz auf Ihre Energie ausgerichtet."
      },
      step3: {
        title: "Zuhause ritualisieren",
        desc: "Halten Sie die Schwingung hoch mit unseren exklusiven Produkten und Empfehlungen nach der Sitzung."
      }
    },
    testimonials: {
      title: "Was Kundinnen sagen",
      subtitle: "Echte Geschichten von Menschen, die innegehalten haben.",
      items: [
        { quote: "Die Reiki-Sitzung mit Daiane hat meine Sichtweise auf den täglichen Stress verändert. Ich fühle mich wie neu geboren und habe viel mehr Klarheit." },
        { quote: "Die energetischen Seifen sind jetzt ein heiliges Ritual für mich. Die Qualität der Kräuter ist in jedem Detail spürbar." },
        { quote: "Die Kabbala-Lesung war ein Wendepunkt. Ich konnte Muster verstehen, die mich seit Jahren blockiert haben." }
      ]
    },
    cta: {
      title: "Beginnen Sie Ihre Reise zur Klarheit",
      desc_desktop: "Wir sind bereit, Sie und Ihre Energie willkommen zu heissen. Reservieren Sie noch heute Ihren Heilungsraum.",
      desc_mobile: "Gönnen Sie sich einen Moment echter Pause im Herzen von Zürich.",
      btn: "Jetzt buchen",
      footer_desc: "Räume und Seelen durch bewusste Rituale harmonisieren."
    },
    checkout: {
      title: "Meine Reise mit Daiane beginnen",
      description: "Füllen Sie das Formular aus, um Kontakt aufzunehmen. Daiane antwortet innerhalb von 24 Stunden, um die Details Ihrer Sitzung oder Ihres Programms zu klären.",
      form_name: "Vollständiger Name",
      form_name_ph: "Ihr Name",
      form_contact: "WhatsApp oder E-Mail",
      form_contact_ph: "Damit Daiane Sie kontaktieren und bestätigen kann",
      form_subject: "Wonach suchen Sie?",
      form_subjects: ["Programm Licht und Essenz (4 Sitzungen)", "Einzelne Reiki-Sitzung", "Orakel-Lesung / Kabbala", "Badetherapie + Reinigung", "Produkte", "Ich habe Fragen, ich möchte sprechen"],
      form_preference: "Bevorzugte Beratung",
      form_preferences: ["Persönlich (Dübendorf)", "Online", "Hausbesuch", "Keine Präferenz"],
      form_message: "Nachricht (optional)",
      form_message_ph: "Erzählen Sie kurz, was Sie erleben oder im Beratungsgespräch suchen",
      submit_btn: "Meine Anfrage senden",
      back_btn: "Zurück"
    },
    success: {
      title: "Mit Liebe erhalten",
      description: "Daiane wird sich innerhalb von 24 Stunden über den von Ihnen angegebenen Kanal melden.",
      card_title: "Ihre Anfrage",
      ritual: "Interesse",
      ritual_val: "Kontaktanfrage",
      therapist: "Therapeutin",
      therapist_val: "Daiane",
      datetime: "Antwortzeit",
      datetime_val: "Bis 24 Stunden",
      location: "Ort",
      location_val: "Mit Daiane zu klären",
      prep_title: "Ihren inneren Raum vorbereiten",
      step1_title: "Trinken Sie",
      step1_desc: "Trinken Sie vor unserer Sitzung frisches, reines Wasser.",
      step2_title: "Stille",
      step2_desc: "Wählen Sie einen ruhigen, friedlichen Ort ohne Unterbrechungen.",
      step3_title: "Absicht",
      step3_desc: "Nehmen Sie sich 5 Minuten vorher Zeit zum Atmen und setzen Sie Ihre Absicht.",
      back_home: "Zurück zur Startseite",
      dashboard: "Zu meinem Dashboard"
    }
  },
  'en': {
    seo: {
      title: "Licht der Seele | Rituals & Holistic Well-being",
      description: "Holistic support and tangible tools to integrate self-care into your daily routine in the heart of Zurich and online."
    },
    nav: {
      therapies: "Therapies",
      products: "Products",
      about: "About",
      book: "Book",
      home: "Home",
      shop: "Shop",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      contact: "Contact",
      faq: "FAQ",
      copyright: "© 2026 Licht der Seele Spa. All rights reserved. Luminous Holism."
    },
    hero: {
      tagline: "Modern Holism",
      location: "Zurich, CH",
      h1_start: "Rituals to care for ",
      h1_highlight: "your energy",
      description: "Holistic support and tangible tools to integrate self-care into your daily routine.",
      description_mobile: "Luminous holism for your deep well-being.",
      book_btn: "Book a session",
      book_btn_mobile: "Book a Ritual",
      products_btn: "View products",
      view_boutique: "View Full Boutique"
    },
    promise: {
      quote: "We believe that mental clarity and spiritual peace are not destinations, but daily rituals of intention and presence."
    },
    store: {
      tagline: "The Shop",
      title: "Tools of Intention",
      view_all: "View full collection",
      page_title: "Full collection",
      page_desc: "Handcrafted soaps, combos and therapeutic sessions to bring your care ritual into everyday life.",
      page_cta: "Talk to Daiane",
      sabonetes: {
        title: "Energetic Soaps",
        desc: "Handcrafted with essential oils and specific herbs for auric cleansing and energetic protection.",
        badge: "Cleansing"
      },
      combo: {
        title: "Combo 4 Soaps",
        desc: "Four energetic soaps of your choice with a special discount. The perfect gift — for yourself or to give.",
        badge: "MOST ORDERED"
      },
      oraculo: {
        title: "Oracle Reading / Therapeutic Kabbalah",
        desc: "Individual reading session with analysis of the current moment, identification of blocks and guidance for the next cycle. Online or in person.",
        badge: "Wisdom"
      },
      banhoterapia: {
        title: "Bath Therapy + Complete Cleansing",
        desc: "Intensive protocol with bath therapy, complete spiritual and energetic cleansing. Includes 21 days of follow-up after the process.",
        badge: "Intensive"
      },
      banhos: { title: "Herbal Baths", desc: "Ancestral blends for infusion." },
      oleos: { title: "Essential Oils", desc: "Exclusive blends for meditation and focus.", badge: "Focus" },
      kits: { title: "Ritual Kits", desc: "Complete healing experiences." },
      ebooks: { title: "E-books & Guides", desc: "Knowledge for your journey." }
    },
    services: {
      tagline: "Experiences",
      title: "Therapies that elevate the soul",
      desc_desktop: "Individual sessions focused on energy balance and deep self-knowledge.",
      desc_mobile: "Ancestral practices for the modern human.",
      book_btn: "Book a Consultation",
      reiki: {
        title: "Reiki Usui",
        desc: "Chakra harmonization and deep stress reduction through laying on of hands. Promotes deep calm and mental clarity.",
        price: "CHF 150",
        duration: "60 min",
        badge: "Energy"
      },
      cabala: {
        title: "Kabbalah Reading",
        desc: "A map to understand your soul's mission and personal growth challenges.",
        price: "CHF 150",
        badge: "Wisdom"
      }
    },
    programa: {
      tagline: "Complete Accompaniment",
      title: "Light and Essence Program",
      subtitle: "A complete 4-session program for those who want real, personalized and continuous accompaniment — not just a single session.",
      incluido_titulo: "What is included",
      incluido_grupos: [
        {
          label: "Diagnosis and onboarding",
          icon: "search",
          items: [
            "Initial 30-minute video interview (before the 1st session)",
            "Complete therapeutic anamnesis",
            "Opening of the Therapeutic Kabbalah to understand your moment"
          ]
        },
        {
          label: "Sessions and support",
          icon: "spa",
          items: [
            "4 Therapeutic Reiki sessions",
            "Personalized aromatherapy in all sessions",
            "NLP techniques (Neuro-Linguistic Programming)",
            "Guided therapy for emotional strengthening",
            "Accompaniment throughout the program"
          ]
        }
      ],
      flag_principal: "Flagship program",
      investimento_titulo: "Investment",
      inv_economia: "Save CHF 100",
      inv_avulsa: "Value per single session: CHF 150",
      inv_total: "Total value (4 sessions): CHF 600",
      inv_total_valor: "CHF 600",
      inv_programa: "CHF 500",
      inv_programa_label: "Special price for the complete program",
      inv_sessao: "Each session in the program: CHF 125",
      inv_sessao_curta: "CHF 125 per session",
      inv_cmp_avulsa: "Single",
      inv_cmp_programa: "In program",
      inv_cmp_avulsa_valor: "CHF 150 / session",
      trust_sessoes: "4 sessions",
      trust_acomp: "Ongoing support",
      pagamento_titulo: "Payment methods",
      pagamento: ["CHF 500 upfront at the start of the program", "2 installments of CHF 250 (by prior agreement)"],
      cta: "I want to start the Program",
      cronograma_titulo: "Suggested schedule",
      cronograma_obs: "The schedule is shown as a visual suggestion — dates are arranged individually with each client.",
      sessoes: [
        { titulo: "Session 1", desc: "Assessment, opening of the therapeutic process and start of treatment", icon: "psychology" },
        { titulo: "Session 2", desc: "Energetic cleansing and emotional strengthening with Reiki", icon: "auto_awesome" },
        { titulo: "Session 3", desc: "Energetic rebalance and mental reprogramming with Reiki", icon: "balance" },
        { titulo: "Session 4", desc: "Harmonization, integration and closing of the first cycle", icon: "spa" }
      ]
    },
    local: {
      tagline: "Where to find us",
      title: "Where to find us",
      presencial_titulo: "In-person attendance",
      presencial: "Espaço Essência Coiffeur, Dübendorf — Switzerland",
      online_titulo: "Online attendance",
      online: "Available for any location via video call",
      domicilio_titulo: "Home attendance",
      domicilio: "Possible with a travel fee depending on location (arrange in advance with Daiane)"
    },
    founder: {
      tagline: "The Soul behind",
      title: "Our Mission in Zurich",
      desc1: "Licht der Seele was born from the desire to create a bridge between ancestral spirituality and fast-paced contemporary life.",
      desc2: "In our sanctuary in Zurich, we carefully select each herb, oil, and technique to ensure your healing journey is as luxurious as it is effective. We do not seek quick fixes, but sustainable transformations.",
      badge: "Founded in Zurich by Daiane, a journey back to essence.",
      link: "Learn my story"
    },
    journey: {
      title: "Your Care Journey",
      subtitle: "Simplicity and intention in every step.",
      step1: {
        title: "Schedule your time",
        desc: "Choose the therapy that resonates most with your current moment through our online system."
      },
      step2: {
        title: "Receive Care",
        desc: "A personalized session, either in-person or online, fully focused on your energy."
      },
      step3: {
        title: "Ritualize at home",
        desc: "Maintain the vibration with our exclusive products and post-session guidance."
      }
    },
    testimonials: {
      title: "What clients say",
      subtitle: "Real stories from those who allowed themselves to pause.",
      items: [
        { quote: "The Reiki session with Daiane changed my perspective on daily stress. I feel renewed and with much more clarity." },
        { quote: "The energetic soaps are a sacred ritual for me now. The quality of the herbs is visible in every detail." },
        { quote: "The Kabbalah reading was a turning point. I was able to understand patterns that had blocked me for years." }
      ]
    },
    cta: {
      title: "Start your journey to clarity",
      desc_desktop: "We are ready to welcome you and your energy. Reserve your healing space today.",
      desc_mobile: "Allow yourself a moment of authentic pause in the heart of Zurich.",
      btn: "Book Now",
      footer_desc: "Harmonizing spaces and souls through conscious rituals."
    },
    checkout: {
      title: "Start my journey with Daiane",
      description: "Fill out the form below to get in touch. Daiane replies within 24 hours to arrange the details of your session or program.",
      form_name: "Full name",
      form_name_ph: "Your name",
      form_contact: "WhatsApp or email",
      form_contact_ph: "For Daiane to contact you and confirm",
      form_subject: "What are you looking for?",
      form_subjects: ["Light and Essence Program (4 sessions)", "Single Reiki session", "Oracle Reading / Kabbalah", "Bath Therapy + Cleansing", "Products", "I have questions, I'd like to talk"],
      form_preference: "Attendance preference",
      form_preferences: ["In-person (Dübendorf)", "Online", "At home", "No preference"],
      form_message: "Message (optional)",
      form_message_ph: "Tell us a bit about what you are experiencing or what you seek in the session",
      submit_btn: "Send my request",
      back_btn: "Back"
    },
    success: {
      title: "Received with care",
      description: "Daiane will contact you within 24 hours through the channel you provided.",
      card_title: "Your request",
      ritual: "Interest",
      ritual_val: "Contact request",
      therapist: "Therapist",
      therapist_val: "Daiane",
      datetime: "Response time",
      datetime_val: "Within 24 hours",
      location: "Location",
      location_val: "To be arranged with Daiane",
      prep_title: "Preparing Your Inner Space",
      step1_title: "Hydrate",
      step1_desc: "Drink pure, fresh water before our session.",
      step2_title: "Silence",
      step2_desc: "Choose a quiet, serene place without interruptions.",
      step3_title: "Intention",
      step3_desc: "Take 5 minutes beforehand to breathe and set your intention.",
      back_home: "Back to Home",
      dashboard: "Access My Dashboard"
    }
  }
} as const;

export function getTranslations(lang: string | undefined) {
  const code = (lang && lang.toLowerCase() in translations ? lang.toLowerCase() : defaultLocale) as Locale;
  return translations[code];
}

export function getLocalePath(path: string, lang: string | undefined) {
  const code = (lang && lang.toLowerCase() in translations ? lang.toLowerCase() : defaultLocale) as Locale;

  // Normalize path
  let cleanPath = path;
  if (!cleanPath.startsWith('/') && !cleanPath.startsWith('#')) {
    cleanPath = '/' + cleanPath;
  }

  if (code === defaultLocale) {
    return cleanPath;
  }

  // If it's a hash, we need to prefix it with the locale path: /locale#hash
  if (cleanPath.startsWith('#')) {
    return `/${code}/${cleanPath}`;
  }

  return `/${code}${cleanPath === '/' ? '' : cleanPath}`;
}
