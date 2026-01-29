import React, { useState } from "react";
import TaskForm from "./TaskForm/component";
import useTasks from "../hooks/useTasks";
import useUpdateTask from "../hooks/useUpdateTask";
import useCreateTask from "../hooks/useCreateTask";

const TaskBoard = () => {
  const { tasks, setTasks } = useTasks();
  const { editTask } = useUpdateTask(setTasks);
  const { addTask, TASK_FORM_CONTROLLER } = useCreateTask(setTasks);

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
        onDragStart={(e) => e.dataTransfer.setData("taskId", t.id)}
        style={{
          backgroundColor: "#fff",
          padding: "12px",
          marginBottom: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <h4 style={{ margin: "0 0 6px 0", color: "#111827" }}>
          {t.title}
        </h4>

        <p style={{ fontSize: "13px", margin: "2px 0", color: "#374151" }}>
          Priority: <b>{t.priority}</b>
        </p>

        <p style={{ fontSize: "13px", margin: "2px 0", color: "#374151" }}>
          Due: {t.dueDate || "-"}
        </p>

        <p style={{ fontSize: "13px", margin: "2px 0", color: "#374151" }}>
          Assignee: {t.assignee || "-"}
        </p>

        <button
          onClick={() => {
            setCurTask(t);
            setShowForm(true);
          }}
          style={{
            marginTop: "8px",
            background: "#16a34a",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Update
        </button>
      </div>
    ));

  return (
    <div style={{ padding: "20px", background: "#f9fafb", minHeight: "100vh" }}>
      <button
        onClick={() => {
          setCurTask(null);
          setShowForm(true);
        }}
        style={{
          padding: "10px 14px",
          marginBottom: "16px",
          background: "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        + Add Task
      </button>

      {showForm && (
        <TaskForm
        open={showForm}
          onSubmit={handleSubmit}
          curTask={curTask}
          controls={TASK_FORM_CONTROLLER}
          onCancel={handleCancel}
        />
      )}

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {[
          { title: "Todo", status: "todo", list: todoTasks },
          { title: "In Progress", status: "in-progress", list: inProgressTasks },
          { title: "Done", status: "done", list: doneTasks },
        ].map((col) => (
          <div
            key={col.status}
            onDragOver={allowDrop}
            onDrop={(e) => handleDrop(e, col.status)}
            style={{
              flex: 1,
              background: "#eef2ff",
              padding: "12px",
              borderRadius: "10px",
              minHeight: "400px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                marginBottom: "12px",
                color: "#1f2933",
              }}
            >
              {col.title}
            </h3>
            {renderTasks(col.list)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
