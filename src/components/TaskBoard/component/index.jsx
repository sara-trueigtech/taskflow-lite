import React from 'react'
import TaskForm from './TaskForm/component'
import useTasks from '../hooks/useTasks'

const TaskBoard = () => {
  const {tasks, setTasks} = useTasks();

  return (
    <>
    <TaskForm/>

    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <h3>{t.title}</h3>
          <p>status: {t.status}</p>
          <p>priority: {t.priority}</p>
          <p>due date: {t.dueDate}</p>
          <p>assignee: {t.assignee}</p>

          <button>update</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default TaskBoard