import React from "react";
import { MdZoomOutMap } from "react-icons/md";

const Card = ({ children, className, onClick, buttonText, title }) => {
  return (
    <div
      title={title}
      className={`group/card cursor-pointer relative w-full min-h-20 overflow-hidden ${className}`}
      onClick={onClick}
    >
      <div className="opacity-0 bg-black/50 group-hover/card:opacity-100 absolute inset-0 z-10 flex items-center justify-center uppercase text-white font-bold text-base">
        <MdZoomOutMap className="text-3xl hover:text-4xl hover:text-lime-500" />
      </div>
      {children}
    </div>
  );
};

export default Card;
