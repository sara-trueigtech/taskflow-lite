import React, { useContext, useState } from "react";
import { useOutletContext } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import useUpdateTask from "../hooks/useUpdateTask";
import useCreateTask from "../hooks/useCreateTask";
import useTaskFilters from "../hooks/useTaskFilters";
import useTaskActions from "../hooks/useTaskAction";
import useTaskDragDrop from "../hooks/useDragDrop";
import useDeleteTask from "../hooks/useDelete.jsx";
import TaskSearchFilter from "./TaskSearchFilter";
import TaskForm from "./TaskForm/component";
import { AuthContext } from "../../../context/AuthContext";
import Logout from "../../Logout/component";
import TaskCard from "./TaskCard";
import useBulkActions from "../hooks/useBulkActions";

const TaskBoard = () => {
  const { tasks, setTasks } = useTasks();
  const { editTask } = useUpdateTask(setTasks);
  const { addTask, TASK_FORM_CONTROLLER } = useCreateTask(setTasks);
  const { removeTask } = useDeleteTask(setTasks);
  const { showLogout, setShowLogout } = useContext(AuthContext);

  const { filteredTasks, setFilters } = useTaskFilters(tasks);

  const { curTask, showForm, submitTask, cancelTask, openCreate, openEdit } =
    useTaskActions({ addTask, editTask });

  const { allowDrop, handleDrop } = useTaskDragDrop({
    tasks,
    editTask,
  });

  const {toggleSelect, bulkChangePriority, bulkDelete, selected} = useBulkActions({setTasks});

  const columns = [
    { title: "Todo", status: "todo" },
    { title: "In Progress", status: "in-progress" },
    { title: "Done", status: "done" },
  ];

  const renderTasks = (list) =>
    list.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        openEdit={openEdit}
        removeTask={removeTask}
        selected={selected?.includes(task.id)}
        toggleSelect={toggleSelect}
      />
    ));

  return (
    <div className="p-5 bg-bgColor min-h-screen">
      <div className="flex gap-2 mb-4 flex-wrap text-white">
        <button
          disabled={!selected?.length}
          onClick={() => bulkChangePriority("low")}
          className="roundButtonStyle"
        >
          low
        </button>
        <button
          disabled={!selected?.length}
          onClick={() => bulkChangePriority("medium")}
          className="roundButtonStyle"
        >
          Medium
        </button>
        <button
          disabled={!selected?.length}
          onClick={() => bulkChangePriority("high")}
          className="roundButtonStyle"
        >
          High
        </button>
        <button
          disabled={!selected?.length}
          onClick={bulkDelete}
          className="roundButtonStyle"
        >
          Delete the selected
        </button>
      </div>
      <button
        onClick={openCreate}
        className="mb-4 px-4 py-2 buttonStyle border border-borderColor2 text-white rounded-md font-medium flex items-center justify-center"
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
        <Logout open={showLogout} onClose={() => setShowLogout(false)} />
      )}

      <div className="flex flex-col sm:flex-row gap-10 mt-6">
        {columns.map((col) => (
          <div
            key={col.status}
            onDragOver={allowDrop}
            onDrop={(e) => handleDrop(e, col.status)}
            className="flex-1 bg-bgColor4 p-4 rounded-xl h-full"
          >
            <h3 className="text-center text-2xl font-bold text-gray-800 mb-3">
              {col.title}
            </h3>

            {renderTasks(filteredTasks.filter((t) => t.status === col.status))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
