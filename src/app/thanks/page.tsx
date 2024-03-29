import styles from './thunksPage.module.scss';
import MentorDetail from '@/components/mentor/MentorDetail';

export default function MessagesPage() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <MentorDetail />
      </div>
    </div>
  );
}
