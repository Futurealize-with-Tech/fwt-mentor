'use client';

import Image from 'next/image';
import styles from './card.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function SaveCardMenuTab({
  image,
  text,
  handleClick,
}: {
  image: StaticImport,
  text: string,
  handleClick: () => void,
}) {
  return (
    <li className={styles['save-menu-tab']}>
      <div className={styles['save-tab-icon-box']}>
        <Image src={image} alt='tab-icon' width={100} className={styles['save-tab-icon']} />
      </div>
      <p className={styles['save-tab-text']}>{text}</p>
    </li>
  );
}
