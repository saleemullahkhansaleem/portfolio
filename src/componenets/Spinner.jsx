const Spinner = ({ color, className = "" }) => {
  return (
    <div
      className={`${className} border-t-transparent border-r-transparent border-solid animate-spin-fast rounded-full ${
        color ? color : "border-white"
      } border-4 h-6 w-6 mx-auto`}
    ></div>
  );
};

export default Spinner;
