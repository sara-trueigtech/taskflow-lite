import { useEffect, useState } from "react"
import { getTasks } from "../../../services/get";


const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(setTasks);
    }, []);

    return {tasks, setTasks};
};

export default useTasks;