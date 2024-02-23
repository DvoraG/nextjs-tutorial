import styles from '@/styles/TaskList.module.css'
import { deleteTask } from '@/utils/actions';

const DeleteForm = ({id}) => {
  return (
    <form action={deleteTask} className={styles.smalltext}>
      <input type='hidden' name='id' value={id} />
      <button className={`btn btn-small btn-accent-red ${styles.smalltext}`}>delete</button>
    </form>
  );
}

export default DeleteForm;