'use client';

import Lottie from 'lottie-react';
import loading from '@/public/animation/loading.json';
import styles from './animation.module.scss';

export default function LoadingAnimation() {
  return (
    <div className={styles['container']}>
      <Lottie
        animationData={loading}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
