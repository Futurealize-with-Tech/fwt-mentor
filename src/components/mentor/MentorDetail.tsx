'use client';

import { useContext, useEffect, useState } from 'react';
import { CurrentMentorContext } from '@/middleware/CurrentMentorProvider';
import MentorBox from './MentorBox';
import styles from './mentor.module.scss';
import { MessageType } from '@/types/messageType';
import { getMessage } from '@/utils/getMessages';
import { toast } from 'react-toastify';
import LoadingAnimation from '../ui/animation/LoadingAnimation';
import { exampleMessages } from '@/lib/data/messages';
import MessageIndexBox from '../message/MessageIndexBox';

export default function MentorDetail() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);
  const currentMentor = useContext(CurrentMentorContext);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await getMessage()
        .then((data) => {
          setMessages(data);
          setLoading(false);
        })
        .catch(e => {
          toast.error('通信に失敗しました');
          setLoading(false);
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
      {(messages.length !== 0 && !loading) && (
        messages.map((message) => (
          <MessageIndexBox message={message} key={message.id} />
        ))
      )}
      {loading && (
        <div className={styles['loading-container']}>
          <LoadingAnimation />
        </div>
      )}
    </div>
  );
}
