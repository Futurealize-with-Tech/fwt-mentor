'use client';

import { MdOutlineFileDownload } from 'react-icons/md';
import SaveCardMenuTab from '@/components/card/SaveCardMenuTab';
import cardDesign from '@/public/card/card-design.jpg';
import textDesign from '@/public/card/text-design.jpg';
import styles from './menu.module.scss';
import { toast } from 'react-toastify';
import { returnTextCardImage } from '@/lib/functions/returnTextCardImage';
import { useContext } from 'react';
import { CurrentMentorContext } from '@/middleware/CurrentMentorProvider';
import { MessageType } from '@/types/messageType';
import { saveMessage } from '@/lib/functions/saveMessage';

export default function SaveCardMenu({
  message,
  onClose,
} : {
  message: MessageType,
  onClose: () => void,
}) {
  const mentor = useContext(CurrentMentorContext);

  const handleClick = () => {
    toast.warn('まだダウンロード機能できてません！すみません！！いのれん');
  };

  return (
    <>
      <ul className={styles[('save-menu')]}>
        <div className={styles['save-menu-title']}>
          <MdOutlineFileDownload />
          メッセージを保存
        </div>
        <SaveCardMenuTab
          image={cardDesign}
          type='card'
        />
        <SaveCardMenuTab
          image={textDesign}
          type='text'
        />
      </ul>
      <div className={styles['save-menu-bg']} />
    </>
  );
}
