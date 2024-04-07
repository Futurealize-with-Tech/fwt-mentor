'use client';

import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { RxCross2 } from 'react-icons/rx';
import { isOpenCardAtom, isScrollInvalidAtom, messagesAtom } from '@/atoms/atoms';
import styles from './message.module.scss';
import IndexCard from '../card/IndexCard';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

export default function MessageCardIndex() {
  const [isOpenCard, setIsOpenCard] = useAtom(isOpenCardAtom);
  const [messages] = useAtom(messagesAtom);
  const [, setIsScrollInvalid] = useAtom(isScrollInvalidAtom);
  const [[design, direction], setDesign] = useState([
    isOpenCard.openCardId,
    0
  ]);

  const animateImage = {
    enter: (direction: number) => {
      return {
        y: direction > 0 ? 300 : -300,
        opacity: 0,
        display: 'none'
      };
    },
    center: {
      opacity: 1,
      y: 0,
      display: 'block'
    },
    exit: (direction: number) => {
      return {
        y: direction < 0 ? 300 : -300,
        opacity: 0,
        display: 'none'
      };
    },
  };

  const onClose = () => {
    setIsOpenCard({ openCardId: isOpenCard.openCardId, isOpenCard: false });
    setIsScrollInvalid(false);
  };

  const paginate = (newDirection: number) => {
    if (design === 0 && newDirection === -1) return;
    if (design === messages.length -1 && newDirection === 1) return;
    setDesign([design + newDirection, newDirection]);
  };

  useEffect(() => {
    setDesign([isOpenCard.openCardId, 1]);
  }, [isOpenCard.openCardId]);

  return (
    <>
      <div className={styles['card-index-container']}>
        <div className={styles['all-box']}>
          <div
            className={styles['arrow-up-btn']}
            style={design === 0 ? {opacity: 0.4} : {opacity: 1}}
            onClick={() => paginate(-1)}
          >
            <FiArrowUpCircle />
          </div>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className={styles['card-box']}
              key={design}
              custom={direction}
              variants={animateImage}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <IndexCard message={messages[design]} />
            </motion.div>
          </AnimatePresence>
          <div
            className={styles['arrow-down-btn']}
            style={design === messages.length - 1 ? {opacity: 0.4} : {opacity: 1}}
            onClick={() => paginate(1)}
          >
            <FiArrowDownCircle />
          </div>
        </div>
      </div>
      <div
        className={styles['card-index-close-btn']}
        onClick={onClose}
      >
        <RxCross2 />
      </div>
      <div className={styles['card-index-bg']} onClick={onClose} />
    </>
  );
}
