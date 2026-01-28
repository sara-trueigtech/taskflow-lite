import DateInput from "../commonDate";
import Input from "../commonInput";
import Select from "../commonSelect";


const FormField = ({ field, config }) => {
  const { type, options, style } = config;

  switch (type) {
    case "input":
      return <Input field={field} style={style} />;

    case "select":
      return <Select field={field} options={options} style={style} />;

    case "date":
      return <DateInput field={field} style={style} />;

    default:
      return null;
  }
};

export default FormField;
