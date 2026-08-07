import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../Typography';
import { TestimonialCard } from './TestimonialCard';

const placeholder = (label: string, extraStyle: React.CSSProperties = {}) => (
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
      ...extraStyle,
    }}
  >
    {label}
  </div>
);

const LogoPlaceholder = () => (
  <div style={{ height: '100%', width: 96 }}>{placeholder('logo')}</div>
);
const FlagPlaceholder = () => <div style={{ height: '100%', width: '100%' }}>{placeholder('🇧🇷')}</div>;
const PhotoPlaceholder = () => <div style={{ height: '100%', width: '100%' }}>{placeholder('foto')}</div>;

const meta: Meta<typeof TestimonialCard> = {
  title: 'Molecules/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card base não-clicável. logo/flag/photo são ReactNode — o ' +
          'componente só aplica tamanho/formato (logo ~32px altura, flag ' +
          '24px círculo, foto 56px círculo), não gera imagem. Destaque ' +
          'azul na citação vem do consumidor via Typography color="link".',
      },
    },
  },
  argTypes: {
    rating: { control: { type: 'range', min: 0, max: 5, step: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Playground: Story = {
  args: {
    logo: <LogoPlaceholder />,
    location: { flag: <FlagPlaceholder />, label: 'São Paulo, Brasil' },
    quote:
      'A Vinta entregou a integração FHIR em tempo record, com um nível de qualidade que não víamos há anos.',
    rating: 5,
    author: {
      photo: <PhotoPlaceholder />,
      name: 'Ana Ribeiro',
      role: 'VP de Engenharia, Klivo Health',
    },
  },
};

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <TestimonialCard
        logo={<LogoPlaceholder />}
        location={{ flag: <FlagPlaceholder />, label: 'São Paulo, Brasil' }}
        quote="A Vinta entregou a integração FHIR em tempo record, com um nível de qualidade que não víamos há anos."
        rating={5}
        author={{
          photo: <PhotoPlaceholder />,
          name: 'Ana Ribeiro',
          role: 'VP de Engenharia, Klivo Health',
        }}
      />
    </div>
  ),
};

export const WithHighlights: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <TestimonialCard
        logo={<LogoPlaceholder />}
        location={{ flag: <FlagPlaceholder />, label: 'Austin, EUA' }}
        quote={
          <>
            O time reduziu nosso{' '}
            <Typography as="span" variant="subtitle1" color="link">
              tempo de integração em 60%
            </Typography>{' '}
            e ainda deixou a base{' '}
            <Typography as="span" variant="subtitle1" color="link">
              pronta para auditoria HIPAA
            </Typography>
            .
          </>
        }
        rating={4}
        author={{
          photo: <PhotoPlaceholder />,
          name: 'Marcus Lee',
          role: 'CTO, Northgate Clinical',
        }}
      />
    </div>
  ),
};
