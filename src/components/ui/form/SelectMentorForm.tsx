'use client';

import { CgSelectO } from 'react-icons/cg';
import MentorSelectInput from './MentorSelectInput';
import styles from './form.module.scss';
import SelectMentorButton from '../button/SelectMentorButton';
import { useState } from 'react';
import { MentorType } from '@/types/mentorType';
import { mentorKey } from '@/lib/key/key';
import { useRouter } from 'next/navigation';

export default function SelectMentorForm() {
  const [selectMentor, setSelectMentor] = useState<MentorType | null>(null);
  const router = useRouter();

  const handleSubmit = () => {
    if (selectMentor) {
      localStorage.setItem(mentorKey, JSON.stringify(selectMentor.id));
      router.push('/thanks');
    }
  };

  const handleSelectMentor = (mentor: MentorType | null) => {
    setSelectMentor(mentor);
  };

  return (
    <div className={styles['mentor-select-form']}>
      <div className={styles['title-container']}>
        <div className={styles['title-box']}>
          <CgSelectO className={styles['title-icon']} />
          <p className={styles['title']}>
            <span>メンター名</span>を選択
          </p>
        </div>
        <p className={styles['description']}>メンター名を記述すると、候補が現れます</p>
      </div>
      <MentorSelectInput selectMentor={selectMentor} handleSelectMentor={handleSelectMentor} />
      <SelectMentorButton disabled={!selectMentor} handleClick={handleSubmit} />
    </div>
  );
}
