import styles from '@/styles/EditForm.module.css';
import { updateTask } from '@/utils/actions';
import { FaCheck } from 'react-icons/fa6';

const EditForm = async ({task}) => {
    const {id, completed, content } = task;
    return (
        <form action={updateTask} className={styles.editForm}>
            <div className={styles.grid}>
                <input type='hidden' name='id' value={id} />
                <input 
                type='text' 
                className={styles.content} 
                defaultValue={content} 
                name='content'
                required />
                <div className={styles.formControl}>
                    <label htmlFor='completed'>completed</label>
                    <input type='checkbox' defaultChecked={completed} name='completed' id='completed' className='completed'/>
                </div>
                <button type='submit' className={`btn-small btn-primary ${styles.submitBtn}`}>edit</button>
            </div>
        </form>
  )
};

export default EditForm;