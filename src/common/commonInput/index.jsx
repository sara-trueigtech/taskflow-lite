const Input = ({
  field = {},
  style = {},
  inputType = "text",
  disablePast = false,
  disableTyping = false,
  placwholder = "text",
  ...rest
}) => {
  const today = inputType === "date" ? new Date().toISOString().split("T")[0] : undefined;
  return (
    <input
      {...field}
      style={style}
      {...rest}
      type={inputType}
      min={disablePast ? today : undefined}
      onKeyDown={
        disableTyping && inputType === "date"
          ? (e) => e.preventDefault()
          : undefined
      }
    />
  );
};

export default Input;
