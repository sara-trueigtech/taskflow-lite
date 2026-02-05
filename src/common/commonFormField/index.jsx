import Checkbox from "../commonCheckbox";
import Input from "../commonInput";
import Select from "../commonSelect";

const FormField = ({ field, config, error}) => {
  // const form={
  //   input:Input,

  // }
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
      case "checkbox":
        return <Checkbox field={field} label={label} />;

      default:
        return null;
    }
  };
// const Comp=form[type]
  return (
    <div >
      <div className="flex flex-col">
      {type !== "checkbox" && label && (
        <label className="labelStyle">{label}</label>
      )}

        {renderField()}
        {/* <Comp  field={field}
            style={style}
            inputType={inputType}
            placeholder={placeholder}
            disablePast={disablePast}
            disableTyping={disableTyping} /> */}

        {error && (
          <p className="text-red-400 text-sm h-[1.25rem]">{error.message}</p>
        )}
      </div>
    </div>
  );
};

export default FormField;
