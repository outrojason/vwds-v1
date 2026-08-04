import React from 'react';
import styles from './Icon.module.css';

/**
 * VWDS Icon (infraestrutura)
 *
 * Wrapper genérico — não desenha ícones, só padroniza grid (24x24), stroke,
 * tamanho e cor. Ícones específicos (paths) compõem em cima via children,
 * ex.: icons/ArrowRightIcon.tsx.
 * Zero valores literais — tudo referencia component.icon.* nos tokens.
 */

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';
export type IconColor = 'default' | 'muted' | 'inherit';

export interface IconProps {
  size?: IconSize;
  /** inherit (default) pega o currentColor do contexto — ex.: dentro de um Button. */
  color?: IconColor;
  /** Texto acessível. Se ausente, o ícone é decorativo (aria-hidden). */
  label?: string;
  /** Conteúdo SVG (<path>) do ícone específico. */
  children: React.ReactNode;
  className?: string;
}

export const Icon = ({
  size = 'md',
  color = 'inherit',
  label,
  children,
  className,
}: IconProps) => {
  const classes = [
    styles.root,
    styles[`size-${size}`],
    styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      className={classes}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {children}
    </svg>
  );
};

Icon.displayName = 'Icon';
