import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export type ArrowRightIconProps = Omit<IconProps, 'children'>;

export const ArrowRightIcon = (props: ArrowRightIconProps) => (
  <Icon {...props}>
    <path d="M4 12h16" />
    <path d="M14 6l6 6-6 6" />
  </Icon>
);

ArrowRightIcon.displayName = 'ArrowRightIcon';
