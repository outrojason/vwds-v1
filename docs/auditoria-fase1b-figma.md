# Auditoria de Design System — Fase 1b: Inventário do Figma

**Fonte:** Arquivo `x3GUv1M63KRmm5lszNJLNn` (Explorations — Vinta Website 2023–2024), via Figma MCP
**Data:** 23/07/2026

---

## 1. Estrutura do arquivo

Duas páginas apenas:

| Página | Node | Conteúdo |
|---|---|---|
| ✍️ Design System 2025 | `4677:186` | 117 frames de topo, **0 componentes** |
| 📐 Styleguide [Legacy – Não utilizar como base] | `0:1` | Sistema componentizado completo (estilo MUI) |

## 2. Página "Design System 2025" — a estética sem arquitetura

**117 frames de topo, zero componentes, 12 instâncias** (e essas 12 vêm de biblioteca externa: "Role" e "Name" de cards de testimonial).

O conteúdo é um catálogo de **seções finalizadas** marcadas com ✅: Hero (light + dark), Arguments/Processes, Testimonials, Logo Marquee, Resources (light + dark), Tech Stack, Metrics, Clients, Pages List, FAQ, Services List. Mais: assets de AI stack (Langchain, Pinecone, PyTorch, Anthropic Claude, OpenAI, Gemini... — relevante para o destaque de IA que você pediu), Client Logos, Case Assets, Hero illustrations, Thumbnails, um frame "WIP/Drafts" e um "V0 - Desconsiderado".

Ou seja: é uma **biblioteca de mockups de seção**, não um design system. Cada seção repetida (ex.: 9 cópias de `argument-section`) é uma duplicação manual, não uma instância.

### Uso de variáveis (amostrado)

- **Hero Section ✅** consome 3 variáveis: `Vinta/Main` = **#0052FF**, `Vinta/Light` = #3274FF, `Text/Dark/Primary` = **#030E23**
- **Hero [Dark-mode] ✅** consome 1: `paragraph-text-color-darkmode` = #97B1DC

Dois problemas evidentes: (a) cobertura baixíssima — seções inteiras com pouquíssimos bindings, o resto é hex solto; (b) **duas convenções de nomenclatura convivendo** — `Vinta/Main` (slash/grupo) e `paragraph-text-color-darkmode` (kebab importado do CSS).

## 3. Página Legacy — a arquitetura com a estética errada

Apesar do aviso "Não utilizar como base", é aqui que mora a única engenharia de design system real do arquivo. Taxonomia claramente inspirada no Material UI:

- **[Button]** — component set completo: `Size` (Medium/Large/XLarge) × `Variant` (Filled/Text) × `Color` (Primary/White) × `State` (Default/Hovered/Focused/Disabled) = ~28 variantes mapeadas
- **[Typography]** — 12 variantes com nomenclatura MUI: `h1`–`h6`, `subtitle1/2`, `body1/2`, `overline`, `caption`
- **[Tab]** — 4 estados (Default/Active/Hovered/Focused)
- **[Icons]** — ~230 símbolos de ícones (48px) + ícones de tech (React, Python, Django, Next, Docker, AWS, Figma...)
- **[Logos]** — logo Vinta em 3 temas (Blue/White/Dark) × 2 formas (Text/Hexagon); **[Logos/Clients]** — 6 variantes (Splendid Spoon, PlusPlus, AltLegal, Bentobox, Lastmile, Carta — todos da era pré-healthcare)
- **Colors Styles** — tabelas Dark / Light / Vinta documentadas
- **Tokens/Typography** — tabela de font family (Moderat) e escala documentada

## 4. Síntese: o diagnóstico de três vias

| Dimensão | Webflow (produção) | Figma Legacy | Figma 2025 | Claude Playground |
|---|---|---|---|---|
| Azul primário | `#0050FF` (var) + `#0052FF` (exports) | a confirmar | **`#0052FF`** | definido por nós |
| Arquitetura de componentes | 15+ botões ad hoc | ✅ variants + states MUI-style | ❌ zero componentes | 7 componentes |
| Tokens/variáveis | 28 CSS vars, uso esparso | styles documentados | ~poucas vars, 2 convenções | 89 variáveis |
| Estética atual (healthcare) | parcial | ❌ era 2023 | ✅ é a referência visual | alinhado ao 2025 |
| Estados (hover/focus/disabled) | inconsistentes | ✅ mapeados | ❌ ausentes | parcial |
| Dark mode | tokens parciais | tabela Dark | seções dark soltas | temas semânticos |

**A conclusão central da auditoria:** a Legacy tem a *arquitetura* certa (taxonomia de variantes, estados, escala tipográfica nomeada) com a estética errada; a 2025 tem a *estética* certa sem arquitetura nenhuma; a produção tem *valores reais* que divergem de ambas. O design system consolidado da Fase 3 é a interseção deliberada dos três: **esqueleto da Legacy + pele da 2025 + reconciliação de valores com a produção**, na base de variáveis que já estruturamos no Playground.

## 5. Decisões que precisam de dono (input do Jason/time)

1. **O azul canônico:** `#0052FF` (intenção 2025 no Figma) ou `#0050FF` (token oficial em produção há anos)? Diferença imperceptível a olho nu, mas o sistema precisa de UMA resposta.
2. **`Text/Dark/Primary`:** Figma 2025 diz `#030E23`; produção diz `#081322`. Mesmo dilema.
3. **Nomenclatura:** adotar o namespace `vwds` que já existe embrionário no CSS, ou padrão novo? Sugestão: manter `vwds` (tem história e é único) com estrutura `vwds/{categoria}/{papel}/{variante}`.
4. **Taxonomia tipográfica:** manter a nomenclatura MUI da Legacy (`h1`–`caption`) — que conversa naturalmente com Storybook/React e com o stack Medplum/Mantine dos produtos — ou nomenclatura própria?
5. **Spectral:** a serif do blog entra no sistema como token oficial (`font/family/editorial`) ou o blog converge para Moderat?
6. **Client logos:** o set da Legacy é pré-healthcare (Bentobox, Carta...). O marquee atual de produção (Medplum, Mayo, Quilted, Perci, Rewind...) precisa virar o set oficial de variantes — e sair do Netlify avulso.

## 6. Próximos passos (Fase 2 → 3)

- [ ] Extrair valores exatos dos styles da Legacy (Colors Dark/Light/Vinta + type scale) para completar a coluna Legacy da matriz
- [ ] Cruzar com as 89 variáveis do Claude Playground (`P32RI6fveK22vubBtadqUu`)
- [ ] Gerar a **matriz de disparidade célula a célula** (cores → tipografia → spacing → radius → sombras → botão)
- [ ] Com as 6 decisões acima tomadas, redigir o arquivo de tokens W3C/Style Dictionary — a fonte de verdade única da Fase 3
