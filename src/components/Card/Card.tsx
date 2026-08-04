import React from 'react';
import styles from './Card.module.css';

/**
 * VWDS Card (base)
 *
 * Contêiner compartilhado — ServiceCard/BlogCard/TestimonialCard compõem
 * conteúdo em cima disso via children. Estático por padrão; clickable
 * aplica o hover-delight (borda azul, eleva sombra, sobe 2px).
 * Zero valores literais — tudo referencia component.card.* nos tokens.
 */

export interface CardProps {
  clickable?: boolean;
  /** Só tem efeito quando clickable=true. Se presente, renderiza <a>. */
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
  /**
   * O padding do card em si é sempre aplicado — esta prop só decide o
   * layout de uma eventual imagem no topo. false (default, v1): imagem
   * contida dentro do padding, com border-radius próprio. true: imagem
   * sangra até as bordas do card (só o conteúdo abaixo mantém padding).
   */
  imageEdgeToEdge?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card = ({
  clickable = false,
  href,
  onClick,
  imageEdgeToEdge = false,
  className,
  children,
}: CardProps) => {
  const classes = [
    styles.root,
    clickable ? styles.clickable : '',
    imageEdgeToEdge ? styles.edgeToEdge : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (clickable && href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  // Sem href: só é focável/acionável por teclado quando clickable+onClick —
  // evita parar em cards estáticos ao navegar com Tab.
  const handleKeyDown = clickable && onClick
    ? (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick(event as unknown as React.MouseEvent<HTMLDivElement>);
        }
      }
    : undefined;

  return (
    <div
      className={classes}
      onClick={clickable ? onClick : undefined}
      onKeyDown={handleKeyDown}
      role={clickable && onClick ? 'button' : undefined}
      tabIndex={clickable && onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

Card.displayName = 'Card';
