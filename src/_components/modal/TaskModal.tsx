// icon
import CloseIcon from '../icons/CloseIcon';

import Input from '@/_components/Input';
import Button from '@/_components/Button';

type Props = {
  show: boolean;
  handleCloseModal: () => void;
};

function TaskModal({ show, handleCloseModal }: Props) {
  return (
    <>
      {show && (
        <div className="bg-gray-300 z-1 absolute left-0 top-0 flex h-screen w-screen bg-opacity-50">
          <div className="flex w-full items-center justify-center">
            <div className="min-w-[356px] overflow-auto rounded-md bg-white p-6">
              <div className="flex justify-between">
                <p className="pb-4 text-xl font-medium">Add Task</p>
                <CloseIcon onClick={handleCloseModal} />
              </div>
              <form>
                <div className="flex gap-4">
                  <Input placeholder="Task" />
                  <div className="w-3/12 flex-auto">
                    <Button
                      primary
                      label="Create"
                      onClick={() => alert('yeah')}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskModal;
