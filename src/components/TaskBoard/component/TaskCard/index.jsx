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
      className={`flex flex-col justify-between bg-gradient pl-3.5 py-5 mb-3 border border-borderColor3/60 border-2 rounded-3xl shadow-sm cursor-grab active:cursor-grabbing ${selected ? "border border-borderColor" : ""}`}
    >
      <span className="flex">
      <Checkbox field={checkboxField} label="" />
      <h4 className="text-white font-semibold text-[1rem] sm:text-xl  mb-1">{task.title}</h4></span>

      <p className="text-[0.8rem] sm:text-sm font-medium text-white/80">
        Priority: {task.priority}
      </p>
      <p className="text-[0.8rem] sm:text-sm font-medium text-white/80">
        Due Date: {task.dueDate}
      </p>
      <p className="text-[0.8rem] sm:text-sm font-medium text-white/80">
        Assignee: {task.assignee}
      </p>

      <div className="flex gap-2 self-end mr-2.5 mt-3.5">
        <button
          onClick={() => openEdit(task)}
          className="buttonStyle text-white py-1.5 text-[0.9rem] md:text-[1rem] border border-borderColor2 "
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button> 

        <button
          onClick={() => removeTask(task.id)}
          className="buttonStyle text-white py-1.5 text-[0.9rem] md:text-[1rem] border border-borderColor2"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
