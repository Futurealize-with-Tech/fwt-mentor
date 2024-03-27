import SelectMentorForm from '@/components/ui/form/SelectMentorForm';
import styles from './page.module.scss';

export default async function Home() {
  return (
    <div className={styles['main']}>
      <SelectMentorForm />
    </div>
  )
}
