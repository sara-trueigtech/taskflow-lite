import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const TaskForm = ({onSubmit, curTask}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if(curTask){
      reset(curTask);
    }
    else{
      reset({
        titlle: "",
        status: "todo",
        priority: "low",
        dueDate: "",
        assignee: ""
      })
    }
  }, [curTask, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        {...register("title", { required: "title is required" })}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <select
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
        type="date"
        {...register("dueDate", { required: true })}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <input
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
        style={{
          padding: "10px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
