import { FaTools } from "react-icons/fa";
import { Data } from "../Data";
import Heading from "../componenets/Heading";
import Container from "../componenets/Container";

const Skills = () => {
  return (
    <Container
      full
      id="skills"
      className="flex flex-col xl:flex-row justify-evenly gap-8 items-center"
    >
      <div className="xl:max-w-lg px-4">
        <Heading
          title="Skills That Define My Expertise"
          text="My Wealth of "
          colorText="Knowledge"
        />
        <p className="text-center max-w-3xl mx-auto text-zinc-400">
          Over the years, I’ve mastered a diverse set of tools and technologies
          that empower me to deliver outstanding results. From front-end
          development to full-stack capabilities, these skills reflect my
          passion for building scalable, user-friendly, and efficient digital
          solutions.
        </p>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1 max-w-4xl">
          {Data.skills.map((item) => (
            <div
              title={item?.name}
              className={`bg-zinc-900 skill-box flex flex-col gap-6 items-center p-4 rounded -rotate-6 transition-transform duration-300 w-28 md:w-40 aspect-square group`}
              key={item?.name}
            >
              <div className="flex flex-col items-center justify-center gap-2 m-auto">
                <item.icon size={48} className={`text-zinc-700 group-hover:text-lime-500`} />
                <p className="text-zinc-200 text-xs sm:text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
