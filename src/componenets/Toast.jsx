import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

const Toast = ({ children, error, className = "" }) => {
  return (
    <div
      className={`${className} flex gap-4 items-center py-2 px-4 border rounded ${
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
