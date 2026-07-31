# VWDS — Vinta Website Design System

Fonte de verdade única do design system do site da Vinta. Deste repositório derivam **todas** as vistas do sistema: as variáveis do Figma, o CSS do site e a documentação viva no Storybook.

## Arquitetura

```
tokens/vwds.tokens.json          ← A FONTE DE VERDADE (formato W3C Design Tokens)
        │
        ▼  npm run tokens (Style Dictionary)
dist/css/variables.css           ← consumido pelo site e pelo Storybook
dist/figma/tokens.flat.json      ← consumido pelo sync Figma (via Claude + MCP)
dist/ts/tokens.{js,d.ts}         ← acesso tipado nos componentes React
        │
        ▼
src/components/                  ← átomos → moléculas → organismos (React)
src/components/**/*.stories.tsx  ← Storybook (documentação viva)
```

**Regra de ouro:** nenhum componente contém valor literal de cor, tamanho, radius ou sombra. Tudo referencia token. Se o valor não existe, primeiro se cria o token (ver GOVERNANCE.md), depois o componente.

## Fluxo de trabalho (AI-first)

1. Alteração de token → editar `tokens/vwds.tokens.json` → `npm run tokens`
2. Sync Figma → Claude lê `dist/figma/tokens.flat.json` e atualiza as Figma Variables via MCP
3. Componente novo → Claude gera componente + story a partir dos tokens; revisão humana no Storybook e no Figma
4. Code Connect liga cada componente Figma ao arquivo React correspondente

## Estrutura

```
tokens/       fonte de verdade
config/       pipeline Style Dictionary
src/
  styles/     fonts.css (@font-face Moderat/Spectral), reset, base
  components/ um diretório por componente: Button/, Typography/, ...
docs/         decisões de design (ADRs), inventário atômico, auditorias
dist/         gerado — nunca editar à mão
```

## Comandos

```bash
npm install
npm run tokens      # gera dist/ a partir de tokens/vwds.tokens.json
npm run storybook   # (após setup da Fase 4) documentação viva local
```

## Referências

- `docs/inventario-atomico-vwds.md` — censo completo de átomos/moléculas/organismos com prioridades
- `docs/auditoria-fase1-webflow-producao.md` — auditoria do CSS de produção
- `docs/auditoria-fase1b-figma.md` — auditoria dos arquivos Figma
- `GOVERNANCE.md` — regras de mudança e definição de pronto
