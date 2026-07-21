import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listSkills from "./tools/list-skills";
import listProjects from "./tools/list-projects";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "luizeduardo-portfolio-mcp",
  title: "Portfólio Luiz Eduardo Silva e Silva — MCP",
  version: "0.1.0",
  instructions:
    "Servidor MCP público do portfólio de Luiz Eduardo Silva e Silva (Analista de Dados & BI). Use get_profile para dados profissionais, list_skills para stack técnica, list_projects para cases e get_contact para contato.",
  tools: [getProfile, listSkills, listProjects, getContact],
});
