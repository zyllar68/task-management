// icons
import TaskItem from './TaskItem';

type Props = {
  handleDeleteIcon: () => void;
  handleEdit: () => void;
};

function TaskList({ handleDeleteIcon, handleEdit }: Props) {
  return (
    <>
      <h1 className="pb-4 text-center text-2xl font-medium">Task List</h1>
      <ul>
        <TaskItem handleEdit={handleEdit} handleDeleteIcon={handleDeleteIcon} />
        <TaskItem handleEdit={handleEdit} handleDeleteIcon={handleDeleteIcon} />
      </ul>
    </>
  );
}

export default TaskList;
