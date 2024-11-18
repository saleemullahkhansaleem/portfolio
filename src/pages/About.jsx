import {
  FaLightbulb,
  FaUsers,
  FaTools,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import Button from "../componenets/Button";

const approachData = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Staying ahead of the curve with cutting-edge tools and practices, I bring fresh ideas to every project to ensure your digital solutions are future-proof.",
  },
  {
    icon: FiTarget,
    title: "User-Centric Design",
    description:
      "Designing with the user in mind, I focus on creating experiences that are not just visually stunning but also intuitive and functional.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description:
      "Great results come from great teamwork. I value open communication, actively involving you in every step of the development process.",
  },
  {
    icon: FaTools,
    title: "Adaptability",
    description:
      "The tech world evolves fast, and so do I. I continuously refine my skills to deliver solutions that adapt to the ever-changing digital landscape.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Continuous Learning",
    description:
      "Committed to staying updated, I leverage the latest trends and insights to offer solutions that stand the test of time.",
  },
];

const About = () => {
  return (
    <Container id="about" className="p-6">
      <Heading title="Get to Know Me" text="About" colorText="Saleem" />
      <div className="text-center text-zinc-400">
        <p className="max-w-3xl mx-auto">
          Hi, I'm Saleem, a passionate and detail-oriented web developer with a
          decade of experience crafting digital solutions. My expertise lies in
          React, where I combine clean, efficient code with cutting-edge
          technologies to create interactive and impactful user experiences.
        </p>
        <p className="max-w-3xl mx-auto mt-4">
          <span className="text-white">What drives me? </span>
          Transforming ideas into seamless digital realities. I believe in
          blending technology and creativity to deliver interfaces that not only
          meet client goals but also delight end users.
        </p>
      </div>

      <h2 className="text-3xl py-8 text-center">My Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        {approachData.map((item, index) => (
          <div key={index} className="p-6 bg-zinc-900 rounded space-y-2 group">
            <div className="text-5xl text-zinc-700 mb-4">
              <item.icon size={52} />
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-zinc-500">{item.description}</p>
          </div>
        ))}
      </div>

      {/* <p className="text-zinc-500 text-center pt-8">
        Ready to bring your vision to life? Let’s collaborate and create
        extraordinary digital experiences together.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
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
          <IoMdPricetags className="text-lg" /> <span>View Pricing Plans</span>
        </Button>
      </div> */}
    </Container>
  );
};

export default About;
