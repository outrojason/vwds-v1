import type { Meta, StoryObj } from '@storybook/react';
import { FeatureBlock } from './FeatureBlock';

const placeholderImage = (label: string) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(160deg, var(--vwds-primitive-color-steel-300), var(--vwds-primitive-color-navy-700))',
      color: 'var(--vwds-primitive-color-white)',
      fontFamily: 'var(--vwds-semantic-typography-caption-font-family)',
      fontSize: 'var(--vwds-semantic-typography-caption-font-size)',
    }}
  >
    {label}
  </div>
);

const meta: Meta<typeof FeatureBlock> = {
  title: 'Molecules/FeatureBlock',
  component: FeatureBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card inteiro clicável, imagem de fundo edge-to-edge + overlay ' +
          '(component.feature-block.overlay) pra legibilidade. Título ' +
          'bicolor (branco + accent azul) no topo, CTA na base. Hover: ' +
          'zoom leve na imagem.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureBlock>;

export const Playground: Story = {
  args: {
    image: placeholderImage('1200×900'),
    titleLines: [{ text: 'Healthcare' }, { text: 'Development', accent: true }],
    ctaLabel: 'Empower your care excellence',
    ctaHref: '#',
  },
};

export const NoImage: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <FeatureBlock
        titleLines={[{ text: 'Healthcare' }, { text: 'Development', accent: true }]}
        ctaLabel="Empower your care excellence"
        ctaHref="#"
      />
    </div>
  ),
};

export const Pair: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--vwds-primitive-dimension-space-6)',
      }}
    >
      <FeatureBlock
        image={placeholderImage('1200×900')}
        titleLines={[{ text: 'Healthcare' }, { text: 'Development', accent: true }]}
        ctaLabel="Empower your care excellence"
        ctaHref="#"
      />
      <FeatureBlock
        image={placeholderImage('1200×900')}
        titleLines={[{ text: 'End-to-end' }, { text: 'Development', accent: true }]}
        ctaLabel="See how we build software"
        ctaHref="#"
      />
    </div>
  ),
};
