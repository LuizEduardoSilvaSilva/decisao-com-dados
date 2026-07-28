import { useEffect, useState } from "react";
import {
  TrendingDown,
  Users,
  Target,
  AlertTriangle,
  PieChart,
  LifeBuoy,
} from "lucide-react";

const kpis = [
  {
    icon: TrendingDown,
    label: "VGV acumulado",
    value: "R$ 38,2 mi",
    meta: "meta R$ 41,0 mi · −6,8%",
    negative: true,
  },
  {
    icon: Users,
    label: "Cotas vendidas (ano)",
    value: "824",
    meta: "meta 960 · −14%",
    negative: true,
  },
  {
    icon: Target,
    label: "Eficiência de vendas",
    value: "22,9%",
    meta: "meta 25,0% · −2,1 p.p.",
    negative: true,
  },
  {
    icon: AlertTriangle,
    label: "Inadimplência da base",
    value: "31,5%",
    meta: "base ativa 2.740 cotas · −0,8 p.p.",
    negative: false,
  },
];

const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const orcado = [88, 95, 132, 140, 120, 150, 169, 142, 120, 120, 120, 138];
const realizado = [96, 90, 128, 138, 111, 141, 150, 0, 0, 0, 0, 0];
const maxCotas = Math.max(...orcado, ...realizado);

const aging = [
  { faixa: "Até 30d", pct: 9.2, tone: "color-mix(in oklab, var(--accent) 70%, transparent)" },
  { faixa: "30–59d", pct: 7.5, tone: "color-mix(in oklab, var(--accent) 50%, transparent)" },
  { faixa: "60–89d", pct: 5.1, tone: "color-mix(in oklab, var(--accent) 70%, var(--destructive))" },
  { faixa: "90–119d", pct: 6.8, tone: "color-mix(in oklab, var(--accent) 50%, var(--destructive))" },
  { faixa: "120–149d", pct: 4.3, tone: "color-mix(in oklab, var(--accent) 25%, var(--destructive))" },
  { faixa: "150–179d", pct: 5.6, tone: "color-mix(in oklab, var(--accent) 10%, var(--destructive))" },
  { faixa: "180d+", pct: 61.5, tone: "var(--destructive)" },
];
const maxAging = Math.max(...aging.map((a) => a.pct));

const funnel = [
  { label: "Solicitações", n: 63, pct: 100 },
  { label: "Acionadas", n: 55, pct: 87 },
  { label: "Negociadas", n: 39, pct: 62 },
  { label: "Contidas", n: 45, pct: 71 },
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
  const reduced = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), reduced ? 0 : 60);
    return () => clearTimeout(t);
  }, [reduced]);

  const grow = (finalPct: number) =>
    reduced || mounted ? `${finalPct}%` : "0%";

  // Donut math
  const baseAtiva = 2740;
  const estoque = 610;
  const total = baseAtiva + estoque;
  const baseAngle = (baseAtiva / total) * 360;

  return (
    <div className="bg-background p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-hairline pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <div className="section-eyebrow mb-2">
            <span className="section-eyebrow-dot" /> Painel Executivo de Carteira
          </div>
          <h4 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            Reserva Serena Resort
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">
            Multipropriedade · consolidado de empreendimentos · fechamento mensal
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
            Dados fictícios
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Jul / 2026
          </span>
        </div>
      </div>

      {/* KPIs */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map(({ icon: Icon, label, value, meta }) => (
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
        ))}
      </div>

      {/* Row: comercial + aging */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Comercial */}
        <div className="rounded-lg border border-hairline bg-surface-elevated p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h5 className="font-display text-sm font-medium text-foreground">
                Comercial — cotas orçado × realizado
              </h5>
              <p className="text-[11px] text-muted-foreground">12 meses · 2026</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-primary/40" /> Orçado
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-accent" /> Realizado
              </span>
            </div>
          </div>
          <div className="flex h-40 items-end gap-1.5">
            {months.map((m, i) => {
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
                      title={`Orçado ${orcado[i]}`}
                    />
                    <div
                      className="w-1/2 rounded-sm bg-accent transition-[height] duration-700 ease-out"
                      style={{ height: grow(rH) }}
                      title={`Realizado ${realizado[i]}`}
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
              Aging da inadimplência
            </h5>
            <p className="text-[11px] text-muted-foreground">
              % do valor em atraso por faixa
            </p>
          </div>
          <div className="space-y-2">
            {aging.map((a) => (
              <div key={a.faixa} className="grid grid-cols-[72px_1fr_44px] items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {a.faixa}
                </span>
                <div className="h-3 overflow-hidden rounded-sm bg-surface">
                  <div
                    className={`h-full ${a.tone} transition-[width] duration-700 ease-out`}
                    style={{ width: grow((a.pct / maxAging) * 100) }}
                  />
                </div>
                <span className="text-right font-mono text-[11px] text-foreground">
                  {a.pct.toFixed(1)}%
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
              Base ativa × estoque
            </h5>
            <PieChart className="h-3.5 w-3.5 text-accent" />
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div
              className="relative h-32 w-32 shrink-0 rounded-full"
              style={{
                background: `conic-gradient(var(--accent) 0deg ${baseAngle}deg, color-mix(in oklab, var(--primary) 25%, transparent) ${baseAngle}deg 360deg)`,
              }}
              aria-label="Distribuição base ativa e estoque"
            >
              <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-surface-elevated text-center">
                <span className="font-display text-lg font-medium text-foreground">
                  2.900
                </span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                  cotas comerc.
                </span>
              </div>
            </div>
            <div className="flex-1 space-y-2 text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <span className="h-2 w-2 rounded-sm bg-accent" /> Base ativa
                </span>
                <span className="font-mono text-foreground">2.740</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <span className="h-2 w-2 rounded-sm bg-primary/25" /> Estoque
                </span>
                <span className="font-mono text-foreground">610</span>
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-hairline pt-2">
                <span className="text-muted-foreground">Comercializadas</span>
                <span className="font-mono text-foreground">2.900</span>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-hairline pt-3">
            {[
              { k: "VSO", v: "9 meses de estoque" },
              { k: "Ticket médio", v: "R$ 53k entrada/cota" },
              { k: "Safra origin.", v: "2026" },
            ].map((s) => (
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
                Pós-vendas — contenção
              </h5>
              <p className="text-[11px] text-muted-foreground">
                funil de solicitações de cancelamento
              </p>
            </div>
            <LifeBuoy className="h-3.5 w-3.5 text-accent" />
          </div>
          <div className="space-y-2">
            {funnel.map((f) => (
              <div key={f.label} className="grid grid-cols-[110px_1fr_64px] items-center gap-2">
                <span className="text-[11px] text-muted-foreground">{f.label}</span>
                <div className="h-4 overflow-hidden rounded-sm bg-surface">
                  <div
                    className="h-full bg-accent/70 transition-[width] duration-700 ease-out"
                    style={{ width: grow(f.pct) }}
                  />
                </div>
                <span className="text-right font-mono text-[11px] text-foreground">
                  {f.n} · {f.pct}%
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md border border-accent/30 bg-accent/10 px-3 py-2 text-xs text-accent">
            <span className="font-medium">Taxa de contenção (save rate) — Jul/26:</span>{" "}
            <span className="font-display text-base font-medium">71,4%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
