import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import { ArrowRightIcon, CheckIcon } from './icons';

const meta: StorybookMeta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'VWDS Icon. Infraestrutura do sistema de ícones — NÃO desenha ' +
          'ícones específicos, só padroniza grid (24x24), stroke, tamanho e ' +
          'cor. Os ícones (paths) vêm de design; hoje só existem dois de ' +
          'exemplo (ArrowRight, Check) pra provar o sistema.',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    color: { control: 'select', options: ['default', 'muted', 'inherit'] },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

const row: React.CSSProperties = { display: 'flex', gap: 16, alignItems: 'center' };

export const Playground: Story = {
  render: (args) => (
    <CheckIcon size={args.size} color={args.color} label={args.label} />
  ),
  args: { size: 'md', color: 'default', label: 'Concluído' },
};

/** Os 4 tamanhos, lado a lado. */
export const Sizes: Story = {
  render: () => (
    <div style={row}>
      <ArrowRightIcon size="sm" label="sm" />
      <ArrowRightIcon size="md" label="md" />
      <ArrowRightIcon size="lg" label="lg" />
      <ArrowRightIcon size="xl" label="xl" />
    </div>
  ),
};

/** default/muted/inherit — inherit dentro de um contexto colorido (texto branco sobre fundo azul). */
export const Colors: Story = {
  render: () => (
    <div style={row}>
      <div style={{ ...row, gap: 8 }}>
        <CheckIcon color="default" label="Default" />
        <span>Default</span>
      </div>
      <div style={{ ...row, gap: 8 }}>
        <CheckIcon color="muted" label="Muted" />
        <span>Muted</span>
      </div>
      <div
        style={{
          ...row,
          gap: 8,
          background: 'var(--vwds-semantic-color-light-action-primary)',
          color: 'var(--vwds-semantic-color-light-text-on-action)',
          padding: 12,
          borderRadius: 8,
        }}
      >
        <CheckIcon color="inherit" label="Inherit" />
        <span>Inherit (herda o branco do contexto)</span>
      </div>
    </div>
  ),
};

/**
 * Os dois ícones que existem hoje. A biblioteca completa
 * (docs/icon-library-spec.md) será desenhada por design.
 */
export const AvailableIcons: Story = {
  render: () => (
    <div style={row}>
      <div style={{ ...row, gap: 8 }}>
        <ArrowRightIcon label="Arrow right" />
        <span>ArrowRightIcon</span>
      </div>
      <div style={{ ...row, gap: 8 }}>
        <CheckIcon label="Check" />
        <span>CheckIcon</span>
      </div>
    </div>
  ),
};
