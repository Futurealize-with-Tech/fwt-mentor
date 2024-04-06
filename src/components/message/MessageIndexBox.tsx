'use client';

import React from 'react';
import { MessageType } from '@/types/messageType';
import { messageIcons } from '@/lib/data/icons';
import { iconColors } from '@/lib/data/colors';
import styles from './message.module.scss';
import SaveCardButton from '../ui/button/SaveCardButton';
import OpenCardTextButton from '../ui/button/OpenCardTextButton';

export default function MessageIndexBox({ message } : { message: MessageType }) {
  const iconNum = Math.floor(Math.random() * messageIcons.length);
  const iconColorNum = Math.floor(Math.random() * iconColors.length);
  const Icon = messageIcons[iconNum];
  const color = iconColors[iconColorNum];

  return (
    <div className={styles['box-container']}>
      <div className={styles['box-wrapper']}>
        <div className={styles['box-top-container']}>
          <div
            className={styles['box-icon-box']}
            style={{ backgroundColor: `rgba(var(${color}), 0.4)` }}
          >
            <Icon />
          </div>
          <SaveCardButton id={message.id} />
        </div>
        <p className={styles['box-name']}>{message.memberName}</p>
        <p className={styles['box-body-container']}>
          {message.body.split('\n').map((item, key) => (
            <p className={styles['box-body']} key={key}>
              {item}
            </p>
          ))}
        </p>
      </div>
      <OpenCardTextButton id={message.id} />
    </div>
  );
}
