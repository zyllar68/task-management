// icons
import TaskItem from './TaskItem';

// typescript type
import { TaskType } from '@/lib/type';

type Props = {
  taskList: TaskType[];
  handleDeleteIcon: () => void;
  handleEdit: () => void;
};

function TaskList({ taskList, handleDeleteIcon, handleEdit }: Props) {
  return (
    <>
      <h1 className="pb-4 text-center text-2xl font-medium">Task List</h1>
      <ul className="h-[calc(100vh-450px)] overflow-auto">
        {taskList.map((item) => {
          return (
            <TaskItem
              key={item.id}
              task={item.task}
              handleEdit={handleEdit}
              handleDeleteIcon={handleDeleteIcon}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TaskList;
