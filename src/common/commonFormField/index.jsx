import Input from "../commonInput";
import Select from "../commonSelect";

const FormField = ({ field, config, error}) => {
  const {
    type,
    options,
    style,
    inputType,
    placeholder,
    disablePast,
    disableTyping,
    label,
  } = config;

  const renderField = () => {
    switch (type) {
      case "input":
        return (
          <Input
            field={field}
            style={style}
            inputType={inputType}
            placeholder={placeholder}
            disablePast={disablePast}
            disableTyping={disableTyping}
          />
        );

      case "select":
        return (
          <Select
            field={field}
            options={options}
            style={style}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div >
      <div className="flex flex-col">
        {label && (
        <label
          htmlFor={field.name}
          className="labelStyle"
        >
          {label}
        </label>
      )}
        {renderField()}

        {error && (
          <p className="text-red-400 text-sm h-[1.25rem]">{error.message}</p>
        )}
      </div>
    </div>
  );
};

export default FormField;
