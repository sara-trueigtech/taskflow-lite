import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import CommonFormController from "../../../../../common/commonFormController";

const TaskForm = ({
  onSubmit = () => {},
  curTask = null,
  controls = [],
  onCancel = () => {},
  open = false
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
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

  const dialogRef = useRef(null);

   useEffect(() => {
    if (!dialogRef.current) return;

    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  // const handleClose = () => {
  //   reset();
  //   dialogRef.current.close();
  //   onCancel();
  // };


  const handleFormSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onSubmit(data);
    reset();
  };

  const handleCancel = () => {
    reset();
    dialogRef.current.close();
    onCancel();
  };

  return (
  //   <div
  //   style={{
  //     position: "fixed",
  //     inset: 0,
  //     backgroundColor: "rgba(0, 0, 0, 0.4)", 
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     zIndex: 1000,
  //   }}
  // >

  <dialog ref={dialogRef}
      onCancel={handleCancel}
      style={{
        border: "none",
        borderRadius: "10px",
        
      }}>
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      style={{
        width: "420px",
        padding: "24px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        {curTask ? "Update Task" : "Add New Task"}
      </h3>

      <CommonFormController controls={controls} control={control} />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: isSubmitting ? "#93c5fd" : "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          {isSubmitting
            ? "Saving..."
            : curTask
            ? "Update Task"
            : "Add Task"}
        </button>

        <button
          type="button"
          onClick={handleCancel}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "#fef2f2",
            color: "#dc2626",
            border: "1px solid #dc2626",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Cancel
        </button>
      </div>
    </form>
    
    {/* </div> */}
    </dialog>
  );
};

export default TaskForm;
