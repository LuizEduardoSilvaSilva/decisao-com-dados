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

import heroBg from "@/assets/hero-bg.png";
import logoIcon from "@/assets/logo-icon.png";
import painelCarteira01 from "@/assets/painel-carteira/01_carteira.png";
import painelCarteira02 from "@/assets/painel-carteira/02_painel_cliente.png";
import painelCarteira03 from "@/assets/painel-carteira/03_calendario.png";
import ReservaSerenaDashboard from "@/components/ReservaSerenaDashboard";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider, useLanguage } from "@/lib/i18n";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.315C9.42 5.07 5.082 9.408 5.082 14.759c0 1.663.434 3.203 1.19 4.55L5.01 22.45l3.168-.842a9.57 9.57 0 004.272 1.021h.004c5.351 0 9.689-4.338 9.689-9.689 0-2.587-1.007-5.02-2.835-6.848a9.623 9.623 0 00-6.836-2.835z" />
    </svg>
  );
}

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
          email: "mailto:decisaocomdados.bi@gmail.com",
          telephone: "+55-41-98902-3978",
          sameAs: [
            "https://www.linkedin.com/in/luizsilvaesilva/",
            "https://github.com/LuizEduardoSilvaSilva",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "professional",
              email: "decisaocomdados.bi@gmail.com",
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

const skillIcons = [BarChart3, Database, ShieldCheck, Code2, TableProperties, Languages];
const experienceIcons = [LineChart, Workflow, ShieldCheck, TableProperties];

type ProjectMeta = {
  n: "01" | "02" | "03" | "04";
  href: string;
  visual?: string;
  wireframe?: { name: string; blocks: string[] }[];
  gallerySrc?: string[];
};

const projectsMeta: ProjectMeta[] = [
  { n: "01", href: "" },
  { n: "02", href: "" },
  { n: "03", href: "" },
  {
    n: "04",
    href: "https://github.com/LuizEduardoSilvaSilva/Painel-de-Gest-o-de-Carteira---PowerBI",
    gallerySrc: [painelCarteira01, painelCarteira02, painelCarteira03],
  },
];

function Portfolio() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

function PortfolioContent() {
  const { t } = useLanguage();

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
            <li><a href="#skills" className="transition hover:text-foreground">{t.nav.skills}</a></li>
            <li><a href="#cases" className="transition hover:text-foreground">{t.nav.cases}</a></li>
            <li><a href="#experiencia" className="transition hover:text-foreground">{t.nav.experience}</a></li>
            <li><a href="#contato" className="transition hover:text-foreground">{t.nav.contact}</a></li>
          </ul>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              {t.nav.cta} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="relative w-full overflow-hidden rounded-xl border border-hairline shadow-elevated">
            <img
              src={heroBg}
              alt=""
              aria-hidden
              className="h-full w-full object-cover"
              width={1536}
              height={864}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
              <div className="max-w-3xl rounded-xl border border-white/10 bg-black/35 px-5 py-6 text-center backdrop-blur-md sm:px-10 sm:py-9">
                <h1 className="font-display text-2xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {t.hero.titleName}{" "}
                  <span className="text-accent">— {t.hero.titleRole}</span>
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-[11px] leading-relaxed text-white/75 sm:mt-4 sm:text-sm">
                  {t.hero.bannerSubtitle}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.paragraph.before}
            <strong className="text-foreground">{t.hero.paragraph.name}</strong>
            {t.hero.paragraph.after}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cases"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition hover:opacity-90"
            >
              {t.hero.ctaCases} <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition hover:border-foreground/30"
            >
              <Mail className="h-4 w-4" /> {t.hero.ctaHire}
            </a>
          </div>

          {/* meta strip */}
          <div className="mt-16 grid grid-cols-2 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-4">
            {t.hero.meta.map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-medium tracking-tight text-foreground">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {t.hero.location}</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-accent" /> {t.hero.available}</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <div className="section-eyebrow mb-5">
                <span className="section-eyebrow-dot" /> {t.skills.eyebrow}
              </div>
              <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
                {t.skills.heading}
              </h2>
              <p className="mt-5 text-muted-foreground">
                {t.skills.sub}
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
              {t.skills.groups.map(({ title, items }, gi) => {
                const Icon = skillIcons[gi];
                return (
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
                );
              })}
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
                <span className="section-eyebrow-dot" /> {t.cases.eyebrow}
              </div>
              <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
                {t.cases.headingA}<span className="italic text-accent">{t.cases.headingB}</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-xs">
              {t.cases.note}
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-hairline bg-surface p-6">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-hairline bg-surface-elevated text-accent">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-sm font-medium text-foreground">{t.cases.boxTitle}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {t.cases.box.p1}<strong className="text-foreground">{t.cases.box.s1}</strong>{t.cases.box.p2}<strong className="text-foreground">{t.cases.box.s2}</strong>{t.cases.box.p3}<strong className="text-foreground">{t.cases.box.s3}</strong>{t.cases.box.p4}
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
            {projectsMeta.map((meta) => {
              const p = t.projects[meta.n];
              const isConfidential = !meta.href;
              const gallery = meta.gallerySrc?.map((src, i) => ({
                src,
                caption: (p as { gallery?: readonly string[] }).gallery?.[i] ?? "",
              }));
              const innerContent = (
                <>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="font-mono text-muted-foreground">{meta.n}</span>
                        <span className="h-px w-8 bg-hairline" />
                        <span className="uppercase tracking-wider text-muted-foreground">{p.client}</span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-muted-foreground">{p.summary}</p>
                      {isConfidential ? (
                        <>
                          <p className="mt-3 max-w-2xl text-xs italic text-muted-foreground">
                            {p.nota || t.cases.fallbackNote}
                          </p>
                          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground">
                            <Lock className="h-3 w-3" /> {p.selo || t.cases.noRepo}
                          </div>
                        </>
                      ) : (
                        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                          <BookOpen className="h-3 w-3" /> {t.cases.documented}
                        </div>
                      )}

                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span key={s} className="tag-chip">{s}</span>
                        ))}
                      </div>
                    </div>
                    {!isConfidential && (
                      <span className="shrink-0 grid h-12 w-12 place-items-center rounded-full border border-hairline text-foreground transition group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                        <Github className="h-5 w-5" />
                      </span>
                    )}
                  </div>

                  {meta.n === "01" && (
                    <figure className="mt-8 overflow-hidden rounded-xl border border-hairline bg-background">
                      <div className="flex items-center justify-between border-b border-hairline bg-surface px-4 py-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <Lock className="h-3 w-3" /> {t.cases.mockupChip}
                        </span>
                        <span className="font-mono">{t.cases.interactive}</span>
                      </div>
                      <ReservaSerenaDashboard />
                    </figure>
                  )}

                  {meta.visual && (
                    <figure className="mt-8 overflow-hidden rounded-xl border border-hairline bg-background">
                      <div className="flex items-center justify-between border-b border-hairline bg-surface px-4 py-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <Lock className="h-3 w-3" /> {t.cases.mockupChip}
                        </span>
                        <span className="font-mono">{t.cases.originalLayout}</span>
                      </div>
                      <img
                        src={meta.visual}
                        alt={t.cases.mockupAlt(p.title)}
                        width={1536}
                        height={1024}
                        loading="lazy"
                        className="block w-full"
                      />
                    </figure>
                  )}

                  {meta.wireframe && (
                    <div className="mt-8">
                      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                        <span>{t.cases.structure(meta.wireframe.length)}</span>
                        <span className="font-mono">wireframe</span>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {meta.wireframe.map((pg) => (
                          <div key={pg.name} className="rounded-lg border border-hairline bg-surface p-3">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-xs font-medium text-foreground">{pg.name}</span>
                              <span className="font-mono text-[10px] text-muted-foreground">{t.cases.blocks(pg.blocks.length)}</span>
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

                  {gallery && (
                    <div className="mt-8">
                      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <BarChart3 className="h-3 w-3" /> {t.cases.galleryHeader}
                        </span>
                        <span className="font-mono">Power BI</span>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {gallery.map((g) => (
                          <figure
                            key={g.src}
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
                </>
              );
              return (
                <li key={meta.n} className="group bg-surface-elevated">
                  {isConfidential ? (
                    <div className="block p-8 sm:p-10">{innerContent}</div>
                  ) : (
                    <a
                      href={meta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block p-8 transition hover:bg-background sm:p-10"
                    >
                      {innerContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experiencia" className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="section-eyebrow mb-5">
            <span className="section-eyebrow-dot" /> {t.experience.eyebrow}
          </div>
          <h2 className="max-w-3xl text-4xl font-medium leading-tight sm:text-5xl">
            {t.experience.heading}
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
            {t.experience.roles.map(({ role, org, when }, ri) => {
              const Icon = experienceIcons[ri];
              return (
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
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {t.experience.certs.map((c) => (
              <span key={c} className="tag-chip">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 rounded-3xl border border-hairline bg-primary p-10 text-primary-foreground sm:p-14 md:grid-cols-[2fr_1fr] md:gap-16">
            <div>
              <div className="section-eyebrow mb-5 !text-primary-foreground/70">
                <span className="section-eyebrow-dot" /> {t.contact.eyebrow}
              </div>
              <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
                {t.contact.headingA}<span className="italic text-accent">{t.contact.headingB}</span>
              </h2>
              <p className="mt-5 max-w-xl text-primary-foreground/70">
                {t.contact.body}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:decisaocomdados.bi@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
                >
                  <Mail className="h-4 w-4" /> decisaocomdados.bi@gmail.com
                </a>
                <a
                  href={`https://wa.me/5541989023978?text=${encodeURIComponent(t.contact.whatsappText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
                >
                  <WhatsAppIcon className="h-4 w-4" style={{ color: "#25D366" }} /> (41) 98902-3978
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
                  <span className="inline-flex items-center gap-3 text-primary-foreground/80"><MapPin className="h-4 w-4" /> {t.contact.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Luiz Eduardo Silva e Silva. {t.footer.rights}</span>
          <span className="font-mono">{t.footer.tagline}</span>
        </div>
      </footer>
    </div>
  );
}
