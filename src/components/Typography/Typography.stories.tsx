import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: StorybookMeta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'VWDS Typography. Cada variant carrega estilo via tokens ' +
          'semantic.typography.*; a tag HTML renderizada é a semanticamente ' +
          'correta por default, mas a prop `as` permite trocar a tag sem ' +
          'mudar o estilo (importante para acessibilidade/SEO).',
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
      options: ['primary', 'secondary', 'tertiary', 'link', 'on-action', 'inherit'],
    },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Playground: Story = {
  args: { variant: 'body1', color: 'primary', children: 'The quick brown fox jumps over the lazy dog.' },
};

const stack: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12 };
const row: React.CSSProperties = { display: 'flex', gap: 12, alignItems: 'baseline' };

/** Escala de marca (DM Sans) — h1 até caption, em ordem hierárquica. */
export const BrandScale: Story = {
  render: () => (
    <div style={stack}>
      {(
        [
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'subtitle1', 'subtitle2', 'body1', 'body2',
          'overline', 'caption',
        ] as const
      ).map((variant) => (
        <div key={variant} style={row}>
          <Typography variant="caption" color="tertiary" as="span">{variant}</Typography>
          <Typography variant={variant}>Vinta Website Design System</Typography>
        </div>
      ))}
    </div>
  ),
};

/** editorial-body — corpo de texto do blog, em Spectral. */
export const Editorial: Story = {
  render: () => (
    <Typography variant="editorial-body">
      HIPAA, Medplum e FHIR não são só siglas de conformidade — são a base
      sobre a qual construímos produtos de saúde que times clínicos confiam
      no dia a dia. Este parágrafo demonstra a família editorial (Spectral),
      usada em conteúdo de blog e páginas de case.
    </Typography>
  ),
};

/** Variações de cor semântica. */
export const Colors: Story = {
  render: () => (
    <div style={stack}>
      <Typography variant="body1" color="primary">Primary</Typography>
      <Typography variant="body1" color="secondary">Secondary</Typography>
      <Typography variant="body1" color="tertiary">Tertiary</Typography>
      <Typography variant="body1" color="link">Link</Typography>
      <div style={{ background: 'var(--vwds-semantic-color-light-action-primary)', padding: 12, borderRadius: 8 }}>
        <Typography variant="body1" color="on-action">On-action (sobre fundo azul)</Typography>
      </div>
      <span style={{ color: 'var(--vwds-primitive-color-blue-600)' }}>
        <Typography variant="body1" color="inherit">Inherit (herda a cor do pai)</Typography>
      </span>
    </div>
  ),
};

/**
 * Demonstra a prop `as`: visualmente um h3, mas renderizado como <h1> —
 * útil quando a hierarquia semântica da página não bate com a escala visual.
 */
export const SemanticVsVisual: Story = {
  render: () => (
    <div style={stack}>
      <Typography variant="h3" as="h1">Estilo h3, tag &lt;h1&gt;</Typography>
      <Typography variant="caption" color="tertiary">
        Inspecione o elemento: é um &lt;h1&gt; no DOM, com o estilo visual do h3.
      </Typography>
    </div>
  ),
};
