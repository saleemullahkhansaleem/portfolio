import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

const Toast = ({ children, error }) => {
  return (
    <div
      className={`flex gap-4 items-center px-4 py-2 my-2 border w-max mx-auto rounded-full ${
        error ? "border-red-500" : "border-green-500"
      }`}
    >
      {error ? (
        <MdError className="text-red-500 text-xl" />
      ) : (
        <FaCheckCircle className="text-green-500 text-xl" />
      )}{" "}
      <span> {children}</span>
    </div>
  );
};

export default Toast;
