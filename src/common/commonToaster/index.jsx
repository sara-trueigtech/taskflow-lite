import toast from "react-hot-toast";

const showToast = ({
  message = "",
  onUndo = () => {},
  onConfirm = () => {},
  duration = 5000,
  undoRef = null,
}) => {
  toast(
    (t) => (
      <span>
        {message}
        <button
          onClick={() => {
            onUndo();
            toast.dismiss(t.id);
            clearTimeout(undoRef.current);
          }}
          className="ml-2 text-borderColor cursor-pointer"
        >
          undo
        </button>
      </span>
    ),
    { duration }
  );

  undoRef.current = setTimeout(onConfirm, duration);
};

export default showToast;
