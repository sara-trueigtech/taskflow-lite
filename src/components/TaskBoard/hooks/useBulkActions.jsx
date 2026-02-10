import { useRef, useState } from "react";
import showToast from "../../../common/commonToaster";
import {
  tasksApi,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "../../../store/services/taskApi";
import { useDispatch } from "react-redux";

const useBulkActions = () => {
  const [selected, setSelected] = useState([]);
  const undoRef = useRef(null);
  const dispatch = useDispatch();

  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id],
    );
  };

  const bulkChangePriority = (priority) => {
    selected.forEach((id) => {
      const patchResult = dispatch(
        tasksApi.util.updateQueryData("getTasks", undefined, (draft) => {
          const task = draft.find((t) => t.id === id);
          if (task) task.priority = priority; 
        }),
      );

      updateTask({ id, priority })
        .unwrap(); 
    });

    setSelected([]);
  };

  const bulkDelete = () => {
    let deletedTasks = [];

    const patchResult = dispatch(
      tasksApi.util.updateQueryData("getTasks", undefined, (draft) => {
        deletedTasks = draft.filter((t) => selected.includes(t.id));
        deletedTasks.forEach((t) => {
          const index = draft.findIndex((task) => task.id === t.id);
          if (index !== -1) draft.splice(index, 1);
        });
      }),
    );

    showToast({
      message: `${selected.length} tasks deleted`,
      onUndo: () => patchResult?.undo?.(),
      onConfirm: async () => {
        try {
          await Promise.all(
            deletedTasks.map((task) => deleteTask(task.id).unwrap()),
          );
        } catch (err) {
          console.error(err);
        }
      },
      undoRef,
    });

    setSelected([]);
  };

  return {
    toggleSelect,
    bulkChangePriority,
    bulkDelete,
    selected,
    setSelected,
  };
};

export default useBulkActions;
