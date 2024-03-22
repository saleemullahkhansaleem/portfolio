import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, header, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-hidden">
      <div className="w-auto max-w-5xl max-h-screen overflow-y-hidden mx-auto my-6 z-50 bg-zinc-900 rounded-lg shadow-lg ">
        <div className="flex items-start justify-between p-5">
          <h3 className="text-xl font-semibold">{header}</h3>
          <IoClose
            className="text-3xl leading-none font-semibold cursor-pointer hover:text-lime-500"
            onClick={onClose}
          />
        </div>
        <div
          className="px-6 pb-6 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 100px)" }}
        >
          {children}
        </div>
      </div>
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-lg"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default Modal;
