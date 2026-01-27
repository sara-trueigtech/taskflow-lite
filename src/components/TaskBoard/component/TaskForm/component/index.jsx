import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const TaskForm = ({ onSubmit = () => {}, curTask = [] }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      status: "todo",
      priority: "low",
      dueDate: "",
      assignee: "",
    },
  });

  useEffect(() => {
    if (curTask) {
      reset(curTask);
    } 
  }, [curTask, reset]);

  const today = new Date().toISOString().split("T")[0];

  const handleFormSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    onSubmit(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        backgroundColor: "#fafafa",
      }}
    >
      <input
        placeholder="Title"
        disabled={isSubmitting}
        {...register("title", { required: "title is required" })}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <select
      disabled={isSubmitting}
        {...register("status")}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <select
      disabled={isSubmitting}
        {...register("priority")}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
      disabled={isSubmitting}
        type="date"
        min={today}
        {...register("dueDate", {
          required: true,
          validate: (val) => val >= today,
        })}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <input
      disabled={isSubmitting}
        placeholder="Assignee"
        {...register("assignee", { required: true })}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          padding: "10px",
          backgroundColor: isSubmitting ? "#90caf9" : "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {isSubmitting ? "Adding Task..." : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
