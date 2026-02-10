import React from "react";
import CommonFormController from "../../../../../common/commonFormController";
import useTaskForm from "../../../hooks/useTaskForm";

const TaskForm = ({ onSubmit, curTask, controls, onCancel, open}) => {
  const { dialogRef, control, handleSubmit, cancelHandler, isSubmitting } =
    useTaskForm({ curTask, onSubmit, onCancel, open });

  return (
    <dialog
      ref={dialogRef}
      onCancel={cancelHandler}
      onClick={(e) => {
        if(e.target === dialogRef.current){
          onCancel();
        }
      }}
      className="backdrop:bg-black/60 rounded-xl p-0 m-auto "
    >
      <div className="w-[95vw] max-w-[40rem] overflow-hidden bg-bgColor flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="md:p-[3rem] p-[2rem] rounded-xl w-full flex flex-col"
      >
        <h3 className="text-center text-2xl font-bold text-white">
          {curTask ? "Update Task" : "Add New Task"}
        </h3>

        <div className="flex flex-col gap-3">
          <CommonFormController controls={controls} control={control} />
        </div>

        <div className="flex gap-2.5 items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="roundButtonStyle text-white mt-10"
          >
            {isSubmitting ? "Saving..." : curTask ? "Update Task" : "Add Task"}
          </button>

          <button
            type="button"
            onClick={cancelHandler}
            className="roundButtonStyle mt-10"
          >
            Cancel
          </button>
        </div>
      </form>
      </div>
    </dialog>
  );
};

export default TaskForm;
