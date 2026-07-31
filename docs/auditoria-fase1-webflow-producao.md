# Auditoria de Design System — Fase 1: Inventário do Webflow em Produção

**Fonte:** `vintasoftware.webflow.shared.88207447e.min.css` (CSS publicado) + varredura estrutural do HTML renderizado
**Data:** 23/07/2026
**Cobertura:** ~85% do arquivo CSS (trecho principal de definições; cauda de media queries não capturada nesta passada)

---

## 1. Descoberta central

Existem **três gerações de design sobrepostas** no CSS de produção, identificáveis pela arqueologia dos nomes de classe:

1. **Era template (2023):** classes herdadas de templates comprados — `brix---*`, `writelogy` (ícone de busca), `.btn-primary` roxo `#4a3aff` com radius `48px`, `.btn` com hover **verde `#5acc1d`**. Nada disso é Vinta.
2. **Era artesanal:** `.div-block-8` até `.div-block-143` (classes auto-geradas sem nome), `.section-19`…`.section-32` com margens negativas hand-tuned (`-3px`, `-8px`, `-13px`…), `.patagraph` (typo de "paragraph" em produção), `.azul-vinta` (mistura PT/EN).
3. **Era "VWDS":** variáveis com prefixo `--vwds-*` (Vinta Website Design System) e classes exportadas do Figma (`.frame-44032`, `.vectors-wrapper-*`, `.value-*`) — alguém começou a sistematizar, mas parou no meio.

## 2. Tokens de cor

### 2.1 Variáveis CSS existentes (`:root`) — 28 no total

**Marca:**
| Token | Valor |
|---|---|
| `--vinta-blue-main` | `#0050ff` |
| `--vinta-blue-light` | `#3274ff` |
| `--vinta-blue-lighter` | `#728aff` |
| `--vinta-darker` | `#002fdb` |

**Texto (light-on-dark e dark-on-light):**
| Token | Valor |
|---|---|
| `--text-dark-primary` | `#081322` |
| `--text-dark-secondary` | `#263651` |
| `--text-dark-tertiary` | `#465a78` |
| `--text-light-primary` | `#e5eafd` |
| `--gray-blue-paragraph` | `#3e4966` |
| `--dark-long-text-blog` | `#3e3f4b` |
| `--light-blue-text` | `#c1d1eb` |
| `--royal-blue-text` | `#2b58b8` |

**Superfícies / neutros:**
| Token | Valor |
|---|---|
| `--primary-gray-background` | `#eaeff9` |
| `--lavender-header` | `#dfe6f6` |
| `--light-steel-blue` | `#b3bfd8` |
| `--metal-gray` | `#a3acbe` |
| `--cornflower-blue` | `#7e95c6` |
| `--cornflower-blue-2` | `#7d95c6` ⚠️ duplicata quase idêntica |
| `--darkest-tone` | `#010611` |
| `--midnight-blue` | `#001b55` |
| `--midnight-blue-2` | `#152343` |

**Dark mode (parcial):**
| Token | Valor |
|---|---|
| `--dark-mode-blue` | `#030e23` |
| `--blue-paragraph-text-darkmode` | `#3274ff` |
| `--paragraph-text-color-dark-mode` | `#97b1dc` |
| `--vwds-darkmode` | `#050508` |
| `--vwds-gray-text-primary` | `#7d8daa` |
| `--vwds-gray-text` | `var(--metal-gray)` (alias) |
| `--vwds-light-blue-background` | `var(--light-steel-blue)` (alias) |

### 2.2 O problema dos dois azuis

O azul primário **não é estável em produção**:

- `#0050ff` — o token oficial (`--vinta-blue-main`), hardcoded também em dezenas de classes antigas (`.section.hero`, `.button.blue`, `.navbar-2`…)
- `#0052ff` — usado em **todos os componentes mais novos** exportados do Figma: `.contact-us`, `.button-10`, `.button-15`, `.value-1`, `.typography-h3-3`, `.hero-about-description`, `.text-238`

