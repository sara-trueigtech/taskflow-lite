export const TASK_FORM_CONTROLLER = [
  {
    name: "title",
    type: "input",
    inputType: "text",
    placeholder: "Task title",
    label: "Task title",
    isRequired: "Title is required",
    
  },
  {
    name: "status",
    type: "select",
    label: "status",
    isRequired: "Status is required",
    options: [
      { label: "Todo", value: "todo" },
      { label: "In Progress", value: "in-progress" },
      { label: "Done", value: "done" },
    ],
    
  },
  {
    name: "priority",
    type: "select",
    label: "Priority",
    isRequired: "Priority is required",
    options: [
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" },
    ],
    
  },
  {
    name: "dueDate",
    type: "input",
    inputType: "date",
    placeholder: "Due date",
    label: "Due date",
    isRequired: "Due date is required",
    disablePast: true,
    disableTyping: true,
    
  },
  {
    name: "assignee",
    type: "input",
    inputType: "text",
    placeholder: "Assignee name",
    label: "Assignee name",
    isRequired: "Assignee is required",
    
  },
];


export const SEARCH_FILTER_CONTROLLER = [
  {
    name: "search",
    type: "input",
    inputType: "text",
    label: "search",
    placeholder: "Search tasks...",
  },
  {
    name: "priority",
    type: "select",
    label: "filter",
    options: [
      { label: "All", value: "all" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" },
    ],
  },
];
