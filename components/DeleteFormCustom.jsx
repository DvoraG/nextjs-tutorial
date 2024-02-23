'use client';

import styles from '@/styles/TaskList.module.css'
import { deleteTask } from '@/utils/actions';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => { 
  const {pending} = useFormStatus();
  return(
    <button 
      className={`btn btn-small btn-accent-red ${styles.smalltext}`}
      disabled={pending}>
        {pending ? 'please wait...' : 'delete'}</button>
  )
}

const DeleteFormCustom = ({id}) => {
  return (
    <form action={deleteTask} className={styles.smalltext}>
      <input type='hidden' name='id' value={id} />
      <SubmitButton />
    </form>
  );
}

export default DeleteFormCustom;