Ou seja: o Figma recente e o CSS legado divergem no próprio azul da marca. Outros azuis órfãos em produção: `#3366d9` (hover de team card), `#4a3aff` (botão de template Brix), `#095fff` (`.button-13`), `#4769ff` (focus de input), `#5a98ff`.

### 2.3 Cores hardcoded fora do sistema

A maioria esmagadora das declarações de cor **não usa as variáveis**. Exemplos: `#333` (body text default), `#2b2b2b`, `#191919`, `#343434` (cinzas de footer/section inconsistentes entre si), `#172235`, `#12253e`, `#060e19`, `#0e0e16`, `#031945` (dark tones concorrentes com `--darkest-tone`), verde `#5acc1d` (hover de formulário — herança de template), e uma família de divs de debug com vermelhos (`#f00f0f`, `#e42323`, `#b97272`) aparentemente esquecidos em produção (`.div-block-98`–`.div-block-116`).

## 3. Tokens de tipografia

### 3.1 Fontes carregadas via @font-face

- **Moderat** — Thin (100), Light (300), Regular (400), Bold (700), em woff2, servidas pelo CDN do Webflow. **A Moderat está licenciada e no ar.**
- **Spectral** (serif) — ExtraLight (200), Light (300), Regular (400), Medium Italic (500), SemiBold (600), ExtraBold (700). Usada no rich text do blog (`.blog-content-rich-text`) e em títulos de posts "drops".

### 3.2 Problema estrutural: três formas de declarar a mesma fonte

1. `font-family: Moderat, Arial, sans-serif` + `font-weight` — **o jeito certo**, usado em poucas classes
2. `font-family: "Moderat Regular"` / `"Moderat Bold"` / `"Moderat Thin"` / `"Moderat Light"` — famílias fantasma (padrão Webflow de tratar peso como família). Essas famílias **não existem** nos @font-face; o navegador resolve por fallback silencioso
3. **Nenhuma declaração** — o `body` global ainda é `Arial, Helvetica Neue, Helvetica, sans-serif` a `14px`. Moderat é aplicada classe a classe, não na base

### 3.3 Escala tipográfica (caótica)

Tamanhos encontrados em produção: `10, 12, 14, 16, 17, 18, 20, 22, 24, 26, 30, 32, 35, 36, 38, 40, 44, 48, 56, 64px` — 20 tamanhos, sem razão de escala discernível. Line-heights igualmente dispersos: `116.7%`, `120%`, `123%`, `130%`, `135%`, `140%`, `143%`, `150%`, `157%`, `160%`, `166%`, `170%`, `180%`, `266%`, além de valores fixos em px.

Headings base: `h1` 56px/130% w100 · `h2` 40px/130% w100 · `h3` 32px/130% w100 · `h4` 18px/24px w700 · `h5` 14px w700 — mas sobrescritos por dezenas de classes (`.h2-alt-title` 48px, `.text-221` 64px, `.vwds-h1-blog-title` 36px…).

## 4. Átomo Button — o caso mais grave

Contagem: **pelo menos 15 implementações independentes de botão**, sem herança comum:

| Classe | Radius | Padding | Cor | Origem |
|---|---|---|---|---|
| `.w-button` | 0 | 9/15px | `#3898ec` (azul Webflow default!) | Webflow base |
| `.button` (+combos `.blue`, `.azul-vinta`, `.white`, `.blue-version`, `.button-outline`, `.nav-version`) | 5–8px | varia | `#0050ff` | Era artesanal |
| `.button-8` | 4px | — | borda `#12253e` | Export Figma |
| `.button-10`, `.button-15` | 4px | — | `#0052ff` + sombras Material Design em 3 camadas | Export Figma |
| `.button-12` | 6px | 24/48px | `#0050ff` | Artesanal |
| `.button-13` | 50px | — | `#095fff` | Órfão |
| `.btn-primary` | 48px | 26/38px | `#4a3aff` roxo | Template Brix |
| `.btn` | 8px | .75em/1em | hover verde `#5acc1d` | Template forms |
| `.button-14` | 6.25092px ⚠️ | — | `#0052ff` | Export Figma (valor quebrado) |

