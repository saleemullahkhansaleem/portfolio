const Input = ({
  className,
  placeholder = "",
  type = "test",
  required = false,
  name,
  id,
}) => {
  return (
    <input
      className={`w-full outline-none text-base bg-zinc-900 p-4 resize-none rounded ${className}`}
      name={name}
      required={required}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default Input;
