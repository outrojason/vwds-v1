import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const placeholder = (label: string) => (
  <div
    style={{
      width: '100%',
      height: '100%',
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

const flag = (emoji: string) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--vwds-semantic-color-light-surface-muted)',
      fontSize: 12,
    }}
  >
    {emoji}
  </div>
);

const socialIcon = (label: string) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--vwds-semantic-color-light-surface-muted)',
      color: 'var(--vwds-semantic-color-light-text-tertiary)',
      fontSize: 10,
      borderRadius: 'var(--vwds-primitive-dimension-radius-full)',
    }}
  >
    {label}
  </div>
);

// Conteúdo real do footer da Vinta (vintasoftware.com) — hrefs como
// placeholder ('#') a pedido, só os labels são fiéis à página real.
const COLUMNS = [
  [
    {
      title: 'Healthcare Development',
      items: [
        { label: 'EHR Development', href: '#' },
        { label: 'EHR Modernization', href: '#' },
        { label: 'Healthcare Discovery', href: '#' },
        { label: 'Medplum Development', href: '#' },
        { label: 'Integrations & Interoperability', href: '#' },
        { label: 'CMS Interoperability Enablement', href: '#' },
      ],
    },
    {
      title: 'End-to-end Development',
      items: [
        { label: 'Product Discovery', href: '#' },
        { label: 'Web Development', href: '#' },
        { label: 'AI Agents & LLM Development', href: '#' },
        { label: 'Tech Debt & Legacy', href: '#' },
        { label: 'Dedicated Teams', href: '#' },
        { label: 'Mobile Development', href: '#' },
        { label: 'UI/UX Design', href: '#' },
      ],
    },
  ],
  [
    {
      title: 'Technology',
      items: [
        { label: 'Python', href: '#' },
        { label: 'Django', href: '#' },
        { label: 'React Native', href: '#' },
        { label: 'Modern JavaScript', href: '#' },
        { label: 'Django REST Framework', href: '#' },
        { label: 'Advanced Celery', href: '#' },
        { label: 'FastAPI', href: '#' },
        { label: 'Next.js', href: '#' },
      ],
    },
  ],
  [
    {
      title: 'Featured Clients',
      items: [
        { label: 'United Nations', href: '#' },
        { label: 'Unilever', href: '#' },
        { label: 'Alt Legal', href: '#' },
        { label: 'Lastmile Retail', href: '#' },
        { label: 'Quilted Health', href: '#' },
        { label: 'Rewind Health', href: '#' },
        { label: 'Splendid Spoon', href: '#' },
        { label: 'Tesorio', href: '#' },
        { label: 'Plusplus', href: '#' },
        { label: 'Carta', href: '#' },
        { label: 'More', href: '#' },
      ],
    },
  ],
  [
    {
      title: 'Company',
      items: [
        { label: 'About us', href: '#' },
        { label: 'People & Culture', href: '#' },
        { label: 'Open Source', href: '#' },
        { label: 'Talks & Events', href: '#' },
        { label: "Jobs (We're Hiring)", href: '#' },
        { label: 'Tech Insights', href: '#' },
        { label: 'Our Newsletter', href: '#' },
        { label: 'HIPAA Compliant', href: '#' },
        { label: 'Referral Program', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Cookies Policy', href: '#' },
        { label: "Let's Talk!", href: '#' },
      ],
    },
  ],
];

const CONTACT = {
  email: 'contact@vintasoftware.com',
  addresses: [
    { flag: flag('🇺🇸'), text: '1110 Brickell Ave, 200, Miami, FL 33131' },
    { flag: flag('🇧🇷'), text: '248 Rua do Brum, Recife, PE 50030-260' },
  ],
};

const BADGES = [
  placeholder('Clutch'),
  placeholder('HIPAA Compliant'),
  placeholder('Glassdoor'),
  placeholder('Top Web Developers'),
];

const SOCIAL = [
  { icon: socialIcon('in'), href: '#' },
  { icon: socialIcon('gh'), href: '#' },
  { icon: socialIcon('yt'), href: '#' },
  { icon: socialIcon('ig'), href: '#' },
  { icon: socialIcon('X'), href: '#' },
];

const COPYRIGHT = 'Vinta Software Studio LLC © 2013 – 2026. All rights reserved.';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Grid responsivo (auto-fit, minmax(160px,1fr)) — reflui pra ' +
          'menos colunas em telas menores, sem overlap. Primeira coluna ' +
          'é sempre logo+contato (à esquerda); as demais colunas (à ' +
          'direita) aceitam múltiplos grupos (título + lista) empilhados.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Playground: Story = {
  args: {
    logo: placeholder('logo'),
    contact: CONTACT,
    columns: COLUMNS,
    badges: BADGES,
    social: SOCIAL,
    copyright: COPYRIGHT,
  },
};

export const Default: Story = {
  render: () => (
    <Footer
      logo={placeholder('logo')}
      contact={CONTACT}
      columns={COLUMNS}
      badges={BADGES}
      social={SOCIAL}
      copyright={COPYRIGHT}
    />
  ),
};

export const Narrow: Story = {
  render: () => (
    <div style={{ maxWidth: 360, border: '1px dashed var(--vwds-semantic-color-light-surface-muted)' }}>
      <Footer
        logo={placeholder('logo')}
        contact={CONTACT}
        columns={COLUMNS}
        badges={BADGES}
        social={SOCIAL}
        copyright={COPYRIGHT}
      />
    </div>
  ),
};
