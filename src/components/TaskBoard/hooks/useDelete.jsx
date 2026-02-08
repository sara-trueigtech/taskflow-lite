import { deleteTask } from "../../../services/delete";
import toast from "react-hot-toast";
import { useRef } from "react";

const useDeleteTask = (setTasks) => {
  const undoRef = useRef(null);

  const removeTask = async (id) => {
    let deletedTask = null;

    setTasks((prev) => {
      deletedTask = prev.find((t) => t.id === id);
      return prev.filter((t) => t.id !== id);
    });

    toast(
      (t) => (
        <span>
          Task deleted
          <button
            onClick={() => {
              if (deletedTask) {
                setTasks((prev) => [...prev, deletedTask]);
              }
              toast.dismiss(t.id);
              clearTimeout(undoRef.current);
            }}
            className="ml-2 text-borderColor"
          >
            undo
          </button>
        </span>
      ),
      { duration: 5000 }
    );

    undoRef.current = setTimeout(async () => {
      try {
        await deleteTask(id);
      } catch (err) {
        console.error(err);
      }
    }, 5000);
  };

  return { removeTask };
};

export default useDeleteTask;
