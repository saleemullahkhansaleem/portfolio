import { Data } from "../Data";
import Container from "../componenets/Container";
import SocialLinks from "../componenets/SocialLinks";
import NavBar from "../componenets/NavBar";
import Button from "../componenets/Button";
import { MdMessage } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <Container
      id="home"
      className="flex flex-wrap justify-between md:min-h-screen z-10"
    >
      <div className="flex items-center w-full sm:w-full md:w-4/12">
        <div className="w-48 h-48 m-auto overflow-hidden md:overflow-visible bg-black rounded md:w-full md:h-auto md:bg-transparent relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/20 to-lime-500/5 rounded-2xl blur-3xl -z-10" />
          <img
            title="Mr Saleem"
            alt="Profile Image"
            id="profile-img"
            src="/profile.png"
            className="w-full max-w-sm m-auto border-b border-zinc-500"
          />
        </div>
        {/* <SocialLinks data={Data.contactLinks} className="mt-4" /> */}
        {/* <SocialLinks className="mt-4" iconSize="lg" data={Data.socialLinks} /> */}
      </div>
      <div className="flex flex-col justify-center w-full gap-10 p-8 md:w-8/12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Hi From <br />
          <span className="text-lime-500">Saleemullah Khan Saleem,</span>
          <br />
          <span id="element">A React.js Developer</span>
        </h1>
        <p className="text-zinc-500">
          Programming is my Love, when I start coding I don't care about a
          thing,
          <br />
          and Web development is game for me, I play with heart. <br />
          Just simple like that!
        </p>

        {/* <SocialLinks iconSize="2xl" data={Data.contactLinks} className="mt-4" /> */}
        <SocialLinks iconSize="2xl" data={Data.socialLinks} />
        <div className="flex gap-4">
          <Button
            href="#contact"
            title="Contact"
            className="flex gap-2 items-center mt-4"
          >
            <MdMessage className="text-lg" /> <span>Contact Me</span>
          </Button>
          <Button
            target="_blank"
            href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=mrsaleem"
            title="Follow me on Linkedin"
            className="flex gap-2 items-center mt-4"
          >
            <FaLinkedin className="text-lg" />{" "}
            <span>Follow Me</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
