import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import FormField from "../../../../../common/commonFormField";
import CommonFormController from "../../../../../common/commonFormController";

const TaskForm = ({
  onSubmit = () => {},
  curTask = null,
  controls = [],
  onCancel = () => {},
}) => {
  const {
    control,
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
    } else {
      reset({
        title: "",
        status: "todo",
        priority: "low",
        dueDate: "",
        assignee: "",
      });
    }
  }, [curTask, reset]);

  const today = new Date().toISOString().split("T")[0];

  const handleFormSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    onSubmit(data);
    reset();
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <>
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
        <CommonFormController controls={controls} control={control} />

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
          {isSubmitting
            ? "Adding Task..."
            : curTask?.id
              ? "Update Task"
              : "Add Task"}
        </button>

        <button
          type="button"
          onClick={handleCancel}
          style={{
            padding: "10px",
            backgroundColor: "#fb4444",
            color: "#ffffff",
            border: "1px solid",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default TaskForm;
