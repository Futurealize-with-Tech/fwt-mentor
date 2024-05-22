'use client';

import { MdOutlineFileDownload } from 'react-icons/md';
import SaveCardMenuTab from '@/components/card/SaveCardMenuTab';
import cardDesign from '@/public/card/card-design.jpg';
import textDesign from '@/public/card/text-design.jpg';
import styles from './menu.module.scss';
import { toast } from 'react-toastify';
import { MessageType } from '@/types/messageType';
import { saveMessage } from '@/lib/functions/saveMessage';

export default function SaveCardMenu({
  message,
  onClose,
} : {
  message: MessageType,
  onClose: () => void,
}) {
  const textCardDownload = async () => {
    await saveMessage({ messageId: message.id, memberName: message.memberName!, type: 'text' });
    toast.success('テキストカードをダウンロードしました！');
    onClose();
  };

  const cardDownload = async () => {
    await saveMessage({ messageId: message.id, memberName: message.memberName!, type: 'card' });
    toast.success('カードをダウンロードしました！');
    onClose();
  };

  return (
    <>
      <ul className={styles[('save-menu')]}>
        <div className={styles['save-menu-title']}>
          <MdOutlineFileDownload />
          メッセージを保存
        </div>
        <SaveCardMenuTab
          handleClick={cardDownload}
          image={cardDesign}
          type='card'
        />
        <SaveCardMenuTab
          handleClick={textCardDownload}
          image={textDesign}
          type='text'
        />
      </ul>
      <div className={styles['save-menu-bg']} />
    </>
  );
}
