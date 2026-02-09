import { useRef, useState } from "react";
import { deleteTask } from "../../../services/delete";
import showToast from "../../../common/commonToaster";

const useBulkActions = ({ setTasks }) => {
  const [selected, setSelected] = useState([]);
  const undoRef = useRef(null);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };

  const bulkChangePriority = (priority) => {
    setTasks((prev) =>
      prev.map((t) => (selected.includes(t.id) ? { ...t, priority } : t))
    );
    setSelected([]);
  };

  const bulkDelete = () => {
    let deletedTasks = [];

    setTasks((prev) => {
      deletedTasks = prev.filter((t) => selected.includes(t.id));
      return prev.filter((t) => !selected.includes(t.id));
    });

    showToast({
      message: `${selected.length} tasks deleted`,

      onUndo: () => {
        setTasks((prev) => [...prev, ...deletedTasks]);
      },

      onConfirm: async () => {
        try {
          await Promise.all(
            deletedTasks.map((task) => deleteTask(task.id))
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
