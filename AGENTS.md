<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Contexto e operação

**O que é:** portfólio profissional de Luiz Eduardo (Analista de Dados & BI), marca "Decisão com Dados". Público.

**Publicação:** Cloudflare Pages, projeto `decisaocomdados` → https://decisaocomdados.com.br (domínio próprio, registrado no Registro.br, DNS no Cloudflare; `decisaocomdados.pages.dev` continua respondendo). Deploy automático a cada push no `main`; branches geram preview.
- Build command: `rm -f bun.lock && bun install && NITRO_PRESET=cloudflare_pages bun run build`
- Output directory: `dist` · Variável de build: `SKIP_DEPENDENCY_INSTALL=1` · Compatibility flag: `nodejs_compat`
- Endereço oficial usado em canonical/og:url, sitemap, robots.txt e no perfil do MCP: `https://decisaocomdados.com.br`. Não divulgar o `pages.dev`: o LinkedIn marca links `*.pages.dev` como possível conteúdo mal-intencionado.
- O endereço antigo do Lovable (`decisaocomdadosbi.lovable.app`) fica no ar temporariamente até todos os links apontarem para o novo.

**Lovable:** projeto "Portfolio BI". Sem banco de dados.

### Como trabalhar neste repositório
- Fonte da verdade é o GitHub. As edições são feitas direto no repositório; o Lovable continua conectado e recebe o que entra no `main`.
- Várias conversas podem mexer nos mesmos repositórios. Antes de editar, busque a versão mais recente do `main`; trabalhe numa branch e entregue por pull request para o Luiz aprovar. Nunca faça force push nem reescreva histórico já publicado (ver aviso do Lovable acima).
- Registre aqui, em "Contexto e operação", qualquer decisão de publicação, domínio, secrets ou build, para a próxima conversa encontrar.
- Os `bun.lock` gerados pelo Lovable podem apontar para registros npm internos do Lovable (`*-npm.pkg.dev`), que não funcionam fora dele. Se `bun install` falhar com 403, instale sem o lockfile (`rm -f bun.lock && bun install`) e não suba o lockfile alterado.

> Repositório público: não registre aqui dados de outros projetos, IDs internos nem nomes de secrets. O contexto dos demais projetos fica nos AGENTS.md de cada repositório privado.
