import { useUpdateTaskMutation } from "../../../store/services/apiSlice";

const useUpdateTask = () => {
  const [updateTask, { isLoading, error }] = useUpdateTaskMutation();

  const editTask = async (task) => {
    try {
      await updateTask(task).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    editTask,
    isLoading,
    error,
  };
};

export default useUpdateTask;