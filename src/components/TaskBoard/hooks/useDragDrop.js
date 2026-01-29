const useTaskDragDrop = ({ tasks, editTask }) => {
  const allowDrop = (e) => e.preventDefault();

  const handleDrop = (e, newStatus) => {
    e.preventDefault();

    const taskId = e.dataTransfer.getData("taskId");
    const task = tasks.find((t) => t.id == taskId);

    if (!task || task.status === newStatus) return;

    editTask({ ...task, status: newStatus });
  };

  return {
    allowDrop,
    handleDrop,
  };
};

export default useTaskDragDrop;
