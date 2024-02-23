import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";

const TasksPage = () => {
  return (
    <div className='tiny'>
        <TaskFormCustom />
        <TaskList />
    </div>
  );
}

export default TasksPage;