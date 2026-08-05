import React from 'react';
import { Card } from '../Card';
import { Typography } from '../Typography';
import { Button } from '../Button';
import type { ButtonVariant } from '../Button';
import { ArrowRightIcon } from '../Icon';
import styles from './ServiceCard.module.css';

/**
 * VWDS ServiceCard (molécula)
 *
 * Compõe sobre o Card base: header (ícone + título), descrição e um CTA
 * opcional. O espaçamento vertical entre essas partes vem do próprio gap
 * do Card — aqui só definimos o layout horizontal do header.
 */

export type ServiceCardCtaVariant = Extract<ButtonVariant, 'text' | 'outline'>;

export interface ServiceCardCta {
  label: string;
  href: string;
  variant?: ServiceCardCtaVariant;
}

export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  cta?: ServiceCardCta;
  className?: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  cta,
  className,
}: ServiceCardProps) => {
  const ctaVariant = cta?.variant ?? 'text';
  const cardClassName = [styles.card, className].filter(Boolean).join(' ');

  return (
    <Card className={cardClassName}>
      <div className={styles.header}>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        <Typography variant="h3">{title}</Typography>
      </div>
      <Typography variant="body2" color="secondary">
        {description}
      </Typography>
      {cta ? (
        <Button
          variant={ctaVariant}
          href={cta.href}
          iconRight={ctaVariant === 'text' ? <ArrowRightIcon size="sm" /> : undefined}
        >
          {cta.label}
        </Button>
      ) : null}
    </Card>
  );
};

ServiceCard.displayName = 'ServiceCard';
