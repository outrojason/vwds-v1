import type { Meta, StoryObj } from '@storybook/react';
import { Typography, type TypographyVariant } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'VWDS Typography. Cada variante mapeia 1:1 para um token semântico ' +
          '(semantic.typography). Taxonomia MUI aprovada na auditoria. ' +
          'A variante editorial-body usa a família Spectral (token editorial).',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'subtitle1', 'subtitle2', 'body1', 'body2',
        'overline', 'caption', 'editorial-body',
      ],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link', 'inherit'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

/** Playground — mexa nos controles para testar variante e cor. */
export const Playground: Story = {
  args: {
    variant: 'h2',
    color: 'primary',
    children: 'O rápido cágado salta sobre a raposa',
  },
};

const brandScale: TypographyVariant[] = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'subtitle1', 'subtitle2', 'body1', 'body2', 'overline', 'caption',
];

/** Escala completa da marca (Moderat), na ordem hierárquica. */
export const BrandScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {brandScale.map((v) => (
        <div key={v} style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
          <Typography
            variant="caption"
            color="tertiary"
            style={{ width: 90, flexShrink: 0, fontFamily: 'monospace' }}
          >
            {v}
          </Typography>
          <Typography variant={v}>
            Vinta — healthcare software
          </Typography>
        </div>
      ))}
    </div>
  ),
};

/** Texto editorial (Spectral) — usado no corpo do blog. */
export const Editorial: Story = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <Typography variant="editorial-body">
        A serif Spectral marca a voz editorial da Vinta no blog. É a única
        família fora da Moderat no sistema, reservada para leitura longa —
        posts e, futuramente, as páginas de case.
      </Typography>
    </div>
  ),
};

/** Papéis de cor semântica (tema claro). */
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Typography variant="h4" color="primary">Primary — títulos e texto principal</Typography>
      <Typography variant="body1" color="secondary">Secondary — texto de apoio</Typography>
      <Typography variant="body2" color="tertiary">Tertiary — legendas e metadados</Typography>
      <Typography variant="body1" color="link">Link — navegação e âncoras</Typography>
    </div>
  ),
};

/** Demonstra que estilo e elemento são independentes (importante para acessibilidade). */
export const SemanticVsVisual: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Typography variant="h3" as="h1">
        Visualmente h3, mas é um &lt;h1&gt; no HTML
      </Typography>
      <Typography variant="caption" color="tertiary">
        A prop `as` troca a tag sem mudar o estilo — mantém o outline do
        documento correto para leitores de tela e SEO.
      </Typography>
    </div>
  ),
};
