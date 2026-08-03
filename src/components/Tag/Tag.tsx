import React from 'react';
import styles from './Tag.module.css';

/**
 * VWDS Tag
 *
 * 3 variantes por uso — NÃO é um botão (botão executa ação):
 * - category: clicável (href) ou estática, com estados default/selected/pressed.
 * - label: rótulo com ícone em quadradinho, sempre estático.
 * - meta: metadado com ícone colorido, sempre estático.
 * Zero valores literais — tudo referencia component.tag.* nos tokens.
 */

export type TagVariant = 'category' | 'label' | 'meta';
export type TagSize = 'sm' | 'md';

export interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  /** Só afeta variant="category". */
  selected?: boolean;
  /** Ícone à esquerda. Ignorado em "category". */
  icon?: React.ReactNode;
  /** Só em "category". Se presente, renderiza <a href>; senão <span>. */
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Tag = ({
  variant = 'category',
  size = 'md',
  selected = false,
  icon,
  href,
  className,
  children,
}: TagProps) => {
  const clickable = variant === 'category' && Boolean(href);
  const isSelected = variant === 'category' && selected;

  const classes = [
    styles.root,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    clickable ? styles.clickable : '',
    isSelected ? styles.selected : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const showIcon = Boolean(icon) && variant !== 'category';

  const content = (
    <>
      {showIcon ? (
        <span
          className={variant === 'label' ? styles.iconBox : styles.iconMeta}
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      {children}
    </>
  );

  if (clickable) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return <span className={classes}>{content}</span>;
};

Tag.displayName = 'Tag';
