import React from "react";
import ButtonGo from "./ButtonGo";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ children, className, onClick, buttonText }) => {
  return (
    <div
      className={`group/card relative w-full min-h-20 overflow-hidden ${className}`}
    >
      <div className="w-full h-full opacity-0 bg-black/80 group-hover/card:opacity-100 absolute z-10 flex items-center justify-center uppercase text-white font-bold text-base">
        <ButtonGo icon={<FaArrowRight />} onClick={onClick}>
          {buttonText}
        </ButtonGo>
      </div>
      {children}
    </div>
  );
};

export default Card;
