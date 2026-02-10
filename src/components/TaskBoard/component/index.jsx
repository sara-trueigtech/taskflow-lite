import React, { useContext, useState } from "react";
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
import TaskCard from "./TaskCard";
import useBulkActions from "../hooks/useBulkActions.jsx";
import useOnlineStatus from "../../Network/hooks/useOnlineStatus.js";
import OfflineBanner from "../../Network/components/OfflineBanner/index.jsx";
import ErrorBox from "../../Network/components/ErrorBox/index.jsx";
import TaskColumnSkeleton from "./TaskColumnSkeleton/index.jsx";

const TaskBoard = () => {
  const { tasks, error, retry, loading } = useTasks();
  const { editTask } = useUpdateTask();
  const { addTask, TASK_FORM_CONTROLLER } = useCreateTask();
  const { removeTask } = useDeleteTask();
  const { showLogout, setShowLogout } = useContext(AuthContext);

  const { filteredTasks, setFilters } = useTaskFilters();

  const { curTask, showForm, submitTask, cancelTask, openCreate, openEdit } =
    useTaskActions({ addTask, editTask });

  const { allowDrop, handleDrop } = useTaskDragDrop({
    tasks,
    editTask,
  });

  const { toggleSelect, bulkChangePriority, bulkDelete, selected } =
    useBulkActions({});

  const online = useOnlineStatus();

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
    <>
      <div className="p-5 bg-bgColor min-h-screen">
        {/* {!online && <OfflineBanner />} */}

        {!online && <ErrorBox message="You are offline" onRetry={retry} />}

        {online && error && (
          <ErrorBox message="Failed to load tasks" onRetry={retry} />
        )}

        {/* {loading && <p className="text-white mb-4">Loading tasks...</p>} */}

        <button
          onClick={openCreate}
          className="mb-4 px-4 py-2 buttonStyle border border-borderColor2 text-white rounded-md font-medium flex items-center justify-center"
        >
          + Add Task
        </button>

        <TaskSearchFilter onChange={setFilters} />

        <div className="flex gap-2 mt-4 flex-wrap text-white">
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
          {columns.map((col) => {
            const columnTasks = filteredTasks.filter(
              (t) => t.status === col.status,
            );

            return (
              <div
                key={col.status}
                onDragOver={allowDrop}
                onDrop={(e) => handleDrop(e, col.status)}
                className="flex-1 bg-bgColor4 p-4 rounded-xl h-full"
              >
                <h3 className="text-center text-2xl font-bold text-gray-800 mb-3">
                  {col.title}
                </h3>

                {loading && columnTasks.length === 0 ? (
                  <TaskColumnSkeleton />
                ) : columnTasks.length === 0 ? (
                  <p className="text-center text-gray-400">No tasks</p>
                ) : (
                  renderTasks(columnTasks)
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskBoard;
