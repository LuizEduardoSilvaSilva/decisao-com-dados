import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_profile",
  title: "Obter perfil profissional",
  description:
    "Retorna o perfil profissional público de Luiz Eduardo Silva e Silva (nome, cargo, localidade, resumo, links).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Luiz Eduardo Silva e Silva",
      title: "Analista de Dados & BI",
      location: "Curitiba, PR — Brasil",
      summary:
        "Analista de Dados & BI com 10+ anos transformando dados em decisões executivas. Especialista em Power BI, SQL, DAX, modelagem dimensional e governança.",
      links: {
        portfolio: "https://luizeduardodev.lovable.app",
        linkedin: "https://www.linkedin.com/in/luizsilvaesilva/",
        github: "https://github.com/LuizEduardoSilvaSilva",
      },
      languages: ["Português", "Inglês"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});

// silence unused import in strict mode
void z;
