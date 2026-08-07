import React from 'react';
import styles from './Typography.module.css';

/**
 * VWDS Typography
 *
 * Cada variant carrega o estilo via CSS Module (tokens semantic.typography.*);
 * a tag HTML renderizada é a semanticamente correta por default, mas a prop
 * `as` permite trocar a tag sem mudar o estilo (ex.: h3 visual, h1 semântico).
 * Zero valores literais — tudo referencia semantic.typography.* e
 * semantic.color.* nos tokens.
 */

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'overline'
  | 'caption'
  | 'editorial-body'
  | 'card-title';

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'
  | 'on-action'
  | 'inherit';

const DEFAULT_ELEMENT: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  overline: 'span',
  caption: 'span',
  'editorial-body': 'p',
  'card-title': 'h3',
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  /** Sobrepõe a tag HTML padrão da variant sem mudar o estilo. */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = 'body1',
  color = 'primary',
  as,
  className,
  children,
  ...rest
}: TypographyProps) => {
  const Component = (as ?? DEFAULT_ELEMENT[variant]) as React.ElementType;

  const classes = [
    styles.root,
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';
