import EditForm from '@/components/EditForm';
import { getSingleTask } from "@/utils/actions";
import Link from 'next/link';

const EditTaskPage = async ({params}) => {
    const singleTask = await getSingleTask(params.id);
  return (
    <>
        <Link className='link btn btn-accent-green' href='/tasks'>back to tasks</Link> 
        <div className='tiny'>
            <EditForm task={singleTask} />
        </div>
    </>
  );
}

export default EditTaskPage;