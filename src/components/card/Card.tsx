import styles from './card.module.scss';
import { useContext } from 'react';
import { MessageType } from '@/types/messageType';
import { CurrentMentorContext } from '@/middleware/CurrentMentorProvider';
import { cardId } from '@/lib/data/cardId';

export default function Card({ message } : { message: MessageType }) {
  const currentMentor = useContext(CurrentMentorContext);

  return (
    <div className={styles['card-design-container']}>
      <div
        className={styles['card-design-cushion']}
        id={`${cardId}-${message.id}`}
      >
        <img
          src='/card/card-design.jpg'
          alt='card'
          className={styles['card-bg-img']}
          style={{ boxShadow: 'none', borderRadius: 0 }}
        />
        <div className={styles['card-front-container']}>
          <img
            src='/text/card-title.png'
            alt='title'
            width={600}
            className={styles['card-title-img']}
          />
          <div className={styles['card-mentor-area']}>
            {currentMentor?.name}
            <div className={styles['card-mentor-area-decorate']}>殿</div>
          </div>
          <div className={styles['card-message-area']}>
            <img
              src='/text/message-text.png'
              alt='message'
              width={80}
              className={styles['card-message-area-title-img']}
            />
            <p className={styles['card-message-area-body']}>
              {message.body.split("\n").map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </p>
          </div>
          <div className={styles['card-member-area']}>
            <img
              src='/text/member-text.png'
              alt='message'
              width={80}
              className={styles['card-member-area-title-img']}
            />
            {message.memberName}
          </div>
        </div>
      </div>
    </div>
  );
}
