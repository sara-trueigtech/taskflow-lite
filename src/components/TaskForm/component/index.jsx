import React from "react";
import { useForm } from "react-hook-form";

const TaskForm = () => {
    const { register, handleSubmit } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          {...register("title", { required: "title is required" })}
        />

        <select {...register("status")}>
          <option value="todo">todo</option>
          <option value="in-progress">in Progress</option>
          <option value="done">done</option>
        </select>

        <select {...register("priority")}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>

        <input type="date" {...register("dueDate", { required: true })} />

        <input
          placeholder="assignee"
          {...register("assignee", { required: true })}
        />

        <button type="submit">
          {selectedTask ? "update task" : "add task"}
        </button>
      </form>
    </>
  );
};

export default TaskForm;
