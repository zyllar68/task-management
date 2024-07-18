'use client';

import { useState, useEffect } from 'react';

import Input from '@/_components/Input';
import TaskList from '@/_components/Tasks/TaskList';
import Button from '@/_components/Button';

// modal
import TaskModal from '@/_components/modal/TaskModal';
import TaskModalEdit from '@/_components/modal/TaskModalEdit';
import ConfimationModal from '@/_components/modal/ConfimationModal';

// typescript types
import { TaskType } from '@/lib/type';

export default function Home() {
  // modal state
  const [taskModal, setTaskModal] = useState<boolean>(false);
  const [taskEditModal, setTaskEditModal] = useState<boolean>(false);
  // delete modal state
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  // task list state
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  // task id to be deleted or edit
  const [taskToDeleteEdit, setTaskToDeleteEdit] = useState<number | null>(null);
  const [taskValueToEdit, setTaskValueToEdit] = useState<string>('');
  // search value
  const [search, setSearch] = useState<string>('');

  const fetchUsers = async (search: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/task?search=${encodeURIComponent(search)}`,
      );

      if (!res.ok) {
        throw new Error('Failed to fetch users');
      }

      const { data }: { data: TaskType[] } = await res.json();

      setTaskList(data);
    } catch (error: any) {
      alert(error.message);
    } finally {
      // setLoading(false);
    }
  };

  // fetch task
  useEffect(() => {
    fetchUsers(search);
  }, [search]);

  // search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // toggle modal
  const handleModal = () => {
    setTaskModal(!taskModal);
  };
  const handleModalEdit = (taskId?: number, taskValue?: string) => {
    if (taskId && taskValue) {
      setTaskToDeleteEdit(taskId);
      setTaskValueToEdit(taskValue);
    }
    setTaskEditModal(!taskEditModal);
  };
  const handleConfirmationModal = (taskId?: number) => {
    setDeleteModal(!deleteModal);
    if (taskId) {
      setTaskToDeleteEdit(taskId);
    }
  };

  // modal form submit
  const handleTaskSubmit = async (formData: FormData) => {
    try {
      const task = formData.get('task') as string;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/task`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ task }),
        },
      );

      if (!res.ok) {
        throw new Error('Failed to add task');
      }

      if (res.ok) {
        fetchUsers(search);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setTaskModal(false);
    }
  };

  // handle delete task
  const handleTaskDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/task`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: taskToDeleteEdit }),
        },
      );
      if (!res.ok) {
        throw new Error('Failed to delete task');
      }
      setTaskList(taskList.filter((task) => task.id !== taskToDeleteEdit));
    } catch (error) {
    } finally {
      setDeleteModal(false);
      setTaskToDeleteEdit(null);
    }
  };

  // handle update task
  const handleTaskUpdate = async (formData: FormData) => {
    const task = formData.get('task') as string;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/task/${taskToDeleteEdit}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ task }),
        },
      );
      if (!res.ok) {
        throw new Error('Failed to delete task');
      } else {
        fetchUsers(search);
      }
      setTaskList(taskList.filter((task) => task.id !== taskToDeleteEdit));
    } catch (error) {
    } finally {
      setTaskEditModal(false);
      setTaskToDeleteEdit(null);
      setTaskValueToEdit('');
    }
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
          <div className="flex flex-col items-center gap-8 pb-20 sm:flex-row">
            <div className="flex-auto sm:w-9/12">
              <Input
                placeholder="Search"
                name="search"
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex-auto sm:w-3/12">
              <Button primary label="Add Task" onClick={handleModal} />
            </div>
          </div>

          <TaskList
            taskList={taskList}
            handleEdit={handleModalEdit}
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

      <TaskModalEdit
        show={taskEditModal}
        task={taskValueToEdit}
        handleCloseModal={handleModalEdit}
        handleTaskSubmit={handleTaskUpdate}
      />

      {/* confirmation modal to delete task */}
      <ConfimationModal
        show={deleteModal}
        handleConfirmButton={handleTaskDelete}
        handleCloseModal={handleConfirmationModal}
      />
    </>
  );
}
