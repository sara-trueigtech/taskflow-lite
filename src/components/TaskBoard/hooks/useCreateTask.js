import { createTask } from "../../../../services/api"

const useCreateTask = (setTask) => {
    const addTask = async (task) => {
        const newTask = await createTask(task);
        setTask((p) => [...p, newTask]);
    };
    return {addTask};
}

export default useCreateTask;