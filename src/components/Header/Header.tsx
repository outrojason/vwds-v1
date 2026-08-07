import React from 'react';
import { Button } from '../Button';
import { Typography } from '../Typography';
import styles from './Header.module.css';

/**
 * VWDS Header (organismo)
 *
 * Grid de 3 zonas [200px] [1fr] [200px] — logo à esquerda (nunca
 * coberto), nav-pill centralizada no meio, zona direita vazia só pra
 * equilibrar o grid (mantém o pill realmente centrado na viewport).
 * O CTA sempre aparece no fim do pill, com o Button atômico (filled).
 */

export interface HeaderNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps {
  logo: React.ReactNode;
  navItems: HeaderNavItem[];
  ctaLabel: string;
  ctaHref: string;
  /** Fixa o header no topo da viewport durante o scroll. */
  sticky?: boolean;
  className?: string;
}

export const Header = ({
  logo,
  navItems,
  ctaLabel,
  ctaHref,
  sticky = false,
  className,
}: HeaderProps) => {
  const rootClassName = [styles.root, sticky ? styles.sticky : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={rootClassName}>
      <span className={styles.logo}>{logo}</span>
      <nav className={styles.navPill} aria-label="Principal">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={item.active ? styles.navItemActive : styles.navItem}
            aria-current={item.active ? 'page' : undefined}
          >
            <Typography as="span" variant="body2" color="inherit">
              {item.label}
            </Typography>
          </a>
        ))}
        <Button variant="filled" size="md" href={ctaHref} className={styles.cta}>
          {ctaLabel}
        </Button>
      </nav>
    </header>
  );
};

Header.displayName = 'Header';
