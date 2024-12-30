import { FaTools } from "react-icons/fa";
import { Data } from "../Data";
import Heading from "../componenets/Heading";
import Container from "../componenets/Container";
import { useState } from "react";

const Skills = () => {
  const [isBlur, setIsBlur] = useState(-1);
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
          {Data.skills.map((item, index) => (
            <div
              onMouseEnter={() => setIsBlur(index)}
              onMouseLeave={() => setIsBlur(-1)}
              title={item?.name}
              className={`flex flex-col gap-6 items-center p-4 rounded -rotate-6 transition-all duration-300 w-28 md:w-40 aspect-square hover:z-10 group relative md:hover:scale-105 ${
                isBlur !== index && isBlur !== -1
                  ? "md:blur-[1px] md:opacity-50 md:scale-[.98]"
                  : ""
              }`}
              key={index}
            >
              <div className="absolute -inset-1 bg-lime-500/30 rounded-2xl blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="bg-zinc-900 flex flex-col items-center justify-center gap-2 m-auto z-10 absolute inset-0 rounded">
                <item.icon
                  size={48}
                  className={`text-zinc-700 group-hover:text-lime-500`}
                />
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
