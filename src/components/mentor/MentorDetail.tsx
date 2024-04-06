'use client';

import { useContext, useEffect, useState } from 'react';
import { CurrentMentorContext } from '@/middleware/CurrentMentorProvider';
import MentorBox from './MentorBox';
import styles from './mentor.module.scss';
import { MessageType } from '@/types/messageType';
import { getMessage } from '@/utils/getMessages';
import { toast } from 'react-toastify';
import LoadingAnimation from '../ui/animation/LoadingAnimation';
import MessageIndexBox from '../message/MessageIndexBox';

export default function MentorDetail() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const currentMentor = useContext(CurrentMentorContext);

  useEffect(() => {
    const fetchMessages = async () => {
      setError(false);
      await getMessage()
        .then((data) => {
          // console.log(data.messages);
          setMessages(data.messages);
          setLoading(false);
        })
        .catch(e => {
          toast.error('通信に失敗しました');
          setLoading(false);
          setError(true);
        });
    }

    fetchMessages();
  }, []);

  if (!currentMentor) {
    return <></>;
  }

  return (
    <div className={styles['detail-container']}>
      <MentorBox mentor={currentMentor} />
      {(messages && !loading && !error) && (
        <div className={styles['message-index-container']}>
          {messages.map((message) => (
            <MessageIndexBox message={message} key={message.id} />
          ))}
        </div>
      )}
      {loading && (
        <div className={styles['loading-container']}>
          <LoadingAnimation />
        </div>
      )}
    </div>
  );
}
