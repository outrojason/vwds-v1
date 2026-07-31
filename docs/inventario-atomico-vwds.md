# Inventário Atômico Consolidado — Vinta Design System (VWDS)

**Data:** 23/07/2026 · **Fontes:** CSS/HTML de produção, Figma "Design System 2025" (4677:186), Figma Legacy (0:1)
**Legenda de paridade:** ✅ existe estruturado · ⚠️ existe mas fragmentado/ad hoc · ❌ não existe

---

## Nível 0 — Tokens (fundação)

| Token group | Produção | Figma 2025 | Legacy | Decisão |
|---|---|---|---|---|
| Cores primitivas | ⚠️ 28 vars + dezenas de hex soltos | ⚠️ poucas vars, 2 convenções | ✅ tabelas Dark/Light/Vinta | Azul canônico `#0052FF` |
| Cores semânticas | ⚠️ embrião (`--text-dark-primary`…) | ⚠️ parcial (`Text/Dark/Primary`) | ❌ | 3 camadas: primitivo → semântico → componente |
| Tipografia | ⚠️ 20 tamanhos, 3 formas de declarar Moderat | ❌ sem text styles ligados | ✅ 12 variantes MUI | Taxonomia MUI (`h1`–`caption`) + `editorial` (Spectral) |
| Spacing | ⚠️ embrião 8pt nos gaps, valores mágicos no resto | ❌ | ❌ | Escala 8pt: 4–128 |
| Radius | ⚠️ 15 valores | ❌ | ❌ | Escala: 4 / 8 / 16 / full |
| Sombras | ⚠️ 12+ únicas | ❌ | ❌ | 3 elevações |
| Breakpoints | ✅ 991/767/479 (Webflow) | ❌ | ❌ | Manter os 3 + definir container |

## Nível 1 — Átomos

| Átomo | Produção | Figma 2025 | Legacy | Prioridade |
|---|---|---|---|---|
| **Button** | ⚠️ 15+ implementações | ❌ desenhado inline nas seções | ✅ Size × Variant × Color × State (~28 var.) | **P1** |
| **Typography** (Heading/Text) | ⚠️ classes dispersas | ⚠️ estilos soltos | ✅ h1–h6, subtitle1/2, body1/2, overline, caption | **P1** |
| Link / Nav link | ⚠️ | ⚠️ | ❌ | P1 (dentro de Header) |
| Tag / Badge | ⚠️ (categorias de blog, service tags) | ⚠️ | ❌ | P2 |
| Input / Textarea | ⚠️ (contato, newsletter, search — hover verde de template!) | ❌ | ❌ | P2 |
| Icon | ⚠️ mistura de sets | ⚠️ Argument Icons + AI stack | ✅ ~230 símbolos 48px + tech icons | P2 (curadoria: reduzir p/ set usado) |
| Logo Vinta | ✅ | ✅ | ✅ Text/Hexagon × Blue/White/Dark | P1 (só formalizar) |
| Client logo | ⚠️ servidos de Netlify avulso | ✅ set healthcare (Medplum, Mayo…) | ⚠️ set pré-healthcare | **P1** (asset pipeline) |
| Divider | ⚠️ | ❌ | ⚠️ | P3 |
| Avatar / Author image | ⚠️ | ✅ (Name/Role de biblioteca externa) | ❌ | P2 |

## Nível 2 — Moléculas

| Molécula | Produção | Figma 2025 | Legacy | Prioridade |
|---|---|---|---|---|
| **Service Card** | ⚠️ | ✅ (Services List Section) | ❌ | **P1** |
| **Testimonial** (quote + autor) | ⚠️ | ✅ (Testimonials Section) | ❌ | **P1** |
| Argument Card | ⚠️ | ✅ (9 cópias manuais!) | ❌ | P2 |
| Work/Case Card | ⚠️ (placeholder vazando no Quilted) | ✅ (Case Assets) | ❌ | P2 |
| Blog Post Card | ⚠️ | ⚠️ (Thumbnails) | ❌ | P2 |
| Metric/Stat | ⚠️ | ✅ (Metrics Section) | ❌ | P2 |
| FAQ item (accordion) | ⚠️ | ✅ (FAQ Section) | ❌ | P2 |
| Nav item + dropdown | ⚠️ triplicado no DOM | ⚠️ | ❌ | **P1** (dentro de Header) |
| Form field (label+input+erro) | ⚠️ | ❌ | ❌ | P2 |
| Search bar | ✅ custom jQuery (Learnings) | ❌ | ❌ | P3 (reimplementar em React) |
| Tech stack item | ⚠️ | ✅ (techstack-box + AI stack) | ⚠️ tech icons | P2 |
| CTA block ("Say hi") | ⚠️ duplicado | ⚠️ | ❌ | P2 |
| Tab | ❌ | ❌ | ✅ 4 estados | P3 (se houver caso de uso) |

