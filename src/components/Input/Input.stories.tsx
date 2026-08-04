import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

const meta: StorybookMeta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'VWDS Input (v1). Campo de texto ou textarea, controlado, com ' +
          'label fixo, help text e estados default/focus/error/disabled. ' +
          'Cores/radius/spacing ligados aos tokens component.input.*.',
      },
    },
  },
  argTypes: {
    type: { control: 'text' },
    multiline: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const stack: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 };

/** Wrapper com estado local — o Input é controlado (value/onChange). */
const ControlledInput = (props: React.ComponentProps<typeof Input>) => {
  const [value, setValue] = React.useState(props.value ?? '');
  return (
    <Input
      {...props}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export const Playground: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Email',
    placeholder: 'voce@empresa.com',
    type: 'email',
    helperText: "We won't spam you.",
  },
};

/** default, focus (autofoco na story), error e disabled lado a lado. */
export const States: Story = {
  render: () => (
    <div style={stack}>
      <ControlledInput label="Default" placeholder="voce@empresa.com" />
      <ControlledInput label="Focus (autofoco ao abrir)" placeholder="voce@empresa.com" autoFocus />
      <ControlledInput
        label="Error"
        placeholder="voce@empresa.com"
        value="email-invalido"
        error="Insira um email válido."
      />
      <ControlledInput label="Disabled" placeholder="voce@empresa.com" disabled />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <ControlledInput
      label="Email"
      placeholder="voce@empresa.com"
      type="email"
      helperText="We won't spam you."
    />
  ),
};

/** required=true — asterisco vermelho ao lado do label. */
export const Required: Story = {
  render: () => (
    <ControlledInput label="Nome completo" placeholder="Seu nome" required />
  ),
};

/** multiline=true — textarea com altura mínima maior e resize vertical. */
export const Textarea: Story = {
  render: () => (
    <ControlledInput
      label="Mensagem"
      placeholder="Como podemos ajudar?"
      multiline
      helperText="Máximo de 500 caracteres."
    />
  ),
};
