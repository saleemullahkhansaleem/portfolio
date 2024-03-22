const Heading = ({ text, colorText, className = "" }) => {
  return (
    <h1 className={`text-4xl lg:text-6xl pt-4 pb-8 text-center ${className}`}>
      {text} <span className="text-lime-500">{colorText}</span>
    </h1>
  );
};

export default Heading;
