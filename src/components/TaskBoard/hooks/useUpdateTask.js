import { updateTask } from "../../services/api"

const useUpdateTask = (setTask) => {
    const editTask = async(task) => {
        const updated = await await updateTask(task.id, task);

        setTask((p) => {
            p.map((t) => (t.id === task.id ? updated : t));
        });
    }

    return {editTask};
}

export default useUpdateTask;