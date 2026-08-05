import type { Meta, StoryObj } from '@storybook/react';
import { ServiceCard } from './ServiceCard';

const PlaceholderIcon = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: 'var(--vwds-semantic-color-light-surface-muted)',
      borderRadius: 'var(--vwds-primitive-dimension-radius-sm)',
    }}
  />
);

const meta: Meta<typeof ServiceCard> = {
  title: 'Molecules/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Compõe sobre o Card base: header (ícone + título lado a lado), ' +
          'descrição e um CTA opcional (text com seta, ou outline). Sem ' +
          'tokens próprios — reaproveita component.card.gap e ' +
          'component.icon.size-lg.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Playground: Story = {
  args: {
    icon: <PlaceholderIcon />,
    title: 'Integração FHIR',
    description:
      'Conectamos seus sistemas a qualquer EHR via padrão FHIR, com validação de conformidade ponta a ponta.',
    cta: { label: 'Saiba mais', href: '#' },
  },
};

export const NoCTA: Story = {
  args: {
    icon: <PlaceholderIcon />,
    title: 'Consultoria clínica',
    description:
      'Time especializado em produtos de saúde digital, do discovery ao go-live.',
  },
};

export const TextCTA: Story = {
  args: {
    icon: <PlaceholderIcon />,
    title: 'Integração FHIR',
    description:
      'Conectamos seus sistemas a qualquer EHR via padrão FHIR, com validação de conformidade ponta a ponta.',
    cta: { label: 'Saiba mais', href: '#', variant: 'text' },
  },
};

export const OutlineCTA: Story = {
  args: {
    icon: <PlaceholderIcon />,
    title: 'Segurança e compliance',
    description:
      'Baseline alinhado a HIPAA e SOC II, com auditoria de acesso e criptografia ponta a ponta.',
    cta: { label: 'Falar com time', href: '#', variant: 'outline' },
  },
};

export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'var(--vwds-primitive-dimension-space-6)',
      }}
    >
      <ServiceCard
        icon={<PlaceholderIcon />}
        title="Integração FHIR"
        description="Conectamos seus sistemas a qualquer EHR via padrão FHIR."
        cta={{ label: 'Saiba mais', href: '#' }}
      />
      <ServiceCard
        icon={<PlaceholderIcon />}
        title="Consultoria clínica"
        description="Discovery, produto e engenharia especializados em saúde digital."
        cta={{ label: 'Saiba mais', href: '#' }}
      />
      <ServiceCard
        icon={<PlaceholderIcon />}
        title="Segurança e compliance"
        description="Baseline alinhado a HIPAA e SOC II, ponta a ponta."
        cta={{ label: 'Falar com time', href: '#', variant: 'outline' }}
      />
      <ServiceCard
        icon={<PlaceholderIcon />}
        title="Suporte contínuo"
        description="Monitoramento e evolução do produto após o go-live."
      />
    </div>
  ),
};
