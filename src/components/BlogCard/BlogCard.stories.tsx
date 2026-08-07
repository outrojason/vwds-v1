import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './BlogCard';

const PlaceholderImage = ({ label }: { label: string }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      minHeight: 120,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--vwds-semantic-color-light-surface-muted)',
      color: 'var(--vwds-semantic-color-light-text-tertiary)',
      fontFamily: 'var(--vwds-semantic-typography-caption-font-family)',
      fontSize: 'var(--vwds-semantic-typography-caption-font-size)',
    }}
  >
    {label}
  </div>
);

const LONG_TITLE =
  'Como construímos uma integração FHIR resiliente para hospitais com múltiplos EHRs legados e picos de tráfego inesperados';
const LONG_DESCRIPTION =
  'Um mergulho técnico em como desenhamos a camada de integração: filas, retries idempotentes, validação de conformidade e observabilidade ponta a ponta, com lições aprendidas de três implantações reais em produção.';

const meta: Meta<typeof BlogCard> = {
  title: 'Molecules/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card de blog inteiro clicável (Card clickable+href), 3 layouts: ' +
          'default (vertical, imagem contida no topo), featured ' +
          '(horizontal, imagem à direita ocupando a altura do card) e ' +
          'drops (fundo azul, título em Spectral centralizado, texto ' +
          'claro). Título e descrição truncam em 3 linhas no default/' +
          'featured — drops não trunca.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'featured', 'drops'] },
    title: { control: 'text' },
    description: { control: 'text' },
    href: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Playground: Story = {
  args: {
    variant: 'default',
    title: LONG_TITLE,
    description: LONG_DESCRIPTION,
    image: <PlaceholderImage label="1200×675" />,
    meta: { type: 'Article', readingTime: '7 min read' },
    href: '#',
  },
};

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <BlogCard
        variant="default"
        title={LONG_TITLE}
        description={LONG_DESCRIPTION}
        image={<PlaceholderImage label="1200×675" />}
        meta={{ type: 'Article', readingTime: '7 min read' }}
        href="#"
      />
    </div>
  ),
};

export const Featured: Story = {
  render: () => (
    <BlogCard
      variant="featured"
      title={LONG_TITLE}
      description={LONG_DESCRIPTION}
      image={<PlaceholderImage label="800×600" />}
      meta={{ type: 'Case study', readingTime: '12 min read' }}
      href="#"
    />
  ),
};

export const Drops: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <BlogCard
        variant="drops"
        title="Tudo o que sabíamos sobre performance mudou nesta semana"
        description="Um resumo curto do que lançamos: benchmarks, decisões de arquitetura e o que vem a seguir."
        meta={{ type: 'Drops', readingTime: '3 min read' }}
        href="#"
      />
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'var(--vwds-primitive-dimension-space-6)',
      }}
    >
      <BlogCard
        variant="default"
        title={LONG_TITLE}
        description={LONG_DESCRIPTION}
        image={<PlaceholderImage label="1200×675" />}
        meta={{ type: 'Article', readingTime: '7 min read' }}
        href="#"
      />
      <BlogCard
        variant="drops"
        title="Tudo o que sabíamos sobre performance mudou nesta semana"
        description="Um resumo curto do que lançamos: benchmarks, decisões de arquitetura e o que vem a seguir."
        meta={{ type: 'Drops', readingTime: '3 min read' }}
        href="#"
      />
      <BlogCard
        variant="default"
        title="Consultoria clínica: do discovery ao go-live"
        description="Como estruturamos squads multidisciplinares para produtos de saúde digital regulados."
        image={<PlaceholderImage label="1200×675" />}
        meta={{ type: 'Guide', readingTime: '5 min read' }}
        href="#"
      />
      <div style={{ gridColumn: '1 / -1' }}>
        <BlogCard
          variant="featured"
          title={LONG_TITLE}
          description={LONG_DESCRIPTION}
          image={<PlaceholderImage label="800×600" />}
          meta={{ type: 'Case study', readingTime: '12 min read' }}
          href="#"
        />
      </div>
    </div>
  ),
};
