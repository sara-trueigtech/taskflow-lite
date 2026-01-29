import { useState } from "react";

const useTaskActions = ({ addTask, editTask }) => {
  const [curTask, setCurTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const submitTask = (data) => {
    if (!data) return;

    curTask
      ? editTask({ ...curTask, ...data })
      : addTask(data);

    setCurTask(null);
    setShowForm(false);
  };

  const cancelTask = () => {
    setCurTask(null);
    setShowForm(false);
  };

  const openCreate = () => {
    setCurTask(null);
    setShowForm(true);
  };

  const openEdit = (task) => {
    setCurTask(task);
    setShowForm(true);
  };

  return {
    curTask,
    showForm,
    submitTask,
    cancelTask,
    openCreate,
    openEdit,
  };
};

export default useTaskActions;
