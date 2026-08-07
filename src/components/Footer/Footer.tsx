import React from 'react';
import { Typography } from '../Typography';
import styles from './Footer.module.css';

/**
 * VWDS Footer (organismo)
 *
 * Grid responsivo (auto-fit) — cada coluna aceita múltiplos grupos
 * (título + lista de links) empilhados. Primeira coluna é sempre
 * logo+contato. Badges e social ficam em linhas próprias abaixo do
 * grid, com wrap em telas menores.
 */

export interface FooterAddress {
  flag?: React.ReactNode;
  text: string;
}

export interface FooterContact {
  email: string;
  addresses: FooterAddress[];
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  items: FooterLinkItem[];
}

export type FooterColumn = FooterLinkGroup[];

export interface FooterSocialItem {
  icon: React.ReactNode;
  href: string;
}

export interface FooterProps {
  logo: React.ReactNode;
  contact: FooterContact;
  columns: FooterColumn[];
  badges: React.ReactNode[];
  social: FooterSocialItem[];
  copyright: string;
  className?: string;
}

export const Footer = ({
  logo,
  contact,
  columns,
  badges,
  social,
  copyright,
  className,
}: FooterProps) => {
  const rootClassName = [styles.root, className].filter(Boolean).join(' ');

  return (
    <footer className={rootClassName}>
      <div className={styles.top}>
        <div className={styles.brandColumn}>
          <span className={styles.logo}>{logo}</span>
          <div className={styles.contact}>
            <Typography variant="caption" color="tertiary" className={styles.groupTitle}>
              Contact
            </Typography>
            <a href={`mailto:${contact.email}`} className={styles.contactLink}>
              <Typography variant="body2" color="secondary">
                {contact.email}
              </Typography>
            </a>
            {contact.addresses.map((address) => (
              <div key={address.text} className={styles.address}>
                {address.flag ? (
                  <span className={styles.addressFlag}>{address.flag}</span>
                ) : null}
                <Typography variant="body2" color="secondary">
                  {address.text}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {columns.map((groups, columnIndex) => (
          <div className={styles.column} key={columnIndex}>
            {groups.map((group) => (
              <div className={styles.group} key={group.title}>
                <Typography variant="caption" color="tertiary" className={styles.groupTitle}>
                  {group.title}
                </Typography>
                <ul className={styles.groupLinks}>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className={styles.groupLink}>
                        <Typography variant="body2" color="secondary">
                          {item.label}
                        </Typography>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {badges.length > 0 ? (
        <div className={styles.badgesRow}>
          {badges.map((badge, index) => (
            <span className={styles.badge} key={index}>
              {badge}
            </span>
          ))}
        </div>
      ) : null}

      <div className={styles.base}>
        <Typography variant="caption" color="tertiary">
          {copyright}
        </Typography>
        <div className={styles.social}>
          {social.map((item, index) => (
            <a href={item.href} className={styles.socialIcon} key={index}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
