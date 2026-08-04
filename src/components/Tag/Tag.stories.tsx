import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: StorybookMeta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'VWDS Tag/Badge. 3 variantes por uso — NÃO é um botão. "category" ' +
          'é clicável (href) com estados default/selected/pressed; "label" e ' +
          '"meta" são sempre estáticas. Cores/radius ligados aos tokens ' +
          'component.tag.*.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['category', 'label', 'meta'] },
    size: { control: 'select', options: ['sm', 'md'] },
    selected: { control: 'boolean' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  args: { variant: 'category', size: 'md', href: '#', children: 'HIPAA' },
};

const row: React.CSSProperties = { display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 };

/** Categorias de blog clicáveis. */
export const Categories: Story = {
  render: () => (
    <div style={row}>
      <Tag variant="category" href="#">HIPAA</Tag>
      <Tag variant="category" href="#">Medplum</Tag>
      <Tag variant="category" href="#">FHIR</Tag>
      <Tag variant="category" href="#">Clinical AI</Tag>
    </div>
  ),
};

/**
 * Estados de "category": default e selected (azul/branco).
 * Pressed é só no clique — passe o mouse e clique para ver bg-pressed.
 */
export const CategoryStates: Story = {
  render: () => (
    <div style={row}>
      <Tag variant="category" href="#">Default</Tag>
      <Tag variant="category" href="#" selected>Selected</Tag>
    </div>
  ),
};

/** Rótulo com ícone em quadradinho, sempre estático. */
export const Labels: Story = {
  render: () => (
    <div style={row}>
      <Tag variant="label" icon={<span>👤</span>}>Product Managers</Tag>
      <Tag variant="label" icon={<span>🛠</span>}>Tech leadership</Tag>
    </div>
  ),
};

/** Metadados com ícone colorido, sempre estático. */
export const Meta: Story = {
  render: () => (
    <div style={row}>
      <Tag variant="meta" icon={<span>▶</span>}>Drops · 4 min read</Tag>
      <Tag variant="meta" icon={<span>📄</span>}>Article · 5 min read</Tag>
    </div>
  ),
};
