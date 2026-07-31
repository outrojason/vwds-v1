import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'VWDS Button. Matriz Variant (filled/outline/text) × Size (md/lg/xl) × ' +
          'estados. Esqueleto herdado da Legacy; cores e estética da era atual, ' +
          'ligadas aos tokens component.button.*. Foco visível para acessibilidade.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outline', 'text'] },
    size: { control: 'select', options: ['md', 'lg', 'xl'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: { variant: 'filled', size: 'lg', children: 'Fale com a gente' },
};

const row: React.CSSProperties = { display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 };

/** As três variantes lado a lado. */
export const Variants: Story = {
  render: () => (
    <div style={row}>
      <Button variant="filled">Filled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
};

/** Os três tamanhos. */
export const Sizes: Story = {
  render: () => (
    <div style={row}>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XLarge</Button>
    </div>
  ),
};

/** Estados por variante (default e disabled). */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={row}>
        <Button variant="filled">Filled</Button>
        <Button variant="filled" disabled>Filled disabled</Button>
      </div>
      <div style={row}>
        <Button variant="outline">Outline</Button>
        <Button variant="outline" disabled>Outline disabled</Button>
      </div>
      <div style={row}>
        <Button variant="text">Text</Button>
        <Button variant="text" disabled>Text disabled</Button>
      </div>
    </div>
  ),
};

/** Matriz completa: cada variante em cada tamanho. */
export const FullMatrix: Story = {
  render: () => {
    const variants = ['filled', 'outline', 'text'] as const;
    const sizes = ['md', 'lg', 'xl'] as const;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {variants.map((v) => (
          <div key={v} style={row}>
            {sizes.map((s) => (
              <Button key={s} variant={v} size={s}>
                {v} {s}
              </Button>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

/** Com ícones (usando caracteres simples como placeholder). */
export const WithIcons: Story = {
  render: () => (
    <div style={row}>
      <Button iconLeft={<span>←</span>}>Voltar</Button>
      <Button iconRight={<span>→</span>}>Avançar</Button>
    </div>
  ),
};

/**
 * CONVENÇÃO — CTA discreto dentro de card.
 *
 * Padrão recorrente nas páginas de serviço ("De-risk your EHR ->",
 * "Explore integrations ->" etc.): usa a variante `text` com seta em iconRight.
 * NÃO é uma variante nova — é a variante `text` aplicada por convenção.
 * Sempre incluir a seta (→) para sinalizar navegação para outra página.
 */
export const CardCTA: Story = {
  render: () => (
    <div
      style={{
        maxWidth: 320,
        padding: 24,
        borderRadius: 16,
        background: 'var(--vwds-semantic-color-light-surface-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'flex-start',
      }}
    >
      <strong style={{ fontFamily: 'var(--vwds-semantic-typography-h5-font-family)' }}>
        EHR integrations
      </strong>
      <span style={{ color: 'var(--vwds-semantic-color-light-text-secondary)' }}>
        Connect scheduling, diagnostics, and charting into your EHR.
      </span>
      <Button variant="text" iconRight={<span aria-hidden="true">→</span>}>
        Explore integrations
      </Button>
    </div>
  ),
};
