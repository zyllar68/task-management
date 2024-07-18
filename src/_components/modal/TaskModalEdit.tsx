import { useState, FormEvent } from 'react';
import CloseIcon from '../icons/CloseIcon';
import Input from '@/_components/Input';
import Button from '@/_components/Button';

type Props = {
  task: string;
  show: boolean;
  handleCloseModal: () => void;
  handleTaskSubmit: (formData: FormData) => void;
};

function TaskModal({ task, show, handleCloseModal, handleTaskSubmit }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);

      if (formData.get('task') === '') {
        throw new Error('Please input a task!');
      }

      return handleTaskSubmit(formData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {show && (
        <div className="z-1 absolute left-0 top-0 flex h-screen w-screen bg-gray-300 bg-opacity-50">
          <div className="flex w-full items-center justify-center">
            <div className="min-w-[356px] overflow-auto rounded-md bg-white p-6">
              <div className="flex justify-between">
                <p className="pb-4 text-xl font-medium">Edit Task</p>
                <CloseIcon
                  onClick={() => {
                    handleCloseModal();
                    setError(null);
                  }}
                />
              </div>
              <form onSubmit={onSubmit}>
                <div className="flex gap-4">
                  <Input
                    defaultValue={task}
                    placeholder="Task"
                    name="task"
                    errorMessage={error || ''}
                    readOnly={isLoading}
                  />
                  <div className="w-3/12 flex-auto">
                    <Button
                      primary
                      label="Update"
                      isLoading={isLoading}
                      onClick={() => setIsLoading(true)}
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
