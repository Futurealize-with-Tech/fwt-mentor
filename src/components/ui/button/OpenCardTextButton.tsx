'use client';

import { useAtom } from 'jotai';
import { isOpenCardAtom, isScrollInvalidAtom, messagesAtom } from '@/atoms/atoms';
import styles from './textButton.module.scss';

export default function OpenCardTextButton({
  id,
}: {
  id: number,
}) {
  const [, setIsCardOpen] = useAtom(isOpenCardAtom);
  const [, setIsScrollInvalid] = useAtom(isScrollInvalidAtom);
  const [messages] = useAtom(messagesAtom);

  const handleClick = () => {
    const message = messages.find((message) => message.id === id);
    const messageIndex = messages.indexOf(message!);
    setIsCardOpen({ openCardId: messageIndex, isOpenCard: true });
    setIsScrollInvalid(true);
  };

  return (
    <>
      <p
        className={styles['text-btn']}
        onClick={handleClick}
      >
        カードを表示
      </p>
    </>
  );
}
