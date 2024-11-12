const SocialLinks = ({ className = "", iconSize = "xl", data = [] }) => {
  return (
    <div className={`flex justify-between w-full max-w-xl ${className}`}>
      {data?.map((item) => (
        <a
          title={item.name}
          href={item.url}
          key={item.name}
          target="blank"
          className={`${"text-" + iconSize} hover:text-lime-500`}
        >
          {<item.icon />}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
