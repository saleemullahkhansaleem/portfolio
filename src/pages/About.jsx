import { FaBookReader, FaHandshake, FaLightbulb } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import Button from "../componenets/Button";

const approachData = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "I thrive on the latest trends and tech. This keeps me armed with innovative solutions that keep your project modern and engaging.",
  },
  {
    icon: <FiTarget />,
    title: "User-Centric",
    description:
      "Interfaces should be intuitive and beautiful. I dig into user behavior insights to create seamless and visually pleasing designs.",
  },
  {
    icon: <FaHandshake />,
    title: "Collaboration",
    description:
      "Your input is golden. I see every project as a team effort, combining your vision with my skills for outstanding results.",
  },
  {
    icon: <FaBookReader />,
    title: "Learning",
    description:
      "Tech evolves, and so do I. I'm committed to learning and adapting to deliver timeless solutions.",
  },
];

const About = () => {
  return (
    <Container id="about" className="p-4">
      <Heading title="Who I am" text="About" colorText="Saleem" />
      <div className="mx-auto">
        <div className="mx-auto text-zinc-400">
          <p className="max-w-3xl mx-auto text-center">
            Hey there! I'm Saleem, a passionate web developer specializing in
            React. With a love for elegant code and interactive user
            experiences, I've been on a coding journey for more than 9 years.
          </p>

          <p className="max-w-3xl mx-auto text-center">
            <span className="text-white">My focus: </span>
            Crafting dynamic interfaces using React's magic. But it's not just
            about code to me. It's about fusing technology with user-centric
            design.
          </p>
        </div>
        <h2 className="text-3xl text-lime-500 py-8 text-center">Approach</h2>
        <div className="flex flex-wrap gap-4">
          {approachData.map((item, index) => (
            <div key={index} className="p-4 max-w-xl flex bg-zinc-900 rounded">
              <div className="w-[20%] flex justify-center items-center text-5xl text-zinc-600">
                {item.icon}
              </div>
              <div className="w-[5%] border-l-[1px] border-zinc-700"></div>
              <div className="about-details-box w-3/4">
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-zinc-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-zinc-500 pt-6">
          Let's work together to turn your ideas into captivating digital
          experiences. Feel free to get in touch for anything from advice to
          full-on collaborations. <br />
          <br />
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            fill
            href="#contact"
            title="Contact"
            className="flex gap-2 items-center"
          >
            <MdMessage className="text-lg" /> <span>Get in Touch</span>
          </Button>
          <Button
            href="#pricing"
            title="Pricing"
            className="flex gap-2 items-center"
          >
            <IoMdPricetags className="text-lg" />{" "}
            <span>Check pricing plans</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default About;
