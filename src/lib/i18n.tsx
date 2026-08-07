import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

export const dict = {
  pt: {
    nav: {
      skills: "Habilidades",
      cases: "Cases",
      experience: "Experiência",
      contact: "Contato",
      cta: "Falar comigo",
    },
    hero: {
      role: "Analista de Dados & BI",
      paragraph: {
        before: "Sou ",
        name: "Luiz Eduardo Silva e Silva",
        after:
          ", Analista de Dados & BI. Ao longo de mais de uma década em ambientes orientados a negócio, desenvolvi foco em transformar dados em decisão — construindo dashboards, KPIs e processos de governança que reduzem ruído e aceleram decisões para CEOs, sócios e times multidisciplinares.",
      },
      ctaCases: "Ver cases de projetos",
      ctaHire: "Contratar para um projeto",
      meta: [
        { k: "10+", v: "anos de experiência profissional" },
        { k: "4", v: "empreendimentos atendidos simultaneamente" },
        { k: "83", v: "slides executivos automatizados" },
        { k: "6", v: "dashboards em Power BI" },
      ],
      location: "Curitiba — PR · Híbrido / Remoto",
      available: "Disponível para novos projetos",
    },
    skills: {
      eyebrow: "Stack",
      heading: "Habilidades técnicas, mapeadas por intenção.",
      sub: "Ferramentas escolhidas para entregar clareza analítica e governança — não para impressionar em slide.",
      groups: [
        {
          title: "Visualização & BI",
          items: [
            "Power BI (Avançado)",
            "Dashboards Executivos",
            "DAX",
            "Excel Avançado",
            "Google Sheets",
          ],
        },
        {
          title: "Dados & Modelagem",
          items: ["SQL", "Power Query", "ETL", "Modelagem Dimensional", "KPIs & Métricas"],
        },
        {
          title: "Governança & Qualidade",
          items: [
            "Qualidade de Dados",
            "Documentação de Processos",
            "Regras de Negócio",
            "Boas Práticas",
          ],
        },
        {
          title: "Automação & Linguagens",
          items: ["VBA / Macros", "Python (Básico)", "DAX Intermediário", "Power Automate"],
        },
        {
          title: "Ferramentas",
          items: ["Microsoft 365", "CVCRM", "ASC", "TimeShare Explorer"],
        },
        {
          title: "Idiomas",
          items: ["Inglês (Intermediário)", "Espanhol (Básico)", "Francês (Básico)"],
        },
      ],
    },
    cases: {
      eyebrow: "Projetos selecionados",
      headingA: "Quatro cases. Contextos distintos. ",
      headingB: "Um padrão de impacto.",
      note: "Cada projeto é documentado conforme o sigilo da operação — de repositório público a recriações com dados fictícios e registros de trabalho interno.",
      boxTitle: "Transparência conforme o sigilo de cada projeto",
      box: {
        p1: "Mostro o trabalho da forma mais aberta que cada contexto permite: ",
        s1: "repositório público",
        p2: " quando o projeto é demonstrativo (com .pbix, DAX e queries documentados), ",
        s2: "recriação com dados 100% fictícios",
        p3: " quando a operação é confidencial, e ",
        s3: "descrição honesta",
        p4: " quando foi trabalho interno não publicado. Nunca dados reais ou informações sigilosas — é assim que demonstro método sem violar sigilo.",
      },
      documented: "Repositório documentado",
      noRepo: "Sem repositório público",
      mockupChip: "Mockup ilustrativo · dados 100% fictícios",
      interactive: "Recriação interativa",
      originalLayout: "Power BI · Layout original",
      galleryHeader: "Dashboards do projeto · dados fictícios",
      structure: (n: number) => `Estrutura · ${n} páginas`,
      blocks: (n: number) => `${n} blocos`,
      fallbackNote: "Trabalho interno — sem repositório público.",
      mockupAlt: (title: string) => `Mockup do dashboard ${title}`,
    },
    projects: {
      "01": {
        title: "Relatório Executivo de Gestão de Carteira — Multipropriedade (NRM)",
        client: "NRM Gestão em Carteira",
        summary:
          "Reconstrução de ponta a ponta de um relatório executivo recorrente para uma operação de gestão e recuperação de carteira (BPO) no setor de multipropriedade/timeshare, consolidando 4 empreendimentos e 2 linhas de produto num deck executivo de 83 slides. Estruturei a camada de dados (ingestão e limpeza em Power Query, modelagem e padronização de indicadores entre empreendimentos e áreas), desenvolvi os módulos analíticos em Power BI com medidas DAX e montava o deck executivo final em cadência semanal com fechamento mensal. Assumi sozinho um relatório antes produzido por 2 analistas e ainda ampliei a cobertura analítica — aging de inadimplência, taxa de contenção, VSO e eficiência de conversão passaram a ser visualizados de forma padronizada. Exibido com dados 100% fictícios e vocabulário anonimizado por sigilo contratual.",
        impact: [
          { k: "83", v: "slides executivos" },
          { k: "4", v: "empreendimentos consolidados" },
          { k: "De 2 p/ 1", v: "assumido sozinho" },
        ],
        stack: ["Power BI", "DAX", "Power Query", "Modelagem", "SQL"],
        nota: "Trabalho sob sigilo contratual. Sem repositório público — a operação, os dados e os clientes da NRM são confidenciais. O mockup abaixo é uma recriação com dados 100% fictícios para demonstrar estrutura e método.",
        selo: "Projeto confidencial · sem repositório público",
      },
      "02": {
        title: "Controle de Qualidade em Campo — Nielsen (auditoria Coca-Cola)",
        client: "Nielsen Brasil",
        summary:
          "Como Field Quality Specialist na auditoria de campo (PR/SC), criei planilhas e macros de apoio para monitorar KPIs de qualidade da operação. Foi um envolvimento informal com dados que consolidou meu interesse pela área e me levou ao BI — estruturando indicadores, padronizando controles e documentando o processo de auditoria em escala regional.",
        impact: [
          { k: "PR + SC", v: "cobertura regional" },
          { k: "Macros", v: "automação de controle" },
          { k: "Field QA", v: "papel de origem em dados" },
        ],
        stack: ["Excel Avançado", "VBA", "KPIs", "Governança"],
        nota: "Trabalho interno — sem repositório público. Artefatos e indicadores descritos a partir da atuação na função.",
        selo: "Projeto interno · sem repositório público",
      },
      "03": {
        title: "Painel Financeiro & Operacional — Conserta Smart",
        client: "Conserta Smart — Quatro Barras",
        summary:
          "À frente da operação como gestor-proprietário, construí dashboards de KPIs financeiros e operacionais e automações em Excel/VBA para acompanhar o negócio de perto — do fluxo de caixa ao controle de rotinas. Um exercício completo de transformar a operação do dia a dia em indicadores de gestão.",
        impact: [
          { k: "Excel + VBA", v: "automação de rotinas" },
          { k: "KPIs", v: "financeiros e operacionais" },
          { k: "Gestão proprietária", v: "visão dona do negócio" },
        ],
        stack: ["Excel", "VBA", "Macros", "Relatórios"],
        nota: "Trabalho interno da operação própria — sem repositório público. Dashboards e automações construídos para a gestão do negócio.",
        selo: "Projeto interno · sem repositório público",
      },
      "04": {
        title: "Painel de Gestão da Carteira — Power BI",
        client: "Projeto demonstrativo (dados fictícios)",
        summary:
          "Solução de BI que transforma um book operacional de clientes (planilha alimentada manualmente) em 3 dashboards conectados no Power BI, sobre um modelo em estrela construído por Power Query — sem alterar a forma de alimentação da base. Páginas: Carteira, Painel do Cliente (drill-through + busca com navegação) e Calendário Operacional (eventos de corte, emissão e vencimento). No GitHub: repositório público completo com .pbix, base fictícia, esquema estrela, tema, backgrounds, DAX e queries M documentados.",
        impact: [
          { k: "3", v: "dashboards conectados" },
          { k: "100", v: "clientes fictícios" },
          { k: "Público", v: "repositório aberto" },
        ],
        stack: ["Power BI", "DAX", "Power Query (M)", "Modelo Estrela", "Drill-through"],
        gallery: [
          "Carteira — visão geral de clientes e status",
          "Painel do Cliente — drill-through com busca e navegação",
          "Calendário Operacional — corte, emissão e vencimento",
        ],
        nota: "",
        selo: "",
      },
    },
    experience: {
      eyebrow: "Trajetória",
      heading: "Mais de uma década de trajetória, com foco crescente em dados e BI.",
      roles: [
        {
          role: "Analista de Dados — Gestão Operacional",
          org: "NRM Gestão em Carteira LTDA",
          when: "Set/2025 — Mar/2026 · Curitiba/PR · Híbrido (PJ)",
        },
        {
          role: "Gerente Proprietário",
          org: "Conserta Smart — Quatro Barras",
          when: "Jan/2023 — Dez/2023 · Presencial",
        },
        {
          role: "Field Quality Specialist (FQS)",
          org: "Nielsen Brasil",
          when: "Jul/2015 — Mai/2018 · Curitiba/PR",
        },
        {
          role: "Auxiliar Administrativo",
          org: "Nielsen Brasil",
          when: "Mar/2013 — Jul/2015 · Curitiba/PR",
        },
      ],
      certs: [
        "Curso de Analista de BI — DNC Group · 2025",
        "Especialista em Power BI — Empowerdata · 2025",
        "Bacharel · Ciências Sociais — UFPR",
      ],
    },
    contact: {
      eyebrow: "Próximo passo",
      headingA: "Tem dados parados gerando ruído? ",
      headingB: "Vamos conversar.",
      body: "Resposta em até 24h úteis. Atendo projetos pontuais, squads multidisciplinares e operações executivas recorrentes.",
      location: "Curitiba — PR",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      tagline: "Analista de Dados · BI · Governança",
    },
    dash: {
      eyebrow: "Painel Executivo de Carteira",
      title: "Reserva Serena Resort",
      sub: "Multipropriedade · consolidado de empreendimentos · fechamento mensal",
      badge: "Dados fictícios",
      period: "Jul / 2026",
      kpis: [
        { label: "VGV acumulado", value: "R$ 38,2 mi", meta: "meta R$ 41,0 mi · −6,8%" },
        { label: "Cotas vendidas (ano)", value: "824", meta: "meta 960 · −14%" },
        { label: "Eficiência de vendas", value: "22,9%", meta: "meta 25,0% · −2,1 p.p." },
        {
          label: "Inadimplência da base",
          value: "31,5%",
          meta: "base ativa 2.740 cotas · −0,8 p.p.",
        },
      ],
      months: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
      commercialTitle: "Comercial — cotas orçado × realizado",
      commercialSub: "12 meses · 2026",
      budget: "Orçado",
      actual: "Realizado",
      agingTitle: "Aging da inadimplência",
      agingSub: "% do valor em atraso por faixa",
      agingBuckets: ["Até 30d", "30–59d", "60–89d", "90–119d", "120–149d", "150–179d", "180d+"],
      donutTitle: "Base ativa × estoque",
      donutAria: "Distribuição base ativa e estoque",
      donutCenterSub: "cotas comerc.",
      activeBase: "Base ativa",
      inventory: "Estoque",
      commercialized: "Comercializadas",
      stats: [
        { k: "VSO", v: "9 meses de estoque" },
        { k: "Ticket médio", v: "R$ 53k entrada/cota" },
        { k: "Safra origin.", v: "2026" },
      ],
      funnelTitle: "Pós-vendas — contenção",
      funnelSub: "funil de solicitações de cancelamento",
      funnelSteps: ["Solicitações", "Acionadas", "Negociadas", "Contidas"],
      saveRate: "Taxa de contenção (save rate) — Jul/26:",
      saveRateValue: "71,4%",
    },
  },
  en: {
    nav: {
      skills: "Skills",
      cases: "Case Studies",
      experience: "Experience",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      role: "Data & BI Analyst",
      paragraph: {
        before: "I'm ",
        name: "Luiz Eduardo Silva e Silva",
        after:
          ", a Data & BI Analyst. Over more than a decade in business-driven environments, I've focused on turning data into decisions — building dashboards, KPIs and governance processes that cut through noise and help CEOs, partners and cross-functional teams decide faster.",
      },
      ctaCases: "View case studies",
      ctaHire: "Hire me for a project",
      meta: [
        { k: "10+", v: "years of professional experience" },
        { k: "4", v: "developments served simultaneously" },
        { k: "83", v: "executive slides automated" },
        { k: "6", v: "Power BI dashboards" },
      ],
      location: "Curitiba, Brazil · Hybrid / Remote",
      available: "Available for new projects",
    },
    skills: {
      eyebrow: "Stack",
      heading: "Technical skills, mapped by intent.",
      sub: "Tools chosen to deliver analytical clarity and governance — not to look good on a slide.",
      groups: [
        {
          title: "Visualization & BI",
          items: [
            "Power BI (Advanced)",
            "Executive Dashboards",
            "DAX",
            "Advanced Excel",
            "Google Sheets",
          ],
        },
        {
          title: "Data & Modeling",
          items: ["SQL", "Power Query", "ETL", "Dimensional Modeling", "KPIs & Metrics"],
        },
        {
          title: "Governance & Quality",
          items: ["Data Quality", "Process Documentation", "Business Rules", "Best Practices"],
        },
        {
          title: "Automation & Languages",
          items: ["VBA / Macros", "Python (Basic)", "DAX (Intermediate)", "Power Automate"],
        },
        {
          title: "Tools",
          items: ["Microsoft 365", "CVCRM", "ASC", "TimeShare Explorer"],
        },
        {
          title: "Languages",
          items: ["English (Intermediate)", "Spanish (Basic)", "French (Basic)"],
        },
      ],
    },
    cases: {
      eyebrow: "Selected projects",
      headingA: "Four case studies. Different contexts. ",
      headingB: "One pattern of impact.",
      note: "Each project is documented according to its confidentiality — from public repositories to recreations with fictitious data and internal-work records.",
      boxTitle: "Transparency matched to each project's confidentiality",
      box: {
        p1: "I show each project as openly as its context allows: ",
        s1: "public repository",
        p2: " for demonstration projects (with documented .pbix, DAX and queries), ",
        s2: "recreation with 100% fictitious data",
        p3: " when the operation is confidential, and an ",
        s3: "honest description",
        p4: " when it was unpublished internal work. Never real data or confidential information — that's how I demonstrate method without breaching confidentiality.",
      },
      documented: "Documented repository",
      noRepo: "No public repository",
      mockupChip: "Illustrative mockup · 100% fictitious data",
      interactive: "Interactive recreation",
      originalLayout: "Power BI · Original layout",
      galleryHeader: "Project dashboards · fictitious data",
      structure: (n: number) => `Structure · ${n} pages`,
      blocks: (n: number) => `${n} blocks`,
      fallbackNote: "Internal work — no public repository.",
      mockupAlt: (title: string) => `Dashboard mockup — ${title}`,
    },
    projects: {
      "01": {
        title: "Recurring Executive Portfolio-Management Report — Timeshare (NRM)",
        client: "NRM Gestão em Carteira",
        summary:
          "End-to-end rebuild of a recurring executive report for a portfolio-management and receivables-recovery operation (BPO) in the timeshare / shared-ownership sector, consolidating 4 developments and 2 product lines into an 83-slide executive deck. I structured the data layer (ingestion and cleaning in Power Query, modeling and standardization of indicators across developments and areas), built the analytical modules in Power BI with DAX measures, and assembled the final executive deck on a weekly cadence with monthly close. I took over — solo — a report previously produced by two analysts, and still expanded its analytical coverage: delinquency aging, containment rate, VSO and conversion efficiency became standardized visuals. Shown with 100% fictitious data and anonymized vocabulary due to contractual confidentiality.",
        impact: [
          { k: "83", v: "executive slides" },
          { k: "4", v: "developments consolidated" },
          { k: "From 2 to 1", v: "handled solo" },
        ],
        stack: ["Power BI", "DAX", "Power Query", "Modeling", "SQL"],
        nota: "Work under contractual confidentiality. No public repository — NRM's operation, data and clients are confidential. The mockup below is a recreation with 100% fictitious data to demonstrate structure and method.",
        selo: "Confidential project · no public repository",
      },
      "02": {
        title: "Field Quality Control — Nielsen (Coca-Cola audit)",
        client: "Nielsen Brasil",
        summary:
          "As a Field Quality Specialist on the field audit (Paraná / Santa Catarina), I created spreadsheets and macros to monitor operational quality KPIs. It was an informal involvement with data that cemented my interest in the field and led me into BI — structuring indicators, standardizing controls and documenting the audit process at regional scale.",
        impact: [
          { k: "PR + SC", v: "regional coverage" },
          { k: "Macros", v: "control automation" },
          { k: "Field QA", v: "where my data career began" },
        ],
        stack: ["Advanced Excel", "VBA", "KPIs", "Governance"],
        nota: "Internal work — no public repository. Artifacts and indicators described from my work in the role.",
        selo: "Internal project · no public repository",
      },
      "03": {
        title: "Financial & Operational Dashboard — Conserta Smart",
        client: "Conserta Smart — Quatro Barras",
        summary:
          "Running the operation as owner-manager, I built dashboards of financial and operational KPIs and Excel/VBA automations to keep a close eye on the business — from cash flow to routine control. A complete exercise in turning day-to-day operations into management indicators.",
        impact: [
          { k: "Excel + VBA", v: "routine automation" },
          { k: "KPIs", v: "financial & operational" },
          { k: "Owner-managed", v: "owner's-eye view" },
        ],
        stack: ["Excel", "VBA", "Macros", "Reporting"],
        nota: "Internal work from my own operation — no public repository. Dashboards and automations built to manage the business.",
        selo: "Internal project · no public repository",
      },
      "04": {
        title: "Portfolio Management Dashboard — Power BI",
        client: "Demonstration project (fictitious data)",
        summary:
          "A BI solution that turns an operational client book (a manually maintained spreadsheet) into 3 connected Power BI dashboards, over a star schema built with Power Query — without changing how the base is fed. Pages: Portfolio, Client Panel (drill-through + search with navigation) and Operational Calendar (cutoff, issue and due-date events). On GitHub: a complete public repository with the .pbix, fictitious data, star schema, theme, backgrounds, DAX and documented M queries.",
        impact: [
          { k: "3", v: "connected dashboards" },
          { k: "100", v: "fictitious clients" },
          { k: "Public", v: "open repository" },
        ],
        stack: ["Power BI", "DAX", "Power Query (M)", "Star Schema", "Drill-through"],
        gallery: [
          "Portfolio — overview of clients and status",
          "Client Panel — drill-through with search and navigation",
          "Operational Calendar — cutoff, issue and due date",
        ],
        nota: "",
        selo: "",
      },
    },
    experience: {
      eyebrow: "Career",
      heading: "Over a decade of experience, with a growing focus on data and BI.",
      roles: [
        {
          role: "Data Analyst — Operations Management",
          org: "NRM Gestão em Carteira LTDA",
          when: "Sep 2025 — Mar 2026 · Curitiba, Brazil · Hybrid (contractor)",
        },
        {
          role: "Owner-Manager",
          org: "Conserta Smart — Quatro Barras",
          when: "Jan 2023 — Dec 2023 · On-site",
        },
        {
          role: "Field Quality Specialist (FQS)",
          org: "Nielsen Brasil",
          when: "Jul 2015 — May 2018 · Curitiba, Brazil",
        },
        {
          role: "Administrative Assistant",
          org: "Nielsen Brasil",
          when: "Mar 2013 — Jul 2015 · Curitiba, Brazil",
        },
      ],
      certs: [
        "BI Analyst Program — DNC Group · 2025",
        "Power BI Specialist — Empowerdata · 2025",
        "BA · Social Sciences — UFPR",
      ],
    },
    contact: {
      eyebrow: "Next step",
      headingA: "Data sitting idle and creating noise? ",
      headingB: "Let's talk.",
      body: "Reply within 24 business hours. I take on one-off projects, cross-functional squads and recurring executive operations.",
      location: "Curitiba, Brazil",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Data Analyst · BI · Governance",
    },
    dash: {
      eyebrow: "Executive Portfolio Dashboard",
      title: "Reserva Serena Resort",
      sub: "Timeshare · consolidated across developments · monthly close",
      badge: "Fictitious data",
      period: "Jul / 2026",
      kpis: [
        { label: "Cumulative sales value", value: "R$ 38.2M", meta: "target R$ 41.0M · −6.8%" },
        { label: "Shares sold (YTD)", value: "824", meta: "target 960 · −14%" },
        { label: "Sales efficiency", value: "22.9%", meta: "target 25.0% · −2.1 pp" },
        {
          label: "Portfolio delinquency",
          value: "31.5%",
          meta: "active base 2,740 shares · −0.8 pp",
        },
      ],
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      commercialTitle: "Sales — shares budget vs. actual",
      commercialSub: "12 months · 2026",
      budget: "Budget",
      actual: "Actual",
      agingTitle: "Delinquency aging",
      agingSub: "% of overdue value by bucket",
      agingBuckets: [
        "Up to 30d",
        "30–59d",
        "60–89d",
        "90–119d",
        "120–149d",
        "150–179d",
        "180d+",
      ],
      donutTitle: "Active base vs. inventory",
      donutAria: "Active base and inventory distribution",
      donutCenterSub: "shares for sale",
      activeBase: "Active base",
      inventory: "Inventory",
      commercialized: "Commercialized",
      stats: [
        { k: "Sell-through", v: "9 months of inventory" },
        { k: "Avg. ticket", v: "R$ 53k down pmt./share" },
        { k: "Cohort", v: "2026" },
      ],
      funnelTitle: "After-sales — retention",
      funnelSub: "cancellation request funnel",
      funnelSteps: ["Requests", "Contacted", "Negotiated", "Retained"],
      saveRate: "Save rate — Jul/26:",
      saveRateValue: "71.4%",
    },
  },
} as const;

export type Dict = (typeof dict)["pt"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx | null>(null);

function detectLang(): Lang {
  try {
    const stored = window.localStorage.getItem("lang");
    if (stored === "pt" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  const nav = window.navigator?.language ?? "";
  return nav.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // SSR-safe: always start as "pt", sync on the client after hydration.
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const detected = detectLang();
    setLangState((current) => (current === detected ? current : detected));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLangState(l);
        try {
          window.localStorage.setItem("lang", l);
        } catch {
          /* ignore */
        }
      },
      t: dict[lang] as unknown as Dict,
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
