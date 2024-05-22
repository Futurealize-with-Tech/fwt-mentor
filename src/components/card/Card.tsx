import styles from './card.module.scss';
import { useContext } from 'react';
import Image from 'next/image';
import { MessageType } from '@/types/messageType';
import { CurrentMentorContext } from '@/middleware/CurrentMentorProvider';
import cardDesign from '@/public/card/card-design.jpg';
import cardTitle from '@/public/text/card-title.png';
import messageText from '@/public/text/message-text.png';
import memberText from '@/public/text/member-text.png';
import { cardId } from '@/lib/data/cardId';

export default function Card({ message } : { message: MessageType }) {
  const currentMentor = useContext(CurrentMentorContext);

  return (
    <div className={styles['card-design-container']}>
      <div
        className={styles['card-design-cushion']}
        id={`${cardId}-${message.id}`}
      >
        <Image
          src={cardDesign}
          alt='card'
          width={800}
          className={styles['card-bg-img']}
          style={{ boxShadow: 'none', borderRadius: 0 }}
        />
        <div className={styles['card-front-container']}>
          <Image
            src={cardTitle}
            alt='title'
            width={600}
            className={styles['card-title-img']}
          />
          <div className={styles['card-mentor-area']}>
            {currentMentor?.name}
            <div className={styles['card-mentor-area-decorate']}>殿</div>
          </div>
          <div className={styles['card-message-area']}>
            <Image
              src={messageText}
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
            <Image
              src={memberText}
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
