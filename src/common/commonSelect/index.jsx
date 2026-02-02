const Select = ({ field = {}, options = [], style = {} }) => {
  return (
    <select {...field} style={style} className="selectStyle">
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
