import { FaBookReader, FaHandshake, FaLightbulb } from "react-icons/fa";
import Container from "../componenets/Container";
import Heading from "../componenets/Heading";
import { FiTarget } from "react-icons/fi";
import Button from "../componenets/Button";

const About = () => {
  return (
    <Container id="about" className="p-4">
      <Heading text="About" colorText="Saleem" />
      <div className="mx-auto">
        <div className="mx-auto text-zinc-500">
          <p>
            Hey there! I'm <span className="text-white"> Saleem</span>, a
            passionate web developer specializing in
            <span className="text-white"> React</span>. With a love for elegant
            code and interactive user experiences, I've been on a coding journey
            for more than 9 years. My focus? Crafting dynamic interfaces using
            <span className="text-white"> React's magic</span>. But it's not
            just about code to me. It's about fusing technology with
            <span className="text-white"> user-centric design</span>.
          </p>
        </div>
        <h2 className="text-3xl text-lime-500 py-8 mx-auto">Approach</h2>
        <div className="flex flex-wrap gap-4">
          <div className="p-4 max-w-xl flex">
            <div className="w-[20%] flex justify-center items-center text-4xl text-zinc-500">
              <FaLightbulb />
            </div>
            <div className="w-[5%] border-l-[1px] border-zinc-700"></div>
            <div className="about-details-box w-3/4">
              <h4 className="text-xl">Innovation</h4>
              <p className=" text-zinc-500">
                I thrive on the latest trends and tech. This keeps me armed with
                innovative solutions that keep your project modern and engaging.
              </p>
            </div>
          </div>
          <div className="p-4 max-w-xl flex">
            <div className="w-[20%] flex justify-center items-center text-4xl text-zinc-500">
              <FiTarget />
            </div>
            <div className="w-[5%] border-l-[1px] border-zinc-700"></div>
            <div className="about-details-box w-3/4">
              <h4 className="text-xl">User-Centric</h4>
              <p className=" text-zinc-500">
                Interfaces should be intuitive and beautiful. I dig into user
                behavior insights to create seamless and visually pleasing
                designs.
              </p>
            </div>
          </div>
          <div className="p-4 max-w-xl flex">
            <div className="w-[20%] flex justify-center items-center text-4xl text-zinc-500">
              <FaHandshake />
            </div>
            <div className="w-[5%] border-l-[1px] border-zinc-700"></div>
            <div className="about-details-box w-3/4">
              <h4 className="text-xl">Collaboration</h4>
              <p className=" text-zinc-500">
                Your input is golden. I see every project as a team effort,
                combining your vision with my skills for outstanding results.
              </p>
            </div>
          </div>
          <div className="p-4 max-w-xl flex">
            <div className="w-[20%] flex justify-center items-center text-4xl text-zinc-500">
              <FaBookReader />
            </div>
            <div className="w-[5%] border-l-[1px] border-zinc-700"></div>
            <div className="about-details-box w-3/4">
              <h4 className="text-xl">Learning</h4>
              <p className=" text-zinc-500">
                Tech evolves, and so do I. I'm committed to learning and
                adapting to deliver timeless solutions.
              </p>
            </div>
          </div>
        </div>
        <p className="text-zinc-500">
          Let's work together to turn your ideas into captivating digital
          experiences. Feel free to get in touch for anything from advice to
          full-on collaborations. <br />
          <br />
        </p>
        <div className="text-center">
          <Button href="#contact">Get in Touch</Button>
        </div>
      </div>
    </Container>
  );
};

export default About;
