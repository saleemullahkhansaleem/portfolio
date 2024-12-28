const Heading = ({ text, colorText, className = "", title }) => {
  return (
    <h1
      title={title}
      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-4 pb-8 text-center font-semibold ${className}`}
    >
      {text} <span className="text-lime-500 underline underline-offset-8">{colorText}</span>
    </h1>
  );
};

export default Heading;
