export const TASK_FORM_CONTROLLER = [
  {
    name: "title",
    type: "input",
    inputType: "text",
    isRequired: "Title is required",
    style: {
      width: "95%",
      padding: "8px",
    },
  },
  {
    name: "status",
    type: "select",
    isRequired: "Status is required",
    options: [
      { label: "todo", value: "todo" },
      { label: "in-progress", value: "in-progress" },
      { label: "done", value: "done" },
    ],
    style: {
      width: "100%",
      padding: "8px",
    },
  },
  {
    name: "priority",
    type: "select",
    isRequired: "Priority is required",
    options: [
      { label: "low", value: "low" },
      { label: "medium", value: "medium" },
      { label: "high", value: "high" },
    ],
    style: {
      width: "100%",
      padding: "8px",
    },
  },
  {
    name: "dueDate",
    type: "input",
    inputType: "date",
    isRequired: "Due date is required",
    disablePast: true,
    disableTyping: true, 
    style: {
      width: "95%",
      padding: "8px",
    },
  },
  {
    name: "assignee",
    type: "input",
    inputType: "text",
    isRequired: "Assignee is required",
    style: {
      width: "95%",
      padding: "8px",
    },
  },
];
