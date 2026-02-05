import { useEffect, useMemo, useState } from "react";

const useTaskFilters = (tasks = []) => {
  const [filters, setFilters] = useState({
    search: "",
    priority: "all",
  });

  const [debounceSearch, setDebounceSearch] = useState(filters.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(filters.search);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters.search]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchSearch = task.title
        .toLowerCase()
        .includes(debounceSearch.toLowerCase());

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
