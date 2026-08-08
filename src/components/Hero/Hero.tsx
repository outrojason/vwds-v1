import { Typography } from '../Typography';
import styles from './Hero.module.css';

/**
 * VWDS Hero (organismo)
 *
 * Layout único da home, alinhado à esquerda. Cada linha do headline é
 * sua própria Typography (variant="hero-title") — a primeira renderiza
 * o <h1> semântico, as demais viram <div> (mesmo estilo, sem duplicar
 * heading). offsetLines aplica o padding-left (component.hero.offset,
 * validado no Figma: 380px) nas linhas pares pro efeito escada.
 */

export interface HeroTitleLine {
  text: string;
  accent?: boolean;
}

export interface HeroProps {
  eyebrow?: string;
  titleLines: HeroTitleLine[];
  subtitle: string;
  /** Desloca as linhas pares do headline à direita (efeito escada). Default true. */
  offsetLines?: boolean;
  className?: string;
}

export const Hero = ({
  eyebrow,
  titleLines,
  subtitle,
  offsetLines = true,
  className,
}: HeroProps) => {
  const rootClassName = [styles.root, className].filter(Boolean).join(' ');

  return (
    <div className={rootClassName}>
      {eyebrow ? (
        <Typography variant="body2" color="link" className={styles.eyebrow}>
          {eyebrow}
        </Typography>
      ) : null}

      <div className={styles.headline}>
        {titleLines.map((line, index) => {
          const isOffset = offsetLines && index % 2 === 1;

          return (
            <Typography
              key={index}
              variant="hero-title"
              as={index === 0 ? undefined : 'div'}
              color={line.accent ? 'link' : 'primary'}
              className={isOffset ? styles.titleLineOffset : undefined}
            >
              {line.text}
            </Typography>
          );
        })}
      </div>

      <Typography variant="hero-subtitle" color="secondary" className={styles.subtitle}>
        {subtitle}
      </Typography>
    </div>
  );
};

Hero.displayName = 'Hero';
