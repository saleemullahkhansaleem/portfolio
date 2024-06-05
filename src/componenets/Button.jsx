const Button = ({
  children = "Enter Some Text here",
  className = "",
  onClick,
  href,
  fill,
  type = "button",
}) => {
  return href ? (
    <a href={href} className="">
      <button
        type={type}
        onClick={onClick}
        className={`outline-none py-2 px-4 ${
          fill
            ? "bg-zinc-200 hover:bg-zinc-400 text-zinc-900"
            : " bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
        } rounded transition-all text-sm ${className}`}
      >
        {children}
      </button>
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={`outline-none py-2 px-4 ${
        fill
          ? "bg-zinc-200 hover:bg-zinc-400 text-zinc-900"
          : " bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
      } rounded transition-all text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
