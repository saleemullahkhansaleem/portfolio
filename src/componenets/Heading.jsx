const Heading = ({ text, colorText, className = "", title }) => {
  return (
    <h1
      title={title}
      className={`text-4xl lg:text-6xl pt-4 pb-8 text-center ${className}`}
    >
      {text} <span className="text-lime-500">{colorText}</span>
    </h1>
  );
};

export default Heading;
