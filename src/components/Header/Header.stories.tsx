import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const placeholder = (label: string) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      minWidth: 96,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--vwds-semantic-color-light-surface-muted)',
      color: 'var(--vwds-semantic-color-light-text-tertiary)',
      fontFamily: 'var(--vwds-semantic-typography-caption-font-family)',
      fontSize: 'var(--vwds-semantic-typography-caption-font-size)',
      borderRadius: 'var(--vwds-primitive-dimension-radius-sm)',
    }}
  >
    {label}
  </div>
);

const NAV_ITEMS = [
  { label: 'Clients', href: '#clients' },
  { label: 'Services', href: '#services', active: true },
  { label: 'Blog', href: '#blog' },
  { label: 'About Us', href: '#about' },
  { label: 'Careers', href: '#careers' },
];

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Grid [200px][1fr][200px] — logo à esquerda, nav-pill (vidro, ' +
          'blur) centralizada, zona direita vazia só pra equilibrar o ' +
          'grid. CTA sempre azul, item ativo com fundo action/primary.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const HERO_BACKDROP = {
  minHeight: 320,
  background:
    'linear-gradient(160deg, var(--vwds-semantic-color-light-surface-muted), var(--vwds-semantic-color-light-surface-page))',
};

export const Playground: Story = {
  args: {
    logo: placeholder('logo'),
    navItems: NAV_ITEMS,
    ctaLabel: "Let's talk",
    ctaHref: '#contact',
    sticky: false,
  },
  render: (args) => (
    <div style={HERO_BACKDROP}>
      <Header {...args} />
    </div>
  ),
};

export const Sticky: Story = {
  render: () => (
    <div style={HERO_BACKDROP}>
      <Header
        logo={placeholder('logo')}
        navItems={NAV_ITEMS}
        ctaLabel="Let's talk"
        ctaHref="#contact"
        sticky
      />
      <div style={{ padding: 'var(--vwds-primitive-dimension-space-8)', height: 1200 }}>
        {placeholder('role scroll pra ver o header fixo no topo')}
      </div>
    </div>
  ),
};
