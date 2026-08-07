import { useEffect, useState } from "react";
import {
  TrendingDown,
  Users,
  Target,
  AlertTriangle,
  PieChart,
  LifeBuoy,
} from "lucide-react";

import { useLanguage } from "@/lib/i18n";

const kpiIcons = [TrendingDown, Users, Target, AlertTriangle];

const orcado = [88, 95, 132, 140, 120, 150, 169, 142, 120, 120, 120, 138];
const realizado = [96, 90, 128, 138, 111, 141, 150, 0, 0, 0, 0, 0];
const maxCotas = Math.max(...orcado, ...realizado);

const agingTones = [
  "color-mix(in oklab, var(--accent) 85%, transparent)",
  "color-mix(in oklab, var(--accent) 72%, transparent)",
  "color-mix(in oklab, var(--accent) 60%, transparent)",
  "color-mix(in oklab, var(--accent) 48%, transparent)",
  "color-mix(in oklab, var(--accent) 38%, transparent)",
  "color-mix(in oklab, var(--accent) 28%, transparent)",
  "var(--destructive)",
];
const agingPcts = [9.2, 7.5, 5.1, 6.8, 4.3, 5.6, 61.5];
const maxAging = Math.max(...agingPcts);

const funnelData = [
  { n: 63, pct: 100 },
  { n: 55, pct: 87 },
  { n: 39, pct: 62 },
  { n: 45, pct: 71 },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function ReservaSerenaDashboard() {
  const { t } = useLanguage();
  const d = t.dash;
  const reduced = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), reduced ? 0 : 60);
    return () => clearTimeout(timer);
  }, [reduced]);

  const grow = (finalPct: number) =>
    reduced || mounted ? `${finalPct}%` : "0%";

  // Donut math
  const baseAtiva = 2740;
  const estoque = 610;
  const total = baseAtiva + estoque;
  const baseAngle = (baseAtiva / total) * 360;
  const numberFmt = t.dash.months[0] === "jan" ? "pt" : "en";
  const fmt = (n: number) =>
    numberFmt === "pt" ? n.toLocaleString("pt-BR") : n.toLocaleString("en-US");
  const pct = (n: number) =>
    numberFmt === "pt" ? n.toFixed(1).replace(".", ",") : n.toFixed(1);

  return (
    <div className="bg-background p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-hairline pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <div className="section-eyebrow mb-2">
            <span className="section-eyebrow-dot" /> {d.eyebrow}
          </div>
          <h4 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {d.title}
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">
            {d.sub}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
            {d.badge}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {d.period}
          </span>
        </div>
      </div>

      {/* KPIs */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {d.kpis.map(({ label, value, meta }, i) => {
          const Icon = kpiIcons[i];
          return (
            <div
              key={label}
              className="rounded-lg border border-hairline bg-surface-elevated p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
                <Icon className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="mt-2 font-display text-2xl font-medium tracking-tight text-foreground">
                {value}
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">{meta}</div>
            </div>
          );
        })}
      </div>

      {/* Row: comercial + aging */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Comercial */}
        <div className="rounded-lg border border-hairline bg-surface-elevated p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h5 className="font-display text-sm font-medium text-foreground">
                {d.commercialTitle}
              </h5>
              <p className="text-[11px] text-muted-foreground">{d.commercialSub}</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-primary/40" /> {d.budget}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-accent" /> {d.actual}
              </span>
            </div>
          </div>
          <div className="flex h-40 items-end gap-1.5">
            {d.months.map((m, i) => {
              const oH = (orcado[i] / maxCotas) * 100;
              const rH = (realizado[i] / maxCotas) * 100;
              return (
                <div
                  key={m}
                  className="flex min-w-0 flex-1 flex-col items-center gap-0.5"
                >
                  <div className="flex h-full w-full items-end justify-center gap-0.5">
                    <div
                      className="w-1/2 rounded-sm bg-primary/30 transition-[height] duration-700 ease-out"
                      style={{ height: grow(oH) }}
                      title={`${d.budget} ${orcado[i]}`}
                    />
                    <div
                      className="w-1/2 rounded-sm bg-accent transition-[height] duration-700 ease-out"
                      style={{ height: grow(rH) }}
                      title={`${d.actual} ${realizado[i]}`}
                    />
                  </div>
                  <span className="font-mono text-[9px] uppercase text-muted-foreground">
                    {m}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aging */}
        <div className="rounded-lg border border-hairline bg-surface-elevated p-4">
          <div className="mb-3">
            <h5 className="font-display text-sm font-medium text-foreground">
              {d.agingTitle}
            </h5>
            <p className="text-[11px] text-muted-foreground">
              {d.agingSub}
            </p>
          </div>
          <div className="space-y-2">
            {d.agingBuckets.map((faixa, i) => (
              <div key={faixa} className="grid grid-cols-[72px_1fr_44px] items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {faixa}
                </span>
                <div className="h-3 overflow-hidden rounded-sm bg-surface">
                  <div
                    className="h-full transition-[width] duration-700 ease-out"
                    style={{
                      width: grow((agingPcts[i] / maxAging) * 100),
                      backgroundColor: agingTones[i],
                    }}
                  />
                </div>
                <span className="text-right font-mono text-[11px] text-foreground">
                  {pct(agingPcts[i])}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row: base × estoque + funnel */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Base × estoque */}
        <div className="rounded-lg border border-hairline bg-surface-elevated p-4">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="font-display text-sm font-medium text-foreground">
              {d.donutTitle}
            </h5>
            <PieChart className="h-3.5 w-3.5 text-accent" />
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div
              className="relative h-32 w-32 shrink-0 rounded-full"
              style={{
                background: `conic-gradient(var(--accent) 0deg ${baseAngle}deg, color-mix(in oklab, var(--primary) 25%, transparent) ${baseAngle}deg 360deg)`,
              }}
              aria-label={d.donutAria}
            >
              <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-surface-elevated text-center">
                <span className="font-display text-lg font-medium text-foreground">
                  {fmt(2900)}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                  {d.donutCenterSub}
                </span>
              </div>
            </div>
            <div className="flex-1 space-y-2 text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <span className="h-2 w-2 rounded-sm bg-accent" /> {d.activeBase}
                </span>
                <span className="font-mono text-foreground">{fmt(2740)}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <span className="h-2 w-2 rounded-sm bg-primary/25" /> {d.inventory}
                </span>
                <span className="font-mono text-foreground">{fmt(estoque)}</span>
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-hairline pt-2">
                <span className="text-muted-foreground">{d.commercialized}</span>
                <span className="font-mono text-foreground">{fmt(2900)}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-hairline pt-3">
            {d.stats.map((s) => (
              <div key={s.k}>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground">
                  {s.k}
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Funnel */}
        <div className="rounded-lg border border-hairline bg-surface-elevated p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h5 className="font-display text-sm font-medium text-foreground">
                {d.funnelTitle}
              </h5>
              <p className="text-[11px] text-muted-foreground">
                {d.funnelSub}
              </p>
            </div>
            <LifeBuoy className="h-3.5 w-3.5 text-accent" />
          </div>
          <div className="space-y-2">
            {d.funnelSteps.map((label, i) => (
              <div key={label} className="grid grid-cols-[110px_1fr_64px] items-center gap-2">
                <span className="text-[11px] text-muted-foreground">{label}</span>
                <div className="h-4 overflow-hidden rounded-sm bg-surface">
                  <div
                    className="h-full bg-accent/70 transition-[width] duration-700 ease-out"
                    style={{ width: grow(funnelData[i].pct) }}
                  />
                </div>
                <span className="text-right font-mono text-[11px] text-foreground">
                  {funnelData[i].n} · {funnelData[i].pct}%
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md border border-accent/30 bg-accent/10 px-3 py-2 text-xs text-accent">
            <span className="font-medium">{d.saveRate}</span>{" "}
            <span className="font-display text-base font-medium">{d.saveRateValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
