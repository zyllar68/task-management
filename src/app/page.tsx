'use client';

import { useState } from 'react';

import Input from '@/_components/Input';
import TaskList from '@/_components/Tasks/TaskList';
import Button from '@/_components/Button';

// modal
import TaskModal from '@/_components/modal/TaskModal';
import ConfimationModal from '@/_components/modal/ConfimationModal';

export default function Home() {
  // modal state
  const [taskModal, setTaskModal] = useState<boolean>(false);
  // delete modal state
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  // toggle modal
  const handleModal = () => {
    setTaskModal(!taskModal);
  };
  const handleConfirmationModal = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    <>
      <main className="min-h-screen">
        <div className="bg-green-300 p-6">
          <p className="text-center text-2xl font-bold capitalize text-white">
            task manager app
          </p>
        </div>

        <div className="mx-auto max-w-[768px] px-10 pt-40">
          <div className="flex items-center gap-8 pb-20">
            <div className="w-9/12 flex-auto">
              <Input placeholder="Search" />
            </div>
            <div className="w-3/12 flex-auto">
              <Button primary label="Add Task" onClick={handleModal} />
            </div>
          </div>

          {/* task lists component */}
          <TaskList handleDeleteIcon={handleConfirmationModal} />
        </div>
      </main>

      {/* add and edit modal */}
      <TaskModal show={taskModal} handleCloseModal={handleModal} />

      {/* confirmation modal to delete task */}
      <ConfimationModal
        show={deleteModal}
        handleConfirmButton={() => alert('deleted')}
        handleCloseModal={handleConfirmationModal}
      />
    </>
  );
}
