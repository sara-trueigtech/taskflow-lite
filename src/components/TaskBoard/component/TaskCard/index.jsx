import Checkbox from "../../../../common/commonCheckbox";

const TaskCard = ({ task, openEdit, removeTask, selected, toggleSelect }) => {
    const checkboxField = {
    value: selected,
    onChange: () => toggleSelect(task.id),
  }

  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)}
      className={`bg-bgColor3 p-3 mb-3 rounded-lg shadow-sm cursor-grab active:cursor-grabbing ${selected ? "border border-borderColor" : ""}`}
    >
      <Checkbox field={checkboxField} label="" />
      <h4 className="text-white font-bold text-xl mb-1">{task.title}</h4>

      <p className="text-sm text-white">
        Priority: <b>{task.priority}</b>
      </p>
      <p className="text-sm text-white">
        Due Date: <b>{task.dueDate}</b>
      </p>
      <p className="text-sm text-white">
        Assignee: <b>{task.assignee}</b>
      </p>

      <div className="flex flex-col gap-2 mt-3 w-24">
        <button
          onClick={() => openEdit(task)}
          className="buttonStyle text-white py-1.5 text-[0.9rem] md:text-[1.12rem] border border-borderColor2"
        >
          Update
        </button>

        <button
          onClick={() => removeTask(task.id)}
          className="buttonStyle text-white py-1.5 text-[0.9rem] md:text-[1.12rem] border border-borderColor2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
