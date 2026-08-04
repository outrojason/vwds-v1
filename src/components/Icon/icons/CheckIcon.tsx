import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export type CheckIconProps = Omit<IconProps, 'children'>;

export const CheckIcon = (props: CheckIconProps) => (
  <Icon {...props}>
    <path d="M5 13l4 4L19 7" />
  </Icon>
);

CheckIcon.displayName = 'CheckIcon';