## Nível 3 — Organismos

| Organismo | Produção | Figma 2025 | Prioridade |
|---|---|---|---|
| **Header / Navbar** (mega menu de services) | ⚠️ duplicação por breakpoint | ⚠️ (Website elements) | **P1** |
| **Footer** | ⚠️ links triplicados | ⚠️ | **P1** |
| **Hero** (light + dark) | ⚠️ | ✅ ambos | **P1** |
| Logo Marquee | ✅ | ✅ | P1 (depende do asset pipeline) |
| Testimonials Section | ⚠️ | ✅ | P2 |
| Arguments/Processes Section | ⚠️ | ✅ | P2 |
| Services List Section | ⚠️ | ✅ (2 versões) | P2 |
| Tech Stack Section | ⚠️ | ✅ (2 versões + AI stack) | P2 |
| Metrics Section | ⚠️ | ✅ | P2 |
| FAQ Section | ⚠️ | ✅ | P2 |
| Clients Section | ⚠️ | ✅ | P2 |
| Pages List Section | ⚠️ | ✅ | P3 |
| Resources Section (light + dark) | ⚠️ | ✅ | P3 |
| Blog rich text (Spectral) | ✅ | ❌ | P2 (token `editorial` + estilos de prose) |
| Contact form section | ⚠️ (hover verde) | ❌ | P2 |

## Nível 2.5 — Integrações de terceiros (componentes wrapper)

Embeds não são desenhados, mas precisam de wrappers no sistema: container com tokens, loading state, responsividade e fallback. É o que garante que o iframe de terceiro não quebre layout nem destoe visualmente.

| Integração | Onde aparece | Tratamento | Prioridade |
|---|---|---|---|
| **Calendly** | Contato / CTAs de agendamento | `<EmbedCalendly>` wrapper (lazy load + skeleton) | P2 |
| Vídeo (YouTube/Loom) | Blog, cases, Health Builders Jam | `<EmbedVideo>` com aspect-ratio e thumbnail | P2 |
| Newsletter form | Blog / footer | Form field do sistema + integração com o provedor atual (mapear qual é) | P2 |
| Formulário de contato | Contact | Form fields do sistema + destino do submit (mapear handler atual do Webflow) | P2 |
| GTM / Analytics | Global | Não é componente — entra no checklist de migração (Fase 5) | — |
| Social embeds | Blog (se houver) | Auditar uso real antes de criar wrapper | P3 |

**Pendência de auditoria:** varrer as páginas de Contact, Careers e posts de blog para fechar a lista exata de embeds ativos (inclusive o provedor do form de newsletter e o handler dos submits do Webflow).

## Nível 4 — Templates (fase de migração)

Home · Service page (~14 variações de conteúdo, 1 template) · Work hub · Work case · Blog hub · Blog post · About · Careers · Contact · Playbook · Lessons Learned

**Dependência crítica de template:** decisão de CMS (blog, cases, vagas) antes de qualquer template ser construído.

---

## Leitura do inventário

1. **O funil é saudável:** ~10 átomos, ~13 moléculas, ~15 organismos, 11 templates. É um sistema pequeno — totalmente construível de forma incremental.
2. **A coluna "Figma 2025" é o guia visual das moléculas/organismos**; a coluna "Legacy" é o guia estrutural dos átomos. Nenhuma seção precisa ser desenhada do zero — precisa ser *componentizada*.
3. **Ordem de construção P1:** tokens → Typography → Button → Logo/Client logos (+ asset pipeline) → Header → Footer → Hero → Service Card → Testimonial. Com isso, a Home inteira já é montável.
4. **Curadoria pendente (design):** reduzir os ~230 ícones da Legacy ao set realmente usado; definir o set oficial de client logos healthcare.
