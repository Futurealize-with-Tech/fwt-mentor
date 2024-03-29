'use client';

import { MentorType } from '@/types/mentorType';
import defaultImg from '@/public/mentor/mentor-default.jpg';
import styles from './mentor.module.scss';
import Image from 'next/image';

export default function MentorBox({ mentor } : { mentor: MentorType }) {
  return (
    <div className={styles['box-container']}>
      <div className={styles['box-mentor-icon-box']}>
        {mentor.imageUrl ? (
          <img src={mentor.imageUrl} alt={mentor.name} className={styles['box-mentor-icon']} />
        ) : (
          <Image src={defaultImg} alt={mentor.name} width={150} className={styles['box-mentor-icon']} />
        )}
      </div>
      <p className={styles['box-mentor-name']}>{mentor.name}</p>
      <p className={styles['box-mentor-text']}>
        卒業おめでとうございます！！！
        <br />
        またどこかで会えることを楽しみにしています！
      </p>
      <p className={styles['box-fwt-text']}>Futururealize with Tech！</p>
    </div>
  );
}
