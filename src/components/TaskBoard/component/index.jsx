import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import useUpdateTask from "../hooks/useUpdateTask";
import useCreateTask from "../hooks/useCreateTask";
import useTaskFilters from "../hooks/useTaskFilters";
import useTaskActions from "../hooks/useTaskAction";
import useTaskDragDrop from "../hooks/useDragDrop";
import useDeleteTask from "../hooks/useDelete";
import TaskSearchFilter from "./TaskSearchFilter";
import TaskForm from "./TaskForm/component";
import { AuthContext } from "../../../context/AuthContext";
import Logout from "../../Logout/component";

const TaskBoard = () => {

  const { tasks, setTasks } = useTasks();
  const { editTask } = useUpdateTask(setTasks);
  const { addTask, TASK_FORM_CONTROLLER } = useCreateTask(setTasks);
  const { removeTask } = useDeleteTask(setTasks);
  const { showLogout, setShowLogout } = useContext(AuthContext);

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
        onDragStart={(e) => e.dataTransfer.setData("taskId", t.id)}
        className="bg-bgColor3 p-3 mb-3 rounded-lg shadow-sm cursor-grab active:cursor-grabbing"
      >
        <h4 className="text-white font-bold text-xl mb-1">
          {t.title}
        </h4>

        <p className="text-sm text-white">
          Priority: <b>{t.priority}</b>
        </p>
        <p className="text-sm text-white">
          Due Date: <b>{t.dueDate}</b>
        </p>
        <p className="text-sm text-white">
          Assignee: <b>{t.assignee}</b>
        </p>

        <div className="flex flex-col gap-2 mt-3 w-24">
          <button
            onClick={() => openEdit(t)}
            className="buttonStyle w-30 h-12 text-white py-1.5 text-[1.12rem] border border-borderColor2"
          >
            Update
          </button>

          <button
            onClick={() => removeTask(t.id)}
            className="buttonStyle w-30 h-12 text-white py-1.5 text-[1.12rem] border border-borderColor2"
          >
            Delete
          </button>
        </div>
      </div>
    ));

  return (
    <div className="p-5 bg-bgColor min-h-screen">
      <button
        onClick={openCreate}
        className="mb-4 px-4 py-2 buttonStyle border border-borderColor2 text-white rounded-md font-medium"
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

      {showLogout && (
        <Logout open={showLogout}
        onClose={() => setShowLogout(false)
        }/>
      )}

      <div className="flex gap-4 mt-6">
        {columns.map((col) => (
          <div
            key={col.status}
            onDragOver={allowDrop}
            onDrop={(e) => handleDrop(e, col.status)}
            className="flex-1 bg-bgColor4 p-4 rounded-xl min-h-[400px]"
          >
            <h3 className="text-center text-2xl font-bold text-gray-800 mb-3">
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
