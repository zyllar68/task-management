'use client';

import TrashIcon from '@/_components/icons/TrashIcon';
import PenIcon from '@/_components/icons/PenIcon';

type Props = {
  id: number;
  task: string;
  handleDeleteIcon: (id: number) => void;
  handleEdit: (id: number, task: string) => void;
};

function TaskItem({ id, task, handleDeleteIcon, handleEdit }: Props) {
  const onEditClick = () => {
    handleEdit(id, task);
  };
  const onDeleteClick = () => {
    handleDeleteIcon(id);
  };

  return (
    <li className="mb-6 flex items-center justify-between rounded-lg bg-white px-4 py-6 capitalize">
      <div className="w-10/12 flex-auto">
        <p className="max-w-[] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
          {task}
        </p>
      </div>
      <div className="flex w-2/12 flex-auto justify-end gap-6">
        <PenIcon onClick={onEditClick} />
        <TrashIcon onClick={onDeleteClick} />
      </div>
    </li>
  );
}

export default TaskItem;
