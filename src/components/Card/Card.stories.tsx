import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'VWDS Card (base). Contêiner compartilhado — ServiceCard/BlogCard/' +
          'TestimonialCard compõem conteúdo em cima disso via children. ' +
          'Padding do card é sempre aplicado; imageEdgeToEdge só decide o ' +
          'layout de uma eventual imagem no topo (false/default = v1, ' +
          'contida). Clickable aplica o hover-delight (borda azul, eleva ' +
          'sombra, sobe 2px). Largura máxima de 500px. Cores/radius/padding ' +
          'ligados aos tokens component.card.*.',
      },
    },
  },
  argTypes: {
    clickable: { control: 'boolean' },
    imageEdgeToEdge: { control: 'boolean' },
    href: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  args: {
    clickable: false,
    imageEdgeToEdge: false,
    children: 'Card content',
  },
};

/**
 * Versão principal (v1) — imageEdgeToEdge=false (default). A imagem fica
 * contida dentro do padding do card, com seu próprio border-radius (md).
 * TODO: trocar os placeholders <h3>/<p> por Typography quando esse
 * componente existir (hoje só há uma exportação órfã em src/index.ts).
 */
export const ContainedImage: Story = {
  render: () => (
    <Card>
      <div
        style={{
          background: 'var(--vwds-semantic-color-light-surface-muted)',
          borderRadius: 'var(--vwds-primitive-dimension-radius-md)',
          height: 160,
        }}
      />
      <h3>Título do card</h3>
      <p>Imagem contida dentro do padding — esta é a versão padrão (v1).</p>
    </Card>
  ),
};

/**
 * Versão secundária — imageEdgeToEdge=true. A imagem sangra até as bordas
 * do card no topo (cantos superiores acompanham o radius do card); o
 * conteúdo abaixo mantém seu próprio padding.
 */
export const EdgeToEdgeImage: Story = {
  render: () => (
    <Card imageEdgeToEdge>
      <div
        style={{
          background: 'var(--vwds-semantic-color-light-surface-muted)',
          height: 160,
        }}
      />
      <div style={{ padding: 'var(--vwds-component-card-padding)' }}>
        <h3>Imagem edge-to-edge</h3>
        <p>Alternativa à versão padrão — o conteúdo abaixo controla seu próprio padding.</p>
      </div>
    </Card>
  ),
};

/** Card clicável — passe o mouse ou navegue por Tab para ver o delight. */
export const Clickable: Story = {
  render: () => (
    <Card clickable href="#">
      <h3>Título clicável</h3>
      <p>Hover: borda azul, sombra elevation-2 e sobe 2px.</p>
    </Card>
  ),
};
