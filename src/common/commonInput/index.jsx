const Input = ({
  field = {},
  style = {},
  inputType = "text",
  placeholder="text",
  disablePast = false,
  disableTyping = false,
  placwholder = "text",
  ...rest
}) => {
  const today = inputType === "date" ? new Date().toISOString().split("T")[0] : undefined;
  return (
    <input
      {...field}
      value={field.value ?? ""}
      style={style}
      {...rest}
      type={inputType}
      placeholder={placeholder}
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
