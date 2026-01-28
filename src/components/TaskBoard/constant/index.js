export const TASK_FORM_CONTROLLER = [
  {
    name: "title",
    type: "input",
    isRequired: true,
    style: {
      width: "95%",
      padding: "8px",
    },
  },
  {
    name: "status",
    type: "select",
    isRequired: true,
    options: [
      { label: "todo", value: "todo" },
      { label: "in-progress", value: "in-progress" },
      { label: "done", value: "done" },
    ],
    style: {
      width: "100%",
      padding: "8px",
      backgroundColor: "#f9f9f9",
    },
  },
  {
    name: "priority",
    type: "select",
    isRequired: true,
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
    type: "date",
    isRequired: true,
    style: {
      width: "95%",
      padding: "8px",
    },
  },
  {
    name: "assignee",
    type: "input",
    isRequired: true,
    style: {
      width: "95%",
      padding: "8px",

    },
  },
];
