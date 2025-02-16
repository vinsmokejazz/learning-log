 const Button = ({ disabled, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-2xl text-4xl px-10 py-4 text-white cursor-pointer ${
        disabled ? "bg-blue-200 opacity-50 cursor-not-allowed" : "bg-green-400"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;