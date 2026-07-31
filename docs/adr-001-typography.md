# ADR-001 — Componente Typography (primeiro átomo)

**Data:** 31/07/2026 · **Status:** implementado (aguardando review)

## Contexto
Primeiro átomo do VWDS. Consome os tokens semânticos de tipografia definidos em
`tokens/vwds.tokens.json`. Taxonomia MUI aprovada na auditoria (h1–caption + editorial-body).

## Decisões

1. **Stack:** React + TypeScript puro (Vite), sem acoplar a Next.js. Componentes
   agnósticos rodam em qualquer host futuro (Next, Astro, ferramentas de LP via IA).
2. **Estilo:** CSS Modules lendo as CSS variables geradas pelo Style Dictionary.
   Zero valores literais no componente. Reversível para outra camada de estilo depois.
3. **Semântica vs visual:** prop `as` separa a tag HTML do estilo visual — permite
   um h3 visual ser um `<h1>` real (outline de documento correto, acessibilidade e SEO).
4. **Cores:** variantes de cor mapeiam para tokens semânticos do tema claro
   (primary/secondary/tertiary/link/on-action).

## Paridade Figma
- Arquivo novo **VWDS — Vinta Website Design System** (`0S546H4QgffNj4L22cMxUQ`),
  criado no time Vinta Software, projeto 73634789.
- 13 text styles `VWDS/*` criados + página de type specimen visual.
- **Limitação do ambiente MCP:** a Moderat não está disponível → os styles usam
  **DM Sans** como substituta visual (mesmos pesos Thin/Light/Regular/Bold),
  documentado na descrição de cada style. A **Spectral** (editorial) está disponível
  de verdade. Ao abrir o arquivo num ambiente com Moderat instalada, trocar a família.
- Text styles não referenciam variáveis de tipografia via API (limitação do Figma);
  a paridade é garantida pela origem comum (`tokens.json`), não por binding.

## Definição de pronto — status
- [x] Tokens (zero literais)
- [x] Componente React + tipos
- [x] Story no Storybook (todas as variantes, cores, editorial, semântico vs visual)
- [x] Par no Figma (13 text styles + specimen)
- [ ] Code Connect ligando componente ↔ Figma (próximo passo)
- [ ] Review humano no Storybook e no Figma
