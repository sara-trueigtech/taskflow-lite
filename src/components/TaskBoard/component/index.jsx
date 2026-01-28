import React, { useState } from "react";
import TaskForm from "./TaskForm/component";
import useTasks from "../hooks/useTasks";
import useUpdateTask from "../hooks/useUpdateTask";
import useCreateTask from "../hooks/useCreateTask";

const TaskBoard = () => {
  const { tasks, setTasks } = useTasks();
  const { editTask } = useUpdateTask(setTasks);
  const { addTask,TASK_FORM_CONTROLLER } = useCreateTask(setTasks);

  const [curTask, setCurTask] = useState(null);

  const handleSubmit = (data) => {
    if (curTask) {
      editTask({ ...curTask, ...data });
      setCurTask(null);
    } else {
      addTask(data);
    }
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();

    const taskId = e.dataTransfer.getData("taskId");
    const taskToUpdate = tasks.find((t) => t.id == taskId);

    if (!taskToUpdate || taskToUpdate.status === newStatus) return;

    editTask({
      ...taskToUpdate,
      status: newStatus,
    });
  };

  const allowDrop = (e) => e.preventDefault();

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "in-progress");
  const doneTasks = tasks.filter((t) => t.status === "done");

  const renderTasks = (taskList) =>
    taskList.map((t) => (
      <div
        key={t.id}
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData("taskId", t.id);
        }}
        style={{
          backgroundColor: "#fff",
          padding: "12px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid",
        }}
      >
        <h4 style={{ margin: "0 0 5px 0" }}>{t.title}</h4>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>
          Priority: {t.priority}
        </p>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>Due: {t.dueDate}</p>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>
          Assignee: {t.assignee}
        </p>

        <button
          onClick={() => setCurTask(t)}
          style={{
            marginTop: "8px",
            padding: "4px 8px",
            fontSize: "12px",
            cursor: "pointer",
            background: "green",
            color: "white",
          }}
        >
          Update
        </button>
      </div>
    ));

  return (
    <>
      <TaskForm onSubmit={handleSubmit} curTask={curTask} controls={TASK_FORM_CONTROLLER}/>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <div
          style={{ flex: 1 }}
          onDragOver={allowDrop}
          onDrop={(e) => handleDrop(e, "todo")}
        >
          <h3>Todo</h3>
          {renderTasks(todoTasks)}
        </div>

        <div
          style={{ flex: 1 }}
          onDragOver={allowDrop}
          onDrop={(e) => handleDrop(e, "in-progress")}
        >
          <h3>In Progress</h3>
          {renderTasks(inProgressTasks)}
        </div>

        <div
          style={{ flex: 1 }}
          onDragOver={allowDrop}
          onDrop={(e) => handleDrop(e, "done")}
        >
          <h3>Done</h3>
          {renderTasks(doneTasks)}
        </div>
      </div>
    </>
  );
};

export default TaskBoard;
