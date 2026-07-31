# ADR-002 — Variáveis de cor no Figma

**Data:** 31/07/2026 · **Status:** implementado

## Contexto
Antes de construir o Button (que referencia cores de ação, texto e superfície),
as cores precisam existir como variáveis no Figma, espelhando a arquitetura de
três camadas do `tokens/vwds.tokens.json`.

## Implementação
Arquivo **VWDS** (`0S546H4QgffNj4L22cMxUQ`), duas coleções:

1. **VWDS Primitives** (mode único "Value") — 20 cores cruas (blue, navy, steel,
   ice, darkmode, white). Cada variável:
   - scope de fill/stroke (não `ALL_SCOPES`)
   - code syntax WEB apontando pro CSS var real (ex.: `var(--vwds-primitive-color-blue-500)`)

2. **VWDS Semantic** (modes "Light" e "Dark") — 13 tokens semânticos
   (text/*, surface/*, action/*, border/*). Cada um **aliasa** um primitivo,
   com valor diferente por mode. Ex.: `text/primary` → navy/900 (Light) / ice/50 (Dark).
   - scopes por categoria: text→TEXT_FILL, surface/action→FRAME_FILL+SHAPE_FILL, border→STROKE_COLOR

## Validação
Resolvido programaticamente nos dois modes:
- text/primary: Light=navy/900, Dark=ice/50 ✓
- surface/page: Light=white, Dark=navy/900 ✓
- action/primary: Light=blue/500, Dark=blue/500 ✓

O dark mode funciona por aliasing (sem hardcode) — trocar o mode da frame troca
todas as cores ligadas.

## Paridade
As variáveis derivam dos mesmos valores do `tokens.json` que geram o CSS.
Nomes e code syntax batem com as CSS vars do Style Dictionary, então componentes
que usam `var(--vwds-...)` no código correspondem 1:1 às variáveis no Figma.

## Nota sobre limitação de plano
Modes por coleção dependem do plano Figma (Pro = até 4). Light+Dark cabem.
Se surgirem mais temas (ex.: high-contrast), avaliar split de coleção.

---

## Atualização 31/07/2026 — decisões de escopo de cor

1. **Verde e roxo ficam fora do sistema.** No site, aparecem majoritariamente em
   imagens e ilustrações, não nos componentes. Cor em imagem é conteúdo visual, não
   token. Os únicos verdes no CSS (`#5acc1d`, `#7dff8a`) são resíduos de template
   (hover de form e mensagem de sucesso); os "roxos" (`#4a3aff`, `#3324d5`) são o
   azul-violáceo do botão do template Brix. Nenhum é cor de marca — não tokenizar.

2. **Dark mode reposicionado como camada pontual.** Light é o tema padrão de fato
   (já é o defaultMode da coleção Semantic). Dark permanece disponível (não foi
   removido), mas é para aplicação isolada — texto sobre fundo escuro, blocos
   ocasionais — nunca como troca de tema de página inteira. Registrado nas descrições
   das coleções no Figma e no `$description` de semantic.color no tokens.json.
