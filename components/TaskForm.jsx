import styles from '@/styles/TaskForm.module.css';
import { createTask } from '@/utils/actions';

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className={styles.grid}>
        <input 
          type='text' 
          className={styles.content} 
          placeholder='What is your task?' 
          name='content'
          required />
          <button type='submit' className={`btn-small btn-primary ${styles.submitBtn}`}>create task</button>
      </div>
    </form>
  );
}

export default TaskForm;