export const TASK_FORM_CONTROLLER = [
  {
    name: "title",
    type: "input",
    inputType: "text",
    placeholder: "Task title",
    isRequired: "Title is required",
    style: {
      width: "94%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
    },
  },
  {
    name: "status",
    type: "select",
    isRequired: "Status is required",
    options: [
      { label: "Todo", value: "todo" },
      { label: "In Progress", value: "in-progress" },
      { label: "Done", value: "done" },
    ],
    style: {
      width: "99%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
    },
  },
  {
    name: "priority",
    type: "select",
    isRequired: "Priority is required",
    options: [
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" },
    ],
    style: {
      width: "99%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
    },
  },
  {
    name: "dueDate",
    type: "input",
    inputType: "date",
    placeholder: "Due date",
    isRequired: "Due date is required",
    disablePast: true,
    disableTyping: true,
    style: {
      width: "94%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
    },
  },
  {
    name: "assignee",
    type: "input",
    inputType: "text",
    placeholder: "Assignee name",
    isRequired: "Assignee is required",
    style: {
      width: "94%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
    },
  },
];


export const SEARCH_FILTER_CONTROLLER = [
  {
    name: "search",
    type: "input",
    inputType: "text",
    placeholder: "Search tasks...",
    style: {
      flex: 1,
      padding: "8px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
    },
  },
  {
    name: "priority",
    type: "select",
    options: [
      { label: "All", value: "all" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" },
    ],
    style: {
      padding: "8px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
      minWidth: "120px",
    },
  },
];
