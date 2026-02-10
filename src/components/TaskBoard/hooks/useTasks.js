// import { useEffect, useState } from "react";
// import { getTasks } from "../../../services/get";

// const useTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const loadTasks = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       if (!navigator.onLine) {
//         throw new Error("offline");
//       }

//       const data = await getTasks();
//       setTasks(data);
//     } catch (err) {
//       setError(err.message || "failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   return { tasks, setTasks, error, retry: loadTasks, loading };
// };

// export default useTasks;

import {useGetTasksQuery} from "../../../store/services/apiSlice"

const useTasks = () => {
  const {
    data: tasks = [],
    error,
    isLoading,
    isFetching,
    refetch,
  } = useGetTasksQuery();

  return {
    tasks,
    error: error ? "failed" : null,
    loading: isLoading || isFetching,
    retry: refetch,
  };
};

export default useTasks;
