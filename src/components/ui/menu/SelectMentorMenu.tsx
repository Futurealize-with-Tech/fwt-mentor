'use client';

import { useContext, useEffect, useState } from 'react';
import { MentorsDataContext } from '@/middleware/MentorsDataProvider';
import styles from './menu.module.scss';
import { MentorType } from '@/types/mentorType';

export default function SelectMentorMenu({
  inputVal,
  handleSelect,
  handleSeenMentor,
} : {
  inputVal: string,
  handleSelect: () => void,
  handleSeenMentor: (mentor: MentorType | null) => void,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mentors = useContext(MentorsDataContext);
  const mentorsIndex = mentors.filter(
    (mentor) => mentor.name.startsWith(inputVal),
  );

  const handleKeyDown = (e: { ctrlKey: boolean; key: string }) => {
    if (mentorsIndex.length !== 0) {
      if ((e.key === 'ArrowUp' || (e.ctrlKey && e.key === 'p')) && activeIndex > 0) {
        // Up Arrow
        setActiveIndex(activeIndex - 1);
        handleSeenMentor(mentorsIndex[activeIndex]);
      } else if ((e.key === 'ArrowDown' || (e.ctrlKey && e.key === 'n')) && activeIndex < mentorsIndex.length - 1) {
        // Down Arrow
        setActiveIndex(activeIndex + 1);
        handleSeenMentor(mentorsIndex[activeIndex]);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    if (mentorsIndex.length !== 0) {
      handleSeenMentor(mentorsIndex[activeIndex]);
    }
  }, [mentorsIndex]);

  if (mentorsIndex.length === 0) {
    return <></>;
  }

  return (
    <ul
      className={styles['select-mentor-index']}
    >
    {mentorsIndex.map((mentor, index) => (
      <li
        className={styles['select-mentor-index-item']}
        style={{
          backgroundColor: activeIndex === index ? 'rgba(var(--color-primary-pink), 0.4)' : ''
        }}
        onClick={handleSelect}
        key={mentor.id}
      >
        {mentor.name}
      </li>
    ))}
    </ul>
  );
}
