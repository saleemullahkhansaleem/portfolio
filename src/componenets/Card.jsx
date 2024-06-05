import React from "react";
import { MdZoomOutMap } from "react-icons/md";

const Card = ({ children, className, onClick, buttonText }) => {
  return (
    <div
      className={`group/card cursor-pointer relative w-full min-h-20 overflow-hidden ${className}`}
      onClick={onClick}
    >
      <div className="w-full h-full opacity-0 bg-black/80 group-hover/card:opacity-100 absolute z-10 flex items-center justify-center uppercase text-white font-bold text-base">
        <div className=" hover:text-lime-500">
          <MdZoomOutMap className="text-3xl hover:text-4xl" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;
