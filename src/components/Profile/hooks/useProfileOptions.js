export const useProfileOptions = () => {
  const genderOp = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const stateOp = [
    { label: "Madhya Pradesh", value: "MP" },
    { label: "Maharashtra", value: "MH" },
    { label: "Delhi", value: "DL" },
    { label: "Uttar Pradesh", value: "UP" },
    { label: "Rajasthan", value: "RJ" },
  ];

  const zipCodeOp = [
    { label: "452001", value: "452001" },
    { label: "452002", value: "452002" },
    { label: "452003", value: "452003" },
    { label: "452004", value: "452004" },
  ];

  return {
    genderOp,
    stateOp,
    zipCodeOp,
  };
};
