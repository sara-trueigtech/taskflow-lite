import showToast from "../../../common/commonToaster";
// import { deleteTask } from "../../../services/delete";
import { useRef } from "react";
import { apiSlice, useDeleteTaskMutation } from "../../../store/services/apiSlice";
import { useDispatch } from "react-redux";

const useDeleteTask = () => {
  const [deleteTask] = useDeleteTaskMutation();
  const undoRef = useRef(null);
   const dispatch = useDispatch();

  const removeTask = (id) => {
    let deletedTask = null;

    // setTasks((prev) => {
    //   deletedTask = prev.find((t) => t.id === id);
    //   return prev.filter((t) => t.id !== id);
    // });

    const cacheResult = dispatch( apiSlice.util.updateQueryData(
      "getTasks",
      undefined,
      (cache) => {
        const i = cache.findIndex((t) => t.id === id);
        if(i !== -1) {
          deletedTask = cache[i];
          cache.splice(i, 1);
        }
      }
    ))

    showToast({
      message: "Task deleted",

      onUndo: () => {
        if (deletedTask) {
          cacheResult.undo();
        }
      },

      onConfirm: async () => {
        try {
          await deleteTask(id).unwrap();
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
