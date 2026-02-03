export const PROFILE_FORM_CONTROLLER = [
  {
    name: "name",
    type: "input",
    inputType: "text",
    placeholder: "Full Name",
    label: "Full Name",
    isRequired: "Name is required",
  },
  {
    name: "username",
    type: "input",
    inputType: "text",
    placeholder: "User Name",
    label: "User Name",
    isRequired: "Username is required",
    
  },
  {
    name: "email",
    type: "input",
    inputType: "email",
    placeholder: "Email",
    label: "Email",
    isRequired: "Email is required",
    
  },
  {
    name: "phone",
    type: "input",
    inputType: "text",
    placeholder: "Phone Number",
    label: "Phone Number",
    isRequired: false,
    
  },
  {
    name: "gender",
    type: "select",
    placeholder: "Gender",
    label: "Gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
    isRequired: false,
    
  },
  {
    name: "dob",
    type: "input",
    inputType: "date",
    placeholder: "Date of Birth",
    label: "Date of Birth",
    isRequired: false,
    
  },
  {
    name: "address",
    type: "input",
    inputType: "text",
    placeholder: "Address",
    label: "Address",
    isRequired: false,
    
  },
  {
    name: "state",
    type: "select",
    placeholder: "Select State",
    label: "State",
    options: [
      { label: "Madhya Pradesh", value: "MP" },
      { label: "Maharashtra", value: "MH" },
      { label: "Delhi", value: "DL" },
      { label: "Uttar Pradesh", value: "UP" },
      { label: "Rajasthan", value: "RJ" },
    ],
    
  },
  {
    name: "zipcode",
    type: "select",
    placeholder: "Select Zip Code",
    label: "Zip Code",
    options: [
      { label: "452001", value: "452001" },
      { label: "452002", value: "452002" },
      { label: "452003", value: "452003" },
      { label: "452004", value: "452004" },
    ],
    
  },
];
