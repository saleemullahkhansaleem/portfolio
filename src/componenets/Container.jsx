const Container = ({ children, id, className, full }) => {
  return (
    <div className="flex py-8">
      <section
        id={id}
        className={`${
          full ? "max-w-screen-2xl" : "max-w-screen-xl"
        } mx-auto py-4 flex-1 ${className}`}
      >
        {children}
      </section>
      <div className="min-w-16 hidden md:block"></div>
    </div>
  );
};

export default Container;
