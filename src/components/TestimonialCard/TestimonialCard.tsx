import React from 'react';
import { Card } from '../Card';
import { Typography } from '../Typography';
import styles from './TestimonialCard.module.css';

/**
 * VWDS TestimonialCard (molécula)
 *
 * Card base não-clicável. Logo/flag/photo são ReactNode — o componente só
 * aplica tamanho/formato, não gera imagem (o consumidor passa <img> ou
 * qualquer node). Destaque azul na citação vem do consumidor, passando
 * spans/Typography color="link" dentro de `quote`.
 */

export interface TestimonialCardLocation {
  flag?: React.ReactNode;
  label: string;
}

export interface TestimonialCardAuthor {
  photo: React.ReactNode;
  name: string;
  role: string;
}

export interface TestimonialCardProps {
  logo: React.ReactNode;
  location?: TestimonialCardLocation;
  quote: React.ReactNode;
  /** 1–5, default 5. */
  rating?: number;
  author: TestimonialCardAuthor;
  className?: string;
}

export const TestimonialCard = ({
  logo,
  location,
  quote,
  rating = 5,
  author,
  className,
}: TestimonialCardProps) => {
  const filledCount = Math.max(0, Math.min(5, rating));

  const cardClassName = [styles.card, className].filter(Boolean).join(' ');

  return (
    <Card className={cardClassName}>
      <div className={styles.top}>
        <span className={styles.logo}>{logo}</span>
        {location ? (
          <div className={styles.location}>
            {location.flag ? <span className={styles.flag}>{location.flag}</span> : null}
            <Typography variant="body2" color="tertiary">
              {location.label}
            </Typography>
          </div>
        ) : null}
      </div>

      <Typography variant="subtitle1" as="p" color="primary" className={styles.quote}>
        {quote}
      </Typography>

      <div className={styles.ratingRow}>
        <div
          className={styles.stars}
          role="img"
          aria-label={`${filledCount} de 5 estrelas`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={index < filledCount ? styles.starFilled : styles.starEmpty}
              aria-hidden="true"
            >
              {index < filledCount ? '★' : '☆'}
            </span>
          ))}
        </div>
        <span className={styles.divider} aria-hidden="true" />
      </div>

      <div className={styles.footer}>
        <span className={styles.photo}>{author.photo}</span>
        <div className={styles.authorInfo}>
          <Typography variant="body1" color="primary">
            {author.name}
          </Typography>
          <Typography variant="body2" color="tertiary">
            {author.role}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

TestimonialCard.displayName = 'TestimonialCard';
