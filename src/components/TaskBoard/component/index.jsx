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

  const [openCols, setOpenCols] = useState({
    todo: true,
    "in-progress": false,
    done: false,
  });

  const toggleCol = (status) => {
    setOpenCols((prev) => ({
      ...prev,
      [status]: !prev[status],
    }));
  };

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
      <div className="bg-bgColor min-h-screen flex flex-col justify-center p-16">
        {!online && <ErrorBox message="You are offline" onRetry={retry} />}

        {online && error && (
          <ErrorBox message="Failed to load tasks" onRetry={retry} />
        )}

        <button
          onClick={openCreate}
          className="mb-4 md:py-2 py-2 buttonStyle border border-borderColor2 text-white rounded-md font-medium flex justify-center self-center md:self-start"
        >
          Add Task
        </button>

        <TaskSearchFilter onChange={setFilters} />

        <div className="flex items-center justify-center tablet:self-start gap-2 mt-4">
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

        <div className="flex flex-col tablet:flex-row gap-10 mt-6">
          {columns.map((col) => {
            const columnTasks = filteredTasks.filter(
              (t) => t.status === col.status,
            );

            return (
              <div
                key={col.status}
                onDragOver={allowDrop}
                onDrop={(e) => handleDrop(e, col.status)}
                className="flex-1 bg-bgColor5 p-4 rounded-3xl h-full p-8"
              >
                <button
                  onClick={() => toggleCol(col.status)}
                  className="w-full text-center text-xl md:text-2xl xl:text-3xl border-4 border-gradient rounded-3xl font-medium text-white px-6 md:px-10 xl:px-20 py-4 md:py-5 mb-6 flex items-center justify-center gap-2"
                >
                  {col.title}
                  <span className="tablet:hidden">
                    {openCols[col.status] ? "▲" : "▼"}
                  </span>
                </button>

                <div
                  className={`${openCols[col.status] ? "block" : "hidden"} tablet:block`}
                >
                  {loading && columnTasks.length === 0 ? (
                    <TaskColumnSkeleton />
                  ) : columnTasks.length === 0 ? (
                    <p className="text-center text-gray-400">No tasks</p>
                  ) : (
                    renderTasks(columnTasks)
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskBoard;
