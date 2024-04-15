'use client';

import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from './card.module.scss';

export default function SaveCardMenuTab({
  image,
  type,
}: {
  image: StaticImport,
  type: string,
}) {
  const handleClick = () => {
  };

  return (
    <li className={styles['save-menu-tab']} onClick={handleClick}>
      <div className={styles['save-tab-icon-box']}>
        <Image src={image} alt='tab-icon' width={100} className={styles['save-tab-icon']} />
      </div>
      <p className={styles['save-tab-text']}>
        {type === 'text' ? 'テキストデザイン' : 'カードデザイン'}
      </p>
    </li>
  );
}
