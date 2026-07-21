import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const CATEGORIES = ["visualizacao", "modelagem", "governanca", "automacao"] as const;

const SKILLS: Record<(typeof CATEGORIES)[number], string[]> = {
  visualizacao: ["Power BI", "DAX", "Excel avançado", "Storytelling com dados"],
  modelagem: ["SQL", "Modelagem dimensional (Star Schema)", "ETL", "Power Query (M)"],
  governanca: ["RLS", "Documentação técnica", "Versionamento", "Boas práticas de dados"],
  automacao: ["Power Automate", "Scripts SQL", "Refresh agendado", "Alertas"],
};

export default defineTool({
  name: "list_skills",
  title: "Listar habilidades técnicas",
  description:
    "Lista as habilidades técnicas por categoria (visualizacao, modelagem, governanca, automacao). Sem filtro retorna todas.",
  inputSchema: {
    category: z
      .enum(CATEGORIES)
      .optional()
      .describe("Filtrar por categoria específica."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const result = category ? { [category]: SKILLS[category] } : SKILLS;
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { skills: result },
    };
  },
});
