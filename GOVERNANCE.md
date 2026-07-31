# Governança do VWDS

O sistema anterior não morreu por falta de qualidade — morreu por falta de regra de mudança. Este documento existe para que não surja um `button-17`.

## Definição de pronto (componente)

Um componente só é considerado parte do sistema quando tem **os quatro**:

1. **Tokens** — zero valores literais; toda propriedade visual referencia `tokens/vwds.tokens.json`
2. **Estados completos** — default, hover, focus (visível!), active, disabled; responsividade definida por breakpoint tokens, nunca por duplicação
3. **Story no Storybook** — todas as variantes e estados demonstrados
4. **Par no Figma** — componente com variantes equivalentes, ligado via Code Connect

Faltou um dos quatro → é rascunho, não componente.

## Regras de token

- **Criar token novo** exige justificar por que nenhum token existente serve. Aprovação: Jason (design). A criação acontece em PR separado da feature que o usa.
- **Nomenclatura:** `camada/categoria/papel/variante` (ex.: `semantic/color/light/action/primary`). Camadas: `primitive` → `semantic` → `component`. Componentes referenciam a camada semântica; nunca pulam direto para primitivos (exceção documentada: logos e ilustrações).
- **Deprecar valor** nunca é apagar: o token ganha `$deprecated` + apontamento para o substituto, e sai só depois que nenhum componente o referencia.
- **Acessibilidade na camada de token:** todo par texto/superfície da camada semântica precisa passar WCAG AA (4.5:1 corpo, 3:1 display). Validação automática no CI (Fase 4).

## Regras de asset

- Todo asset (logos, ícones, ilustrações) mora neste repositório ou no CDN oficial do site. **Proibido** servir de deploys avulsos (caso Netlify `taupe-choux`).
- Ícones: set curado único; adicionar ícone segue o mesmo rito de adicionar token.

## Fluxo de mudança

1. Proposta (issue ou conversa com Claude) → 2. PR com token/componente + story → 3. Revisão visual no Storybook publicado + Figma → 4. Merge = sistema atualizado nas três vistas.

## Papéis

- **Jason (design):** dono da camada de tokens e da aprovação visual
- **Eng (a definir):** revisão de código dos componentes
- **Claude:** execução — gera tokens, componentes, stories e sync Figma; nunca faz merge sem revisão humana
