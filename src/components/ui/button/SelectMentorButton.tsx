'use client';

import styles from './button.module.scss';

export default function SelectMentorButton({
  handleClick, disabled,
}: {
  handleClick: () => void, disabled: boolean,
}) {
  return (
    <>
      {disabled ? (
        <div className={styles['big-btn-disable']}>決定する</div>
      ) : (
        <div
          className={styles['big-btn-pink']}
          onClick={handleClick}
        >
          決定する
        </div>
      )}
    </>
  );
}
