import Input from "../commonInput";
import Select from "../commonSelect";

const FormField = ({ field, config, error, className }) => {
  const {
    type,
    options,
    style,
    inputType,
    placeholder,
    disablePast,
    disableTyping,
    label,
    labelClassName,
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
            className={className}
          />
        );

      case "select":
        return (
          <Select
            field={field}
            options={options}
            style={style}
            className={className}
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
          className={labelClassName}
        >
          {label}
        </label>
      )}
        {renderField()}

        {error && (
          <p >{error.message}</p>
        )}
      </div>
    </div>
  );
};

export default FormField;
