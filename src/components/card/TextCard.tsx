'use client';

import Image from 'next/image';
import styles from './card.module.scss';
import { MessageType } from '@/types/messageType';
import topDecoration from '@/public/card/decoration/text-card-top.png';
import bottomDecoration from '@/public/card/decoration/text-card-bottom.png';
import { useContext } from 'react';
import { CurrentMentorContext } from '@/middleware/CurrentMentorProvider';
import { textCardId } from '@/lib/data/cardId';

export default function TextCard({ message } : { message: MessageType }) {
  const currentMentor = useContext(CurrentMentorContext);

  return (
    <div className={styles['text-card-container']}>
      <div
        className={styles['text-card-cushion']}
        id={`${textCardId}-${message.id}`}
      >
        <Image src={topDecoration} alt='top' className={styles['text-img-top']} width={595} />
        <div className={styles['text-card-box']}>
          <div className={styles['text-card-text-area']}>
            {currentMentor?.name}
            <div className={styles['text-card-decoration-text']}>へ</div>
          </div>
          <div className={styles['text-card-message-area']}>
            {message.body.split('\n').map((item, key) => (
              <p key={key}>{item}</p>
            ))}
          </div>
          <div className={styles['text-card-text-area']}>
            {message.memberName}
            <div className={styles['text-card-decoration-text']}>より</div>
          </div>
        </div>
        <Image src={bottomDecoration} alt='bottom' width={595} className={styles['text-img-bottom']} />
      </div>
    </div>
  );
}
