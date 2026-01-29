import { createTask } from "../../../services/post";
import { TASK_FORM_CONTROLLER } from "../constant";

const useCreateTask = (setTask) => {
    const addTask = async (task) => {
        const newTask = await createTask(task);
        setTask((p) => [...p, newTask]);
    };
    return {addTask,TASK_FORM_CONTROLLER};
}

export default useCreateTask;