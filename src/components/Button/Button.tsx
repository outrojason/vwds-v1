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

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Ocupa 100% da largura do container. */
  fullWidth?: boolean;
  /** Ícone à esquerda do texto (opcional). */
  iconLeft?: React.ReactNode;
  /** Ícone à direita do texto (opcional). */
  iconRight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export type ButtonProps =
  | (ButtonOwnProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (ButtonOwnProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export const Button = (props: ButtonProps) => {
  const {
    variant = 'filled',
    size = 'md',
    fullWidth = false,
    iconLeft,
    iconRight,
    className,
    children,
    href,
    ...rest
  } = props;

  const classes = [
    styles.root,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {iconLeft ? <span className={styles.icon} aria-hidden="true">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className={styles.icon} aria-hidden="true">{iconRight}</span> : null}
    </>
  );

  // href presente → renderiza <a> (mesma aparência do button) em vez de <button>,
  // para CTAs que navegam (ex.: ServiceCard) sem aninhar elementos interativos.
  if (href) {
    return (
      <a className={classes} href={href} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  const { type = 'button', disabled, ...buttonRest } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    // type defaults to "button" so a button inside a form doesn't submit by accident
    <button className={classes} type={type} disabled={disabled} {...buttonRest}>
      {content}
    </button>
  );
};

Button.displayName = 'Button';
