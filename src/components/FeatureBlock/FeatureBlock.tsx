import React from 'react';
import { Typography } from '../Typography';
import styles from './FeatureBlock.module.css';

/**
 * VWDS FeatureBlock (molécula)
 *
 * Card inteiro clicável com imagem de fundo edge-to-edge + overlay
 * (component.feature-block.overlay) pra legibilidade. Sem imagem, cai
 * no fundo navy fixo (component.feature-block.fallback-bg). Título
 * bicolor (linha a linha, branco ou accent blue/400) no topo, CTA na
 * base — space-between preenche a altura (component.feature-block.min-height).
 */

export interface FeatureBlockTitleLine {
  text: string;
  accent?: boolean;
}

export interface FeatureBlockProps {
  image?: React.ReactNode;
  titleLines: FeatureBlockTitleLine[];
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}

export const FeatureBlock = ({
  image,
  titleLines,
  ctaLabel,
  ctaHref,
  className,
}: FeatureBlockProps) => {
  const rootClassName = [styles.root, className].filter(Boolean).join(' ');

  return (
    <a href={ctaHref} className={rootClassName}>
      {image ? (
        <>
          <span className={styles.image}>{image}</span>
          <span className={styles.overlay} aria-hidden="true" />
        </>
      ) : (
        <span className={styles.fallbackBg} aria-hidden="true" />
      )}
      <div className={styles.content}>
        <div className={styles.title}>
          {titleLines.map((line, index) => (
            <Typography
              key={index}
              variant="feature-block-title"
              as={index === 0 ? undefined : 'div'}
              color={line.accent ? 'inherit' : 'on-action'}
              className={line.accent ? styles.titleAccent : undefined}
            >
              {line.text}
            </Typography>
          ))}
        </div>
        <Typography as="span" variant="body1" color="on-action" className={styles.cta}>
          {ctaLabel} →
        </Typography>
      </div>
    </a>
  );
};

FeatureBlock.displayName = 'FeatureBlock';
