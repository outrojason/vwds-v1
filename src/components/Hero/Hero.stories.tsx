import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { FeatureBlock } from '../FeatureBlock';

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

const TITLE_LINES = [{ text: 'Building tech' }, { text: 'the human way', accent: true }];
const SUBTITLE =
  'We craft digital products with technical depth and long-term vision for healthcare and beyond.';

const meta: Meta<typeof Hero> = {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Layout único da home, alinhado à esquerda. Headline em ' +
          'semantic.typography.hero-title (100px, thin, line-height 1.0), ' +
          'linha a linha — accent=true pinta a linha em action/primary. ' +
          'offsetLines desloca as linhas pares (component.hero.offset, ' +
          '380px) pro efeito escada.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Playground: Story = {
  args: {
    eyebrow: 'HEALTHCARE SOFTWARE',
    titleLines: TITLE_LINES,
    subtitle: SUBTITLE,
    offsetLines: true,
  },
};

export const NoOffset: Story = {
  render: () => (
    <Hero eyebrow="HEALTHCARE SOFTWARE" titleLines={TITLE_LINES} subtitle={SUBTITLE} offsetLines={false} />
  ),
};

/**
 * Composição completa da home (Figma): Hero em cima, feature-row com os
 * 2 FeatureBlocks lado a lado (mesma largura, gap 24px) embaixo.
 */
export const Home: Story = {
  render: () => (
    <div>
      <Hero eyebrow="HEALTHCARE SOFTWARE" titleLines={TITLE_LINES} subtitle={SUBTITLE} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--vwds-primitive-dimension-space-6)',
          padding: `0 var(--vwds-primitive-dimension-space-16) var(--vwds-primitive-dimension-space-16)`,
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
    </div>
  ),
};
