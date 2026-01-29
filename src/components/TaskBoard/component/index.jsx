import React from "react";
import useTasks from "../hooks/useTasks";
import useUpdateTask from "../hooks/useUpdateTask";
import useCreateTask from "../hooks/useCreateTask";
import useTaskFilters from "../hooks/useTaskFilters";
import useTaskActions from "../hooks/useTaskAction";
import useTaskDragDrop from "../hooks/useDragDrop";
import TaskSearchFilter from "./TaskSearchFilter";
import TaskForm from "./TaskForm/component";
import useDeleteTask from "../hooks/useDelete";

const TaskBoard = () => {
  const { tasks, setTasks } = useTasks();
  const { editTask } = useUpdateTask(setTasks);
  const { addTask, TASK_FORM_CONTROLLER } = useCreateTask(setTasks);
  const { removeTask } = useDeleteTask(setTasks);

  const { filteredTasks, setFilters } = useTaskFilters(tasks);

  const {
    curTask,
    showForm,
    submitTask,
    cancelTask,
    openCreate,
    openEdit,
  } = useTaskActions({ addTask, editTask });

  const { allowDrop, handleDrop } = useTaskDragDrop({
    tasks,
    editTask,
  });

  const columns = [
    { title: "Todo", status: "todo" },
    { title: "In Progress", status: "in-progress" },
    { title: "Done", status: "done" },
  ];

  const renderTasks = (list) =>
    list.map((t) => (
      <div
        key={t.id}
        draggable
        onDragStart={(e) =>
          e.dataTransfer.setData("taskId", t.id)
        }
        style={{
          backgroundColor: "#fff",
          padding: "12px",
          marginBottom: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <h4 style={{ margin: "0 0 6px", color: "#111827" }}>
          {t.title}
        </h4>

        <p style={{ fontSize: "13px", margin: "2px 0" }}>
          Priority: <b>{t.priority}</b>
        </p>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>
          Due Date: <b>{t.dueDate}</b>
        </p>
        <p style={{ fontSize: "13px", margin: "2px 0" }}>
          Assignee: <b>{t.assignee}</b>
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "80px",
          gap:"10px"
        }}>
        <button
          onClick={() => openEdit(t)}
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
        <button
        onClick={() => removeTask(t.id)}
         style={{
          background: "#f32f2f",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
        }}>
          Delete
        </button>
        </div>
      </div>
    ));

  return (
    <div
      style={{
        padding: "20px",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <button
        onClick={openCreate}
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

      <TaskSearchFilter onChange={setFilters} />

      {showForm && (
        <TaskForm
          open={showForm}
          curTask={curTask}
          controls={TASK_FORM_CONTROLLER}
          onSubmit={submitTask}
          onCancel={cancelTask}
        />
      )}

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {columns.map((col) => (
          <div
            key={col.status}
            onDragOver={allowDrop}
            onDrop={(e) =>
              handleDrop(e, col.status)
            }
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

            {renderTasks(
              filteredTasks.filter(
                (t) => t.status === col.status
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
