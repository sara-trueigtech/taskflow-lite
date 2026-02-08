import { useState } from "react";

const useBulkActions = ({setTasks}) => {
    const [selected, setSelected] = useState([]);
    
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
        setTasks((prev) => prev.filter((t) => !selected.includes(t.id)));
        setSelected([]);
      };

      return {toggleSelect, bulkChangePriority, bulkDelete, selected, setSelected};
}
export default useBulkActions;