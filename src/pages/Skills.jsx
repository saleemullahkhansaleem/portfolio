import { FaTools } from "react-icons/fa";
import { Data } from "../Data";
import Heading from "../componenets/Heading";
import Container from "../componenets/Container";

const Skills = () => {
  return (
    <Container
      full
      id="skills"
      className="flex flex-wrap justify-evenly items-center"
    >
      <Heading title="Skills" text="My" colorText="Wealth" />
      <div className="mt-5">
        <div className="flex justify-center gap-4 flex-wrap max-w-4xl">
          {Data.skills.map((item) => (
            <div
              title={item?.name}
              className="bg-zinc-900 skill-box flex flex-col justify-evenly items-center p-4 rounded-full h-60"
              key={item?.name}
            >
              <div className="flex flex-col items-center justify-center gap-2 m-auto">
                {<item.icon className={`text-5xl ${item?.iconColor}`} />}
                <p className="text-zinc-500">{item.name}</p>
              </div>
              <div
                className="skill-progress-bar skill-animation w-24 h-24 rounded-full flex justify-center items-center"
                style={{ "--val": `${item.health}` }}
              >
                <small>%</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
