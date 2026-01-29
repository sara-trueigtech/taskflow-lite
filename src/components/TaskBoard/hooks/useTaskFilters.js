import { useMemo, useState } from "react";

const useTaskFilters = (tasks = []) => {
  const [filters, setFilters] = useState({
    search: "",
    priority: "all",
  });

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchSearch = task.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());

      const matchPriority =
        filters.priority === "all" ||
        task.priority === filters.priority;

      return matchSearch && matchPriority;
    });
  }, [tasks, filters]);

  return {
    filters,
    setFilters,
    filteredTasks,
  };
};

export default useTaskFilters;
