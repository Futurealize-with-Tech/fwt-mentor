'use client';

import { MessageType } from '@/types/messageType';
import styles from './message.module.scss';

export default function MessageIndexBox({ message } : { message: MessageType }) {
  return (
    <div className={styles['box-container']}>
      <p className={styles['box-name']}>{message.memberName}</p>
      <p className={styles['box-body']}>
        {message.body.split('\n').map((item) => (
          <>{item}</>
        ))}
      </p>
    </div>
  );
}
