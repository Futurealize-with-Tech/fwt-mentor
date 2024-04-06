'use client';

import { motion } from 'framer-motion';
import { MdOutlineFileDownload } from 'react-icons/md';
import styles from './button.module.scss';
import { useState } from 'react';
import SaveCardMenu from '../menu/SaveCardMenu';

export default function SaveCardButton({ id } : { id: number }) {
  const [isHover, setIsHover] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      <motion.div
        className={styles['save-btn-wrapper']}
        animate={{ scale: isHover && !isMenu ? 1.2 : 1 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseDown={() => setIsHover(false)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleMenu}
      >
        <div className={styles['save-btn']}>
          <MdOutlineFileDownload />
        </div>
        {isMenu && (
          <SaveCardMenu id={id} onClose={handleMenu} />
        )}
      </motion.div>
    </>
  );
}
