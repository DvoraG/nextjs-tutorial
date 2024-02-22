import styles from '@/styles/TaskList.module.css';
import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from '@/utils/actions';

const TaskList = async () => {
  const tasks = await getAllTasks();
  
  if (tasks.length === 0) {
    return <h2>No tasks found</h2>
  }
  return (
    <ul className={styles.menu}>
      {
        tasks.map((task) => {
          return (
            <li key={task.id} className={styles.container}>
              <h2 className={`${styles.mediumtext} ${task.completed ? styles.completed : null}`}>{task.content}</h2>
              <div className={styles.btncontainer}>
                <Link className={`btn-small btn-accent-green ${styles.smalltext}`} href={`/tasks/${task.id}`}>edit</Link>
                <DeleteForm id={task.id} />
              </div>
            </li>
          )
        })
      }
    </ul>
  );
}

export default TaskList;