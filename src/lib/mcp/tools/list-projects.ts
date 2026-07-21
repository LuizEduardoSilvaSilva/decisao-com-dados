import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const PROJECTS = [
  {
    id: "nrm",
    client: "NRM",
    title: "Reestruturação de BI Comercial",
    stack: ["Power BI", "SQL", "DAX", "Star Schema"],
    impact: "+22% de conformidade em auditoria de dados",
    github: "https://github.com/LuizEduardoSilvaSilva",
  },
  {
    id: "nielsen",
    client: "Nielsen",
    title: "Dashboards de Market Share",
    stack: ["Power BI", "Excel", "Power Query"],
    impact: "Redução de 60% no tempo de fechamento mensal",
    github: "https://github.com/LuizEduardoSilvaSilva",
  },
  {
    id: "conserta-smart",
    client: "Conserta Smart",
    title: "Operação Data-Driven",
    stack: ["SQL", "Power BI", "Automação"],
    impact: "Visibilidade full-funnel para diretoria",
    github: "https://github.com/LuizEduardoSilvaSilva",
  },
  {
    id: "gestao-financeira",
    client: "NRM",
    title: "Gestão Financeira de Carteira",
    stack: ["Power BI", "DAX", "Modelagem dimensional"],
    impact: "6 páginas analíticas de inadimplência, antecipação e vendas",
    github: "https://github.com/LuizEduardoSilvaSilva",
  },
];

export default defineTool({
  name: "list_projects",
  title: "Listar cases de projetos",
  description:
    "Lista os cases de projetos do portfólio com cliente, stack, impacto e link do GitHub. Aceita filtro opcional por id.",
  inputSchema: {
    id: z.string().optional().describe("ID do projeto (ex.: nrm, nielsen, conserta-smart, gestao-financeira)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const items = id ? PROJECTS.filter((p) => p.id === id) : PROJECTS;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
