// import { createTask } from "../../../services/post";
import { useCreateTaskMutation } from "../../../store/services/taskApi";
import { TASK_FORM_CONTROLLER } from "../constant";

const useCreateTask = () => {
  const [createTask, { isLoading, error }] = useCreateTaskMutation();

  const addTask = async (task) => {
    try {
      await createTask(task).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    addTask,
    isLoading,
    error,
    TASK_FORM_CONTROLLER,
  };
};

export default useCreateTask;