import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_contact",
  title: "Obter informações de contato",
  description:
    "Retorna as informações públicas de contato profissional (e-mail, telefone, LinkedIn, GitHub).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      email: "luiz.e.silva.silva@gmail.com",
      phone: "+55 41 98902-3978",
      linkedin: "https://www.linkedin.com/in/luizsilvaesilva/",
      github: "https://github.com/LuizEduardoSilvaSilva",
      location: "Curitiba, PR — Brasil",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});

void z;
