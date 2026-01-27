import React, { useState } from 'react'
import TaskForm from './TaskForm/component'
import useTasks from '../hooks/useTasks'
import useUpdateTask from '../hooks/useUpdateTask';
import useCreateTask from '../hooks/useCreateTask';

const TaskBoard = () => {
  const {tasks, setTasks} = useTasks();
  const {editTask} = useUpdateTask(setTasks);
  const {addTask} = useCreateTask(setTasks);

  const [curTask, setCurTask] = useState(null);

  const handleSubmit = (data) => {
    if(curTask){
      editTask({...curTask, ...data});
      setCurTask(null);
    }
    else{
      addTask(data);
    }
  }
  

  return (
    <>
    <TaskForm onSubmit={handleSubmit} curTask={curTask}/>

    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <h3>{t.title}</h3>
          <p>status: {t.status}</p>
          <p>priority: {t.priority}</p>
          <p>due date: {t.dueDate}</p>
          <p>assignee: {t.assignee}</p>

          <button onClick={() => setCurTask(t)}>update</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default TaskBoard