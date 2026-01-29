import { deleteTask } from "../../../services/delete";

const useDeleteTask = (setTasks) => {
  const removeTask = async (id) => {
    try {
      await deleteTask(id);

      setTasks((prev) =>
        prev.filter((task) => task.id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return { removeTask };
};

export default useDeleteTask;
