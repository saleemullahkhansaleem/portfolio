const Button = ({
  children = "Enter Some Text here",
  className = "",
  onClick,
  href,
  fill = false,
  target = "_self",
  title,
  type = "button",
  ...props
}) => {
  const baseStyles = "outline-none py-2 px-4 rounded transition-all text-sm";
  const fillStyles = fill
    ? "bg-lime-600 hover:bg-lime-400 text-zinc-900"
    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-100";
  const combinedStyles = `${baseStyles} ${fillStyles} ${className}`;

  const ButtonContent = (
    <button
      {...props}
      title={title}
      type={type}
      onClick={onClick}
      className={combinedStyles}
    >
      {children}
    </button>
  );

  return href ? (
    <a href={href} target={target} className="inline-block">
      {ButtonContent}
    </a>
  ) : (
    ButtonContent
  );
};

export default Button;
