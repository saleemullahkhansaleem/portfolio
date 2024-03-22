const Input = ({ className, placeholder, type }) => {
  return (
    <input
      className={`w-full outline-none text-base bg-zinc-900 p-4 resize-none rounded ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
