'use client';

import TrashIcon from '@/_components/icons/TrashIcon';
import PenIcon from '@/_components/icons/PenIcon';

type Props = {
  handleDeleteIcon: () => void;
  handleEdit: () => void;
};

function TaskItem({ handleDeleteIcon, handleEdit }: Props) {
  return (
    <li className="mb-6 flex items-center justify-between rounded-lg bg-white px-4 py-6 capitalize">
      <div className="w-10/12 flex-auto">
        <p className="max-w-[] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
          Task name Task name Task
        </p>
      </div>
      <div className="flex w-2/12 flex-auto justify-end gap-6">
        <PenIcon onClick={handleEdit} />
        <TrashIcon onClick={handleDeleteIcon} />
      </div>
    </li>
  );
}

export default TaskItem;
