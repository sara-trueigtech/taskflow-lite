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
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (data) => {
    if (!data) return;
    if (curTask) {
      editTask({ ...curTask, ...data });
    } else {
      addTask(data);
    }
    setCurTask(null);
    setShowForm(false);
  };
  
  const handleCancel = () => {
    setCurTask(null);
    setShowForm(false);
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
          onClick={() => {
            setCurTask(t);
            setShowForm(true);
          }}
          style={{
            marginTop: "6px",
            background: "green",
            color: "#fff",
            border: "none",
            padding: "4px 8px",
            cursor: "pointer",
          }}
        >
          Update
        </button>
      </div>
    ));

  return (
    <>
      <button
        onClick={() => {
          setCurTask(null);
          setShowForm(true);
        }}
        style={{
          padding: "8px 12px",
          marginBottom: "10px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        + Add Task
      </button>

      {showForm && (
        <TaskForm
          onSubmit={handleSubmit}
          curTask={curTask}
          controls={TASK_FORM_CONTROLLER}
          onCancel={handleCancel}
        />
      )}

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
