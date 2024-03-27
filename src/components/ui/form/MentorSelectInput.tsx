'use client';

import { useState } from 'react';
import styles from './input.module.scss';
import { MentorType } from '@/types/mentorType';
import SelectMentorMenu from '../menu/SelectMentorMenu';
import { RxCrossCircled } from 'react-icons/rx';
import Image from 'next/image';
import MentorImg from '@/public/mentor/mentor-default.jpg';

export default function MentorSelectInput({
  selectMentor, handleSelectMentor,
}: {
  selectMentor: MentorType | null, handleSelectMentor: (mentor: MentorType | null) => void,
}) {
  const [inputVal, setInputVal] = useState('');
  const [seenMentor, setSeenMentor] = useState<MentorType | null>(null);

  const handleSelect = (mentor: MentorType) => {
    handleSelectMentor(mentor);
  };

  const handleSeenMentor = (mentor: MentorType | null) => {
    setSeenMentor(mentor);
  };

  const handleSetMentor = () => {
    if (seenMentor !== null) {
      handleSelectMentor(seenMentor);
      setInputVal('');
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    handleSetMentor();
  };

  return (
    <form
      className={styles['select-input-container']}
      onSubmit={handleSubmit}
    >
      {selectMentor ? (
        <div className={styles['select-mentor-box']}>
          {selectMentor.imageUrl ? (
            <img src={selectMentor.imageUrl} alt={selectMentor.name} className={styles['select-mentor-icon']} />
          ) : (
            <Image src={MentorImg} alt={selectMentor.name} className={styles['select-mentor-icon']} width={100} />
          )}
          {selectMentor.name}
          <div
            className={styles['select-mentor-delete-btn']}
            onClick={() => handleSelectMentor(null)}
          >
            <RxCrossCircled />
          </div>
        </div>
      ) : (
        <>
          <input
            className={styles['select-input']}
            placeholder='メンター名を入力してください'
            maxLength={15}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          {(inputVal.length !== 0) && (
            <SelectMentorMenu
              inputVal={inputVal}
              handleSelect={handleSetMentor}
              handleSeenMentor={handleSeenMentor}
            />
          )}
        </>
      )}
    </form>
  );
}
