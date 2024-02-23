'use client';

import styles from '@/styles/TaskForm.module.css';
import { createTaskCustom } from '@/utils/actions';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const {pending} = useFormStatus();
  return (
    <button 
      type='submit' 
      className={`btn-small btn-primary ${styles.submitBtn}`} 
      disabled={pending}>
        {pending ? 'please wait...' : 'create task'}
      </button>
  );
}
const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if(state.message === 'error') {
      toast.error('there was an error');
      return;
    }
    if(state.message) {
      toast.success('task created');
    }
  },[state]);
  return (
    <form action={formAction}>
      {/* {state.message ? <p>{state.message}</p> : null} */}
      <div className={styles.grid}>
        <input 
          type='text' 
          className={styles.content} 
          placeholder='What is your task?' 
          name='content'
          required />
          <SubmitBtn />
      </div>
    </form>
  );
}

const initialState = {
  message: null,
};

export default TaskFormCustom;