import { useEffect, useMemo, useState } from "react";
import { debounce } from "../../../common/commonDebounce";

const useTaskFilters = (tasks = []) => {
  const [filters, setFilters] = useState({
    search: "",
    priority: "all",
  });
  
  const debounceSearch = debounce(filters?.search, 500, 3);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchSearch = task.title?.toLowerCase()?.includes(debounceSearch?.toLowerCase());

      const matchPriority =
        filters.priority === "all" ||
        task.priority === filters.priority;

      return matchSearch && matchPriority;
    });
  }, [tasks, debounceSearch, filters.priority]);

  return {
    filters,
    setFilters,
    filteredTasks,
  };
};

export default useTaskFilters;
