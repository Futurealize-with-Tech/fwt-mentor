'use client';

import styles from './textButton.module.scss';

export default function OpenCardTextButton({
  id,
}: {
  id: number,
}) {
  return (
    <>
      <p className={styles['text-btn']}>
        カードを表示
      </p>
    </>
  );
}
