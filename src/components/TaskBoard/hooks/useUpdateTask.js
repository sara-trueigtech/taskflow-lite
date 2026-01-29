import { updateTask } from "../../../services/put";

const useUpdateTask = (setTask) => {
    const editTask = async(task) => {
        const updated = await updateTask(task.id, task);

        setTask((p) => {
            return p.map((t) => (t.id === task.id ? updated : t));
        });
    }

    return {editTask};
}

export default useUpdateTask;