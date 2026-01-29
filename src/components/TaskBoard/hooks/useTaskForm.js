import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const useTaskForm = ({ curTask, onSubmit, onCancel, open }) => {
  const dialogRef = useRef(null);

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

  useEffect(() => {
    if (!dialogRef.current) return;

    open ? dialogRef.current.showModal() : dialogRef.current.close();
  }, [open]);

  const submitHandler = async (data) => {
    await new Promise((r) => setTimeout(r, 1500));
    onSubmit(data);
    reset();
  };

  const cancelHandler = () => {
    reset();
    dialogRef.current.close();
    onCancel();
  };

  return {
    dialogRef,
    control,
    handleSubmit: handleSubmit(submitHandler),
    cancelHandler,
    isSubmitting,
  };
};

export default useTaskForm;
