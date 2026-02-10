import { useState } from "react";
import { debounce } from "../../../common/commonDebounce";
import { useGetTasksQuery } from "../../../store/services/apiSlice";

const useTaskFilters = () => {
  const [filters, setFilters] = useState({ search: "", priority: "all" });

  const debounceSearch = debounce(filters.search, 500, 3);

  const { data: tasks = [], error, isLoading: loading } = useGetTasksQuery();

  const filteredTasks = tasks.filter((task) => {
    const matchSearch = task.title
      ?.toLowerCase()
      .includes(debounceSearch.toLowerCase());
    const matchPriority =
      filters.priority === "all" || task.priority === filters.priority;
    return matchSearch && matchPriority;
  });

  return { filters, setFilters, filteredTasks, loading, error };
};

export default useTaskFilters;
