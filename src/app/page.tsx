'use client';

import { useState, useEffect } from 'react';

import Input from '@/_components/Input';
import TaskList from '@/_components/Tasks/TaskList';
import Button from '@/_components/Button';

// modal
import TaskModal from '@/_components/modal/TaskModal';
import ConfimationModal from '@/_components/modal/ConfimationModal';

// typescript types
import { TaskType } from '@/lib/type';

export default function Home() {
  // modal state
  const [taskModal, setTaskModal] = useState<boolean>(false);
  // delete modal state
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  // task list state
  const [taskList, setTaskList] = useState<TaskType[]>([
    { id: 1, task: 'yeah' },
    { id: 2, task: 'yeah' },
    { id: 3, task: 'yeah' },
    { id: 4, task: 'yeah' },
    { id: 5, task: 'yeah' },
    { id: 6, task: 'yeah' },
    { id: 7, task: 'yeah' },
    { id: 8, task: 'yeah' },
  ]);

  // toggle modal
  const handleModal = () => {
    setTaskModal(!taskModal);
  };
  const handleConfirmationModal = () => {
    setDeleteModal(!deleteModal);
  };

  // modal form submit
  const handleTaskSubmit = (formData: FormData) => {
    try {
      const newTask: TaskType = {
        id: taskList.length + 1,
        task: formData.get('task') as string,
      };

      setTaskList([...taskList, newTask]);
    } catch (error) {
    } finally {
      setTaskModal(false);
    }
  };

  useEffect(() => {
    fetch('https://task-management-pi-roan.vercel.app/api/task')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

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
              <Input placeholder="Search" name="search" />
            </div>
            <div className="w-3/12 flex-auto">
              <Button primary label="Add Task" onClick={handleModal} />
            </div>
          </div>

          {/* task lists component */}
          <TaskList
            taskList={taskList}
            handleEdit={() => alert('edit task')}
            handleDeleteIcon={handleConfirmationModal}
          />
        </div>
      </main>

      {/* add and edit modal */}
      <TaskModal
        show={taskModal}
        handleCloseModal={handleModal}
        handleTaskSubmit={handleTaskSubmit}
      />

      {/* confirmation modal to delete task */}
      <ConfimationModal
        show={deleteModal}
        handleConfirmButton={() => alert('deleted')}
        handleCloseModal={handleConfirmationModal}
      />
    </>
  );
}
