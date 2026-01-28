const Input = ({ field={}, style={}, inputType="", ...rest }) => {
  return <input {...field} style={style} {...rest} type={inputType} />;
};

export default Input;
