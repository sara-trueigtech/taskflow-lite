const ErrorBox = ({ message, onRetry }) => {
  return (
    <div className="bg-error-bg border border-error-border text-error-text p-4 rounded flex justify-between items-center mb-4">
      <span>{message}</span>

      <button
        onClick={onRetry}
        className="ml-4 px-3 py-1 bg-error-button hover:bg-error-button-hover text-white rounded cursor-pointer"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorBox;
