import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  Database,
  Github,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  LineChart,
  Workflow,
  Code2,
  TableProperties,
  Languages,
  BookOpen,
} from "lucide-react";
import capivariMockup from "@/assets/case-capivari-mockup.jpg";
import heroBanner from "@/assets/hero-banner.png";
import logoIcon from "@/assets/logo-icon.png";
import painelCarteira01 from "@/assets/painel-carteira/01_carteira.png";
import painelCarteira02 from "@/assets/painel-carteira/02_painel_cliente.png";
import painelCarteira03 from "@/assets/painel-carteira/03_calendario.png";

const SITE_URL = "https://luizeduardodev.lovable.app";
const PAGE_TITLE = "Luiz Eduardo Silva e Silva — Analista de Dados & BI";
const PAGE_DESCRIPTION =
  "Portfólio profissional de Luiz Eduardo Silva e Silva — Analista de Dados & BI. Power BI, SQL, governança e dashboards executivos.";
const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/dad00b1f-91d4-47e6-a517-80107bc8c49b";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Luiz Eduardo Silva e Silva",
          jobTitle: "Analista de Dados & BI",
          url: SITE_URL,
          image: OG_IMAGE,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Curitiba",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          email: "mailto:luiz.e.silva.silva@gmail.com",
          telephone: "+55-41-98902-3978",
          sameAs: [
            "https://www.linkedin.com/in/luizsilvaesilva/",
            "https://github.com/LuizEduardoSilvaSilva",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "professional",
              email: "luiz.e.silva.silva@gmail.com",
              telephone: "+55-41-98902-3978",
              areaServed: "BR",
              availableLanguage: ["Portuguese", "English"],
            },
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const skills = [
  {
    icon: BarChart3,
    title: "Visualização & BI",
    items: ["Power BI (Avançado)", "Dashboards Executivos", "DAX", "Excel Avançado", "Google Sheets"],
  },
  {
    icon: Database,
    title: "Dados & Modelagem",
    items: ["SQL", "Power Query", "ETL", "Modelagem Dimensional", "KPIs & Métricas"],
  },
  {
    icon: ShieldCheck,
    title: "Governança & Qualidade",
    items: ["Qualidade de Dados", "Documentação de Processos", "Regras de Negócio", "Boas Práticas"],
  },
  {
    icon: Code2,
    title: "Automação & Linguagens",
    items: ["VBA / Macros", "Python (Básico)", "DAX Intermediário", "Power Automate"],
  },
  {
    icon: TableProperties,
    title: "Ferramentas",
    items: ["Microsoft 365", "CVCRM", "ASC", "TimeShare Explorer"],
  },
  {
    icon: Languages,
    title: "Idiomas",
    items: ["Inglês (Intermediário)", "Espanhol (Básico)", "Francês (Básico)"],
  },
];

type Project = {
  n: string;
  title: string;
  client: string;
  summary: string;
  impact: { k: string; v: string }[];
  stack: string[];
  href: string;
  visual?: string;
  wireframe?: { name: string; blocks: string[] }[];
  gallery?: { src: string; caption: string }[];
};

