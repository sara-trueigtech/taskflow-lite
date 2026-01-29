import Select from "../commonSelect";

const FormField = ({ field, config, error }) => {
  const { type, options, style, inputType, disablePast, disableTyping } = config;

  const renderField = () => {
    switch (type) {
      case "input":
        return (
          <Input
            field={field}
            style={style}
            inputType={inputType}
            disablePast={disablePast}
            disableTyping={disableTyping}
          />
        );

      case "select":
        return <Select field={field} options={options} style={style} />;

      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {renderField()}

        {error && (
          <p style={{ color: "red", fontSize: "12px" }}>{error.message}</p>
        )}
      </div>
    </div>
  );
};

export default FormField;
