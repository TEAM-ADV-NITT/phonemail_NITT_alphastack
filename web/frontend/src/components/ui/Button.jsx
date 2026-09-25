function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl bg-white px-8 py-3 font-medium text-zinc-900 transition hover:bg-zinc-200 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;