const projects: Project[] = [
  {
    n: "01",
    title: "Relatório Executivo Semanal — 83 slides",
    client: "NRM Gestão em Carteira",
    summary:
      "Consolidação de KPIs de vendas, captação, recebíveis, inadimplência e campanhas de cobrança para o CEO e sócios de 4 empresas simultaneamente. No GitHub: README com contexto de negócio, arquitetura de dados, queries SQL, lógica DAX e documentação de governança.",
    impact: [
      { k: "4", v: "empresas atendidas" },
      { k: "83", v: "slides automatizados" },
      { k: "Semanal", v: "cadência executiva" },
    ],
    stack: ["Power BI", "DAX", "Power Query", "SQL", "VBA"],
    href: "https://github.com/LuizEduardoSilvaSilva",
  },
  {
    n: "02",
    title: "Controle de Qualidade em Campo — Nielsen (auditoria Coca-Cola)",
    client: "Nielsen Brasil",
    summary:
      "Como Field Quality Specialist na auditoria de campo (PR/SC), criei planilhas e macros de apoio para monitorar KPIs de qualidade da operação — um envolvimento informal com dados que consolidou meu interesse pela área e me levou ao BI. No GitHub: README com escopo da operação, macros documentadas e estrutura de KPIs, com prints anonimizados.",
    impact: [
      { k: "PR + SC", v: "cobertura regional" },
      { k: "Macros", v: "automação de controle" },
      { k: "Field QA", v: "papel de origem em dados" },
    ],
    stack: ["Excel Avançado", "VBA", "KPIs", "Governança"],
    href: "https://github.com/LuizEduardoSilvaSilva",
  },
  {
    n: "03",
    title: "Painel Financeiro & Operacional — Conserta Smart",
    client: "Conserta Smart — Quatro Barras",
    summary:
      "Dashboards de KPIs financeiros e operacionais com automações em Excel/VBA para gestão proprietária, focando rentabilidade e retrabalho. No GitHub: README com objetivos do negócio, macros VBA comentadas, estrutura de relatórios e prints do layout.",
    impact: [
      { k: "+20%", v: "rentabilidade" },
      { k: "−20%", v: "retrabalho" },
      { k: "1 ano", v: "ciclo completo" },
    ],
    stack: ["Excel", "VBA", "Macros", "Relatórios"],
    href: "https://github.com/LuizEduardoSilvaSilva",
  },
  {
    n: "04",
    title: "Gestão Financeira de Carteira",
    client: "NRM Gestão em Carteira",
    summary:
      "Suite de 6 páginas em Power BI para acompanhamento de inadimplência, contratos vigentes, antecipações, vendas vs. cancelamentos e safras. Construído dentro da operação NRM — exibido aqui com dados 100% fictícios e layout anonimizado por sigilo contratual. No GitHub: README com contexto da carteira, modelagem dimensional, DAX comentado, queries de staging e wireframes de cada página.",
    impact: [
      { k: "6", v: "páginas analíticas" },
      { k: "3", v: "frentes (atual, atraso, antecipação)" },
      { k: "Sigiloso", v: "dados anonimizados" },
    ],
    stack: ["Power BI", "DAX", "Power Query", "Modelagem", "Slicers"],
    href: "https://github.com/LuizEduardoSilvaSilva",
    visual: capivariMockup,
    wireframe: [
      { name: "Inadimplência", blocks: ["KPI", "KPI", "Tabela", "Tabela", "Tabela", "Tabela", "Tabela", "Tabela"] },
      { name: "Current", blocks: ["KPI", "KPI", "Tabela", "Tabela", "Tabela", "Tabela", "Tabela", "Tabela"] },
      { name: "Antecipação", blocks: ["KPI", "KPI", "Tabela", "Tabela", "Tabela", "Tabela", "Tabela", "Tabela", "Tabela"] },
      { name: "Todos Contratos", blocks: ["KPI", "KPI", "Donut", "Tabela", "Tabela", "Filtros"] },
      { name: "Inadimplentes +30d", blocks: ["Tabela", "Tabela", "Tabela", "Tabela", "Barras", "Barras Agrup."] },
      { name: "Vendas x Cancel.", blocks: ["Colunas Agr.", "Colunas Agr.", "Colunas Agr."] },
    ],
  },
  {
    n: "05",
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
    href: "https://github.com/LuizEduardoSilvaSilva/Painel-de-Gest-o-de-Carteira---PowerBI",
    gallery: [
      { src: painelCarteira01, caption: "Carteira — visão geral de clientes e status" },
      { src: painelCarteira02, caption: "Painel do Cliente — drill-through com busca e navegação" },
      { src: painelCarteira03, caption: "Calendário Operacional — corte, emissão e vencimento" },
    ],
  },
];


