const Checkbox = ({ field, label }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        {...field}
        checked={!!field.value}
        className="w-4 h-4 accent-bgColor4"
      />
      <span className="text-sm text-white">{label}</span>
    </label>
  );
};

export default Checkbox;
