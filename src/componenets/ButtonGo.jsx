import React from "react";

const ButtonGo = ({ children, href, onClick, className, icon }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group/buttonGo bg-zinc-900 flex gap-2 items-center pl-3 pr-4 py-1 rounded hover:border-lime-500 cursor-pointer text-xs ${className}`}
    >
      <p className="">{children}</p>
      <span className="transition group-hover/buttonGo:translate-x-1 group-hover/buttonGo:text-lime-500 ease-in duration-300">
        {icon}
      </span>
    </a>
  );
};

export default ButtonGo;