function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-hairline bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            aria-label="Luiz Eduardo Silva e Silva"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
          >
            <img src={logoIcon} alt="" className="h-8 w-8 rounded-md object-cover" />
            <span className="hidden sm:inline">Luiz Eduardo Silva e Silva</span>
          </a>
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <li><a href="#skills" className="transition hover:text-foreground">Habilidades</a></li>
            <li><a href="#cases" className="transition hover:text-foreground">Cases</a></li>
            <li><a href="#experiencia" className="transition hover:text-foreground">Experiência</a></li>
            <li><a href="#contato" className="transition hover:text-foreground">Contato</a></li>
          </ul>
          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
          >
            Falar comigo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <h1 className="sr-only">
            Luiz Eduardo Silva e Silva — Analista de Dados & BI
          </h1>
          <img
            src={heroBanner}
            alt="Luiz Eduardo Silva e Silva — Analista de Dados & BI"
            className="w-full rounded-xl border border-hairline shadow-elevated"
            width={1372}
            height={784}
          />

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sou <strong className="text-foreground">Luiz Eduardo Silva e Silva</strong>, Analista
            de Dados & BI. Ao longo de mais de uma década em ambientes orientados a negócio,
            desenvolvi foco em transformar dados em decisão — construindo dashboards, KPIs e
            processos de governança que reduzem ruído e aceleram decisões para CEOs, sócios e
            times multidisciplinares.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cases"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition hover:opacity-90"
            >
              Ver cases de projetos <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition hover:border-foreground/30"
            >
              <Mail className="h-4 w-4" /> Contratar para um projeto
            </a>
          </div>

          {/* meta strip */}
          <div className="mt-16 grid grid-cols-2 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-4">
            {[
              { k: "10+", v: "anos de experiência profissional" },
              { k: "4", v: "empresas atendidas simultaneamente" },
              { k: "83", v: "slides executivos automatizados" },
              { k: "6", v: "dashboards em Power BI" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-medium tracking-tight text-foreground">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Curitiba — PR · Híbrido / Remoto</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-accent" /> Disponível para novos projetos</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <div className="section-eyebrow mb-5">
                <span className="section-eyebrow-dot" /> Stack
              </div>
              <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
                Habilidades técnicas, mapeadas por intenção.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Ferramentas escolhidas para entregar clareza analítica e
                governança — não para impressionar em slide.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
              {skills.map(({ icon: Icon, title, items }) => (
                <div key={title} className="group bg-surface-elevated p-6 transition hover:bg-background">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-hairline bg-surface text-foreground transition group-hover:border-accent group-hover:text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-medium tracking-tight">{title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {items.map((it) => (
                      <li key={it} className="tag-chip">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="section-eyebrow mb-5">
                <span className="section-eyebrow-dot" /> Projetos selecionados
              </div>
              <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
                Cinco cases. Contextos distintos. <span className="italic text-accent">Um padrão de impacto.</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-xs">
              Cada projeto está documentado e disponível no GitHub para inspeção
              de modelagem, DAX, queries e governança.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-hairline bg-surface p-6">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-hairline bg-surface-elevated text-accent">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-sm font-medium text-foreground">Documentação pública, dados privados</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Cada repositório contém <strong className="text-foreground">README com contexto de negócio, arquitetura de dados, DAX comentado, queries e wireframes</strong> — nunca dados reais ou informações sigilosas. É meu método de demonstrar o trabalho sem violar sigilo contratual.
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
            {projects.map((p) => (
              <li key={p.n} className="group bg-surface-elevated">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-8 transition hover:bg-background sm:p-10"
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="font-mono text-muted-foreground">{p.n}</span>
                        <span className="h-px w-8 bg-hairline" />
                        <span className="uppercase tracking-wider text-muted-foreground">{p.client}</span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-muted-foreground">{p.summary}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                        <BookOpen className="h-3 w-3" /> Repositório documentado
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span key={s} className="tag-chip">{s}</span>
                        ))}
                      </div>
                    </div>
                    <span className="shrink-0 grid h-12 w-12 place-items-center rounded-full border border-hairline text-foreground transition group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                      <Github className="h-5 w-5" />
                    </span>
                  </div>

                  {p.visual && (
                    <figure className="mt-8 overflow-hidden rounded-xl border border-hairline bg-background">
                      <div className="flex items-center justify-between border-b border-hairline bg-surface px-4 py-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <Lock className="h-3 w-3" /> Mockup ilustrativo · dados 100% fictícios
                        </span>
                        <span className="font-mono">Power BI · Layout original</span>
                      </div>
                      <img
                        src={p.visual}
                        alt={`Mockup do dashboard ${p.title}`}
                        width={1536}
                        height={1024}
                        loading="lazy"
                        className="block w-full"
                      />
                    </figure>
                  )}

                  {p.wireframe && (
                    <div className="mt-8">
                      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                        <span>Estrutura · {p.wireframe.length} páginas</span>
                        <span className="font-mono">wireframe</span>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {p.wireframe.map((pg) => (
                          <div key={pg.name} className="rounded-lg border border-hairline bg-surface p-3">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-xs font-medium text-foreground">{pg.name}</span>
                              <span className="font-mono text-[10px] text-muted-foreground">{pg.blocks.length} blocos</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                              {pg.blocks.map((b, idx) => (
                                <div
                                  key={`${pg.name}-${idx}`}
                                  className={`rounded-sm border border-hairline px-1.5 py-1 text-center font-mono text-[9px] uppercase tracking-wider ${
                                    b.startsWith("KPI")
                                      ? "bg-accent/10 text-accent"
                                      : b.includes("Donut") || b.includes("Barras") || b.includes("Colunas")
                                      ? "bg-primary/5 text-foreground/80"
                                      : "bg-background text-muted-foreground"
                                  }`}
                                >
                                  {b}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {p.gallery && (
                    <div className="mt-8">
                      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <BarChart3 className="h-3 w-3" /> Dashboards do projeto · dados fictícios
                        </span>
                        <span className="font-mono">Power BI</span>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {p.gallery.map((g) => (
                          <figure
                            key={g.caption}
                            className="overflow-hidden rounded-xl border border-hairline bg-background"
                          >
                            <img
                              src={g.src}
                              alt={g.caption}
                              loading="lazy"
                              className="block w-full"
                            />
                            <figcaption className="border-t border-hairline bg-surface px-3 py-2 text-xs text-muted-foreground">
                              {g.caption}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </div>
                  )}


                  <dl className="mt-8 grid grid-cols-3 divide-x divide-hairline border-t border-hairline pt-6">
                    {p.impact.map((i) => (
                      <div key={i.v} className="px-4 first:pl-0 last:pr-0">
                        <dt className="text-xs uppercase tracking-wider text-muted-foreground">{i.v}</dt>
                        <dd className="mt-1 font-display text-2xl font-medium tracking-tight text-foreground">{i.k}</dd>
                      </div>
                    ))}
                  </dl>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experiencia" className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="section-eyebrow mb-5">
            <span className="section-eyebrow-dot" /> Trajetória
          </div>
          <h2 className="max-w-3xl text-4xl font-medium leading-tight sm:text-5xl">
            Mais de uma década de trajetória, com foco crescente em dados e BI.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
            {[
              {
                role: "Analista de Dados — Gestão Operacional",
                org: "NRM Gestão em Carteira LTDA",
                when: "Set/2025 — Mar/2026 · Curitiba/PR · Híbrido (PJ)",
                icon: LineChart,
              },
              {
                role: "Gerente Proprietário",
                org: "Conserta Smart — Quatro Barras",
                when: "Jan/2023 — Dez/2023 · Presencial",
                icon: Workflow,
              },
              {
                role: "Field Quality Specialist (FQS)",
                org: "Nielsen Brasil",
                when: "Jul/2015 — Mai/2018 · Curitiba/PR",
                icon: ShieldCheck,
              },
              {
                role: "Auxiliar Administrativo",
                org: "Nielsen Brasil",
                when: "Mar/2013 — Jul/2015 · Curitiba/PR",
                icon: TableProperties,
              },
            ].map(({ role, org, when, icon: Icon }) => (
              <article key={role} className="bg-surface-elevated p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-hairline text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-medium tracking-tight">{role}</h3>
                </div>
                <p className="mt-4 text-sm font-medium text-foreground">{org}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{when}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="tag-chip">Curso de Analista de BI — DNC Group · 2025</span>
            <span className="tag-chip">Especialista em Power BI — Empowerdata · 2025</span>
            <span className="tag-chip">Bacharel · Ciências Sociais — UFPR</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 rounded-3xl border border-hairline bg-primary p-10 text-primary-foreground sm:p-14 md:grid-cols-[2fr_1fr] md:gap-16">
            <div>
              <div className="section-eyebrow mb-5 !text-primary-foreground/70">
                <span className="section-eyebrow-dot" /> Próximo passo
              </div>
              <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
                Tem dados parados gerando ruído? <span className="italic text-accent">Vamos conversar.</span>
              </h2>
              <p className="mt-5 max-w-xl text-primary-foreground/70">
                Resposta em até 24h úteis. Atendo projetos pontuais, squads
                multidisciplinares e operações executivas recorrentes.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:luiz.e.silva.silva@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
                >
                  <Mail className="h-4 w-4" /> luiz.e.silva.silva@gmail.com
                </a>
                <a
                  href="tel:+5541989023978"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
                >
                  (41) 98902-3978
                </a>
              </div>
            </div>

            <ul className="space-y-4 border-t border-primary-foreground/15 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <li>
                <a href="https://www.linkedin.com/in/luizsilvaesilva/" target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 text-sm">
                  <span className="inline-flex items-center gap-3 text-primary-foreground/80"><Linkedin className="h-4 w-4" /> LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4 text-primary-foreground/40 transition group-hover:text-accent" />
                </a>
              </li>
              <li>
                <a href="https://github.com/LuizEduardoSilvaSilva" target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 text-sm">
                  <span className="inline-flex items-center gap-3 text-primary-foreground/80"><Github className="h-4 w-4" /> GitHub</span>
                  <ArrowUpRight className="h-4 w-4 text-primary-foreground/40 transition group-hover:text-accent" />
                </a>
              </li>
              <li>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="inline-flex items-center gap-3 text-primary-foreground/80"><MapPin className="h-4 w-4" /> Curitiba — PR</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Luiz Eduardo Silva e Silva. Todos os direitos reservados.</span>
          <span className="font-mono">Analista de Dados · BI · Governança</span>
        </div>
      </footer>
    </div>
  );
}
