import React from 'react';
import { Card } from '../Card';
import { Typography } from '../Typography';
import { Tag } from '../Tag';
import styles from './BlogCard.module.css';

/**
 * VWDS BlogCard (molécula)
 *
 * Card inteiro clicável (Card clickable+href) em 3 layouts: default
 * (vertical, imagem contida no topo), featured (horizontal, imagem à
 * direita ocupando a altura do card) e drops (fundo azul, título em
 * Spectral centralizado, texto claro). Título+descrição truncam em 3
 * linhas no default/featured — drops não trunca.
 */

export type BlogCardVariant = 'default' | 'featured' | 'drops';

export interface BlogCardMeta {
  type: string;
  readingTime: string;
}

export interface BlogCardProps {
  variant?: BlogCardVariant;
  title: string;
  description: string;
  image?: React.ReactNode;
  meta: BlogCardMeta;
  href: string;
  className?: string;
}

export const BlogCard = ({
  variant = 'default',
  title,
  description,
  image,
  meta,
  href,
  className,
}: BlogCardProps) => {
  const metaLabel = `${meta.type} · ${meta.readingTime}`;

  const cardClassName = [
    styles.card,
    variant === 'featured' ? styles.featuredCard : '',
    variant === 'drops' ? styles.dropsCard : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (variant === 'drops') {
    return (
      <Card clickable href={href} className={cardClassName}>
        <Typography variant="editorial-body" color="inherit" className={styles.dropsTitle}>
          “{title}”
        </Typography>
        <Typography variant="body2" color="inherit" className={styles.dropsDescription}>
          {description}
        </Typography>
        <Tag variant="meta" className={styles.dropsMeta}>
          {metaLabel}
        </Tag>
      </Card>
    );
  }

  if (variant === 'featured') {
    return (
      <Card clickable href={href} className={cardClassName}>
        <div className={styles.featuredContent}>
          <Tag variant="meta">{metaLabel}</Tag>
          <Typography variant="card-title" className={styles.clamp3}>
            {title}
          </Typography>
          <Typography variant="body2" color="secondary" className={styles.clamp3}>
            {description}
          </Typography>
        </div>
        {image ? <div className={styles.featuredImage}>{image}</div> : null}
      </Card>
    );
  }

  return (
    <Card clickable href={href} className={cardClassName}>
      {image ? <div className={styles.image}>{image}</div> : null}
      <Typography variant="card-title" className={styles.clamp3}>
        {title}
      </Typography>
      <Typography variant="body2" color="secondary" className={styles.clamp3}>
        {description}
      </Typography>
      <Tag variant="meta">{metaLabel}</Tag>
    </Card>
  );
};

BlogCard.displayName = 'BlogCard';
