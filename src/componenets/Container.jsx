const Container = ({ children, id, className, full }) => {
  return (
    <section
      id={id}
      className={`${
        full ? "max-w-screen-2xl" : "max-w-screen-xl"
      } mx-auto py-4 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
