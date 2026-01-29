import React from "react";
import CommonFormController from "../../../../../common/commonFormController";
import useTaskForm from "../../../hooks/useTaskForm";

const TaskForm = ({
  onSubmit,
  curTask,
  controls,
  onCancel,
  open,
}) => {
  const {
    dialogRef,
    control,
    handleSubmit,
    cancelHandler,
    isSubmitting,
  } = useTaskForm({ curTask, onSubmit, onCancel, open });

  return (
    <dialog
      ref={dialogRef}
      onCancel={cancelHandler}
      style={{ border: "none", borderRadius: "10px" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "420px",
          padding: "24px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          {curTask ? "Update Task" : "Add New Task"}
        </h3>

        <CommonFormController controls={controls} control={control} />

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: "#2563eb",
              color: "#fff",
              borderRadius: "6px",
              border: "none",
            }}
          >
            {isSubmitting ? "Saving..." : curTask ? "Update Task" : "Add Task"}
          </button>

          <button
            type="button"
            onClick={cancelHandler}
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: "#fef2f2",
              color: "#dc2626",
              border: "1px solid #dc2626",
              borderRadius: "6px",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default TaskForm;
