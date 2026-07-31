# ADR-003 — Componente Button

**Data:** 31/07/2026 · **Status:** implementado (aguardando review)

## Contexto
Primeiro componente com matriz de variantes. Esqueleto herdado da Legacy
(que já mapeava Size × Variant × State ao estilo MUI); cores e estética da era atual.

## Decisões

1. **Variantes:** filled, outline, text. (A Legacy tinha filled/text; outline foi
   adicionada por ser padrão recorrente em produção — `.button.button-outline`,
   `.button-8`.)
2. **Tamanhos:** md (40px), lg (48px), xl (56px) — consolidando os tamanhos dispersos
   de produção numa escala de 3.
3. **Estados:** default, hover, active, focus, disabled. Todos como tokens
   (`component.button.*`) e no CSS. `focus-visible` com anel de 2px + offset — WCAG
   2.4.7, requisito para o público healthcare.
4. **Radius unificado:** `radius.md` (8px), encerrando os 10 valores de raio de botão
   que existiam em produção (incluindo o `6.25092px` quebrado).
5. **type="button" por padrão:** evita submit acidental quando dentro de `<form>`.

## Tokens adicionados
`component.button` expandido: filled (+active, +disabled), outline (bg/border/text/
disabled), text (bg-hover/text/disabled), focus.ring. Total: 23 vars de button.

## Paridade Figma
- Component set **Button** no arquivo VWDS (`0S546H4QgffNj4L22cMxUQ`), 9 variantes
  (Variant × Size), cores **ligadas às variáveis** VWDS Semantic (validado:
  filled=fill+text, outline=fill+stroke+text, text=text).
- Estados hover/focus/disabled: no código são interações CSS; no Figma representamos
  a matriz base Variant×Size. Se o time quiser variantes de estado explícitas no
  Figma depois, é aditivo.
- Fonte-alvo Moderat → DM Sans no ambiente MCP (mesma limitação da Typography).

## Definição de pronto — status
- [x] Tokens (zero literais; 29 vars referenciadas, todas existentes)
- [x] Componente React + tipos (tsc limpo)
- [x] Story (variants, sizes, states, matriz completa, ícones)
- [x] Par no Figma (9 variantes ligadas a variáveis)
- [ ] Code Connect
- [ ] Review humano

---

## Atualização 31/07/2026 — CTA discreto dentro de card

Auditoria das páginas de serviço (ex.: /services/ehr-development-modernization)
mostrou um padrão recorrente: CTA discreto dentro de cards de serviço — texto azul
com seta (→): "De-risk your EHR ->", "Explore integrations ->", "Get CMS-ready ->",
"Build with Medplum ->", "Different stack? Talk to us!".

**Decisão (Opção 1 — convenção, não variante nova):** esse padrão é a variante
`text` existente + `iconRight` com seta. Não vira um quarto tipo de Button.
Convenção documentada: *dentro de card, usar `variant="text"` com a seta em
`iconRight`, sempre presente para sinalizar navegação.* Demonstrado na story
`CardCTA`.

Racional: manter a API do Button enxuta (3 variantes). O padrão é frequente mas é
uma aplicação da variante text, não um comportamento visual distinto o bastante para
justificar novo tipo. Este átomo vive dentro da molécula Service Card (P1 no
inventário) — quando o Service Card for construído, ele consumirá o Button text+seta
por padrão, garantindo consistência das setas (hoje variam de card para card).
