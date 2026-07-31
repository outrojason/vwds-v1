import React from 'react';
import styles from './Button.module.css';

/**
 * VWDS Button
 *
 * Matriz Variant × Size × State, herdada da arquitetura da Legacy
 * (esqueleto) com as cores/estética da era atual (tokens).
 * Zero valores literais — tudo referencia component.button.* nos tokens.
 */

export type ButtonVariant = 'filled' | 'outline' | 'text';
export type ButtonSize = 'md' | 'lg' | 'xl';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Ocupa 100% da largura do container. */
  fullWidth?: boolean;
  /** Ícone à esquerda do texto (opcional). */
  iconLeft?: React.ReactNode;
  /** Ícone à direita do texto (opcional). */
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'filled',
  size = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  type = 'button',
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) => {
  const classes = [
    styles.root,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    // type defaults to "button" so a button inside a form doesn't submit by accident
    <button className={classes} type={type} disabled={disabled} {...rest}>
      {iconLeft ? <span className={styles.icon} aria-hidden="true">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className={styles.icon} aria-hidden="true">{iconRight}</span> : null}
    </button>
  );
};

Button.displayName = 'Button';
