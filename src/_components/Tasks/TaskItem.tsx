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
    <li className="mb-6 w-full min-w-[143px] rounded-lg bg-white px-4 py-6 capitalize sm:flex sm:items-center sm:justify-between">
      <div className="sm:w-10/12 sm:flex-auto">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
          {task}
        </p>
      </div>
      <hr className="sm:hidden" />
      <div className="mt-4 flex flex-auto justify-center gap-6 sm:mt-0 sm:w-2/12 sm:justify-end">
        <PenIcon onClick={onEditClick} />
        <TrashIcon onClick={onDeleteClick} />
      </div>
    </li>
  );
}

export default TaskItem;

// <li className="mb-6 flex w-full min-w-[143px] flex-col items-center justify-between rounded-lg bg-white px-4 py-6 capitalize">
//   <div className="w-10/12 flex-auto">
//     <p className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
//       {task}
//     </p>
//   </div>
//   <div className="flex w-2/12 flex-auto justify-end gap-6">
//     <PenIcon onClick={onEditClick} />
//     <TrashIcon onClick={onDeleteClick} />
//   </div>
// </li>;
