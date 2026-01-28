const Input = ({ field, style, ...rest }) => {
  return <input {...field} style={style} {...rest} />;
};

export default Input;
