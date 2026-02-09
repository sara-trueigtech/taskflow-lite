import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { deleteTask } from "../../../services/delete";

const useBulkActions = ({ setTasks }) => {
  const [selected, setSelected] = useState([]);
  const undoRef = useRef(null);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id],
    );
  };

  const bulkChangePriority = (priority) => {
    setTasks((prev) =>
      prev.map((t) => (selected.includes(t.id) ? { ...t, priority } : t)),
    );
    setSelected([]);
  };

  const bulkDelete = () => {
    let deletedTasks = [];

    setTasks((prev) => {
      deletedTasks = prev.filter((t) => selected.includes(t.id));
      return prev.filter((t) => !selected.includes(t.id));
    });

    toast(
      (t) => (
        <span>
          {deletedTasks.length} tasks deleted
          <button
            onClick={() => {
              setTasks((prev) => [...prev, ...deletedTasks]);
              toast.dismiss(t.id);
              clearTimeout(undoRef.current);
            }}
            className="ml-2 text-borderColor"
          >
            undo
          </button>
        </span>
      ),
      { duration: 5000 },
    );

    undoRef.current = setTimeout(async () => {
      try {
        await Promise.all(deletedTasks.map((task) => deleteTask(task.id)));
      } catch (err) {
        console.error(err);
      }
    }, 5000);

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
