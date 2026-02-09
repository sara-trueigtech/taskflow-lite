import showToast from "../../../common/commonToaster";
import { deleteTask } from "../../../services/delete";
import { useRef } from "react";

const useDeleteTask = (setTasks) => {
  const undoRef = useRef(null);

  const removeTask = (id) => {
    let deletedTask = null;

    setTasks((prev) => {
      deletedTask = prev.find((t) => t.id === id);
      return prev.filter((t) => t.id !== id);
    });

    showToast({
      message: "Task deleted",

      onUndo: () => {
        if (deletedTask) {
          setTasks((prev) => [...prev, deletedTask]);
        }
      },

      onConfirm: async () => {
        try {
          await deleteTask(id);
        } catch (err) {
          console.error(err);
        }
      },

      undoRef,
    });
  };

  return { removeTask };
};

export default useDeleteTask;