Radii de botão em produção: `0, 4, 5, 6, 6.25, 8, 10, 48, 50, 100px`.

## 5. Sombras

Sem sistema de elevação. Amostra de sombras únicas encontradas: `0 4px 40px 16px #1974ca33`, `0 4px 44px #575d9c4d`, `0 6px 20px -5px #58678a`, `0 7px 16px -8px #6898ff9e`, `0 1px 8px #3e63b445`, `0 4px 30px #0050ff40`, `72px 72px 72px #2233670f`, mais o trio Material Design (`0 2px 1px #0003, 0 1px 1px #00000024, 0 1px 3px #0000001f`) nos exports novos do Figma. ~12+ sombras distintas, nenhuma tokenizada.

## 6. Radius e spacing

- **Radii globais:** `2, 3, 4, 5, 6, 8, 11, 12, 15, 16, 20, 24, 48, 50, 100px` + `50%`
- **Spacing:** valores mágicos por toda parte — `margin-left: 753px`, `padding: 71px 356px`, `margin-left: 328px`, `top: 501px; left: 37px` (posicionamento absoluto de imagens flutuantes), `left: 877px`. Layout dependente de valores absolutos de desktop, o que explica fragilidade responsiva
- Grid gaps mais comuns: `8, 10, 16, 24, 32, 40, 64px` — há um embrião de escala 8pt, mas não consolidado

## 7. Achados estruturais (da varredura do HTML)

- Links de footer e nav **triplicados no DOM** (padrão de duplicação por breakpoint, não componente responsivo)
- Placeholder `"This is some text inside of a div block"` visível em produção (case Quilted Health) — slots de CMS órfãos
- Logos de clientes servidos de `taupe-choux-1ff137.netlify.app` — **fora do CDN do Webflow**, dependência frágil não gerenciada
- Divs de debug com backgrounds vermelhos no CSS de produção

## 8. O que já existe de aproveitável

1. As **28 variáveis `:root`** são um embrião real de sistema — os nomes semânticos (`--text-dark-primary/secondary/tertiary`) são o melhor padrão presente e conversam com o modelo de coleção que montamos no Figma Claude-Playground
2. O prefixo **`vwds-`** indica que já houve intenção de formalizar um "Vinta Website Design System" — vale adotar (ou substituir conscientemente) esse namespace
3. **Moderat licenciada e no ar** em 4 pesos woff2 — resolve a dúvida da disponibilidade da fonte para o pipeline (o gap fica só no ambiente Figma-MCP, que substitui por DM Sans)
4. **Spectral como serif editorial** do blog é uma decisão de design real que não está refletida no sistema do Figma — precisa entrar como token de font family secundária
5. O embrião de escala 8pt nos gaps de grid

## 9. Disparidades a validar contra o Figma (próxima etapa)

| # | Questão | Produção diz |
|---|---|---|
| 1 | Azul primário | `#0050ff` (legado) vs `#0052ff` (exports novos) — qual é o canônico? |
| 2 | Serif editorial | Spectral existe em produção; existe no Figma? |
| 3 | Dark mode | Tokens parciais em produção; sistema completo no Playground — reconciliar |
| 4 | Radius de botão | 10 valores em produção vs o que definimos no Playground |
| 5 | Sombras | 12+ em produção vs shadow styles do Playground |
| 6 | Type scale | 20 tamanhos em produção vs 12 text styles do Playground |
| 7 | Peso de fonte | Produção usa Thin(100) e Light(300) extensivamente; sistema novo cobre esses pesos? |

## 10. Pendências desta fase

- [ ] Capturar a cauda do CSS (media queries) para mapear tokens responsivos por breakpoint (991/767/479px)
- [ ] Extração das variáveis e styles do arquivo Figma `x3GUv1M63KRmm5lszNJLNn` (Explorations 2023–2024, node 4677-186) para montar a matriz de três vias
- [ ] Screenshots das páginas P1 para auditoria visual: Home, /services/healthtech, /services/healthcare-development, /services/medplum, /services/ai-agents-llm-development (destaque IA), /work, /work/quilted-health
