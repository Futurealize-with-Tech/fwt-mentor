'use client';

import { MdOutlineFileDownload } from 'react-icons/md';
import SaveCardMenuTab from '@/components/card/SaveCardMenuTab';
import cardDesign from '@/public/card/card-design.jpg';
import textDesign from '@/public/card/text-design.jpg';
import styles from './menu.module.scss';

export default function SaveCardMenu({
  id,
  onClose,
} : {
  id: number,
  onClose: () => void,
}) {
  return (
    <>
      <ul className={styles[('save-menu')]}>
        <div className={styles['save-menu-title']}>
          <MdOutlineFileDownload />
          メッセージを保存
        </div>
        <SaveCardMenuTab image={cardDesign} text='カードデザイン' handleClick={() => {}} />
        <SaveCardMenuTab image={textDesign} text='テキストデザイン' handleClick={() => {}} />
      </ul>
      <div className={styles['save-menu-bg']} />
    </>
  );
}
